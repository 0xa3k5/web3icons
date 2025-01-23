'use client'
import cx from 'classnames'
import { Fragment, useEffect, useRef, useState } from 'react'

interface TabsProps {
  className?: string
  tabs: string[]
  onTabChange: (value: string) => void
  activeTab: string
  size?: 'sm' | 'md'
  separator?: boolean
  slotAfter?: React.ReactNode
}

export default function Tabs({
  className,
  tabs,
  onTabChange,
  activeTab,
  size = 'md',
  separator = true,
  slotAfter,
}: TabsProps): JSX.Element {
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [indicatorOffset, setIndicatorOffset] = useState(0)
  const activeTabRef = useRef<HTMLLabelElement | null>(null)

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
        'sticky top-0 z-[2] flex w-full justify-between rounded-sm bg-gray-darkest',
        size === 'sm' ? 'py-2' : 'py-4',
        separator ? 'border-b border-gray-lightest' : '',
      )}
    >
      <div className="flex justify-between">
        {tabs.map((tab) => (
          <Fragment key={tab}>
            <input
              type="radio"
              id={`tab-${tab}`}
              name="segmented-control"
              value={tab}
              checked={activeTab === tab}
              onChange={() => onTabChange(tab)}
              className="sr-only"
            />
            <label
              htmlFor={`tab-${tab}`}
              className={cx(
                'z-[1] flex items-center justify-center rounded-full text-base duration-150',
                size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-2 text-base',
                activeTab === tab ? 'opacity-100' : 'opacity-40',
              )}
              ref={activeTab === tab ? activeTabRef : null}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
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
