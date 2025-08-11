import { Hono } from 'hono'
import {
  tokens,
  networks,
  wallets,
  exchanges,
} from '@web3icons/common/metadata'

const app = new Hono()

const CDN_BASE_URL = process.env.R2_PUBLIC_URL || 'https://cdn.web3icons.io'

const iconTypes = {
  tokens,
  networks,
  wallets,
  exchanges,
} as const

type IconType = keyof typeof iconTypes

app.get('/:type', (c) => {
  const type = c.req.param('type') as IconType
  const page = parseInt(c.req.query('page') || '1')
  const limit = parseInt(c.req.query('limit') || '50')

  if (!iconTypes[type]) {
    return c.json({ error: 'Invalid icon type' }, 400)
  }

  const icons = iconTypes[type]
  const start = (page - 1) * limit
  const end = start + limit
  const paginatedIcons = icons.slice(start, end)

  const results = paginatedIcons.map((icon: any) => ({
    id: icon.id,
    name: icon.name,
    ...(icon.symbol && { symbol: icon.symbol }),
    variants: icon.variants,
    urls: icon.variants.reduce((acc: any, variant: string) => {
      acc[variant] =
        `${CDN_BASE_URL}/v1/${type}/${variant}/${icon.fileName}.svg`
      return acc
    }, {}),
  }))

  return c.json({
    type,
    page,
    limit,
    total: icons.length,
    totalPages: Math.ceil(icons.length / limit),
    data: results,
  })
})

app.get('/:type/:id', (c) => {
  const type = c.req.param('type') as IconType
  const id = c.req.param('id')

  if (!iconTypes[type]) {
    return c.json({ error: 'Invalid icon type' }, 400)
  }

  const icons = iconTypes[type]
  const icon = icons.find(
    (i: any) =>
      i.id === id ||
      i.fileName?.toLowerCase() === id.toLowerCase() ||
      i.symbol?.toLowerCase() === id.toLowerCase(),
  )

  if (!icon) {
    return c.json({ error: 'Icon not found' }, 404)
  }

  return c.json({
    id: icon.id,
    name: icon.name,
    type,
    ...(icon.symbol && { symbol: icon.symbol }),
    ...(icon.chainId && { chainId: icon.chainId }),
    variants: icon.variants,
    urls: icon.variants.reduce((acc: any, variant: string) => {
      acc[variant] =
        `${CDN_BASE_URL}/v1/${type}/${variant}/${icon.fileName}.svg`
      return acc
    }, {}),
    metadata: icon,
  })
})

export default app
