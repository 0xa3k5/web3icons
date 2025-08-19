'use client'

import { useMemo, useState } from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts'
import { format } from 'date-fns'

import SegmentedControl from '../../../components/ControlBar/SegmentedControl'
import { IUsageDataPoint } from '../../../types'

interface Props {
  usageHistory: IUsageDataPoint[]
}

export function UsageChart({ usageHistory }: Props) {
  const [data, setData] = useState(usageHistory)
  const [period, setPeriod] = useState<'7d' | '30d'>('7d')
  const [loading, setLoading] = useState(false)

  const handlePeriodChange = async (newPeriod: '7d' | '30d') => {
    if (newPeriod === period) return

    setPeriod(newPeriod)
    setLoading(true)

    try {
      const response = await fetch(`/api/usage/history?period=${newPeriod}`)
      if (response.ok) {
        const result = await response.json()
        setData(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch usage history:', error)
    } finally {
      setLoading(false)
    }
  }

  const chartData = useMemo(() => {
    return data.map((point) => ({
      ...point,
      date: format(new Date(point.date), 'MMM dd'),
      successRate:
        point.requests > 0
          ? (((point.requests - point.errors) / point.requests) * 100).toFixed(
              1,
            )
          : 100,
    }))
  }, [data])

  const maxRequests = useMemo(() => {
    return Math.max(...data.map((d) => d.requests), 10)
  }, [data])

  return (
    <div className="border-gray-lightest flex flex-col gap-8 rounded-xl border p-8">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-lg">usage</h2>
        <SegmentedControl
          options={['7d', '30d']}
          selected={period}
          onChange={(value) => handlePeriodChange(value as '7d' | '30d')}
          className="uppercase"
        />
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          className={loading ? 'animate-pulse' : ''}
        >
          <defs>
            <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorErrors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.1)"
            vertical={false}
          />
          <XAxis
            dataKey="date"
            stroke="rgba(255,255,255,0.4)"
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.4)"
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
            domain={[0, maxRequests * 1.1]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a1a1a',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '4px',
            }}
            labelStyle={{ color: 'rgba(255,255,255,0.6)' }}
            itemStyle={{ color: '#fff' }}
          />
          <Area
            type="monotone"
            dataKey="requests"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorRequests)"
            strokeWidth={2}
            name="Requests"
          />
          {data.some((d) => d.errors > 0) && (
            <Area
              type="monotone"
              dataKey="errors"
              stroke="#ef4444"
              fillOpacity={1}
              fill="url(#colorErrors)"
              strokeWidth={2}
              name="Errors"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-green-500"></div>
          <span className="text-white/60">Requests</span>
        </div>
        {data.some((d) => d.errors > 0) && (
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-red-500"></div>
            <span className="text-white/60">Errors</span>
          </div>
        )}
      </div>
    </div>
  )
}
