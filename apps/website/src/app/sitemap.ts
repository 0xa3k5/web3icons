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
      url: `${baseUrl}/token/${id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  networks.forEach((network) => {
    routes.push({
      url: `${baseUrl}/network/${network.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  wallets.forEach((wallet) => {
    routes.push({
      url: `${baseUrl}/wallet/${wallet.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  exchanges.forEach((exchange) => {
    routes.push({
      url: `${baseUrl}/exchange/${exchange.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return routes
}
