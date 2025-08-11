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
        <div className="min-h-screen bg-gray-darkest font-mono text-white">
          <div className="mx-auto px-4 py-8 sm:px-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <Link
                  href="/"
                  className="text-white/40 duration-150 hover:text-white"
                >
                  ← back to icons
                </Link>
                <h1 className="mt-4 font-mono text-3xl">api dashboard</h1>
                <span className="mt-2 block text-white/40">
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
