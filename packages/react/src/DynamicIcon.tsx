import { forwardRef, ReactElement, ReactNode, useEffect, useState } from 'react'
import {
  IExchangeMetadata,
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
  TVariant,
} from '@web3icons/common'
import { BaseIcon } from './BaseIcon'
import {
  toPascalCase,
  NETWORK_ICON_IMPORT_MAP,
  TOKEN_ICON_IMPORT_MAP,
  WALLET_ICON_IMPORT_MAP,
  EXCHANGE_ICON_IMPORT_MAP,
} from './utils'
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
  // prettier-ignore
  metadata: | ITokenMetadata | IWalletMetadata | INetworkMetadata | IExchangeMetadata | undefined
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
export const DynamicIcon = forwardRef<SVGSVGElement, IDynamicIcon>(
  (
    { size, color, className, variant, fallback, metadata, type }: IDynamicIcon,
    ref,
  ): ReactElement | null => {
    const [IconComponent, setIconComponent] = useState<ReactElement | null>(
      null,
    )

    useEffect(() => {
      const loadIcon = async () => {
        let importFunction
        if (!metadata) {
          if (!fallback) return null
          setIconComponent(
            <BaseIcon
              ref={ref}
              size={size}
              color={color}
              className={className}
              fallback={fallback}
            />,
          )
          return
        }

        switch (type) {
          case 'token':
            importFunction =
              TOKEN_ICON_IMPORT_MAP[
                `Token${(metadata as ITokenMetadata).symbol.toUpperCase()}`
              ]
            break
          case 'network':
            importFunction =
              NETWORK_ICON_IMPORT_MAP[
                `Network${toPascalCase(metadata.name)}`
              ] ??
              NETWORK_ICON_IMPORT_MAP[`Network${toPascalCase(metadata.id)}`]
            break
          case 'wallet':
            importFunction =
              WALLET_ICON_IMPORT_MAP[`Wallet${toPascalCase(metadata.name)}`] ??
              WALLET_ICON_IMPORT_MAP[`Wallet${toPascalCase(metadata.id)}`]
            break
          case 'exchange':
            importFunction =
              // prettier-ignore
              EXCHANGE_ICON_IMPORT_MAP[`Exchange${toPascalCase(metadata.name)}`] ?? 
              EXCHANGE_ICON_IMPORT_MAP[`Exchange${toPascalCase(metadata.id)}`]
            break
          default:
            throw new Error(`invalid type ${type}`)
        }

        if (importFunction) {
          try {
            const { default: ImportedIcon } = await importFunction()
            setIconComponent(
              <ImportedIcon
                ref={ref}
                size={size}
                color={color}
                className={className}
                variant={variant}
              />,
            )
          } catch (error) {
            if (fallback) {
              setIconComponent(
                <BaseIcon
                  ref={ref}
                  size={size}
                  color={color}
                  className={className}
                  fallback={fallback}
                />,
              )
            }
          }
        } else {
          if (fallback) {
            setIconComponent(
              <BaseIcon
                ref={ref}
                size={size}
                color={color}
                className={className}
                fallback={fallback}
              />,
            )
          }
        }
      }

      loadIcon()
    }, [ref, size, color, className, variant, fallback])

    return IconComponent
  },
)
