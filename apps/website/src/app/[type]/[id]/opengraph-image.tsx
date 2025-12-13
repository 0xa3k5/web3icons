import { ImageResponse } from '@vercel/og'
import {
  tokens,
  networks,
  wallets,
  exchanges,
  TMetadata,
  ITokenMetadata,
  TType,
  INetworkMetadata,
  TVariant,
} from '@web3icons/common'
import { fetchSvgContent } from '../../../utils/fetch-svg-content'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
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

export default async function Image({
  params,
}: {
  params: { type: string; id: string }
}) {
  const { type, id } = params
  const web3Type = type.slice(0, -1) as TType
  const metadata = findMetadata(web3Type, id)

  if (!metadata) {
    return new ImageResponse(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          color: '#fff',
          fontSize: 48,
        }}
      >
        Icon Not Found
      </div>,
      { ...size },
    )
  }

  // Load fonts
  const [geistBold, geistRegular] = await Promise.all([
    fetch(
      'https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.0.3/files/geist-mono-latin-600-normal.woff',
    ).then((res) => res.arrayBuffer()),
    fetch(
      'https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.0.3/files/geist-mono-latin-400-normal.woff',
    ).then((res) => res.arrayBuffer()),
  ])

  const iconName =
    web3Type === 'token'
      ? (metadata as ITokenMetadata).symbol?.toUpperCase()
      : web3Type === 'network'
        ? (metadata as INetworkMetadata).shortName
        : metadata.name

  const variantImages = await Promise.all(
    metadata.variants.map(async (variant) => {
      const { svg } = await fetchSvgContent({ metadata, variant })
      // Convert to data URI
      const encoded = encodeURIComponent(svg)
      return {
        variant,
        dataUrl: `data:image/svg+xml,${encoded}`,
      }
    }),
  )

  const displayVariants: {
    variant: TVariant
    dataUrl: string
  }[] = []
  const availableVariants = variantImages.filter((v) => v.dataUrl)
  const numVariants = availableVariants.length

  // create 5 rows × 3 columns
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 3; col++) {
      // diagonal pattern: each row shifts by 1
      const variantIndex = (col + row) % numVariants
      displayVariants.push(availableVariants[variantIndex]!)
    }
  }

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#09090b',
        fontFamily: 'Geist, system-ui, sans-serif',
        justifyContent: 'space-between',
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          height: '100%',
          position: 'relative',
        }}
      >
        <hr
          style={{
            position: 'absolute',
            top: '60px',
            left: '-20px',
            width: '800px',
            height: '1px',
            opacity: 0.2,
            backgroundImage:
              'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 20%, transparent 100%)',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            top: '134px',
            left: '-20px',
            width: '800px',
            height: '1px',
            opacity: 0.2,
            backgroundImage:
              'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 20%, transparent 100%)',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            top: '202px',
            left: '-20px',
            width: '800px',
            height: '1px',
            opacity: 0.2,
            backgroundImage:
              'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 20%, transparent 100%)',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            top: '-80px',
            left: '80px',
            width: '1px',
            height: '400px',
            opacity: 0.2,
            backgroundImage:
              'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            top: '-80px',
            left: '152px',
            width: '1px',
            height: '400px',
            opacity: 0.2,
            backgroundImage:
              'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            top: '-80px',
            left: '223px',
            width: '1px',
            height: '400px',
            opacity: 0.2,
            backgroundImage:
              'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            padding: '70px 0 0 82px',
            zIndex: 1,
            marginBottom: 'auto',
          }}
        >
          <img
            src={variantImages[0]!.dataUrl}
            style={{ width: 140, height: 140 }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '400px',
              gap: '8px',
              marginTop: '-12px',
            }}
          >
            <h1
              style={{
                fontSize: '50px',
                fontWeight: 600,
                color: 'white',
                margin: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontFamily: 'Geist Mono, monospace',
              }}
            >
              {iconName}
            </h1>
            <p
              style={{
                fontSize: '40px',
                fontWeight: 400,
                color: '#555',
                margin: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontFamily: 'Geist Mono, monospace',
              }}
            >
              {metadata.name}
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '0 0 70px 82px',
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: '32px',
              color: '#eee',
              margin: '0 0 4px 0',
            }}
          >
            SVG React Icon
          </p>
          <p
            style={{
              fontFamily: 'Geist Mono, monospace',
              fontSize: '28px',
              color: '#eee',
              margin: 0,
            }}
          >
            @web3icons/react
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.504 10.9687L34.9516 19.7118C35.7554 20.1982 35.7554 21.3643 34.9516 21.8507L20.504 30.5938C19.9076 30.9547 19.1312 30.758 18.7785 30.1566L13.652 21.4135C13.4231 21.0231 13.4231 20.5394 13.652 20.149L18.7785 11.4059C19.1312 10.8045 19.9076 10.6078 20.504 10.9687Z"
                fill="#FF3D00"
              />
              <path
                d="M3.66877 20.1186L15.2855 11.715C15.8317 11.3199 16.5302 11.9502 16.1931 12.534L11.7014 20.3125C11.5898 20.5059 11.5898 20.7441 11.7014 20.9375L16.1931 28.7161C16.5302 29.2998 15.8317 29.9301 15.2855 29.535L3.66877 21.1314C3.32387 20.8819 3.32387 20.3681 3.66877 20.1186Z"
                fill="#FF3D00"
              />
            </svg>

            <span style={{ fontSize: '24px', color: '#666' }}>
              web3icons.io
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
          width: '50%',
          height: '100%',
          gap: '16px',
          margin: 'auto',
          marginTop: '-48px',
        }}
      >
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: 'flex',
              width: '560px',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {/* spacer */}
            <div
              style={{
                width: '12.5%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
              }}
            />

            {Array.from({ length: 3 }).map((_, colIndex) => {
              // Get variant from displayVariants array
              const variantIndex = rowIndex * 3 + colIndex
              const variantDataUrl = displayVariants[variantIndex]?.dataUrl
              return (
                <div
                  key={colIndex}
                  style={{
                    width: '25%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRight: '1px solid #222',
                    borderBottom: '1px solid #222',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '128px',
                      height: '128px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                      border: '1px solid #3b82f6',
                    }}
                  >
                    {/* top-left handle */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-4px',
                        left: '-4px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'white',
                        border: '1px solid #3b82f6',
                      }}
                    />
                    {/* top-right handle */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-4px',
                        right: '-4px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'white',
                        border: '1px solid #3b82f6',
                      }}
                    />
                    {/* bottom-left handle */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: '-4px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'white',
                        border: '1px solid #3b82f6',
                      }}
                    />
                    {/* bottom-right handle */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        right: '-4px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'white',
                        border: '1px solid #3b82f6',
                      }}
                    />

                    <img src={variantDataUrl} width="80" height="80" />
                  </div>
                </div>
              )
            })}

            {/* spacer */}
            <div
              style={{
                width: '12.5%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
              }}
            />
          </div>
        ))}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist Mono',
          data: geistBold,
          weight: 600,
          style: 'normal',
        },
        {
          name: 'Geist Mono',
          data: geistRegular,
          weight: 400,
          style: 'normal',
        },
      ],
    },
  )
}
