'use client'
import { useCallback } from 'react'
import {
  TType,
  TVariant,
  tokens,
  networks,
  wallets,
  exchanges,
} from '@web3icons/common'
import {
  IconCard,
  CodeBlock,
  Tabs,
  SegmentedControl,
  SearchInput,
  Tag,
  UsedBy,
} from '../components'
import { Button } from '../components/button'
import { useAppContext } from '../hooks'
import { Slider } from '../components/slider'
import { ColorSlider } from '../components/color-slider'

export default function Home() {
  const {
    icons,
    loadMoreIcons,
    hasMoreIcons,
    variant,
    type,
    setType,
    setVariant,
    searchTerm,
    setSearchTerm,
    size,
    setSize,
    color,
    setColor,
  } = useAppContext()

  const handleTabChange = useCallback(
    (value: string) => {
      setType(value as TType)
    },
    [setType],
  )

  const handleVariantChange = useCallback(
    (value: TVariant) => {
      setVariant(value)
    },
    [setVariant],
  )

  return (
    <div className="flex min-h-full w-full flex-col gap-4 py-8 font-mono max-sm:px-4 sm:py-16 md:gap-16">
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
              label: 'npm',
              content: 'npm i @web3icons/react',
              language: 'bash',
            },
            {
              label: 'yarn',
              content: 'yarn add @web3icons/react',
              language: 'bash',
            },
            {
              label: 'bun',
              content: 'bun add @web3icons/react',
              language: 'bash',
            },
            {
              label: 'pnpm',
              content: 'pnpm add @web3icons/react',
              language: 'bash',
            },
          ]}
          classNames="max-h-32"
        />
      </div>
      <a
        href="https://chromewebstore.google.com/detail/web3-icons/aobmkdlldfagcnlpkciicjaoopfpdgnn"
        target="_blank"
        rel="noopener noreferrer"
        className="border-gray-lightest group flex w-full items-center justify-between gap-4 rounded-lg border px-6 py-4 transition-colors hover:border-white/30"
      >
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary size-5">
              <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-2 .9-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">
              Chrome Extension is live!
            </span>
            <span className="text-sm text-white/40">
              Quickly look up any crypto icon right from your browser.
            </span>
          </div>
        </div>
        <span className="text-primary text-sm opacity-0 transition-opacity group-hover:opacity-100">
          Install &rarr;
        </span>
      </a>
      <UsedBy />
      <Tabs
        tabs={[
          {
            label: 'token',
            slotAfter: <Tag className="ml-1">{tokens.length}</Tag>,
          },
          {
            label: 'network',
            slotAfter: <Tag className="ml-1">{networks.length}</Tag>,
          },
          {
            label: 'wallet',
            slotAfter: <Tag className="ml-1">{wallets.length}</Tag>,
          },
          {
            label: 'exchange',
            slotAfter: <Tag className="ml-1">{exchanges.length}</Tag>,
          },
        ]}
        onTabChange={handleTabChange}
        activeTab={type}
        className="top-16"
        slotAfter={
          <SegmentedControl
            options={['mono', 'branded', 'background']}
            selected={variant}
            onChange={(variant) => handleVariantChange(variant as TVariant)}
            className="max-md:hidden"
          />
        }
      />
      <section className="flex w-full flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <SearchInput
            onInput={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            className="w-full"
          />

          <div className="flex w-full flex-row gap-8">
            <Slider
              label="size"
              minValue={16}
              maxValue={96}
              value={size}
              setValue={(value) => setSize(value)}
              className="w-1/2 md:w-full"
            />

            <ColorSlider
              disabled={variant !== 'mono'}
              label="color"
              color={color}
              setColor={setColor}
              className="w-1/2 md:w-full"
            />
          </div>
        </div>
      </section>
      <section className="relative grid w-full grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-5">
        {icons.map((icon) => {
          return (
            <IconCard
              key={icon.id}
              metadata={icon}
              className="border-gray-lightest col-span-1 border"
            />
          )
        })}
      </section>
      {hasMoreIcons && (
        <div className="flex justify-center py-8">
          <Button
            variant="ghost"
            onClick={loadMoreIcons}
            className="w-1/3 min-w-32"
          >
            load more
          </Button>
        </div>
      )}
    </div>
  )
}
