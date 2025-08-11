import { Hono } from 'hono'
import {
  tokens,
  networks,
  wallets,
  exchanges,
} from '@web3icons/common/metadata'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    tokens: {
      count: tokens.length,
      fields: Object.keys(tokens[0] || {}),
    },
    networks: {
      count: networks.length,
      fields: Object.keys(networks[0] || {}),
    },
    wallets: {
      count: wallets.length,
      fields: Object.keys(wallets[0] || {}),
    },
    exchanges: {
      count: exchanges.length,
      fields: Object.keys(exchanges[0] || {}),
    },
  })
})

app.get('/tokens', (c) => {
  return c.json({ data: tokens, count: tokens.length })
})

app.get('/networks', (c) => {
  return c.json({ data: networks, count: networks.length })
})

app.get('/wallets', (c) => {
  return c.json({ data: wallets, count: wallets.length })
})

app.get('/exchanges', (c) => {
  return c.json({ data: exchanges, count: exchanges.length })
})

app.get('/manifest', async (c) => {
  const CDN_BASE_URL = process.env.R2_PUBLIC_URL || 'https://cdn.web3icons.io'

  try {
    const response = await fetch(`${CDN_BASE_URL}/v1/manifest.json`)
    const manifest = (await response.json()) as any
    return c.json(manifest)
  } catch (error) {
    return c.json({ error: 'Failed to fetch manifest' }, 500)
  }
})

export default app
