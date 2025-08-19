import {
  fetchUsageHistory,
  fetchUsageSummary,
  fetchApiKeysWithUsage,
  fetchCurrentUsage,
} from './lib/api'

import { ApiKeysTable } from './components/api-keys-table'
import { Stats } from './components/stats'
import { UsageChart } from './components/usage-chart'

async function getDashboardData() {
  try {
    const [usageHistory, usageSummary, apiKeys, currentUsage] =
      await Promise.all([
        fetchUsageHistory('7d').catch(() => []),
        fetchUsageSummary().catch(() => ({
          today: {
            requests: 0,
            errors: 0,
            avgResponseTime: 0,
            successRate: 100,
          },
          week: {
            requests: 0,
            errors: 0,
            avgResponseTime: 0,
            successRate: 100,
          },
          month: {
            requests: 0,
            errors: 0,
            avgResponseTime: 0,
            successRate: 100,
          },
        })),
        fetchApiKeysWithUsage().catch(() => []),
        fetchCurrentUsage().catch(() => ({ dailyLimit: 1000 })),
      ])

    return {
      usageHistory,
      usageSummary,
      apiKeys,
      dailyLimit: currentUsage.dailyLimit,
    }
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error)
    return {
      usageHistory: [],
      usageSummary: {
        today: { requests: 0, errors: 0, avgResponseTime: 0, successRate: 100 },
        week: { requests: 0, errors: 0, avgResponseTime: 0, successRate: 100 },
        month: { requests: 0, errors: 0, avgResponseTime: 0, successRate: 100 },
      },
      apiKeys: [],
      dailyLimit: 1000,
    }
  }
}

export default async function DashboardPage() {
  const { usageHistory, usageSummary, apiKeys, dailyLimit } =
    await getDashboardData()

  return (
    <div className="flex flex-col gap-8">
      <Stats usage={usageSummary} dailyLimit={dailyLimit} />
      <UsageChart usageHistory={usageHistory} />
      <ApiKeysTable initialApiKeys={apiKeys} />
    </div>
  )
}
