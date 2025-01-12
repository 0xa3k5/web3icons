import {
  INetworkMetadata,
  networks,
  ITokenMetadata,
  tokens,
  IWalletMetadata,
  wallets,
  TVariant,
  TType,
  IExchangeMetadata,
  exchanges,
} from '@web3icons/common'

const groupByVariant = <T extends { variants: TVariant[] }>(
  arr: T[],
  variant: TVariant,
): T[] => {
  return arr.filter((item) => item.variants.includes(variant))
}

export const filterAndSortIcons = ({
  variant,
  searchTerm,
  type,
  nextBatchIndex,
  perPage,
}: {
  variant: TVariant
  searchTerm: string
  type: TType
  nextBatchIndex: number
  perPage: number
}): (
  | INetworkMetadata
  | ITokenMetadata
  | IWalletMetadata
  | IExchangeMetadata
)[] => {
  const filterFunction = (item: any) => {
    const searchTermLower = searchTerm.toLowerCase()
    return (
      item.symbol?.toLowerCase().includes(searchTermLower) ||
      item.id?.toLowerCase().includes(searchTermLower) ||
      item.name?.toLowerCase().includes(searchTermLower)
    )
  }

  const filteredIcons = {
    network: groupByVariant(networks, variant).filter(filterFunction),
    wallet: groupByVariant(wallets, variant).filter(filterFunction),
    exchange: groupByVariant(exchanges, variant).filter(filterFunction),
    token: groupByVariant(tokens, variant)
      .filter(filterFunction)
      .sort(
        (a, b) => (a.marketCapRank || Infinity) - (b.marketCapRank || Infinity),
      ),
  }

  return filteredIcons[type]?.slice(0, nextBatchIndex + perPage) || []
}
