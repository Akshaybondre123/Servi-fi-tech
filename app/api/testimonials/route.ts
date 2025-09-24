import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured') === 'true'
    const limit = parseInt(searchParams.get('limit') || '10')

    const testimonials = await prisma.testimonial.findMany({
      where: {
        approved: true,
        ...(featured && { featured: true })
      },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ],
      take: limit
    })

    return NextResponse.json({
      success: true,
      testimonials
    })
  } catch (error) {
    console.error('Testimonials fetch error:', error)
    return NextResponse.json(
      { success: false, message: 'Unable to fetch testimonials' },
      { status: 500 }
    )
  }
}
