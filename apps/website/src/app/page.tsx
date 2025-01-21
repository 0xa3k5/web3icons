'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { TType, TMetadata, TVariant } from '@web3icons/common'
import {
  ControlBar,
  IconCard,
  Drawer,
  CodeBlock,
  Logo,
  Tabs,
} from '../components'
import { useAppContext } from '../hooks'
import SegmentedControl from '../components/ControlBar/SegmentedControl'

const links = [
  {
    name: 'github',
    href: 'https://github.com/0xa3k5/web3icons',
  },
  {
    name: 'npmjs',
    href: 'https://www.npmjs.com/package/@web3icons/react',
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
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeTabParam = searchParams.get('type') as TType | null
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState<TMetadata | null>(null)
  const {
    icons,
    loadMoreIcons,
    hasMoreIcons,
    variant,
    type,
    setVariant,
    setType,
  } = useAppContext()

  const handleTabChange = (value: string) => {
    setType(value as TType)
    router.replace(`?type=${value}&variant=${variant}`, { scroll: false })
  }

  const handleVariantChange = (value: TVariant) => {
    setVariant(value)
    router.replace(`?type=${type}&variant=${value}`, {
      scroll: false,
    })
  }

  useEffect(() => {
    if (activeTabParam) {
      setType(activeTabParam)
    }
  }, [activeTabParam])

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
        <h1 className="max-w-40 text-4xl tracking-widest">web3 icons</h1>
        <span className="text-white/40">
          Web3 Icons is the most comprehensive and up-to-date source for tokens,
          coins, networks and wallet logos as icon format. More than 2,500 icons
          are ready as optimized SVGs as well as React components.
        </span>
        <CodeBlock
          lineNumbers={false}
          tabs={[
            {
              label: 'install',
              content: 'npm i @web3icons/react',
              language: 'bash',
            },
          ]}
        />
      </div>
      <div className="relative flex w-full flex-col-reverse gap-8 md:flex-row md:gap-12">
        <div className="flex w-full flex-col gap-8">
          <Tabs
            tabs={['token', 'network', 'wallet', 'exchange']}
            onTabChange={handleTabChange}
            activeTab={type}
            slotAfter={
              <SegmentedControl
                options={['mono', 'branded', 'background']}
                selected={variant}
                onChange={(variant) => handleVariantChange(variant as TVariant)}
                className="hidden md:inline-flex"
              />
            }
          />
          <ControlBar handleVariantChange={handleVariantChange} />
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {icons.map((icon) => {
              return (
                <IconCard
                  key={icon.id}
                  metadata={icon}
                  className="col-span-1 border border-gray-lightest"
                  onClick={() => {
                    setSelectedIcon(icon)
                    setIsDrawerOpen(true)
                  }}
                />
              )
            })}
            <div className="col-span-full my-8 flex justify-center">
              {hasMoreIcons && (
                <button
                  type="button"
                  className="w-1/3 py-2 text-white duration-150 hover:bg-gray-dark"
                  onClick={loadMoreIcons}
                >
                  load more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {selectedIcon && (
        <Drawer
          metadata={selectedIcon}
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        />
      )}
    </main>
  )
}
