import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function GET() {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const response = await fetch(`${API_URL}/management/keys`, {
      headers: {
        'x-clerk-user-id': userId,
      },
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch keys' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { name } = await request.json()
    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const response = await fetch(`${API_URL}/management/keys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-clerk-user-id': userId,
      },
      body: JSON.stringify({ name }),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create key' }, { status: 500 })
  }
}
