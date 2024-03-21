'use client'
import { ControlBar, IconCard, ActionBar } from '../components'
import SearchInput from '../components/SearchInput'
import { useAppContext } from '../hooks'

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
]

export default function Home() {
  const { icons, selectedIcons, searchTerm, setSearchTerm } = useAppContext()

  return (
    <main className="container mx-auto flex h-screen flex-col gap-4 px-4 py-4 font-mono sm:px-8 sm:py-16 md:gap-16">
      <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
        <h1 className="max-w-40 text-4xl tracking-widest">token icons</h1>
        <nav className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-md group flex items-center gap-4 whitespace-nowrap text-white"
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
        <span className="text-white/40">
          Token Icons is the most comprehensive and up-to-date source for
          cryptocurrency token & coin logos as icon format. More than 2,500
          icons are ready as optimized SVGs as well as React components.
        </span>
        <code className="inline-flex  w-fit items-center gap-4 rounded-md border border-gray-lightest p-4 text-left text-sm text-white">
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
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
            </svg>
          </button>
        </code>
      </div>
      <div className="relative flex flex-col-reverse gap-8 md:flex-row md:gap-12">
        <div className="flex flex-col gap-4">
          <SearchInput
            onInput={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
          />
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {icons.map(([iconName, IconComponent]) => (
              <IconCard
                className="h-fit"
                key={iconName}
                iconName={iconName}
                IconComponent={IconComponent}
              />
            ))}
          </div>
        </div>
        <ControlBar className="left-0 top-16 z-10 mt-16 md:sticky" />
      </div>
      {selectedIcons.length > 0 && (
        <div className="flex w-full justify-center">
          <ActionBar />
        </div>
      )}
    </main>
  )
}
