export interface IUsageStats {
  requests: number
  remaining: number
  percentUsed: number
  dailyLimit: number
}

export interface IUsageSummary {
  today: {
    requests: number
    errors: number
    avgResponseTime: number
    successRate: number
  }
  week: {
    requests: number
    errors: number
    avgResponseTime: number
    successRate: number
  }
  month: {
    requests: number
    errors: number
    avgResponseTime: number
    successRate: number
  }
}

export interface IUsageDataPoint {
  date: string
  requests: number
  errors: number
  avgResponseTime: number
}

export interface IApiKeyWithUsage {
  id: string
  name: string
  key_prefix: string
  last_4: string
  created_at: string
  last_used?: string
  requestsToday: number
  requestsThisMonth: number
}
