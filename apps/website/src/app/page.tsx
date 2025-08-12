'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { TType, TMetadata, TVariant } from '@web3icons/common'
import { ControlBar, IconCard, Drawer, CodeBlock, Tabs } from '../components'
import { useAppContext } from '../hooks'
import SegmentedControl from '../components/ControlBar/SegmentedControl'

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
    <main className="container mx-auto flex h-screen flex-col gap-4 font-mono sm:py-16 md:gap-16">
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
          classNames="max-h-32"
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
                  className="border-gray-lightest col-span-1 border"
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
                  className="hover:bg-gray-dark w-1/3 py-2 text-white duration-150"
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
