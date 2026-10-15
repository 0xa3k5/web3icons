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
  // Force next-mdx-remote into the server bundle. When Next externalizes it,
  // its jsx-runtime.cjs shim require()s react/jsx-runtime from node_modules
  // (React 18) at runtime, while the App Router renders with Next's vendored
  // React 19 — the resulting element-symbol mismatch breaks prerendering of
  // MDX pages with "A React Element from an older version of React was
  // rendered." Bundling it lets webpack alias the shim's require to the
  // vendored React runtime.
  transpilePackages: ['next-mdx-remote'],
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
