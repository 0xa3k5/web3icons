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
} from '../../../components'
import { fetchSvgContent } from '../../../utils/fetch-svg-content'
import { scaffoldComponent } from '../../../utils/jsx-scaffold'

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

  const variants: TVariant[] =
    web3Type === 'token' || web3Type === 'network'
      ? ['branded', 'mono', 'background']
      : ['branded', 'mono']

  let description = ''
  if (web3Type === 'token') {
    const token = metadata as ITokenMetadata
    const symbol = token.symbol?.toUpperCase() || token.id.toUpperCase()
    description = `${token.name} (${symbol}) crypto icons as SVG or React components for your web3 project. Available in ${token.variants.join(', ')} styles.`
  } else if (web3Type === 'network') {
    const network = metadata as any
    const chainInfo = network.chainId ? ` on Chain ${network.chainId}` : ''
    description = `${network.name} blockchain icons${chainInfo} in SVG and React formats. Perfect for web3 applications with ${network.variants.join(', ')} variants.`
  } else if (web3Type === 'wallet') {
    const wallet = metadata as any
    description = `${wallet.name} Wallet icons for crypto and web3 apps. Free SVG and React components in ${wallet.variants.join(', ')} styles.`
  } else if (web3Type === 'exchange') {
    const exchange = metadata as any
    const exchangeType = exchange.type === 'dex' ? 'DEX' : 'Exchange'
    description = `${exchange.name} ${exchangeType} icons in SVG and React. Optimized for crypto and web3 applications with ${exchange.variants.join(', ')} variants.`
  }
  return (
    <div className="flex min-h-dvh flex-col gap-8 py-8 font-mono">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Web3Icon
            type={web3Type}
            metadata={metadata}
            variant={variant}
            size={40}
          />
          <div className="flex max-w-2xl flex-col gap-2 text-pretty">
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

      <div className="flex gap-4">
        <div className="relative flex flex-1 items-center justify-center gap-8 overflow-clip p-16">
          {variants.map((v) => (
            <Web3Icon
              key={v}
              type={web3Type}
              metadata={metadata}
              variant={v}
              size={64}
            />
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

    </div>
  )
}
