-- Web3Icons API Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- API Keys Table
CREATE TABLE api_keys (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT, -- clerk user id (nullable for now)
  key_hash TEXT NOT NULL UNIQUE,
  key_prefix TEXT NOT NULL, -- 'w3i_live_' or 'w3i_test_'
  last_4 TEXT NOT NULL, -- last 4 chars for display
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_used TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true,
  tier TEXT DEFAULT 'free' CHECK (tier IN ('free', 'pro')),
  
  -- indexes
  CONSTRAINT api_keys_key_hash_idx UNIQUE (key_hash)
);

-- API Usage Tracking
CREATE TABLE api_usage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  api_key_id UUID REFERENCES api_keys(id) ON DELETE CASCADE,
  endpoint TEXT NOT NULL,
  method TEXT NOT NULL DEFAULT 'GET',
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  response_time_ms INTEGER,
  response_size_bytes INTEGER,
  status_code INTEGER DEFAULT 200,
  user_agent TEXT,
  ip_address INET
);

-- Daily Usage Aggregates (for faster dashboard queries)
CREATE TABLE usage_daily (
  api_key_id UUID REFERENCES api_keys(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  endpoint_counts JSONB DEFAULT '{}', -- {"endpoint": count}
  total_requests INTEGER DEFAULT 0,
  total_bandwidth_bytes BIGINT DEFAULT 0,
  avg_response_time_ms INTEGER DEFAULT 0,
  
  PRIMARY KEY (api_key_id, date)
);

-- Rate Limiting
CREATE TABLE rate_limits (
  api_key_id UUID PRIMARY KEY REFERENCES api_keys(id) ON DELETE CASCADE,
  requests_per_day INTEGER DEFAULT 1000,
  requests_today INTEGER DEFAULT 0,
  reset_at TIMESTAMPTZ DEFAULT (CURRENT_DATE + INTERVAL '1 day'),
  
  CHECK (requests_today <= requests_per_day)
);

-- Indexes for performance
CREATE INDEX idx_api_keys_user_id ON api_keys(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_api_keys_key_hash ON api_keys(key_hash);
CREATE INDEX idx_api_usage_api_key_timestamp ON api_usage(api_key_id, timestamp DESC);
CREATE INDEX idx_api_usage_timestamp ON api_usage(timestamp DESC);
CREATE INDEX idx_rate_limits_reset_at ON rate_limits(reset_at) WHERE requests_today > 0;

-- Enable Row Level Security
ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_daily ENABLE ROW LEVEL SECURITY;
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;

-- RLS Policies (will be activated when we add Clerk auth)
-- For now, we'll manage access through service key

-- Function to automatically create rate limit entry
CREATE OR REPLACE FUNCTION create_rate_limit_for_api_key()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO rate_limits (api_key_id) VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to create rate limit when API key is created
CREATE TRIGGER trigger_create_rate_limit
  AFTER INSERT ON api_keys
  FOR EACH ROW
  EXECUTE FUNCTION create_rate_limit_for_api_key();

-- Function to update daily usage aggregates
CREATE OR REPLACE FUNCTION update_daily_usage()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO usage_daily (
    api_key_id, 
    date, 
    total_requests,
    total_bandwidth_bytes,
    avg_response_time_ms,
    endpoint_counts
  )
  VALUES (
    NEW.api_key_id,
    DATE(NEW.timestamp),
    1,
    COALESCE(NEW.response_size_bytes, 0),
    COALESCE(NEW.response_time_ms, 0),
    jsonb_build_object(NEW.endpoint, 1)
  )
  ON CONFLICT (api_key_id, date) DO UPDATE SET
    total_requests = usage_daily.total_requests + 1,
    total_bandwidth_bytes = usage_daily.total_bandwidth_bytes + COALESCE(NEW.response_size_bytes, 0),
    avg_response_time_ms = (
      (usage_daily.avg_response_time_ms * usage_daily.total_requests + COALESCE(NEW.response_time_ms, 0)) 
      / (usage_daily.total_requests + 1)
    ),
    endpoint_counts = usage_daily.endpoint_counts || 
      jsonb_build_object(
        NEW.endpoint, 
        COALESCE((usage_daily.endpoint_counts ->> NEW.endpoint)::INTEGER, 0) + 1
      );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update daily usage
CREATE TRIGGER trigger_update_daily_usage
  AFTER INSERT ON api_usage
  FOR EACH ROW
  EXECUTE FUNCTION update_daily_usage();

-- Function to reset daily rate limits
CREATE OR REPLACE FUNCTION reset_daily_rate_limits()
RETURNS INTEGER AS $$
DECLARE
  reset_count INTEGER;
BEGIN
  UPDATE rate_limits 
  SET 
    requests_today = 0,
    reset_at = CURRENT_DATE + INTERVAL '1 day'
  WHERE reset_at <= NOW();
  
  GET DIAGNOSTICS reset_count = ROW_COUNT;
  RETURN reset_count;
END;
$$ LANGUAGE plpgsql;

-- Insert a test API key for development
INSERT INTO api_keys (
  key_hash,
  key_prefix,
  last_4,
  name,
  tier
) VALUES (
  '$2a$10$N9qo8uLOickgx2ZMRZoMye' || 'IFdXJQwCG2qr3Eg4pC8bXG6.N8F.xLu', -- bcrypt hash of 'w3i_test_dev123456789012345'
  'w3i_test_',
  '5678',
  'Development Test Key',
  'free'
);