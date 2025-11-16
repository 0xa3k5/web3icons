'use client'
import { createElement, forwardRef } from 'react'
import { ExchangeIconProps } from '../types'
import { findExchange } from '../utils'
import DynamicIcon from './DynamicIcon'

/**
 * @component @name ExchangeIcon
 *
 * @description A React component for rendering exchange icons dynamically based on the provided exchange identifier.
 * @note This dynamically imports the icon therefore it is not tree-shakable. Import individual icons instead for tree-shaking optimization.
 *
 * @param {ExchangeIconProps} props
 * @param {SVGSVGElement} ref
 *
 * @returns {JSX.Element} Element for the ExchangeIcon component.
 */
export const ExchangeIcon = forwardRef<SVGSVGElement, ExchangeIconProps>(
  ({ name, id, size, className, variant = 'mono', color, fallback }, ref) => {
    const metadata = findExchange(name ? { name } : { id })
    return createElement(DynamicIcon, {
      type: 'exchange',
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

ExchangeIcon.displayName = 'ExchangeIcon'
