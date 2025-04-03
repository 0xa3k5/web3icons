'use client'
import { forwardRef, ReactElement, ReactNode, useEffect, useState } from 'react'
import {
  IExchangeMetadata,
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
  TVariant,
} from '@web3icons/common'
import { BaseIcon } from '../BaseIcon'
import { loadIcon } from '../utils/loadIcon'
import { IconComponent } from '../types'

/**
 * Interface for DynamicIcon component props.
 *
 * @property {IWalletMetadata | ITokenMetadata | INetworkMetadata | IExchangeMetadata | undefined} metadata - Metadata for the icon.
 * @property {TType} type - Type of the icon (token, network, or wallet).
 * @property {React.ForwardedRef<SVGSVGElement>} ref - Forwarded ref for the icon.
 * @property {(string | number)} [size] - Size of the icon.
 * @property {string} [color] - Color of the icon.
 * @property {string} [className] - Additional CSS classes for the icon.
 * @property {'mono' | 'branded'} [variant] - Variant of the icon.
 * @property {(string | ReactNode)} [fallback] - Fallback content to display if the icon fails to load.
 */
interface IDynamicIcon {
  metadata:
    | ITokenMetadata
    | IWalletMetadata
    | INetworkMetadata
    | IExchangeMetadata
    | undefined
  type: TType
  ref?: React.ForwardedRef<SVGSVGElement>
  size?: string | number
  color?: string
  className?: string
  variant?: TVariant
  fallback?: string | ReactNode
}

/**
 * DynamicIcon component dynamically loads and renders icons based on the provided metadata and type.
 *
 * @param {IDynamicIcon} props
 * @param {React.ForwardedRef<SVGSVGElement>} ref
 * @returns {ReactElement | null} JSX Element for the DynamicIcon component or null if the icon fails to load.
 */
const DynamicIcon = forwardRef<SVGSVGElement, IDynamicIcon>(
  (
    { size, color, className, variant, fallback, metadata, type }: IDynamicIcon,
    ref,
  ): ReactElement | null => {
    const [Icon, setIcon] = useState<IconComponent | null>(null)

    useEffect(() => {
      if (!metadata) {
        return
      }

      loadIcon(type, metadata)
        .then((loadedIcon) => {
          setIcon(loadedIcon)
        })
        .catch(() => {
          setIcon(null)
        })
    }, [type, metadata])

    // Show fallback for errors or missing icons
    if (!Icon && fallback) {
      return (
        <BaseIcon
          ref={ref}
          size={size}
          color={color}
          className={className}
          fallback={fallback}
        />
      )
    }

    return Icon ? (
      <Icon
        ref={ref}
        size={size}
        color={color}
        className={className}
        variant={variant}
      />
    ) : null
  },
)

export default DynamicIcon
