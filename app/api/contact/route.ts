import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'
import * as yup from 'yup'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Validation schema
const contactSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().optional(),
  company: yup.string().optional(),
  subject: yup.string().optional(),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
})

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request data
    await contactSchema.validate(body)
    
    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        company: body.company || null,
        subject: body.subject || null,
        message: body.message,
        source: 'website'
      }
    })

    // Send email notification to admin
    if (process.env.SMTP_USER && process.env.ADMIN_EMAIL) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.ADMIN_EMAIL,
          subject: `New Contact Form Submission - ${body.subject || 'General Inquiry'}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
            ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
            ${body.subject ? `<p><strong>Subject:</strong> ${body.subject}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${body.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `,
        })

        // Send auto-reply to user
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: body.email,
          subject: 'Thank you for contacting Servifitech!',
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Dear ${body.name},</p>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p>Our team is excited to discuss how we can help transform your business with AI-powered solutions.</p>
            <br>
            <p>Best regards,<br>
            <strong>The Servifitech Team</strong></p>
            <hr>
            <p><small>This is an automated response. Please do not reply to this email.</small></p>
          `,
        })
      } catch (emailError) {
        console.error('Email send failed:', emailError)
        // Don't fail the API call if email fails
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you soon.',
        id: contact.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  // Simple analytics endpoint
  try {
    const totalContacts = await prisma.contact.count()
    const recentContacts = await prisma.contact.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
        }
      }
    })

    return NextResponse.json({
      success: true,
      stats: {
        totalContacts,
        recentContacts
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Unable to fetch stats' },
      { status: 500 }
    )
  }
}
