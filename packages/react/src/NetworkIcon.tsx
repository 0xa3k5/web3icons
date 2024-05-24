import { forwardRef, ReactElement, useState } from 'react'
import { NetworkIconProps } from './types'
import { NETWORK_ICON_IMPORT_MAP } from './icon-import-map'
import { networks } from '@token-icons/core/metadata'
import { INetworkMetadata } from '@token-icons/core'

const toPascalCase = (str: string): string => {
  const words = str.match(/[a-z]+/gi) || []
  return words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
    )
    .join('')
}

const findNetwork = (network: string): INetworkMetadata | undefined => {
  const networkObj = networks.find(
    (net) =>
      net.id.toLowerCase() === network.toLowerCase() ||
      net.name.toLowerCase() === network.toLowerCase(),
  )
  return networkObj || undefined
}

const DynamicIconLoader = forwardRef<SVGSVGElement, NetworkIconProps>(
  (
    { network, size, className, variant, color }: NetworkIconProps,
    ref,
  ): ReactElement | null => {
    const [IconComponent, setIconComponent] = useState<ReactElement | null>(
      null,
    )

    const loadIcon = async () => {
      const matchedNetwork = findNetwork(network)
      if (!matchedNetwork) {
        console.error(`Network not found: ${network}`)
        return
      }

      const iconName = `Network${toPascalCase(matchedNetwork.id)}`
      const importFunction = NETWORK_ICON_IMPORT_MAP[iconName]

      if (importFunction) {
        try {
          const { default: ImportedIcon } = await importFunction()
          setIconComponent(
            <ImportedIcon
              ref={ref}
              network={network}
              size={size}
              color={color}
              className={className}
              variant={variant}
            />,
          )
        } catch (error) {
          console.error(`Error loading icon: ${iconName}`, error)
        }
      }
    }

    loadIcon()

    return IconComponent
  },
)

export const NetworkIcon = forwardRef<SVGSVGElement, NetworkIconProps>(
  ({ network, size, className, variant = 'mono', color }, ref) => {
    return (
      <DynamicIconLoader
        network={network}
        size={size}
        className={className}
        variant={variant}
        color={color}
        ref={ref}
      />
    )
  },
)

NetworkIcon.displayName = 'NetworkIcon'
