import {
  tokens,
  networks,
  wallets,
  exchanges,
  TType,
  TMetadata,
  ITokenMetadata,
} from '@web3icons/common'

export interface SearchResult {
  metadata: TMetadata
  type: TType
  matchField: string
}

export function searchIcons(query: string, limit = 20): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return []
  }

  const normalizedQuery = query.toLowerCase().trim()
  const results: SearchResult[] = []

  tokens.forEach((token) => {
    const tokenMeta = token as ITokenMetadata
    const symbol = tokenMeta.symbol?.toLowerCase() || ''
    const name = token.name.toLowerCase()
    const id = token.id.toLowerCase()

    if (symbol.includes(normalizedQuery)) {
      results.push({ metadata: token, type: 'token', matchField: 'symbol' })
    } else if (name.includes(normalizedQuery)) {
      results.push({ metadata: token, type: 'token', matchField: 'name' })
    } else if (id.includes(normalizedQuery)) {
      results.push({ metadata: token, type: 'token', matchField: 'id' })
    }
  })

  networks.forEach((network) => {
    const name = network.name.toLowerCase()
    const id = network.id.toLowerCase()

    if (name.includes(normalizedQuery)) {
      results.push({ metadata: network, type: 'network', matchField: 'name' })
    } else if (id.includes(normalizedQuery)) {
      results.push({ metadata: network, type: 'network', matchField: 'id' })
    }
  })

  wallets.forEach((wallet) => {
    const name = wallet.name.toLowerCase()
    const id = wallet.id.toLowerCase()

    if (name.includes(normalizedQuery)) {
      results.push({ metadata: wallet, type: 'wallet', matchField: 'name' })
    } else if (id.includes(normalizedQuery)) {
      results.push({ metadata: wallet, type: 'wallet', matchField: 'id' })
    }
  })

  exchanges.forEach((exchange) => {
    const name = exchange.name.toLowerCase()
    const id = exchange.id.toLowerCase()

    if (name.includes(normalizedQuery)) {
      results.push({ metadata: exchange, type: 'exchange', matchField: 'name' })
    } else if (id.includes(normalizedQuery)) {
      results.push({ metadata: exchange, type: 'exchange', matchField: 'id' })
    }
  })

  results.sort((a, b) => {
    const aExact =
      a.matchField === 'symbol'
        ? (a.metadata as ITokenMetadata).symbol?.toLowerCase() ===
          normalizedQuery
        : a.metadata.name.toLowerCase() === normalizedQuery ||
          a.metadata.id.toLowerCase() === normalizedQuery

    const bExact =
      b.matchField === 'symbol'
        ? (b.metadata as ITokenMetadata).symbol?.toLowerCase() ===
          normalizedQuery
        : b.metadata.name.toLowerCase() === normalizedQuery ||
          b.metadata.id.toLowerCase() === normalizedQuery

    if (aExact && !bExact) return -1
    if (!aExact && bExact) return 1

    if (a.matchField === 'symbol' && b.matchField !== 'symbol') return -1
    if (a.matchField !== 'symbol' && b.matchField === 'symbol') return 1
    if (a.matchField === 'name' && b.matchField === 'id') return -1
    if (a.matchField === 'id' && b.matchField === 'name') return 1

    return 0
  })

  return results.slice(0, limit)
}
