import {
  INetworkMetadata,
  networks,
  ITokenMetadata,
  tokens,
  IWalletMetadata,
  wallets,
  TVariant,
  TType,
} from '@web3icons/common'

const groupedNetworks: Record<string, INetworkMetadata[]> = {}

networks.forEach((network) => {
  network.variants.forEach((variant) => {
    if (!groupedNetworks[variant]) {
      groupedNetworks[variant] = []
    }
    groupedNetworks[variant]?.push(network)
  })
})

const groupedTokens: Record<string, ITokenMetadata[]> = {}

tokens.sort(
  (a, b) => (a.marketCapRank || Infinity) - (b.marketCapRank || Infinity),
)

tokens.forEach((token) => {
  token.variants.forEach((variant) => {
    if (!groupedTokens[variant]) {
      groupedTokens[variant] = []
    }
    groupedTokens[variant]?.push(token)
  })
})

const groupedWallets: Record<string, IWalletMetadata[]> = {}

wallets.forEach((wallet) => {
  wallet.variants.forEach((variant) => {
    if (!groupedWallets[variant]) {
      groupedWallets[variant] = []
    }
    groupedWallets[variant]?.push(wallet)
  })
})

// group by variants
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
}) => {
  const filteredNetworkIcons = groupedNetworks[variant]?.filter(
    (network) =>
      network.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      network.id?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredTokens = groupedTokens[variant]?.filter(
    (token) =>
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredWalletIcons = groupedWallets[variant]?.filter(
    (wallet) =>
      wallet.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wallet.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (type === 'token' && filteredTokens) {
    return filteredTokens.slice(0, nextBatchIndex + perPage)
  }

  if (type === 'network' && filteredNetworkIcons) {
    return filteredNetworkIcons.slice(0, nextBatchIndex + perPage)
  }

  if (type === 'wallet' && filteredWalletIcons) {
    return filteredWalletIcons.slice(0, nextBatchIndex + perPage)
  }
}
