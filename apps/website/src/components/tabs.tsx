'use client'
import cx from 'classnames'
import { Fragment, useEffect, useId, useRef, useState } from 'react'

interface Tab {
  label: string
  slotAfter?: React.ReactNode
}

interface TabsProps {
  className?: string
  tabs: Tab[]
  onTabChange: (value: string) => void
  activeTab: string
  size?: 'sm' | 'md'
  separator?: boolean
  slotAfter?: React.ReactNode
  groupName?: string
}

export default function Tabs({
  className,
  tabs,
  onTabChange,
  activeTab,
  size = 'md',
  separator = true,
  slotAfter,
  groupName,
}: TabsProps): JSX.Element {
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [indicatorOffset, setIndicatorOffset] = useState(0)
  const activeTabRef = useRef<HTMLLabelElement | null>(null)
  const id = useId()
  const radioGroupName = groupName || `tabs-${id}`

  useEffect(() => {
    if (activeTabRef.current) {
      setIndicatorWidth(activeTabRef.current.offsetWidth)
      setIndicatorOffset(activeTabRef.current.offsetLeft)
    }
  }, [activeTab])

  return (
    <div
      className={cx(
        className,
        'bg-gray-darkest sticky top-0 z-10 flex w-full justify-between rounded-sm',
        size === 'sm' ? 'py-2' : 'py-4',
        separator ? 'border-gray-lightest border-b' : '',
      )}
    >
      <div className="flex justify-between">
        {tabs.map((tab) => (
          <Fragment key={tab.label}>
            <input
              type="radio"
              id={`${radioGroupName}-${tab.label}`}
              name={radioGroupName}
              value={tab.label}
              checked={activeTab === tab.label}
              onChange={() => onTabChange(tab.label)}
              className="sr-only"
            />
            <label
              htmlFor={`${radioGroupName}-${tab.label}`}
              className={cx(
                'flex items-baseline justify-center rounded-full text-base duration-150',
                size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-2 text-base',
                activeTab === tab.label ? 'opacity-100' : 'opacity-40',
              )}
              ref={activeTab === tab.label ? activeTabRef : null}
            >
              {tab.label.charAt(0).toUpperCase() + tab.label.slice(1)}
              {tab.slotAfter}
            </label>
          </Fragment>
        ))}
      </div>
      {slotAfter}
      {tabs.length > 1 && (
        <div
          className="absolute left-0 top-0 h-full border-b border-white transition-all duration-150"
          style={{
            width: indicatorWidth,
            transform: `translateX(${indicatorOffset}px)`,
          }}
        />
      )}
    </div>
  )
}
