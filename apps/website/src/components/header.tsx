import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Logo from './logo'
import { Button } from './button'
import { Breadcrumb } from './breadcrumbs'
import cx from 'classnames'

interface Props {
  className?: string
}

export function Header({ className }: Props) {
  return (
    <div
      className={cx(
        'border-gray-lightest mx-auto flex w-screen justify-center border-b py-2',
        className,
      )}
    >
      <div className="container flex w-full items-center justify-between gap-4">
        <div className="flex items-center">
          <Link href="/">
            <Logo className="size-12" />
          </Link>
          <Breadcrumb className="hidden md:flex" />
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="secondary" size="sm">
                sign in
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href="/api-reference">
              <Button variant="ghost" size="sm">
                api reference
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="primary" size="sm">
                dashboard
              </Button>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'size-8',
                  userButtonAvatarBox: 'size-8 border border-gray-lightest',
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </div>
  )
}
