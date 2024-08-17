import { forwardRef } from 'react'
import { WalletIconProps } from './types'
import { DynamicIcon } from './DynamicIcon'
import { findWallet } from './utils'

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
