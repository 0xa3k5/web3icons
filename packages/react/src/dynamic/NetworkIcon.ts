'use client'
import { createElement, forwardRef } from 'react'
import { NetworkIconProps } from '../types'
import { findNetwork } from '../utils'
import DynamicIcon from './DynamicIcon'

/**
 * @component @name NetworkIcon
 *
 * @description A React component for rendering network icons dynamically based on the provided network identifier.
 * @note This dynamically imports the icon therefore it is not tree-shakable. Import individual icons instead for tree-shaking optimization.
 *
 * @param {NetworkIconProps} props
 * @param {SVGSVGElement} ref
 *
 * @returns {JSX.Element} Element for the NetworkIcon component.
 */
export const NetworkIcon = forwardRef<SVGSVGElement, NetworkIconProps>(
  (
    {
      name,
      chainId,
      caip2id,
      id,
      size,
      className,
      variant = 'mono',
      color,
      fallback,
    },
    ref,
  ) => {
    const metadata = findNetwork(
      name ? { name } : chainId ? { chainId } : caip2id ? { caip2id } : { id },
    )
    return createElement(DynamicIcon, {
      type: 'network',
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

NetworkIcon.displayName = 'NetworkIcon'
