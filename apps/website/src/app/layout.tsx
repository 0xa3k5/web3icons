import '../globals.css'
import { Inter } from 'next/font/google'
import { AppContextProvider } from '../hooks'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Token Icons',
  description: '2,500+ SVG & React icons for crypto currency tokens',
  openGraph: {
    title: 'Token Icons',
    description: '2,500+ SVG & React icons for crypto currency tokens',
    url: 'https://tokenicons.io',
    type: 'website',
    images: [
      {
        url: 'https://tokenicons.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Token Icons',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@0xa3k5',
    creator: '@0xa3k5',
    title: 'Token Icons',
    description: '2,500+ SVG & React icons for crypto currency tokens',
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
      <AppContextProvider>
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </AppContextProvider>
    </html>
  )
}
