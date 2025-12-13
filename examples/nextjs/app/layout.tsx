import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3Icons Next.js Example',
  description: 'Example usage of @web3icons/react with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
        {children}
      </body>
    </html>
  )
}
