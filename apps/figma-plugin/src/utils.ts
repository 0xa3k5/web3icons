import { svgs } from '@web3icons/core'
import { SvgIcon } from './types'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  networks,
  tokens,
  TType,
  TVariant,
  wallets,
} from '@web3icons/common'

const toPascalCase = (str: string): string => {
  const words = str.match(/[a-z0-9]+/gi) || []
  return words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
    )
    .join('')
}

export const filterIcons = (
  searchKey: string,
  type: TType,
  variant: TVariant,
): SvgIcon[] | undefined => {
  const searchLower = searchKey.trim().toLowerCase()

  if (type === 'token') {
    const metadata = tokens.filter(
      (t: ITokenMetadata) =>
        t.symbol.toLowerCase().includes(searchLower) ||
        t.id.toLowerCase().includes(searchLower) ||
        t.name.toLowerCase().includes(searchLower),
    )
    if (!metadata) return

    const filteredMetadata = metadata
      .map((t) => {
        const svg =
          svgs.tokens[variant][
            t.symbol.toUpperCase() as keyof (typeof svgs.tokens)[typeof variant]
          ]
        if (!svg) return
        return {
          name: t.symbol,
          svg,
        } as SvgIcon
      })
      .filter((icon) => icon !== undefined) as SvgIcon[]

    return filteredMetadata
  } else if (type === 'network') {
    const metadata = networks.filter(
      (n: INetworkMetadata) =>
        n.id.toLowerCase().includes(searchLower) ||
        n.name.toLowerCase().includes(searchLower),
    )
    if (!metadata) return

    const filteredMetadata = metadata
      .map((n) => {
        const svg =
          svgs.networks[variant][
            n.id as keyof (typeof svgs.networks)[typeof variant]
          ]
        if (!svg) return
        return {
          name: n.name,
          svg,
        } as SvgIcon
      })
      .filter((icon) => icon !== undefined) as SvgIcon[]

    return filteredMetadata
  } else if (type === 'wallet') {
    const metadata = wallets.filter(
      (w: IWalletMetadata) =>
        w.id.toLowerCase().includes(searchLower) ||
        w.name.toLowerCase().includes(searchLower),
    )
    if (!metadata) return

    const filteredMetadata = metadata
      .map((w) => {
        const svg =
          svgs.wallets[variant][
            w.id as keyof (typeof svgs.wallets)[typeof variant]
          ]
        if (!svg) return
        return {
          name: w.name,
          svg,
        } as SvgIcon
      })
      .filter((icon) => icon !== undefined) as SvgIcon[]

    return filteredMetadata
  }
}
