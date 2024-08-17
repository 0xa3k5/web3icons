import { forwardRef, ReactElement, useState, useEffect } from 'react'
import { IWalletMetadata, wallets } from '@web3icons/core'
import { WalletIconProps } from './types'
import { toKebabCase, toPascalCase, WALLET_ICON_IMPORT_MAP } from './utils'

const findWallet = (wallet: string): IWalletMetadata | undefined => {
  const walletObj = wallets.find(
    (w) =>
      w.id.toLowerCase() === toKebabCase(wallet) ||
      w.name.toLowerCase() === wallet.toLowerCase(),
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
