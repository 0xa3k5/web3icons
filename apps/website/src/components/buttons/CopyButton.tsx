'use client'
import { useState, useEffect, PropsWithChildren } from 'react'
import Tooltip from '../Tooltip'
import Button from './Button'

interface Props {
  className?: string
  disabled?: boolean
  tooltipPosition?: 'top' | 'bottom'
  onClick: () => void
}

export default function CopyButton({
  className,
  disabled,
  children,
  tooltipPosition,
  onClick,
}: PropsWithChildren<Props>): JSX.Element {
  const [tooltip, setTooltip] = useState({ toggle: false, text: '' })

  useEffect(() => {
    // eslint-disable-next-line no-undef
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

  return (
    <div className="relative inline-block">
      <Button
        onClick={handleCopy}
        disabled={disabled}
        className={className}
        icon={
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
        }
      >
        {children}
      </Button>
      <Tooltip
        text={tooltip.text}
        toggle={tooltip.toggle}
        position={tooltipPosition}
      />
    </div>
  )
}
