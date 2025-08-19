import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function GET(request: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const period = url.searchParams.get('period') || '7d'

    const response = await fetch(
      `${API_URL}/management/usage/history?period=${period}`,
      {
        headers: {
          'x-clerk-user-id': userId,
        },
      },
    )

    if (!response.ok) {
      throw new Error('Failed to fetch usage history from API')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Usage history API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch usage history' },
      { status: 500 },
    )
  }
}
