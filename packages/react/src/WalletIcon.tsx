import { forwardRef, ReactElement, useState, useEffect } from 'react'
import { WalletIconProps } from './types'
import { WALLET_ICON_IMPORT_MAP } from './icon-import-map'
import { wallets } from '@web3icons/core/metadata'
import { IWalletMetadata } from '@web3icons/core'

const toPascalCase = (str: string): string => {
  const words = str.match(/[a-z]+/gi) || []
  return words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
    )
    .join('')
}

const toKebabCase = (str: string): string => {
  return str
    .split(' ')
    .map((part, index) => {
      if (index === 0) {
        return part
      }
      return part.charAt(0).toLowerCase() + part.slice(1)
    })
    .join('')
}

const findWallet = (wallet: string): IWalletMetadata | undefined => {
  const walletObj = wallets.find(
    (net) =>
      net.id.toLowerCase() === toKebabCase(wallet) ||
      net.name.toLowerCase() === wallet.toLowerCase(),
  )
  return walletObj
}

const DynamicIconLoader = forwardRef<SVGSVGElement, WalletIconProps>(
  (
    { id, name, size, className, variant, color }: WalletIconProps,
    ref,
  ): ReactElement | null => {
    // prettier-ignore
    const [IconComponent, setIconComponent] = useState<ReactElement | null>(null)

    useEffect(() => {
      const loadIcon = async () => {
        const matchedWallet = findWallet(name ?? id)
        if (!matchedWallet) {
          console.error(`Network not found: ${name ?? id}`)
          return
        }

        const importFunction =
          WALLET_ICON_IMPORT_MAP[`Wallet${toPascalCase(matchedWallet.name)}`] ??
          WALLET_ICON_IMPORT_MAP[`Wallet${toPascalCase(matchedWallet.id)}`]

        if (importFunction) {
          try {
            const { default: ImportedIcon } = await importFunction()
            setIconComponent(
              <ImportedIcon
                ref={ref}
                name={name}
                id={id}
                size={size}
                color={color}
                className={className}
                variant={variant}
              />,
            )
          } catch (error) {
            console.error(`Error loading icon: ${matchedWallet.name}`, error)
          }
        }
      }

      loadIcon()
    }, [name, id, ref, size, className, variant, color])

    return IconComponent
  },
)

export const WalletIcon = forwardRef<SVGSVGElement, WalletIconProps>(
  ({ id, name, size, className, variant = 'mono', color }, ref) => {
    if (id) {
      return (
        <DynamicIconLoader
          id={id}
          name={name}
          size={size}
          className={className}
          variant={variant}
          color={color}
          ref={ref}
        />
      )
    }

    if (name) {
      return (
        <DynamicIconLoader
          name={name}
          size={size}
          className={className}
          variant={variant}
          color={color}
          ref={ref}
        />
      )
    }
  },
)

WalletIcon.displayName = 'WalletIcon'
