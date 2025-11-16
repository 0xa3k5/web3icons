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
import { fetchSvgContent } from '../../../utils/fetch-svg-content'
import { scaffoldComponent } from '../../../utils/jsx-scaffold'

interface PageProps {
  params: {
    type: TType
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

  const [variant, setVariant] = useState<TVariant>('branded')
  const [codeSnippets, setCodeSnippets] = useState({
    svg: '',
    individual: '',
    dynamic: '',
  })

  const metadataList = metadataMap[type]

  if (!metadataList) {
    notFound()
  }

  const metadata = metadataList.find((item) => {
    if (type === 'token') {
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
        type,
      })
      setCodeSnippets({
        svg,
        individual: scaffoldComponent({
          metadata,
          type,
          variant,
          size: 24,
          color: 'currentColor',
          dynamic: false,
        }),
        dynamic: scaffoldComponent({
          metadata,
          type,
          variant,
          size: 24,
          color: 'currentColor',
          dynamic: true,
        }),
      })
    })()
  }, [metadata, variant, type])

  const iconName =
    type === 'token'
      ? (metadata as ITokenMetadata).symbol.toUpperCase()
      : metadata.name || metadata.id

  const variants: TVariant[] =
    type === 'token' || type === 'network'
      ? ['branded', 'mono', 'background']
      : ['branded', 'mono']

  return (
    <div className="flex min-h-dvh flex-col gap-8 p-8 font-mono">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Web3Icon
            type={type}
            metadata={metadata}
            variant={variant}
            size={40}
          />
          <h1 className="text-4xl font-bold">{iconName}</h1>
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
              type={type}
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

      <IconCard metadata={metadata} />
    </div>
  )
}
