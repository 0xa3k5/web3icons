import { MetadataRoute } from 'next'
import { tokens, networks, wallets, exchanges } from '@web3icons/common'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://web3icons.io'
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  tokens.forEach((token) => {
    const id = token.symbol?.toUpperCase() || token.id
    routes.push({
      url: `${baseUrl}/tokens/${id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  networks.forEach((network) => {
    routes.push({
      url: `${baseUrl}/networks/${network.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  wallets.forEach((wallet) => {
    routes.push({
      url: `${baseUrl}/wallets/${wallet.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  exchanges.forEach((exchange) => {
    routes.push({
      url: `${baseUrl}/exchanges/${exchange.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Documentation pages
  const docPages = [
    'home',
    'packages/common',
    'packages/core',
    'packages/react',
  ]

  docPages.forEach((page) => {
    routes.push({
      url: `${baseUrl}/docs/${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  })

  return routes
}
