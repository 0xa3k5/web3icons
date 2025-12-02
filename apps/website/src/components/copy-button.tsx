'use client'
import { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { Tooltip } from './tooltip'
import { Button } from './button'
import type { ButtonSize } from './button'

interface Props {
  className?: string
  disabled?: boolean
  tooltipPosition?: 'top' | 'bottom'
  onClick: () => void
  size?: ButtonSize
  iconOnly?: boolean
}

export const CopyButton = ({
  className,
  disabled,
  children,
  tooltipPosition = 'top',
  onClick,
  size = 'sm',
  iconOnly = false,
}: PropsWithChildren<Props>): JSX.Element => {
  const [tooltip, setTooltip] = useState({ toggle: false, text: '' })
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (tooltip.toggle) {
      timer = setTimeout(() => setTooltip({ toggle: false, text: '' }), 1000)
    }
    return () => clearTimeout(timer)
  }, [tooltip])

  const handleCopy = async () => {
    try {
      onClick()
      setTooltip({ toggle: true, text: 'copied!' })
    } catch (err) {
      console.error(err)
      setTooltip({ toggle: true, text: 'Failed to copy' })
    }
  }

  const copyIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        stroke="currentColor"
        d="M19.2 9.3h-8.1a1.8 1.8 0 0 0-1.8 1.8v8.1a1.8 1.8 0 0 0 1.8 1.8h8.1a1.8 1.8 0 0 0 1.8-1.8v-8.1a1.8 1.8 0 0 0-1.8-1.8Z"
      />
      <path
        stroke="currentColor"
        d="M5.7 14.7h-.9A1.8 1.8 0 0 1 3 12.9V4.8A1.8 1.8 0 0 1 4.8 3h8.1a1.8 1.8 0 0 1 1.8 1.8v.9"
      />
    </svg>
  )

  const isIconOnly = iconOnly || !children

  return (
    <div ref={buttonRef} className="relative inline-block">
      <Button
        variant={isIconOnly ? 'icon' : 'ghost'}
        size={size}
        onClick={handleCopy}
        disabled={disabled}
        className={className}
        iconBefore={!isIconOnly ? copyIcon : undefined}
      >
        {isIconOnly ? copyIcon : children}
      </Button>
      <Tooltip
        text={tooltip.text}
        toggle={tooltip.toggle}
        position={tooltipPosition}
        buttonRef={buttonRef}
      />
    </div>
  )
}
