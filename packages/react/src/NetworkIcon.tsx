import { forwardRef } from 'react'
import { networks } from '@token-icons/core/metadata'
import * as NetworkComponents from './icons/networks'
import { NetworkIconProps } from './types'

type NetworkComponentNames = keyof typeof NetworkComponents

export const NetworkIcon = forwardRef<SVGSVGElement, NetworkIconProps>(
  ({ network, size, className, variant = 'mono', color }, ref) => {
    const normalizedNetworkName = network.toLowerCase().replace(/ /g, '-')
    const iconName =
      `Network${normalizedNetworkName.charAt(0).toUpperCase() + normalizedNetworkName.slice(1)}` as NetworkComponentNames
    const IconComponent = NetworkComponents[iconName] || null

    if (!IconComponent) {
      console.warn(`Icon not found: ${iconName}`)
      return null
    }

    return (
      <IconComponent
        size={size}
        color={color}
        className={className}
        variant={variant}
        ref={ref}
      />
    )
  },
)
