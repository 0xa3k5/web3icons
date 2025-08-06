import { randomBytes } from 'crypto'
import bcrypt from 'bcryptjs'
import { supabase, type ApiKey } from './supabase'

export async function generateApiKey(
  name: string,
  userId?: string,
): Promise<{ key: string; apiKey: ApiKey }> {
  const prefix = 'w3i_live_'
  const keyBytes = randomBytes(24).toString('base64url')
  const fullKey = `${prefix}${keyBytes}`

  const keyHash = await bcrypt.hash(fullKey, 10)
  const last4 = keyBytes.slice(-4)

  const { data, error } = await supabase
    .from('api_keys')
    .insert({
      user_id: userId,
      key_hash: keyHash,
      key_prefix: prefix,
      last_4: last4,
      name: name,
    })
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to create API key: ${error.message}`)
  }

  return { key: fullKey, apiKey: data }
}

export async function validateApiKey(key: string): Promise<ApiKey | null> {
  if (!key.startsWith('w3i_')) {
    return null
  }

  const { data: apiKeys, error } = await supabase
    .from('api_keys')
    .select('*')
    .eq('is_active', true)

  if (error || !apiKeys) {
    return null
  }

  for (const apiKey of apiKeys) {
    const isValid = await bcrypt.compare(key, apiKey.key_hash)
    if (isValid) {
      await supabase
        .from('api_keys')
        .update({ last_used: new Date().toISOString() })
        .eq('id', apiKey.id)

      return apiKey
    }
  }

  return null
}

export async function checkRateLimit(
  apiKeyId: string,
): Promise<{
  allowed: boolean
  limit: number
  remaining: number
  resetAt: string
}> {
  const { data: rateLimit, error } = await supabase
    .from('rate_limits')
    .select('*')
    .eq('api_key_id', apiKeyId)
    .single()

  if (error || !rateLimit) {
    return { allowed: false, limit: 0, remaining: 0, resetAt: '' }
  }

  const now = new Date()
  const resetAt = new Date(rateLimit.reset_at)

  if (now > resetAt) {
    await supabase
      .from('rate_limits')
      .update({
        requests_today: 1,
        reset_at: new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(),
      })
      .eq('api_key_id', apiKeyId)

    return {
      allowed: true,
      limit: rateLimit.requests_per_day,
      remaining: rateLimit.requests_per_day - 1,
      resetAt: new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(),
    }
  }

  const allowed = rateLimit.requests_today < rateLimit.requests_per_day

  if (allowed) {
    await supabase
      .from('rate_limits')
      .update({ requests_today: rateLimit.requests_today + 1 })
      .eq('api_key_id', apiKeyId)
  }

  return {
    allowed,
    limit: rateLimit.requests_per_day,
    remaining: Math.max(
      0,
      rateLimit.requests_per_day - rateLimit.requests_today - (allowed ? 1 : 0),
    ),
    resetAt: rateLimit.reset_at,
  }
}

export async function logApiUsage(
  apiKeyId: string,
  endpoint: string,
  method: string = 'GET',
  responseTimeMs?: number,
  responseSizeBytes?: number,
  statusCode: number = 200,
  userAgent?: string,
  ipAddress?: string,
): Promise<void> {
  await supabase.from('api_usage').insert({
    api_key_id: apiKeyId,
    endpoint,
    method,
    response_time_ms: responseTimeMs,
    response_size_bytes: responseSizeBytes,
    status_code: statusCode,
    user_agent: userAgent,
    ip_address: ipAddress,
  })
}
