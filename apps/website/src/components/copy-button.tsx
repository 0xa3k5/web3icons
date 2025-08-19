'use client'
import { useState, useEffect, useRef, PropsWithChildren } from 'react'
import Tooltip from './tooltip'
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
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
