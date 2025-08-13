import Link from 'next/link'
import Logo from './logo'

const externalLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/0xa3k5/web3icons',
  },
  {
    name: 'npm',
    href: 'https://www.npmjs.com/package/@web3icons/react',
  },
  {
    name: 'Figma Plugin',
    href: 'https://www.figma.com/community/plugin/1170720285035693761/web3-icons',
  },
  {
    name: 'Figma File',
    href: 'https://www.figma.com/community/file/1355517329090639687/web3icons-v3-9-0',
  },
]

export const Footer = () => {
  return (
    <footer className="border-gray-lightest mx-auto flex w-screen justify-center border-t">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <Logo className="size-12" />
        </Link>

        <nav className="flex items-center gap-1">
          {externalLinks.map((link, index) => (
            <div key={link.name} className="flex items-center">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-white/40 transition-colors hover:text-white"
                aria-label={link.name}
              >
                <span className="font-mono text-sm">
                  {link.name.toLowerCase()}
                </span>
              </a>
              {index < externalLinks.length - 1 && (
                <span className="text-white/20">/</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  )
}
