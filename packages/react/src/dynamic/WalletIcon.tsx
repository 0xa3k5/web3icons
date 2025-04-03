'use client'
import { forwardRef } from 'react'
import { WalletIconProps } from '../types'
import { findWallet } from '../utils'
import DynamicIcon from './DynamicIcon'

/**
 * @component @name WalletIcon
 *
 * @description A React component for rendering wallet icons dynamically based on the provided wallet ID or name.
 *
 * @param {WalletIconProps} props
 * @param {SVGSVGElement} ref
 *
 * @returns {JSX.Element} JSX Element for the WalletIcon component.
 */
export const WalletIcon = forwardRef<SVGSVGElement, WalletIconProps>(
  ({ id, name, size, className, variant = 'mono', color, fallback }, ref) => {
    const metadata = findWallet({ id, name })

    return (
      <DynamicIcon
        metadata={metadata}
        type="wallet"
        size={size}
        className={className}
        variant={variant}
        color={color}
        ref={ref}
        fallback={fallback}
      />
    )
  },
)

WalletIcon.displayName = 'WalletIcon'
