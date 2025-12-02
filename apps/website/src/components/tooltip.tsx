'use client'
import cx from 'classnames'
import { useState, useEffect, RefObject } from 'react'

interface TooltipProps {
  text: string
  toggle: boolean
  position?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
  buttonRef?: RefObject<HTMLDivElement>
}

export const Tooltip = ({
  text,
  toggle,
  position = 'top',
  className,
  buttonRef,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (toggle) {
      setVisible(true)

      if (buttonRef?.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setCoords({
          x: rect.left + rect.width / 2,
          y: position === 'top' ? rect.top - 8 : rect.bottom + 8,
        })
      }

      const timer = setTimeout(() => setVisible(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [toggle, buttonRef, position])

  if (!visible) return null

  const useFixedPositioning = buttonRef?.current

  if (useFixedPositioning) {
    return (
      <div
        className={cx(
          'border-gray-lightest bg-gray-darkest fixed z-50 -translate-x-1/2 rounded-md border px-2 py-1 text-xs',
          {
            '-translate-y-full': position === 'top',
          },
          className,
        )}
        style={{
          left: coords.x,
          top: coords.y,
        }}
      >
        {text}
      </div>
    )
  }

  return (
    <div
      className={cx(
        'border-gray-lightest bg-gray-darkest absolute z-50 rounded-md border px-2 py-1 text-xs',
        {
          'bottom-full left-1/2 mb-2 -translate-x-1/2 transform':
            position === 'top',
          'left-1/2 top-full mt-2 -translate-x-1/2 transform':
            position === 'bottom',
        },
        className,
      )}
    >
      {text}
    </div>
  )
}
