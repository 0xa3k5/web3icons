import { forwardRef } from 'react'
import { networks } from '@token-icons/core/metadata'
import * as NetworkComponents from './icons/networks'
import { NetworkIconProps } from './types'

type NetworkComponentNames = keyof typeof NetworkComponents

// Converts a string to PascalCase
const toPascalCase = (str: string): string => {
  const words = str.match(/[a-z]+/gi) || []
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('')
}

export const NetworkIcon = forwardRef<SVGSVGElement, NetworkIconProps>(
  ({ network, size, className, variant = 'mono', color }, ref) => {
    // Try to find the network data object using the network prop
    const networkData = networks.find(
      (n) =>
        n.id === network ||
        n.name.toLowerCase() === network.toLowerCase() ||
        (n.shortname && n.shortname.toLowerCase() === network.toLowerCase()),
    )

    // Initialize the icon component to null
    let IconComponent = null

    // Try to resolve the component name first using name, then id, then shortname
    if (networkData) {
      const compName = toPascalCase(networkData.name)
      const compId = networkData.id ? toPascalCase(networkData.id) : null
      const compShortname = networkData.shortname
        ? toPascalCase(networkData.shortname)
        : null

      // Check if component exists using name
      IconComponent =
        NetworkComponents[`Network${compName}` as NetworkComponentNames]

      // If not found by name, check by id
      if (!IconComponent) {
        IconComponent =
          NetworkComponents[`Network${compId}` as NetworkComponentNames]
      }

      // If not found by id, check by shortname
      if (!IconComponent && compShortname) {
        IconComponent =
          NetworkComponents[`Network${compShortname}` as NetworkComponentNames]
      }
    }

    // If no component is found, log an error and return null
    if (!IconComponent) {
      console.error(`No component found for network: ${network}`)
      return null
    }

    // Render the resolved icon component
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

export default NetworkIcon
