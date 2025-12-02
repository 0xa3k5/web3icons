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
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3333 10H11.3333C10.597 10 10 10.597 10 11.3333V17.3333C10 18.0697 10.597 18.6667 11.3333 18.6667H17.3333C18.0697 18.6667 18.6667 18.0697 18.6667 17.3333V11.3333C18.6667 10.597 18.0697 10 17.3333 10Z"
        stroke="currentColor"
        stroke-width="0.666667"
      />
      <path
        d="M7.33333 14H6.66666C6.31304 14 5.9739 13.8595 5.72385 13.6095C5.47381 13.3594 5.33333 13.0203 5.33333 12.6667V6.66666C5.33333 6.31304 5.47381 5.9739 5.72385 5.72385C5.9739 5.4738 6.31304 5.33333 6.66666 5.33333H12.6667C13.0203 5.33333 13.3594 5.4738 13.6095 5.72385C13.8595 5.9739 14 6.31304 14 6.66666V7.33333"
        stroke="currentColor"
        stroke-width="0.666667"
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
