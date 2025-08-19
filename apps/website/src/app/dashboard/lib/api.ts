import { auth } from '@clerk/nextjs/server'
import {
  IApiKeyWithUsage,
  IUsageDataPoint,
  IUsageSummary,
} from '../../../types'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function fetchUsageHistory(
  period: '7d' | '30d' = '7d',
): Promise<IUsageDataPoint[]> {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')

  const response = await fetch(
    `${API_URL}/management/usage/history?period=${period}`,
    {
      headers: {
        'x-clerk-user-id': userId,
      },
      cache: 'no-store', // Ensure fresh data on server
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch usage history')
  }

  const data = await response.json()
  return data.data || []
}

export async function fetchUsageSummary(): Promise<IUsageSummary> {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')

  const response = await fetch(`${API_URL}/management/usage/summary`, {
    headers: {
      'x-clerk-user-id': userId,
    },
    cache: 'no-store', // Ensure fresh data on server
  })

  if (!response.ok) {
    throw new Error('Failed to fetch usage summary')
  }

  return response.json()
}

export async function fetchApiKeysWithUsage(): Promise<IApiKeyWithUsage[]> {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')

  // Fetch both API keys and their usage
  const [keysResponse, usageResponse] = await Promise.all([
    fetch(`${API_URL}/management/keys`, {
      headers: { 'x-clerk-user-id': userId },
      cache: 'no-store',
    }),
    fetch(`${API_URL}/management/keys/usage`, {
      headers: { 'x-clerk-user-id': userId },
      cache: 'no-store',
    }),
  ])
  if (!keysResponse.ok || !usageResponse.ok) {
    const keysError = !keysResponse.ok ? await keysResponse.text() : 'OK'
    const usageError = !usageResponse.ok ? await usageResponse.text() : 'OK'
    console.error('Keys error:', keysError)
    console.error('Usage error:', usageError)
    throw new Error('Failed to fetch API keys data')
  }

  const keysData = await keysResponse.json()
  const usageData = await usageResponse.json()

  // Merge the data
  const keys = keysData.keys || []
  const usage = usageData.keys || []

  const result = keys.map((key: any) => {
    const keyUsage = usage.find((u: any) => u.id === key.id)
    return {
      ...key,
      requestsToday: keyUsage?.requestsToday || 0,
      requestsThisMonth: keyUsage?.requestsThisMonth || 0,
    }
  })

  return result
}

export async function fetchCurrentUsage() {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')

  const response = await fetch(`${API_URL}/management/usage`, {
    headers: {
      'x-clerk-user-id': userId,
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch current usage')
  }

  return response.json()
}
