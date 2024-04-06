import { forwardRef } from 'react'
import { networks } from '@token-icons/core/metadata'
import * as NetworkComponents from './icons/networks'
import { NetworkIconProps } from './types'

type NetworkComponentNames = keyof typeof NetworkComponents

const kebabToCamel = (str: string) => {
  return str
    .split('-')
    .map((part, index) => {
      if (index === 0) {
        return part
      }
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join('')
}

export const NetworkIcon = forwardRef<SVGSVGElement, NetworkIconProps>(
  ({ network, size, className, variant = 'mono', color }, ref) => {
    const networkData = networks.find(
      (n) => n.id === network || n.name === network || n.shortname === network,
    )

    const compWithId = kebabToCamel(
      `Network-${networkData?.id}`,
    ) as NetworkComponentNames
    const compWithName = kebabToCamel(
      `Network-${networkData?.name}`,
    ) as NetworkComponentNames
    const compWithShortname = kebabToCamel(
      `Network-${networkData?.shortname}`,
    ) as NetworkComponentNames

    const IconComponent =
      NetworkComponents[compWithId] ||
      NetworkComponents[compWithName] ||
      NetworkComponents[compWithShortname] ||
      null

    if (!IconComponent) {
      console.warn(`Icon not found: ${network}`)
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
