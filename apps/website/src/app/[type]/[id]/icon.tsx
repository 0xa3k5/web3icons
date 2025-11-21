import { ImageResponse } from '@vercel/og'
import {
  tokens,
  networks,
  wallets,
  exchanges,
  TMetadata,
  ITokenMetadata,
  TType,
} from '@web3icons/common'
import { fetchSvgContent } from '../../../utils/fetch-svg-content'

export const runtime = 'edge'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

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

export default async function Icon({
  params,
}: {
  params: { type: string; id: string }
}) {
  const { type, id } = params
  const web3Type = type.slice(0, -1) as TType
  const metadata = findMetadata(web3Type, id)

  if (!metadata) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000',
          }}
        />
      ),
      { ...size },
    )
  }

  const variant = metadata.variants.includes('branded') ? 'branded' : 'mono'
  const { svg: svgContent } = await fetchSvgContent({ metadata, variant })

  if (!svgContent) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000',
          }}
        />
      ),
      { ...size },
    )
  }

  const base64 = btoa(svgContent)
  const svgDataUrl = `data:image/svg+xml;base64,${base64}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
        }}
      >
        <img
          src={svgDataUrl}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </div>
    ),
    { ...size },
  )
}
