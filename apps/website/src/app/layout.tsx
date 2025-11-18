import '../globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { AppContextProvider } from '../hooks'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web3 Icons',
  description:
    '2,500+ SVG & React icons for crypto currency tokens, coins, networks and wallets',
  openGraph: {
    title: 'Web3 Icons',
    description:
      '2,500+ SVG & React icons for crypto currency tokens, coins, networks and wallets',
    url: 'https://web3icons.io',
    type: 'website',
    images: [
      {
        url: 'https://web3icons.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web3 Icons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@0xa3k5',
    creator: '@0xa3k5',
    title: 'Web3 Icons',
    description:
      '2,500+ SVG & React icons for crypto currency tokens, coins, networks and wallets',
    images: ['https://web3icons.io/og-image.png'],
  },
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto flex min-h-dvh flex-col`}>
        <Suspense>
          <AppContextProvider>
            <Header />
            <main className="container mx-auto flex-1 py-16">{children}</main>
            {modal}
            <Analytics />
            <Footer />
          </AppContextProvider>
        </Suspense>
      </body>
    </html>
  )
}
