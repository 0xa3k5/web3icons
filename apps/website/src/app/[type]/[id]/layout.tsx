import {
  tokens,
  networks,
  wallets,
  exchanges,
  TMetadata,
  ITokenMetadata,
  TType,
} from '@web3icons/common'
import { generateTypeDescription } from '../../../utils/generate-type-description'

const metadataMap: Record<TType, TMetadata[]> = {
  token: tokens,
  network: networks,
  wallet: wallets,
  exchange: exchanges,
}

function findMetadata(type: TType, id: string): TMetadata | undefined {
  const list = metadataMap[type]
  if (!list) return undefined

  return list.find((item) => {
    if (type === 'token') {
      return (item as ITokenMetadata).symbol?.toUpperCase() === id.toUpperCase()
    }
    return item.id === id.toLowerCase()
  })
}

export async function generateStaticParams() {
  const params: { type: string; id: string }[] = []

  tokens.forEach((token) => {
    const id = token.symbol?.toUpperCase() || token.id
    params.push({ type: 'tokens', id })
  })

  networks.forEach((network) => {
    params.push({ type: 'networks', id: network.id })
  })

  wallets.forEach((wallet) => {
    params.push({ type: 'wallets', id: wallet.id })
  })

  exchanges.forEach((exchange) => {
    params.push({ type: 'exchanges', id: exchange.id })
  })

  return params
}

export async function generateMetadata({
  params,
}: {
  params: { type: string; id: string }
}) {
  const { type, id } = params
  const web3Type = type.slice(0, -1) as TType
  const metadata = findMetadata(web3Type, id)

  if (!metadata) {
    return {
      title: 'Icon Not Found',
      description: 'The requested icon could not be found.',
    }
  }

  const iconName =
    web3Type === 'token'
      ? (metadata as ITokenMetadata).symbol?.toUpperCase() || metadata.name
      : metadata.name

  const typeLabel = web3Type.charAt(0).toUpperCase() + web3Type.slice(1)
  const title = `${iconName} ${typeLabel} Icon - Web3 Icons`
  const description = generateTypeDescription(web3Type, metadata)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://web3icons.io/${type}/${id}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function IconLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
