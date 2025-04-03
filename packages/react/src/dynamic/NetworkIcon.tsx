'use client'
import { forwardRef } from 'react'
import { findNetwork } from '../utils'
import { NetworkIconProps } from '../types'
import DynamicIcon from './DynamicIcon'

/**
 * @component @name NetworkIcon
 *
 * @description A React component for rendering network icons dynamically based on the provided network or chain ID.
 *
 * @param {NetworkIconProps} props
 * @param {SVGSVGElement} ref
 *
 * @returns {JSX.Element} JSX Element for the NetworkIcon component.
 */
export const NetworkIcon = forwardRef<SVGSVGElement, NetworkIconProps>(
  (
    {
      name,
      id,
      chainId,
      caip2id,
      size,
      className,
      variant = 'mono',
      color,
      fallback,
    },
    ref,
  ) => {
    const metadata = findNetwork({ name, id, caip2id, chainId })
    return (
      <DynamicIcon
        type="network"
        metadata={metadata}
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

NetworkIcon.displayName = 'NetworkIcon'
