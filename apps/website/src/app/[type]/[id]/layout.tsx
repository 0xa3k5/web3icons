import {
  tokens,
  networks,
  wallets,
  exchanges,
  TMetadata,
  ITokenMetadata,
  TType,
} from '@web3icons/common'

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

  // Generate params for all tokens
  tokens.forEach((token) => {
    const id = token.symbol?.toUpperCase() || token.id
    params.push({ type: 'token', id })
  })

  // Generate params for all networks
  networks.forEach((network) => {
    params.push({ type: 'network', id: network.id })
  })

  // Generate params for all wallets
  wallets.forEach((wallet) => {
    params.push({ type: 'wallet', id: wallet.id })
  })

  // Generate params for all exchanges
  exchanges.forEach((exchange) => {
    params.push({ type: 'exchange', id: exchange.id })
  })

  return params
}

export async function generateMetadata({
  params,
}: {
  params: { type: string; id: string }
}) {
  const { type, id } = params
  const metadata = findMetadata(type as TType, id)

  if (!metadata) {
    return {
      title: 'Icon Not Found',
      description: 'The requested icon could not be found.',
    }
  }

  const iconName =
    type === 'token'
      ? (metadata as ITokenMetadata).symbol?.toUpperCase() || metadata.name
      : metadata.name

  const typeLabel = type.charAt(0).toUpperCase() + type.slice(1)
  const title = `${iconName} ${typeLabel} Icon - Web3 Icons`
  const description = `${iconName} ${type} icon in SVG and React formats. Available in branded, mono, and background variants.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://web3icons.io/${type}/${id}`,
      type: 'website',
      images: [
        {
          url: 'https://web3icons.io/og-image.png',
          width: 1200,
          height: 630,
          alt: `${iconName} ${typeLabel} Icon`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://web3icons.io/og-image.png'],
    },
  }
}

export default function IconLayout({ children }: { children: React.ReactNode }) {
  return children
}
