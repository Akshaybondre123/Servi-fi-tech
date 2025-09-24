import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured') === 'true'

    const services = await prisma.service.findMany({
      where: {
        active: true,
        ...(featured && { featured: true })
      },
      orderBy: [
        { order: 'asc' },
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    })

    return NextResponse.json({
      success: true,
      services
    })
  } catch (error) {
    console.error('Services fetch error:', error)
    return NextResponse.json(
      { success: false, message: 'Unable to fetch services' },
      { status: 500 }
    )
  }
}
