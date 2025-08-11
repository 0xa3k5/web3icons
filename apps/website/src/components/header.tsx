import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Logo from './logo'

interface Props {}

export function Header() {
  return (
    <div className="flex w-full items-center justify-center py-2">
      <div className="container flex w-full flex-col items-start justify-between gap-4 md:flex-row">
        <Logo className="size-16" />
        <SignedOut>
          <SignInButton mode="modal">
            <button className="border border-gray-lightest px-4 py-2 font-mono text-sm text-white duration-150 hover:bg-gray-dark">
              sign in
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-4">
            <Link
              href="/api-reference"
              className="border border-gray-lightest px-4 py-2 font-mono text-sm text-white duration-150 hover:bg-gray-dark"
            >
              api docs
            </Link>
            <Link
              href="/dashboard"
              className="bg-primary px-4 py-2 font-mono text-sm text-white duration-150 hover:bg-primary/80"
            >
              dashboard
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'size-8',
                  userButtonAvatarBox: 'size-8 border border-gray-lightest',
                },
              }}
            />
          </div>
        </SignedIn>
      </div>
    </div>
  )
}

// const links = [
//   {
//     name: 'github',
//     href: 'https://github.com/0xa3k5/web3icons',
//   },
//   {
//     name: 'npmjs',
//     href: 'https://www.npmjs.com/package/@web3icons/react',
//   },
//   {
//     name: 'figma plugin',
//     href: 'https://figma.com/community/plugin/1170720285035693761',
//   },
//   {
//     name: 'figma file',
//     href: 'https://www.figma.com/community/file/1355517329090639687/token-icons-community',
//   },
// ]

{
  /* <nav className="flex flex-wrap gap-4">
{links.map((link) => (
  <a
    key={link.name}
    href={link.href}
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-4 whitespace-nowrap text-white"
  >
    <span className="text-white/40 group-hover:text-white/100">
      {link.name}
    </span>
    <span className="group-last-of-type:hidden">/</span>
  </a>
))}
</nav> */
}
