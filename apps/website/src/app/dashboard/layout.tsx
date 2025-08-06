import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-darkest text-white font-mono">
          <div className="container mx-auto px-4 sm:px-8 py-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <Link href="/" className="text-white/40 hover:text-white duration-150">
                  ← back to icons
                </Link>
                <h1 className="text-3xl font-mono mt-4">api dashboard</h1>
                <span className="text-white/40 mt-2 block">
                  manage your web3icons api keys and monitor usage
                </span>
              </div>
            </div>
            {children}
          </div>
        </div>
      </SignedIn>
      
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}