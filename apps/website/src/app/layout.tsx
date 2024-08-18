import '../globals.css'
import { Inter } from 'next/font/google'
import { AppContextProvider } from '../hooks'
import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web3 Icons',
  description:
    '2,500+ SVG & React icons for crypto currency tokens, coins, networks and wallets',
  openGraph: {
    title: 'Web3 Icons',
    description:
      '2,500+ SVG & React icons for crypto currency tokens, coins, networks and wallets',
    url: 'https://tokenicons.io',
    type: 'website',
    images: [
      {
        url: 'https://tokenicons.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web3 Icons',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@0xa3k5',
    creator: '@0xa3k5',
    title: 'Web3 Icons',
    description:
      '2,500+ SVG & React icons for crypto currency tokens, coins, networks and wallets',
    images: ['https://tokenicons.io/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Suspense>
        <AppContextProvider>
          <body className={inter.className}>
            {children}
            <Analytics />
          </body>
        </AppContextProvider>
      </Suspense>
    </html>
  )
}
