'use client'
import { createElement, forwardRef } from 'react'
import type { WalletIconProps } from '../types.js'
import { findWallet } from '../utils/index.js'
import DynamicIcon from './DynamicIcon.js'

/**
 * @component @name WalletIcon
 *
 * @description A React component for rendering wallet icons dynamically based on the provided wallet identifier.
 * @note This dynamically imports the icon therefore it is not tree-shakable. Import individual icons instead for tree-shaking optimization.
 *
 * @param {WalletIconProps} props
 * @param {SVGSVGElement} ref
 *
 * @returns {JSX.Element} Element for the WalletIcon component.
 */
export const WalletIcon = forwardRef<SVGSVGElement, WalletIconProps>(
  ({ name, id, size, className, variant = 'mono', color, fallback }, ref) => {
    const metadata = findWallet(name ? { name } : { id })
    return createElement(DynamicIcon, {
      type: 'wallet',
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

WalletIcon.displayName = 'WalletIcon'
