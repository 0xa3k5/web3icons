import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { useMDXComponents } from '../../../../mdx-components'
import {
  TableOfContents,
  type TOCItem,
  InstallTabs,
  LiveExample,
  IndividualReactIcons,
  DynamicReactIcons,
  SizeExample,
  DynamicTokenLookup,
  DynamicNetworkLookup,
  DynamicWalletLookup,
  DynamicExchangeLookup,
} from '../components'
import {
  TokenBTC,
  TokenETH,
  TokenUSDC,
  NetworkEthereum,
  WalletMetamask,
} from '@web3icons/react'
import {
  TokenIcon,
  NetworkIcon,
  WalletIcon,
  ExchangeIcon,
} from '@web3icons/react/dynamic'

const CONTENT_PATH = path.join(process.cwd(), 'src/app/docs/content')

function extractHeadings(source: string): TOCItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings: TOCItem[] = []
  let match

  while ((match = headingRegex.exec(source)) !== null) {
    const level = match[1]?.length || 0
    const text = match[2]?.trim() || ''
    // Generate slug matching rehype-slug behavior
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
    headings.push({ id, text, level })
  }

  return headings
}

interface Frontmatter {
  title?: string
  description?: string
}

function getMdxPath(slug: string[]): string | null {
  const exactPath = path.join(CONTENT_PATH, ...slug) + '.mdx'
  if (fs.existsSync(exactPath)) {
    return exactPath
  }

  const indexPath = path.join(CONTENT_PATH, ...slug, 'index.mdx')
  if (fs.existsSync(indexPath)) {
    return indexPath
  }

  return null
}

function getAllMdxFiles(dir: string, basePath: string[] = []): string[][] {
  const paths: string[][] = []

  if (!fs.existsSync(dir)) return paths

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isDirectory()) {
      paths.push(
        ...getAllMdxFiles(path.join(dir, entry.name), [
          ...basePath,
          entry.name,
        ]),
      )
    } else if (entry.name.endsWith('.mdx')) {
      const name = entry.name.replace('.mdx', '')
      if (name === 'index') {
        paths.push(basePath)
      } else {
        paths.push([...basePath, name])
      }
    }
  }

  return paths
}

export function generateStaticParams() {
  const paths = getAllMdxFiles(CONTENT_PATH)
  // Add empty slug for /docs root
  return [{ slug: undefined }, ...paths.map((slug) => ({ slug }))]
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug = ['home'] } = await params

  const mdxPath = getMdxPath(slug)
  if (!mdxPath) {
    notFound()
  }

  const source = fs.readFileSync(mdxPath, 'utf8')

  const components = {
    ...useMDXComponents({}),
    TokenBTC,
    TokenETH,
    TokenUSDC,
    NetworkEthereum,
    WalletMetamask,
    TokenIcon,
    NetworkIcon,
    WalletIcon,
    ExchangeIcon,
    InstallTabs,
    LiveExample,
    IndividualReactIcons,
    DynamicReactIcons,
    SizeExample,
    DynamicTokenLookup,
    DynamicNetworkLookup,
    DynamicWalletLookup,
    DynamicExchangeLookup,
  }

  const headings = extractHeadings(source)
  // Get relative path for GitHub edit link
  const relativePath = mdxPath.replace(process.cwd() + '/', '')

  const { content } = await compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
    components,
  })

  return (
    <>
      <article className="prose prose-invert min-w-0 flex-1">{content}</article>
      <aside className="sticky top-24 hidden h-fit w-48 shrink-0 xl:block xl:w-56">
        <TableOfContents
          headings={headings}
          githubPath={`apps/website/${relativePath}`}
          markdownSource={source}
        />
      </aside>
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug = ['home'] } = await params
  const mdxPath = getMdxPath(slug)

  if (!mdxPath) {
    return { title: 'Not Found' }
  }

  const source = fs.readFileSync(mdxPath, 'utf8')
  const { frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true },
  })

  return {
    title: frontmatter.title || slug[slug.length - 1],
    description: frontmatter.description,
  }
}
