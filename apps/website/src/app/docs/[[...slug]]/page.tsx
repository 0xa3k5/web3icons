import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { useMDXComponents } from '../../../../mdx-components'
import * as docsComponents from '../components'
// Import web3icons components used in MDX
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

interface Frontmatter {
  title?: string
  description?: string
}

function getMdxPath(slug: string[]): string | null {
  // Try exact path first: /docs/react/api -> content/react/api.mdx
  const exactPath = path.join(CONTENT_PATH, ...slug) + '.mdx'
  if (fs.existsSync(exactPath)) {
    return exactPath
  }

  // Try index file: /docs/react -> content/react/index.mdx
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
      paths.push(...getAllMdxFiles(path.join(dir, entry.name), [...basePath, entry.name]))
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
    ...docsComponents,
    // web3icons components
    TokenBTC,
    TokenETH,
    TokenUSDC,
    NetworkEthereum,
    WalletMetamask,
    TokenIcon,
    NetworkIcon,
    WalletIcon,
    ExchangeIcon,
  }

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    components,
  })

  return (
    <article className="prose prose-invert max-w-none">
      {content}
    </article>
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
