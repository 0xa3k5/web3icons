'use client'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import {
  tokens,
  networks,
  wallets,
  exchanges,
  TMetadata,
  TVariant,
  ITokenMetadata,
  TType,
} from '@web3icons/common'
import {
  Web3Icon,
  CodeBlock,
  DescriptionList,
  SegmentedControl,
  IconCard,
} from '../../../components'
import {
  generateTypeDescription,
  scaffoldComponent,
  fetchSvgContent,
} from '../../../utils'
import Link from 'next/link'

interface PageProps {
  params: {
    type: `${TType}s`
    id: string
  }
}

const metadataMap: Record<TType, TMetadata[]> = {
  token: tokens,
  network: networks,
  wallet: wallets,
  exchange: exchanges,
}

export default function IconPage({ params }: PageProps) {
  const { type, id } = params
  const web3Type = type.slice(0, -1) as TType
  const allItems = metadataMap[web3Type]
  const MORE_LIMIT = 20
  const related = getRelatedItems(web3Type, id, MORE_LIMIT)

  const [variant, setVariant] = useState<TVariant>('branded')
  const [codeSnippets, setCodeSnippets] = useState({
    svg: '',
    individual: '',
    dynamic: '',
  })

  const metadataList = metadataMap[web3Type]

  if (!metadataList) {
    notFound()
  }

  const metadata = metadataList.find((item) => {
    if (web3Type === 'token') {
      return (item as ITokenMetadata).symbol?.toUpperCase() === id.toUpperCase()
    }
    return item.id === id.toLowerCase()
  })

  if (!metadata) {
    notFound()
  }

  useEffect(() => {
    ;(async () => {
      const { svg } = await fetchSvgContent({
        metadata,
        variant,
        type: web3Type,
      })
      setCodeSnippets({
        svg,
        individual: scaffoldComponent({
          metadata,
          type: web3Type,
          variant,
          size: 24,
          color: 'currentColor',
          dynamic: false,
        }),
        dynamic: scaffoldComponent({
          metadata,
          type: web3Type,
          variant,
          size: 24,
          color: 'currentColor',
          dynamic: true,
        }),
      })
    })()
  }, [metadata, variant, web3Type])

  const iconName =
    web3Type === 'token'
      ? (metadata as ITokenMetadata).symbol.toUpperCase()
      : metadata.name || metadata.id

  const variants: TVariant[] = metadata.variants
  const description = generateTypeDescription(web3Type, metadata)

  return (
    <div className="flex min-h-dvh flex-col gap-8 font-mono max-sm:px-8 sm:py-8">
      <div className="flex gap-4 max-sm:flex-col sm:items-center sm:justify-between">
        <div className="flex gap-4 max-sm:flex-col">
          <Web3Icon
            type={web3Type}
            metadata={metadata}
            variant={variant}
            size={40}
          />
          <div className="flex w-full flex-col gap-2 text-pretty sm:max-w-2xl">
            <h1 className="text-4xl">{iconName}</h1>
            <p className="text-lg text-white/40">{description}</p>
          </div>
        </div>
        <SegmentedControl
          options={variants}
          selected={variant}
          onChange={(v) => setVariant(v as TVariant)}
        />
      </div>

      <div className="flex gap-4 max-sm:flex-col">
        <div className="relative flex flex-1 items-center justify-center gap-8 overflow-clip p-16">
          {variants.map((v) => (
            <button
              key={v}
              type="button"
              className="z-1"
              onClick={() => setVariant(v)}
            >
              <Web3Icon
                type={web3Type}
                metadata={metadata}
                variant={v}
                size={64}
              />
            </button>
          ))}
          <div className="bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]" />
        </div>
        <DescriptionList className="flex-1">
          {Object.entries(metadata).map(([key, value]) => (
            <DescriptionList.Item key={key} label={key} value={value} />
          ))}
        </DescriptionList>
      </div>
      <CodeBlock
        tabs={[
          {
            label: 'Individual',
            content: codeSnippets.individual,
            language: 'tsx',
          },
          {
            label: 'Dynamic',
            content: codeSnippets.dynamic,
            language: 'tsx',
          },
          {
            label: 'SVG',
            content: codeSnippets.svg,
            language: 'html',
          },
        ]}
      />

      <section className="my-16 flex flex-col gap-12">
        <div className="flex max-w-lg flex-col gap-1">
          <h2 className="text-xl">see different sizes</h2>
          <p className="text-sm text-white/40">
            See how to use the {iconName} icon in your project.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 rounded-md bg-white/5 p-8">
          {[16, 24, 32, 40, 48, 64].map((size) => (
            <div key={size} className="flex flex-col items-center gap-4">
              <Web3Icon
                type={web3Type}
                metadata={metadata}
                variant={variant}
                size={size}
              />
              <span className="text-xs">
                {size}x{size}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16 flex flex-col gap-12">
        <div className="flex max-w-lg flex-col gap-1">
          <h2 className="text-xl">
            more {type}{' '}
            <span className="-ml-2 text-lg text-white/40">
              ({allItems.length - MORE_LIMIT})
            </span>
          </h2>
          <p className="text-sm text-white/40">
            Discover other {type} icons like {id}. Find fully scalable SVG icons
            for all your blockchain projects with Web3Icons.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8">
          {related.map((item) => (
            <IconCard
              key={item.id}
              metadata={item}
              type={web3Type}
              variant={variant}
              forceFullPage
            />
          ))}
          <Link
            href={type}
            className="hover:bg-gray relative flex  flex-col items-center justify-center gap-4 pb-4 pt-8 duration-150"
          >
            <div className="flex flex-col items-center justify-center gap-4 text-center text-white/40">
              {allItems.length > MORE_LIMIT && (
                <span className="text-lg text-white">
                  +{allItems.length - MORE_LIMIT}
                </span>
              )}
              <span className="text-xs">See all {type}</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

// Simple hash function for deterministic shuffling
function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

function getRelatedItems(
  type: TType,
  currentId: string,
  limit: number,
): TMetadata[] {
  const allItems = metadataMap[type]

  const filtered = allItems.filter((item) => {
    if (type === 'token') {
      const symbol = (item as ITokenMetadata).symbol?.toUpperCase()
      return (
        symbol !== currentId.toUpperCase() &&
        item.id !== currentId.toLowerCase()
      )
    }
    return item.id !== currentId.toLowerCase()
  })

  const seed = hashCode(currentId + type)
  const shuffled = [...filtered].sort((a, b) => {
    const hashA = hashCode(a.id + seed)
    const hashB = hashCode(b.id + seed)
    return hashA - hashB
  })

  return shuffled.slice(0, limit)
}
