import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: false,
  },
  async redirects() {
    return [
      {
        source: '/docs/react',
        destination: '/docs/react/quick-start',
        permanent: false,
      },
      {
        source: '/docs/core',
        destination: '/docs/core/quick-start',
        permanent: false,
      },
      {
        source: '/docs/common',
        destination: '/docs/common/quick-start',
        permanent: false,
      },
      {
        source: '/docs/guides',
        destination: '/docs/guides/nextjs',
        permanent: false,
      },
    ]
  },
}

export default withMDX(nextConfig)
