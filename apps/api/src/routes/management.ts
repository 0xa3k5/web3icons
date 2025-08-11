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

    // generate api key
    const keyId = Math.random().toString(36).slice(2, 9)
    const keySecret = Math.random().toString(36).slice(2, 32)
    const fullKey = `w3i_live_${keyId}${keySecret}`

    // hash the key for storage
    const hashedKey = await bcrypt.hash(fullKey, 10)

    // store in database
    const { data, error } = await supabase
      .from('api_keys')
      .insert([
        {
          user_id: clerkUserId,
          name: name.trim(),
          key_hash: hashedKey,
          key_prefix: 'w3i_live_',
          last_4: fullKey.slice(-4),
        },
      ])
      .select('id, name, key_prefix, last_4, created_at')
      .single()

    if (error) {
      console.error('supabase error:', error)
      return c.json({ error: 'failed to create key' }, 500)
    }

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

export default management
