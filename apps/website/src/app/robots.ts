import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/@modal/'],
      },
    ],
    sitemap: 'https://web3icons.io/sitemap.xml',
  }
}
