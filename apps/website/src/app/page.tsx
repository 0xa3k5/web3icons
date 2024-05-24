'use client'
import { ControlBar, IconCard, ActionBar } from '../components'
import Logo from '../components/Logo'
import { useAppContext } from '../hooks'
import { NetworkIcon, TokenIcon } from '@token-icons/react'
import { INetworkMetadata, ITokenMetadata } from '@token-icons/core'

const INSTALL_SNIPPET = `npm i @token-icons/core @token-icons/react`
const links = [
  {
    name: 'github',
    href: 'https://github.com/0xa3k5/token-icons',
  },
  {
    name: 'npmjs',
    href: 'https://www.npmjs.com/package/@token-icons/react',
  },
  {
    name: 'figma plugin',
    href: 'https://figma.com/community/plugin/1170720285035693761',
  },
  {
    name: 'figma file',
    href: 'https://www.figma.com/community/file/1355517329090639687/token-icons-community',
  },
]

export default function Home() {
  const { icons, selectedIcons, loadMoreIcons, variant, size, color, type } =
    useAppContext()

  return (
    <main className="container mx-auto flex h-screen flex-col gap-4 p-4 font-mono sm:px-8 sm:py-16 md:gap-16">
      <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row">
        <Logo />
        <nav className="flex flex-wrap gap-4">
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
        </nav>
      </div>
      <div className="flex max-w-2xl flex-col gap-4">
        <h1 className="max-w-40 text-4xl tracking-widest">token icons</h1>
        <span className="text-white/40">
          Token Icons is the most comprehensive and up-to-date source for
          cryptocurrency token & coin logos as icon format. More than 2,500
          icons are ready as optimized SVGs as well as React components.
        </span>
        <code className="inline-flex w-fit items-center gap-4 rounded-md border border-gray-lightest p-4 text-sm text-white">
          <span className="flex gap-4">{INSTALL_SNIPPET}</span>
          <button
            type="button"
            onClick={async () => {
              await navigator.clipboard.writeText(INSTALL_SNIPPET)
            }}
            className="relative flex rounded-md bg-white/10 p-2 duration-150 hover:bg-white/20 active:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </code>
      </div>
      <div className="relative flex w-full flex-col-reverse gap-8 md:flex-row md:gap-12">
        <div className="flex w-full flex-col gap-8">
          <ControlBar />
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {icons.map((icon) => (
              <IconCard
                key={icon.name}
                icon={icon}
                label={type === 'networks' ? icon.id! : icon.name}
              >
                {type === 'networks' && (
                  <NetworkIcon
                    network={
                      (icon as INetworkMetadata).id ??
                      (icon as INetworkMetadata).name
                    }
                    {...{ variant, color, size }}
                  />
                )}
                {type === 'tokens' && (
                  <TokenIcon
                    symbol={(icon as ITokenMetadata).symbol}
                    {...{ variant, color, size }}
                  />
                )}
              </IconCard>
            ))}
            <div className="col-span-full my-8 flex justify-center">
              <button
                type="button"
                className="w-1/3 py-2 text-white duration-150 hover:bg-gray-dark"
                onClick={loadMoreIcons}
              >
                load more
              </button>
            </div>
          </div>
        </div>
      </div>
      {selectedIcons.length > 0 && (
        <div className="flex w-full justify-center">
          <ActionBar />
        </div>
      )}
    </main>
  )
}
