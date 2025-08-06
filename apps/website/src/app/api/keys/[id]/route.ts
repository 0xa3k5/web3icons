import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://web3icons-production.up.railway.app'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const response = await fetch(`${API_URL}/management/keys/${params.id}`, {
      method: 'DELETE',
      headers: {
        'x-clerk-user-id': userId
      }
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete key' }, { status: 500 })
  }
}