import { PropsWithChildren } from 'react'
import { IUsageSummary } from '../../../types'

import cx from 'classnames'

interface Props {
  usage: IUsageSummary
  dailyLimit: number
}

export const Stats = ({ usage, dailyLimit }: Props) => {
  return (
    <div className="divide-gray-lightest grid grid-cols-4 gap-4 divide-x">
      <StatItem
        label="requests today"
        value={
          <span className="flex items-baseline gap-1">
            {usage.today.requests}
            <span className="text-sm text-white/40">/{dailyLimit}</span>
          </span>
        }
        className="col-span-1"
      />
      <StatItem
        label="success rate"
        value={`${usage.today.successRate}%`}
        className="col-span-1"
      />
      <StatItem
        label="avg response time"
        value={`${usage.today.avgResponseTime}ms`}
        className="col-span-1"
      />
      <StatItem
        label="monthly requests"
        value={
          <span className="flex items-baseline gap-1">
            {usage.month.requests}
            {/* TODO: get monthly limit from backend */}
            <span className="text-sm text-white/40">/{1000 * 30}</span>
          </span>
        }
        className="col-span-1"
      />
    </div>
  )
}

interface StatItemProps {
  label: string
  value: number | string | React.ReactNode
  className?: string
}

const StatItem = ({
  label,
  value,
  children,
  className,
}: PropsWithChildren<StatItemProps>) => {
  return (
    <div
      className={cx('flex w-full items-center justify-between px-4', className)}
    >
      <div className="flex flex-col">
        <p className="font-mono text-2xl">{value}</p>
        <p className="text-xs text-white/40">{label}</p>
      </div>
      {children}
    </div>
  )
}
