import { Hono } from 'hono'
import {
  tokens,
  networks,
  wallets,
  exchanges,
  ITokenMetadata,
  INetworkMetadata,
  IWalletMetadata,
  IExchangeMetadata,
  TType,
} from '@web3icons/common'

const search = new Hono()
interface SearchResultItem {
  id: string
  name: string
  type: TType
  symbol?: string
  score: number
  [key: string]: any
}

// fuzzy search helper
function fuzzyMatch(query: string, text: string): boolean {
  const q = query.toLowerCase()
  const t = text.toLowerCase()

  // exact match
  if (t.includes(q)) return true

  // check if all query chars appear in order
  let queryIndex = 0
  for (let i = 0; i < t.length && queryIndex < q.length; i++) {
    if (t[i] === q[queryIndex]) {
      queryIndex++
    }
  }
  return queryIndex === q.length
}

// calculate relevance score
function getRelevanceScore(
  query: string,
  item: ITokenMetadata | INetworkMetadata | IWalletMetadata | IExchangeMetadata,
): number {
  const q = query.toLowerCase()
  let score = 0

  // exact symbol match = highest score (only for tokens)
  if ('symbol' in item && item.symbol?.toLowerCase() === q) score += 100

  // exact name match
  if (item.name?.toLowerCase() === q) score += 80

  // starts with query
  if ('symbol' in item && item.symbol?.toLowerCase().startsWith(q)) score += 50
  if (item.name?.toLowerCase().startsWith(q)) score += 40

  // contains query
  if ('symbol' in item && item.symbol?.toLowerCase().includes(q)) score += 30
  if (item.name?.toLowerCase().includes(q)) score += 20

  // fuzzy match
  if ('symbol' in item && fuzzyMatch(q, item.symbol || '')) score += 10
  if (fuzzyMatch(q, item.name || '')) score += 5

  return score
}

// main search endpoint - searches across all types
search.get('/', (c) => {
  const query = c.req.query('q')
  const type = c.req.query('type') // optional filter: token, network, wallet, exchange
  const limitParam = c.req.query('limit') || '20'
  const offsetParam = c.req.query('offset') || '0'

  if (!query) {
    return c.json({ error: 'query parameter required' }, 400)
  }

  if (query.length > 100) {
    return c.json({ error: 'query too long, maximum 100 characters' }, 400)
  }

  if (type && !['token', 'network', 'wallet', 'exchange'].includes(type)) {
    return c.json(
      {
        error: 'invalid type, must be one of: token, network, wallet, exchange',
      },
      400,
    )
  }

  const limit = parseInt(limitParam)
  const offset = parseInt(offsetParam)

  if (isNaN(limit) || limit < 1 || limit > 100) {
    return c.json({ error: 'invalid limit, must be between 1 and 100' }, 400)
  }

  if (isNaN(offset) || offset < 0) {
    return c.json({ error: 'invalid offset, must be 0 or positive' }, 400)
  }

  let results: SearchResultItem[] = []

  // search in each category
  if (!type || type === 'token') {
    const tokenResults = tokens
      .map((token) => ({
        ...token,
        type: 'token' as TType,
        score: getRelevanceScore(query, token),
      }))
      .filter((item) => item.score > 0)
    results.push(...tokenResults)
  }

  if (!type || type === 'network') {
    const networkResults = networks
      .map((network) => ({
        ...network,
        type: 'network' as TType,
        score: getRelevanceScore(query, network),
      }))
      .filter((item) => item.score > 0)
    results.push(...networkResults)
  }

  if (!type || type === 'wallet') {
    const walletResults = wallets
      .map((wallet) => ({
        ...wallet,
        type: 'wallet' as TType,
        score: getRelevanceScore(query, wallet),
      }))
      .filter((item) => item.score > 0)
    results.push(...walletResults)
  }

  if (!type || type === 'exchange') {
    const exchangeResults = exchanges
      .map((exchange) => ({
        ...exchange,
        type: 'exchange' as TType,
        score: getRelevanceScore(query, exchange),
      }))
      .filter((item) => item.score > 0)
    results.push(...exchangeResults)
  }

  // sort by score (highest first) and remove score from output
  results.sort((a, b) => b.score - a.score)
  const cleanResults = results.map(({ score, ...item }) => item)

  // pagination
  const paginatedResults = cleanResults.slice(offset, offset + limit)

  return c.json({
    query,
    total: cleanResults.length,
    limit,
    offset,
    results: paginatedResults,
  })
})

// search by specific fields
search.get('/advanced', (c) => {
  const symbol = c.req.query('symbol')
  const name = c.req.query('name')
  const chainId = c.req.query('chainId')
  const type = c.req.query('type')

  // Validate input lengths
  if (symbol && symbol.length > 20) {
    return c.json({ error: 'symbol too long, maximum 20 characters' }, 400)
  }
  if (name && name.length > 100) {
    return c.json({ error: 'name too long, maximum 100 characters' }, 400)
  }
  if (chainId && chainId.length > 20) {
    return c.json({ error: 'chainId too long, maximum 20 characters' }, 400)
  }
  if (type && !['token', 'network', 'wallet', 'exchange'].includes(type)) {
    return c.json(
      {
        error: 'invalid type, must be one of: token, network, wallet, exchange',
      },
      400,
    )
  }

  // At least one search criteria must be provided
  if (!symbol && !name && !chainId && !type) {
    return c.json(
      { error: 'at least one search criteria must be provided' },
      400,
    )
  }

  let results: SearchResultItem[] = []

  // helper to check if item matches all provided criteria
  const matchesCriteria = (
    item:
      | ITokenMetadata
      | INetworkMetadata
      | IWalletMetadata
      | IExchangeMetadata,
  ) => {
    if (
      symbol &&
      'symbol' in item &&
      !item.symbol?.toLowerCase().includes(symbol.toLowerCase())
    )
      return false
    if (name && !item.name?.toLowerCase().includes(name.toLowerCase()))
      return false
    if (chainId && 'chainId' in item && item.chainId?.toString() !== chainId)
      return false
    return true
  }

  // search each type based on filter
  if (!type || type === 'token') {
    results.push(
      ...tokens
        .filter(matchesCriteria)
        .map((t) => ({ ...t, type: 'token' as TType, score: 0 })),
    )
  }
  if (!type || type === 'network') {
    results.push(
      ...networks
        .filter(matchesCriteria)
        .map((n) => ({ ...n, type: 'network' as TType, score: 0 })),
    )
  }
  if (!type || type === 'wallet') {
    results.push(
      ...wallets
        .filter(matchesCriteria)
        .map((w) => ({ ...w, type: 'wallet' as TType, score: 0 })),
    )
  }
  if (!type || type === 'exchange') {
    results.push(
      ...exchanges
        .filter(matchesCriteria)
        .map((e) => ({ ...e, type: 'exchange' as TType, score: 0 })),
    )
  }

  const cleanResults = results.map(({ score, ...item }) => item)

  return c.json({
    filters: { symbol, name, chainId, type },
    total: cleanResults.length,
    results: cleanResults,
  })
})

// autocomplete/suggestions endpoint
search.get('/suggest', (c) => {
  const query = c.req.query('q')
  const limitParam = c.req.query('limit') || '10'

  if (!query || query.length < 1) {
    return c.json({ error: 'query must be at least 1 character' }, 400)
  }

  if (query.length > 50) {
    return c.json(
      { error: 'query too long, maximum 50 characters for suggestions' },
      400,
    )
  }

  const limit = parseInt(limitParam)
  if (isNaN(limit) || limit < 1 || limit > 50) {
    return c.json({ error: 'invalid limit, must be between 1 and 50' }, 400)
  }

  const suggestions: string[] = []
  const seen = new Set<string>()

  // collect unique symbols and names that start with query
  const q = query.toLowerCase()

  const addSuggestion = (value: string) => {
    if (value && value.toLowerCase().startsWith(q) && !seen.has(value)) {
      seen.add(value)
      suggestions.push(value)
    }
  }

  // check all collections
  ;[...tokens, ...networks, ...wallets, ...exchanges].forEach((item) => {
    if (suggestions.length < limit) {
      if ('symbol' in item && item.symbol) addSuggestion(item.symbol as string)
      addSuggestion(item.name)
    }
  })

  return c.json({
    query,
    suggestions: suggestions.slice(0, limit),
  })
})

export default search
