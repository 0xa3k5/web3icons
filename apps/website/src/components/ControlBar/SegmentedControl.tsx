'use client'
import cx from 'classnames'
import { Fragment, useEffect, useRef, useState } from 'react'

interface SegmentedControlProps {
  className?: string
  selected: string
  options: string[]
  onChange: (value: string) => void
}

export default function SegmentedControl({
  className,
  selected,
  onChange,
  options,
}: SegmentedControlProps): JSX.Element {
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
        'relative inline-flex w-fit rounded-full border border-gray-lightest bg-gray-light p-1',
        'focus-visible:outline-none [&:has(:focus-visible)]:focus-within:outline-none  [&:has(:focus-visible)]:focus-within:outline-gray-lightest',
      )}
    >
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
            className="z-[1] flex items-center justify-center rounded-full px-6 py-2 text-sm"
            ref={selected === option ? selectedOptionRef : null}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </Fragment>
      ))}
      <div
        className="absolute left-0 top-1 h-[calc(100%-0.5rem)] rounded-full bg-gray-lightest transition-all duration-150"
        style={{
          width: indicatorWidth,
          transform: `translateX(${indicatorOffset}px)`,
        }}
      />
    </div>
  )
}
