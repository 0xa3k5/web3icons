import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

export interface ApiKey {
  id: string
  user_id?: string
  key_hash: string
  key_prefix: string
  last_4: string
  name: string
  created_at: string
  last_used?: string
  is_active: boolean
  tier: 'free' | 'pro'
}

export interface ApiUsage {
  id: string
  api_key_id: string
  endpoint: string
  method: string
  timestamp: string
  response_time_ms?: number
  response_size_bytes?: number
  status_code: number
  user_agent?: string
  ip_address?: string
}

export interface RateLimit {
  api_key_id: string
  requests_per_day: number
  requests_today: number
  reset_at: string
}