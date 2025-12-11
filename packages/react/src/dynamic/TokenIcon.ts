'use client'
import { createElement, forwardRef } from 'react'
import type { TokenIconProps } from '../types.js'
import { findToken } from '../utils/index.js'
import DynamicIcon from './DynamicIcon.js'

/**
 * @component @name TokenIcon
 *
 * @description A React component for rendering token icons dynamically based on the provided symbol, address, and network.
 * @note This dynamically imports the icon therefore it is not tree-shakable. Import individual icons instead for tree-shaking optimization.
 *
 * @param {TokenIconProps} props
 * @param {SVGSVGElement} ref
 *
 * @returns {JSX.Element} Element for the TokenIcon component.
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
    return createElement(DynamicIcon, {
      type: 'token',
      metadata,
      className,
      color,
      fallback,
      ref,
      size,
      variant,
    })
  },
)

TokenIcon.displayName = 'TokenIcon'
