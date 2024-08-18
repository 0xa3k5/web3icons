import { forwardRef } from 'react'
import { NetworkIconProps } from './types'
import { findNetwork } from './utils'
import { DynamicIcon } from './DynamicIcon'

export const NetworkIcon = forwardRef<SVGSVGElement, NetworkIconProps>(
  (
    { network, chainId, size, className, variant = 'mono', color, fallback },
    ref,
  ) => {
    const metadata = findNetwork(network ? { network } : { chainId })
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
