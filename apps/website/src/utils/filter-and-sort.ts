import { INetworkMetadata, ITokenMetadata } from '@token-icons/core'
import { networks, tokens } from '@token-icons/core/metadata'

// group by variants
const groupedTokens: Record<string, ITokenMetadata[]> = {}

tokens.sort(
  (a, b) => (a.marketCapRank || Infinity) - (b.marketCapRank || Infinity),
)

tokens.forEach((token) => {
  token.variants.forEach((variant) => {
    if (!groupedTokens[variant]) {
      groupedTokens[variant] = []
    }
    groupedTokens[variant]!.push(token)
  })
})

const groupedNetworks: Record<string, INetworkMetadata[]> = {}

networks.forEach((network) => {
  network.variants.forEach((variant) => {
    if (!groupedNetworks[variant]) {
      groupedNetworks[variant] = []
    }
    groupedNetworks[variant]!.push(network)
  })
})

export const filterAndSortIcons = (
  variant: 'mono' | 'branded',
  searchTerm: string,
  type: 'tokens' | 'networks',
  nextBatchIndex?: number,
  perPage?: number,
) => {
  const filteredNetworkIcons = groupedNetworks[variant]!.filter(
    (network) =>
      network.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      network.id?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredTokens = groupedTokens[variant]!.filter(
    (token) =>
      (token.variants.includes(variant) &&
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase())) ||
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (nextBatchIndex && perPage) {
    return type === 'tokens'
      ? filteredTokens.slice(0, nextBatchIndex + perPage)
      : filteredNetworkIcons.slice(0, nextBatchIndex + perPage)
  }

  return type === 'tokens' ? filteredTokens : filteredNetworkIcons
}
