import { Hono } from 'hono'
import {
  tokens,
  networks,
  wallets,
  exchanges,
} from '@web3icons/common/metadata'

const search = new Hono()

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
function getRelevanceScore(query: string, item: any): number {
  const q = query.toLowerCase()
  let score = 0

  // exact symbol match = highest score
  if (item.symbol?.toLowerCase() === q) score += 100

  // exact name match
  if (item.name?.toLowerCase() === q) score += 80

  // starts with query
  if (item.symbol?.toLowerCase().startsWith(q)) score += 50
  if (item.name?.toLowerCase().startsWith(q)) score += 40

  // contains query
  if (item.symbol?.toLowerCase().includes(q)) score += 30
  if (item.name?.toLowerCase().includes(q)) score += 20

  // fuzzy match
  if (fuzzyMatch(q, item.symbol || '')) score += 10
  if (fuzzyMatch(q, item.name || '')) score += 5

  return score
}

// main search endpoint - searches across all types
search.get('/', (c) => {
  const query = c.req.query('q')
  const type = c.req.query('type') // optional filter: token, network, wallet, exchange
  const limit = parseInt(c.req.query('limit') || '20')
  const offset = parseInt(c.req.query('offset') || '0')

  if (!query) {
    return c.json({ error: 'query parameter required' }, 400)
  }

  let results: any[] = []

  // search in each category
  if (!type || type === 'token') {
    const tokenResults = tokens
      .map((token) => ({
        ...token,
        type: 'token',
        score: getRelevanceScore(query, token),
      }))
      .filter((item) => item.score > 0)
    results.push(...tokenResults)
  }

  if (!type || type === 'network') {
    const networkResults = networks
      .map((network) => ({
        ...network,
        type: 'network',
        score: getRelevanceScore(query, network),
      }))
      .filter((item) => item.score > 0)
    results.push(...networkResults)
  }

  if (!type || type === 'wallet') {
    const walletResults = wallets
      .map((wallet) => ({
        ...wallet,
        type: 'wallet',
        score: getRelevanceScore(query, wallet),
      }))
      .filter((item) => item.score > 0)
    results.push(...walletResults)
  }

  if (!type || type === 'exchange') {
    const exchangeResults = exchanges
      .map((exchange) => ({
        ...exchange,
        type: 'exchange',
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
  const chain = c.req.query('chain')
  const tag = c.req.query('tag')
  const type = c.req.query('type')

  let results: any[] = []

  // helper to check if item matches all provided criteria
  const matchesCriteria = (item: any) => {
    if (symbol && !item.symbol?.toLowerCase().includes(symbol.toLowerCase()))
      return false
    if (name && !item.name?.toLowerCase().includes(name.toLowerCase()))
      return false
    if (chain && item.chain !== chain) return false
    if (tag && (!item.tags || !item.tags.includes(tag))) return false
    return true
  }

  // search each type based on filter
  if (!type || type === 'token') {
    results.push(
      ...tokens.filter(matchesCriteria).map((t) => ({ ...t, type: 'token' })),
    )
  }
  if (!type || type === 'network') {
    results.push(
      ...networks
        .filter(matchesCriteria)
        .map((n) => ({ ...n, type: 'network' })),
    )
  }
  if (!type || type === 'wallet') {
    results.push(
      ...wallets.filter(matchesCriteria).map((w) => ({ ...w, type: 'wallet' })),
    )
  }
  if (!type || type === 'exchange') {
    results.push(
      ...exchanges
        .filter(matchesCriteria)
        .map((e) => ({ ...e, type: 'exchange' })),
    )
  }

  return c.json({
    filters: { symbol, name, chain, tag, type },
    total: results.length,
    results,
  })
})

// autocomplete/suggestions endpoint
search.get('/suggest', (c) => {
  const query = c.req.query('q')
  const limit = parseInt(c.req.query('limit') || '10')

  if (!query || query.length < 1) {
    return c.json({ error: 'query must be at least 1 character' }, 400)
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
      addSuggestion(item.symbol)
      addSuggestion(item.name)
    }
  })

  return c.json({
    query,
    suggestions: suggestions.slice(0, limit),
  })
})

export default search
