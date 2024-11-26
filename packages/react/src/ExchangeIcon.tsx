import { forwardRef } from 'react'
import { ExchangeIconProps, WalletIconProps } from './types'
import { DynamicIcon } from './DynamicIcon'
import { findWallet } from './utils'

/**
 * @component @name ExchangeIcon
 *
 * @description A React component for rendering exchange icons dynamically based on the provided exchange ID or name.
 *
 * @param {ExchangeIconProps} props
 * @param {SVGSVGElement} ref
 *
 * @returns {JSX.Element} JSX Element for the ExchangeIcon component.
 */
export const ExchangeIcon = forwardRef<SVGSVGElement, ExchangeIconProps>(
  ({ id, name, size, className, variant = 'mono', color, fallback }, ref) => {
    const metadata = findWallet({ wallet: id ?? name })

    return (
      <DynamicIcon
        metadata={metadata}
        type="exchange"
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

ExchangeIcon.displayName = 'ExchangeIcon'
