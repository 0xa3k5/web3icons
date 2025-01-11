'use client'
import cx from 'classnames'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAppContext } from '../hooks'
import { TType } from '@web3icons/common'

interface TabsProps {
  className?: string
}

export default function Tabs({ className }: TabsProps): JSX.Element {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { variant } = useAppContext()

  const activeTabParam = searchParams.get('tab') as TType | null
  const [activeTab, setActiveTab] = useState<TType>(activeTabParam || 'token')

  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [indicatorOffset, setIndicatorOffset] = useState(0)
  const activeTabRef = useRef<HTMLLabelElement | null>(null)

  useEffect(() => {
    if (activeTabRef.current) {
      setIndicatorWidth(activeTabRef.current.offsetWidth)
      setIndicatorOffset(activeTabRef.current.offsetLeft)
    }
  }, [activeTab])

  const handleTabChange = (value: TType) => {
    setActiveTab(value)
    router.replace(`?type=${value}&variant=${variant}`, {
      scroll: false,
    })
  }

  return (
    <div
      className={cx(
        className,
        'sticky top-0 z-[2] inline-flex w-full rounded-sm border-b border-gray-lightest bg-gray-darkest py-4',
      )}
    >
      {['token', 'network', 'wallet', 'exchange'].map((tab) => (
        <Fragment key={tab}>
          <input
            type="radio"
            id={`tab-${tab}`}
            name="segmented-control"
            value={tab}
            checked={activeTab === tab}
            onChange={() => handleTabChange(tab as TType)}
            className="sr-only"
          />
          <label
            htmlFor={`tab-${tab}`}
            className={cx(
              'z-[1] flex items-center justify-center rounded-full px-6 py-2 text-base duration-150',
              activeTab === tab ? 'opacity-100' : 'opacity-40',
            )}
            ref={activeTab === tab ? activeTabRef : null}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </label>
        </Fragment>
      ))}
      <div
        className="absolute left-0 top-0 h-full border-b border-white transition-all duration-150"
        style={{
          width: indicatorWidth,
          transform: `translateX(${indicatorOffset}px)`,
        }}
      />
    </div>
  )
}
