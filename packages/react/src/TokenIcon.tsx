import { forwardRef } from 'react'
import { TokenIconProps } from './types'
import { findToken } from './utils'
import { DynamicIcon } from './DynamicIcon'

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
