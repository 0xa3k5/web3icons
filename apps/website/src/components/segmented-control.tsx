'use client'
import cx from 'classnames'
import { Fragment, useEffect, useRef, useState } from 'react'

interface SegmentedControlProps {
  className?: string
  selected: string
  options: string[]
  onChange: (value: string) => void
}

export const SegmentedControl = ({
  className,
  selected,
  options,
  onChange,
}: SegmentedControlProps) => {
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [indicatorOffset, setIndicatorOffset] = useState(0)
  const selectedOptionRef = useRef<HTMLLabelElement | null>(null)

  useEffect(() => {
    if (selectedOptionRef.current) {
      setIndicatorWidth(selectedOptionRef.current.offsetWidth)
      setIndicatorOffset(selectedOptionRef.current.offsetLeft)
    }
  }, [selected])

  return (
    <div
      className={cx(
        className,
        'border-gray-light relative inline-flex w-fit rounded-lg border p-1',
        '[&:has(:focus-visible)]:focus-within:outline-gray-light focus-visible:outline-none [&:has(:focus-visible)]:focus-within:outline-none',
      )}
    >
      <span
        className="bg-gray-light absolute left-0 top-1 h-[calc(100%-0.5rem)] rounded-md transition-all duration-150"
        style={{
          width: indicatorWidth,
          transform: `translateX(${indicatorOffset}px)`,
        }}
      />
      {options.map((option) => (
        <Fragment key={option}>
          <input
            type="radio"
            id={`option-${option}`}
            name="segmented-control"
            value={option}
            checked={selected === option}
            onChange={(e) => onChange(e.target.value)}
            className="sr-only"
          />
          <label
            htmlFor={`option-${option}`}
            className="isolate flex items-center justify-center rounded-lg px-6 py-2 text-sm"
            ref={selected === option ? selectedOptionRef : null}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </Fragment>
      ))}
    </div>
  )
}
