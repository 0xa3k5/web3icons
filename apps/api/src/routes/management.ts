import { Hono } from 'hono'
import bcrypt from 'bcryptjs'
import { supabase } from '../lib/supabase'

const management = new Hono()

// get user's api keys
management.get('/keys', async (c) => {
  const clerkUserId = c.req.header('x-clerk-user-id')

  if (!clerkUserId) {
    return c.json({ error: 'unauthorized' }, 401)
  }

  try {
    const { data, error } = await supabase
      .from('api_keys')
      .select('id, name, key_prefix, last_4, created_at, last_used')
      .eq('user_id', clerkUserId)
      .eq('is_active', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('supabase error:', error)
      return c.json({ error: 'failed to fetch keys' }, 500)
    }

    return c.json({ keys: data || [] })
  } catch (error) {
    console.error('error fetching keys:', error)
    return c.json({ error: 'internal server error' }, 500)
  }
})

// create new api key
management.post('/keys', async (c) => {
  const clerkUserId = c.req.header('x-clerk-user-id')

  if (!clerkUserId) {
    return c.json({ error: 'unauthorized' }, 401)
  }

  try {
    const { name } = await c.req.json()

    if (!name || name.trim().length === 0) {
      return c.json({ error: 'name is required' }, 400)
    }

    // use the generateApiKey function from api-keys lib
    const { generateApiKey } = await import('../lib/api-keys')
    
    const { key: fullKey, apiKey: data } = await generateApiKey(name.trim(), clerkUserId)

    return c.json({
      key: fullKey,
      apiKey: data,
    })
  } catch (error) {
    console.error('error creating key:', error)
    return c.json({ error: 'internal server error' }, 500)
  }
})

// delete api key
management.delete('/keys/:id', async (c) => {
  const clerkUserId = c.req.header('x-clerk-user-id')
  const keyId = c.req.param('id')

  if (!clerkUserId) {
    return c.json({ error: 'unauthorized' }, 401)
  }

  try {
    const { error } = await supabase
      .from('api_keys')
      .update({ is_active: false })
      .eq('id', keyId)
      .eq('user_id', clerkUserId)

    if (error) {
      console.error('supabase error:', error)
      return c.json({ error: 'failed to delete key' }, 500)
    }

    return c.json({ success: true })
  } catch (error) {
    console.error('error deleting key:', error)
    return c.json({ error: 'internal server error' }, 500)
  }
})

// get usage stats
management.get('/usage', async (c) => {
  const clerkUserId = c.req.header('x-clerk-user-id')

  if (!clerkUserId) {
    return c.json({ error: 'unauthorized' }, 401)
  }

  try {
    // get today's usage - need to sum across all user's api keys
    const today = new Date().toISOString().split('T')[0]

    // first get all api keys for this user
    const { data: apiKeys, error: apiKeysError } = await supabase
      .from('api_keys')
      .select('id')
      .eq('user_id', clerkUserId)
      .eq('is_active', true)

    if (apiKeysError) {
      console.error('supabase error:', apiKeysError)
      return c.json({ error: 'failed to fetch api keys' }, 500)
    }

    if (!apiKeys || apiKeys.length === 0) {
      return c.json({
        requests: 0,
        remaining: 1000,
        percentUsed: 0,
        dailyLimit: 1000,
      })
    }

    // get usage for all user's api keys today
    const apiKeyIds = apiKeys.map((k) => k.id)
    const { data: usageData, error: usageError } = await supabase
      .from('usage_daily')
      .select('total_requests')
      .in('api_key_id', apiKeyIds)
      .eq('date', today)

    if (usageError && usageError.code !== 'PGRST116') {
      console.error('supabase error:', usageError)
      return c.json({ error: 'failed to fetch usage' }, 500)
    }

    // sum up total requests across all api keys
    const requestsToday = (usageData || []).reduce(
      (sum, row) => sum + (row.total_requests || 0),
      0,
    )
    const dailyLimit = 1000 // free tier limit
    const remaining = Math.max(0, dailyLimit - requestsToday)
    const percentUsed = Math.round((requestsToday / dailyLimit) * 100)

    return c.json({
      requests: requestsToday,
      remaining,
      percentUsed,
      dailyLimit,
    })
  } catch (error) {
    console.error('error fetching usage:', error)
    return c.json({ error: 'internal server error' }, 500)
  }
})

// get usage history for charts
management.get('/usage/history', async (c) => {
  const clerkUserId = c.req.header('x-clerk-user-id')
  const period = c.req.query('period') || '7d'
  const startDate = c.req.query('startDate')
  const endDate = c.req.query('endDate')

  if (!clerkUserId) {
    return c.json({ error: 'unauthorized' }, 401)
  }

  try {
    let dateFilter: { gte: string; lte?: string } = { gte: '' }
    const now = new Date()

    if (period === '7d') {
      const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7))
      dateFilter = { gte: sevenDaysAgo.toISOString().split('T')[0] }
    } else if (period === '30d') {
      const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30))
      dateFilter = { gte: thirtyDaysAgo.toISOString().split('T')[0] }
    } else if (period === 'custom' && startDate && endDate) {
      dateFilter = { gte: startDate, lte: endDate }
    }

    const { data, error } = await supabase
      .from('usage_history')
      .select('date, total_requests, total_errors, avg_response_time_ms')
      .eq('user_id', clerkUserId)
      .gte('date', dateFilter.gte)
      .lte('date', dateFilter.lte || new Date().toISOString().split('T')[0])
      .order('date', { ascending: true })

    if (error) {
      console.error('supabase error:', error)
      return c.json({ error: 'failed to fetch usage history' }, 500)
    }

    // Fill in missing dates with zero values
    const filledData = []
    const startDateObj = new Date(dateFilter.gte)
    const endDateObj = new Date(
      dateFilter.lte || new Date().toISOString().split('T')[0],
    )

    for (
      let d = new Date(startDateObj);
      d <= endDateObj;
      d.setDate(d.getDate() + 1)
    ) {
      const dateStr = d.toISOString().split('T')[0]
      const existing = data?.find((item) => item.date === dateStr)

      filledData.push({
        date: dateStr,
        requests: existing?.total_requests || 0,
        errors: existing?.total_errors || 0,
        avgResponseTime: existing?.avg_response_time_ms || 0,
      })
    }

    return c.json({ data: filledData })
  } catch (error) {
    console.error('error fetching usage history:', error)
    return c.json({ error: 'internal server error' }, 500)
  }
})

// get usage summary
management.get('/usage/summary', async (c) => {
  const clerkUserId = c.req.header('x-clerk-user-id')

  if (!clerkUserId) {
    return c.json({ error: 'unauthorized' }, 401)
  }

  try {
    const today = new Date().toISOString().split('T')[0]
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    // Get aggregated data for different periods
    const { data: todayData } = await supabase
      .from('usage_history')
      .select('total_requests, total_errors, avg_response_time_ms')
      .eq('user_id', clerkUserId)
      .eq('date', today)
      .single()

    const { data: weekData } = await supabase
      .from('usage_history')
      .select('total_requests, total_errors, avg_response_time_ms')
      .eq('user_id', clerkUserId)
      .gte('date', sevenDaysAgo.toISOString().split('T')[0])

    const { data: monthData } = await supabase
      .from('usage_history')
      .select('total_requests, total_errors, avg_response_time_ms')
      .eq('user_id', clerkUserId)
      .gte('date', thirtyDaysAgo.toISOString().split('T')[0])

    // Calculate aggregates
    const calculateSummary = (data: any[]) => {
      if (!data || data.length === 0) {
        return { requests: 0, errors: 0, avgResponseTime: 0, successRate: 100 }
      }
      const total = data.reduce(
        (acc, curr) => ({
          requests: acc.requests + (curr.total_requests || 0),
          errors: acc.errors + (curr.total_errors || 0),
          responseTime: acc.responseTime + (curr.avg_response_time_ms || 0),
        }),
        { requests: 0, errors: 0, responseTime: 0 },
      )

      return {
        requests: total.requests,
        errors: total.errors,
        avgResponseTime: Math.round(total.responseTime / data.length),
        successRate:
          total.requests > 0
            ? Math.round(
                ((total.requests - total.errors) / total.requests) * 100,
              )
            : 100,
      }
    }

    return c.json({
      today: calculateSummary(todayData ? [todayData] : []),
      week: calculateSummary(weekData || []),
      month: calculateSummary(monthData || []),
    })
  } catch (error) {
    console.error('error fetching usage summary:', error)
    return c.json({ error: 'internal server error' }, 500)
  }
})

// get usage per API key
management.get('/keys/usage', async (c) => {
  const clerkUserId = c.req.header('x-clerk-user-id')

  if (!clerkUserId) {
    return c.json({ error: 'unauthorized' }, 401)
  }

  try {
    const today = new Date().toISOString().split('T')[0]
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    // Get all API keys with their usage
    const { data: apiKeys, error: keysError } = await supabase
      .from('api_keys')
      .select(
        `
        id,
        name,
        last_used,
        usage_daily!inner (
          total_requests,
          date
        )
      `,
      )
      .eq('user_id', clerkUserId)
      .eq('is_active', true)
      .gte('usage_daily.date', thirtyDaysAgo.toISOString().split('T')[0])

    if (keysError) {
      console.error('supabase error:', keysError)
      return c.json({ error: 'failed to fetch key usage' }, 500)
    }

    // Process the data
    const keyUsage = (apiKeys || []).map((key) => {
      const todayUsage = key.usage_daily?.find((u: any) => u.date === today)
      const monthUsage =
        key.usage_daily?.reduce(
          (sum: number, u: any) => sum + (u.total_requests || 0),
          0,
        ) || 0

      return {
        id: key.id,
        name: key.name,
        requestsToday: todayUsage?.total_requests || 0,
        requestsThisMonth: monthUsage,
        lastUsed: key.last_used,
      }
    })

    return c.json({ keys: keyUsage })
  } catch (error) {
    console.error('error fetching key usage:', error)
    return c.json({ error: 'internal server error' }, 500)
  }
})

// Simple in-memory rate limiting for key reveals (max 5 per minute per user)
const revealRateLimit = new Map<string, { count: number; resetAt: number }>()

function checkRevealRateLimit(userId: string): boolean {
  const now = Date.now()
  const userLimit = revealRateLimit.get(userId)
  
  if (!userLimit || now > userLimit.resetAt) {
    revealRateLimit.set(userId, { count: 1, resetAt: now + 60000 }) // 1 minute
    return true
  }
  
  if (userLimit.count >= 5) {
    return false
  }
  
  userLimit.count++
  return true
}

// reveal full API key (rate limited)
management.get('/keys/:id/reveal', async (c) => {
  const clerkUserId = c.req.header('x-clerk-user-id')
  const keyId = c.req.param('id')

  if (!clerkUserId) {
    return c.json({ error: 'unauthorized' }, 401)
  }

  // Check rate limit
  if (!checkRevealRateLimit(clerkUserId)) {
    return c.json({ error: 'rate limit exceeded - max 5 reveals per minute' }, 429)
  }

  try {
    // Verify the key belongs to the user
    const { data: apiKey, error } = await supabase
      .from('api_keys')
      .select('key_encrypted, name')
      .eq('id', keyId)
      .eq('user_id', clerkUserId)
      .eq('is_active', true)
      .single()

    if (error || !apiKey) {
      return c.json({ error: 'api key not found' }, 404)
    }

    if (!apiKey.key_encrypted) {
      return c.json({ error: 'key not available for reveal (legacy key)' }, 400)
    }

    // Decrypt the key
    const { decryptApiKey } = await import('../lib/api-keys')
    const fullKey = decryptApiKey(apiKey.key_encrypted)

    return c.json({ key: fullKey })
  } catch (error) {
    console.error('error revealing key:', error)
    return c.json({ error: 'internal server error' }, 500)
  }
})

export default management
