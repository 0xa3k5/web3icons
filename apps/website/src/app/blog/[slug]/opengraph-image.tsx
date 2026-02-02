import { ImageResponse } from '@vercel/og'
import { getPostBySlug, getAllSlugs } from '../lib/blog'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getPostBySlug(slug)

  const [geistBold, geistRegular] = await Promise.all([
    fetch(
      'https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.0.3/files/geist-mono-latin-600-normal.woff',
    ).then((res) => res.arrayBuffer()),
    fetch(
      'https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.0.3/files/geist-mono-latin-400-normal.woff',
    ).then((res) => res.arrayBuffer()),
  ])

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#080808',
          color: '#fff',
          fontSize: 48,
          fontFamily: 'Geist Mono, monospace',
        }}
      >
        Post Not Found
      </div>,
      {
        ...size,
        fonts: [
          {
            name: 'Geist Mono',
            data: geistBold,
            weight: 600,
            style: 'normal',
          },
        ],
      },
    )
  }

  const { frontmatter } = post

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#080808',
        fontFamily: 'Geist Mono, monospace',
        padding: '80px',
        position: 'relative',
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
        }}
      >
        <hr
          style={{
            position: 'absolute',
            top: '80px',
            left: '0',
            width: '100%',
            height: '1px',
            opacity: 0.1,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '0',
            width: '100%',
            height: '1px',
            opacity: 0.1,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            top: '0',
            left: '80px',
            width: '1px',
            height: '100%',
            opacity: 0.1,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            top: '0',
            right: '80px',
            width: '1px',
            height: '100%',
            opacity: 0.1,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        />
      </div>

      {/* Top section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FF3D00',
              width: '4px',
              height: '32px',
            }}
          />
          <span
            style={{
              fontSize: '20px',
              color: '#FF3D00',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Web3 Icons Blog
          </span>
        </div>
        <h1
          style={{
            fontSize: frontmatter.title.length > 50 ? '44px' : '56px',
            fontWeight: 600,
            color: 'white',
            margin: 0,
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {frontmatter.title}
        </h1>
      </div>

      {/* Bottom section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <span style={{ fontSize: '20px', color: '#666' }}>
            {frontmatter.date}
          </span>
          <span style={{ fontSize: '20px', color: '#333' }}>·</span>
          <span style={{ fontSize: '20px', color: '#666' }}>
            {frontmatter.author}
          </span>
        </div>

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
          <span style={{ fontSize: '20px', color: '#666' }}>web3icons.io</span>
        </div>
      </div>
    </div>,
    {
      ...size,
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
