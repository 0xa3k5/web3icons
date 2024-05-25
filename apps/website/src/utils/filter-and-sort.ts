import { INetworkMetadata, ITokenMetadata } from '@token-icons/core'
import { networks, tokens } from '@token-icons/core/metadata'

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

// group by variants
export const filterAndSortIcons = ({
  variant,
  searchTerm,
  type,
  nextBatchIndex,
  perPage,
}: {
  variant: 'mono' | 'branded'
  searchTerm: string
  type: 'tokens' | 'networks'
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
      (token.variants.includes(variant) &&
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase())) ||
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (type === 'tokens' && filteredTokens) {
    return filteredTokens.slice(0, nextBatchIndex + perPage)
  }

  if (type === 'networks' && filteredNetworkIcons) {
    return filteredNetworkIcons.slice(0, nextBatchIndex + perPage)
  }
}
