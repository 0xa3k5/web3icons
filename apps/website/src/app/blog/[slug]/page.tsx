import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { useMDXComponents } from '../../../../mdx-components'
import { getAllSlugs, getPostBySlug, BlogFrontmatter } from '../lib/blog'
import { LiveExample } from '../../docs/components/live-example'
import {
  TokenBTC,
  TokenETH,
  TokenSOL,
  TokenUSDC,
  NetworkEthereum,
  NetworkPolygon,
} from '@web3icons/react'
import {
  TokenIcon,
  NetworkIcon,
  WalletIcon,
  ExchangeIcon,
} from '@web3icons/react/dynamic'

const CONTENT_PATH = path.join(process.cwd(), 'src/app/blog/content')

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Not Found' }
  }

  const { frontmatter } = post

  return {
    title: `${frontmatter.title} — Web3 Icons`,
    description: frontmatter.description,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://web3icons.io/blog/${slug}`,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      tags: frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      creator: '@0xa3k5',
    },
    alternates: {
      canonical: `https://web3icons.io/blog/${slug}`,
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const filePath = path.join(CONTENT_PATH, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const source = fs.readFileSync(filePath, 'utf8')

  const components = useMDXComponents({
    LiveExample,
    TokenBTC,
    TokenETH,
    TokenSOL,
    TokenUSDC,
    NetworkEthereum,
    NetworkPolygon,
    TokenIcon,
    NetworkIcon,
    WalletIcon,
    ExchangeIcon,
  })

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
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
    <div key={slug} className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-12 sm:py-20">
      <div className="flex flex-col gap-6">
        <Link
          href="/blog"
          className="font-mono text-sm text-white/30 transition-colors hover:text-white/60"
        >
          ← back to blog
        </Link>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl tracking-wide sm:text-4xl">
            {frontmatter.title}
          </h1>
          <div className="flex items-center gap-3 font-mono text-sm text-white/30">
            <time dateTime={frontmatter.date}>
              {formatDate(frontmatter.date)}
            </time>
            <span>·</span>
            <a
              href="https://akml.io"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/60"
            >
              {frontmatter.author}
            </a>
          </div>
          <div className="flex gap-2">
            {frontmatter.tags?.map((tag: string) => (
              <span
                key={tag}
                className="bg-gray-lightest rounded px-2 py-0.5 font-mono text-xs text-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <article className="prose prose-invert max-w-none">{content}</article>

      <div className="border-gray-lightest flex flex-col gap-4 border-t pt-8">
        <p className="font-mono text-sm text-white/30">
          Want to use web3 icons in your project?
        </p>
        <div className="flex gap-4">
          <Link
            href="/docs/react/quick-start"
            className="bg-primary px-4 py-2 font-mono text-sm text-white transition-opacity hover:opacity-80"
          >
            get started
          </Link>
          <Link
            href="/"
            className="border-gray-lightest border px-4 py-2 font-mono text-sm text-white/60 transition-colors hover:text-white"
          >
            browse icons
          </Link>
        </div>
      </div>
    </div>
  )
}
