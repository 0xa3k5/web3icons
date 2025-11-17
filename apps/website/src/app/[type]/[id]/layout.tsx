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

  tokens.forEach((token) => {
    const id = token.symbol?.toUpperCase() || token.id
    params.push({ type: 'token', id })
  })

  networks.forEach((network) => {
    params.push({ type: 'network', id: network.id })
  })

  wallets.forEach((wallet) => {
    params.push({ type: 'wallet', id: wallet.id })
  })

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

export default function IconLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
