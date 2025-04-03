'use client'
import { forwardRef } from 'react'
import { TokenIconProps } from '../types'
import { findToken } from '../utils'
import DynamicIcon from './DynamicIcon'

/**
 * @component @name TokenIcon
 *
 * @description A React component for rendering token icons dynamically based on the provided symbol, address, and network.
 *
 * @param {TokenIconProps} props
 * @param {SVGSVGElement} ref
 *
 * @returns {JSX.Element} JSX Element for the TokenIcon component.
 */
export const TokenIcon = forwardRef<SVGSVGElement, TokenIconProps>(
  (
    {
      symbol,
      size,
      className,
      variant = 'mono',
      color,
      address,
      network,
      fallback,
    },
    ref,
  ) => {
    const metadata = findToken(symbol ? { symbol } : { address, network })
    return (
      <DynamicIcon
        type="token"
        metadata={metadata}
        className={className}
        color={color}
        fallback={fallback}
        ref={ref}
        size={size}
        variant={variant}
      />
    )
  },
)

TokenIcon.displayName = 'TokenIcon'
