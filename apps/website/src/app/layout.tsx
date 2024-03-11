import '../globals.css'
import { Inter } from 'next/font/google'
import { AppContextProvider } from '../hooks'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Token Icons',
  description: 'SVG & React icons for crypto currency tokens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={inter.className}>{children}</body>
      </AppContextProvider>
    </html>
  )
}
