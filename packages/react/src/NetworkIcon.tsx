import { forwardRef, Suspense, lazy, ReactElement } from 'react'
import { NetworkIconProps } from './types'
import TokenIconLogo from './Logo'
import { NETWORK_ICON_IMPORT_MAP } from './icon-import-map'

// Converts a string to PascalCase
const toPascalCase = (str: string): string => {
  const words = str.match(/[a-z]+/gi) || []
  return words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
    )
    .join('')
}

const LazyIconLoader = ({
  network,
  size,
  className,
  variant,
  color,
  ref,
}: NetworkIconProps): ReactElement => {
  const iconName = `Network${toPascalCase(network)}`
  const importFunction = NETWORK_ICON_IMPORT_MAP[iconName]

  if (!importFunction) {
    // Return a fallback if the import function does not exist
    return <TokenIconLogo variant="branded" size={size} className={className} />
  }

  const IconComponent = lazy(importFunction)

  return (
    <Suspense
      fallback={
        <TokenIconLogo variant="branded" size={size} className={className} />
      }
    >
      <IconComponent
        ref={ref}
        network={network}
        size={size}
        color={color}
        className={className}
        variant={variant}
      />
    </Suspense>
  )
}

export const NetworkIcon = forwardRef<SVGSVGElement, NetworkIconProps>(
  ({ network, size, className, variant = 'mono', color }, ref) => {
    return (
      <LazyIconLoader
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
