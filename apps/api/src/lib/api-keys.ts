import {
  randomBytes,
  createCipheriv,
  createDecipheriv,
  pbkdf2Sync,
} from 'crypto'
import bcrypt from 'bcryptjs'
import { supabase, type ApiKey } from './supabase'

const ENCRYPTION_SECRET = process.env.API_KEY_ENCRYPTION_SECRET
if (!ENCRYPTION_SECRET) {
  throw new Error('API_KEY_ENCRYPTION_SECRET environment variable is required')
}

function encryptApiKey(key: string): string {
  try {
    const salt = randomBytes(16)
    const iv = randomBytes(16)
    const derivedKey = pbkdf2Sync(
      ENCRYPTION_SECRET!,
      new Uint8Array(salt),
      100000,
      32,
      'sha256',
    )

    const cipher = createCipheriv(
      'aes-256-cbc',
      new Uint8Array(derivedKey),
      new Uint8Array(iv),
    )
    let encrypted = cipher.update(key, 'utf8', 'hex')
    encrypted += cipher.final('hex')

    return salt.toString('hex') + ':' + iv.toString('hex') + ':' + encrypted
  } catch (error) {
    throw new Error('Failed to encrypt API key')
  }
}

export function decryptApiKey(encryptedData: string): string {
  try {
    const parts = encryptedData.split(':')
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted data format')
    }

    const salt = Buffer.from(parts[0], 'hex')
    const iv = Buffer.from(parts[1], 'hex')
    const encrypted = parts[2]

    const derivedKey = pbkdf2Sync(
      ENCRYPTION_SECRET!,
      new Uint8Array(salt),
      100000,
      32,
      'sha256',
    )

    const decipher = createDecipheriv(
      'aes-256-cbc',
      new Uint8Array(derivedKey),
      new Uint8Array(iv),
    )
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  } catch (error) {
    throw new Error('Failed to decrypt API key')
  }
}

export async function generateApiKey(
  name: string,
  userId?: string,
): Promise<{ key: string; apiKey: ApiKey }> {
  const prefix = 'w3i_'
  const keyBytes = randomBytes(24).toString('base64url')
  const fullKey = `${prefix}${keyBytes}`

  const keyHash = await bcrypt.hash(fullKey, 10)
  const keyEncrypted = encryptApiKey(fullKey)
  const last4 = keyBytes.slice(-4)

  const { data, error } = await supabase
    .from('api_keys')
    .insert({
      user_id: userId,
      key_hash: keyHash,
      key_encrypted: keyEncrypted,
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

  const keyBytes = key.substring(4)
  const last4 = keyBytes.slice(-4)

  const { data: apiKeys, error } = await supabase
    .from('api_keys')
    .select('*')
    .eq('is_active', true)
    .eq('last_4', last4)
    .order('last_used', { ascending: false })

  if (error || !apiKeys) {
    return null
  }

  for (const apiKey of apiKeys) {
    const isValid = await bcrypt.compare(key, apiKey.key_hash)
    if (isValid) {
      supabase
        .from('api_keys')
        .update({ last_used: new Date().toISOString() })
        .eq('id', apiKey.id)
        .then(() => {})

      return apiKey
    }
  }

  return null
}

export async function checkRateLimit(apiKeyId: string): Promise<{
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
  const { error } = await supabase.from('api_usage').insert({
    api_key_id: apiKeyId,
    endpoint,
    method,
    response_time_ms: responseTimeMs,
    response_size_bytes: responseSizeBytes,
    status_code: statusCode,
    user_agent: userAgent,
    ip_address: ipAddress,
  })

  if (error) {
    console.error('Failed to log API usage:', error)
  }
}
