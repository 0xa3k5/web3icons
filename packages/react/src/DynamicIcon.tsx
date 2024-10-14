import { forwardRef, ReactElement, ReactNode, useEffect, useState } from 'react'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
} from '@web3icons/common'
import { BaseIcon } from './BaseIcon'
import {
  toPascalCase,
  NETWORK_ICON_IMPORT_MAP,
  TOKEN_ICON_IMPORT_MAP,
  WALLET_ICON_IMPORT_MAP,
} from './utils'
interface IDynamicIcon {
  metadata: ITokenMetadata | IWalletMetadata | INetworkMetadata | undefined
  type: TType
  ref?: React.ForwardedRef<SVGSVGElement>
  size?: string | number
  color?: string
  className?: string
  variant?: 'mono' | 'branded'
  fallback?: string | ReactNode
}

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
