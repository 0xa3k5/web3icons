import { forwardRef, ReactElement, useState, useEffect } from 'react'
import { NetworkIconProps } from './types'
import { NETWORK_ICON_IMPORT_MAP } from './icon-import-map'
import { networks } from '@web3icons/core/metadata'
import { INetworkMetadata } from '@web3icons/core'
import { toKebabCase, toPascalCase } from './naming-conventions'

const findNetwork = (network: string): INetworkMetadata | undefined => {
  const networkObj = networks.find(
    (net) =>
      net.id.toLowerCase() === toKebabCase(network) ||
      net.name.toLowerCase() === network.toLowerCase() ||
      net.shortname?.toLowerCase() === network.toLowerCase(),
  )
  return networkObj
}

const DynamicIconLoader = forwardRef<SVGSVGElement, NetworkIconProps>(
  (
    { network, size, className, variant, color }: NetworkIconProps,
    ref,
  ): ReactElement | null => {
    const [IconComponent, setIconComponent] = useState<ReactElement | null>(
      null,
    )

    useEffect(() => {
      const loadIcon = async () => {
        const matchedNetwork = findNetwork(network)
        if (!matchedNetwork) {
          console.error(`Network not found: ${network}`)
          return
        }

        const iconName = `Network${toPascalCase(matchedNetwork.name)}`
        const importFunction =
          NETWORK_ICON_IMPORT_MAP[iconName] ??
          NETWORK_ICON_IMPORT_MAP[`Network${toPascalCase(matchedNetwork.id)}`]

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
    }, [network, ref, size, className, variant, color])

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
