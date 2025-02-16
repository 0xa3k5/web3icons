import { Fragment, h } from 'preact'
import cx from 'classnames'
import { useEffect, useRef, useState } from 'preact/hooks'
import { TType } from '@web3icons/common'

interface TabsProps {
  className?: string
  activeTab: TType
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void
}

export default function Tabs({
  className,
  activeTab,
  onChange,
}: TabsProps): h.JSX.Element {
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
        'relative inline-flex w-full rounded-sm border-b border-gray-lightest pb-2',
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
            onChange={(e) => onChange(e.currentTarget.value)}
            className="sr-only"
          />
          <label
            htmlFor={`tab-${tab}`}
            className={cx(
              'z-[1] flex items-center justify-center rounded-full px-4 py-2 text-xs text-white duration-150',
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
