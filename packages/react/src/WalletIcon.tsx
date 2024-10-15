import { forwardRef } from 'react'
import { WalletIconProps } from './types'
import { DynamicIcon } from './DynamicIcon'
import { findWallet } from './utils'

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
    const metadata = findWallet({ wallet: id ?? name })

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
