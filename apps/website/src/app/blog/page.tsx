import { Metadata } from 'next'
import { getAllPosts } from './lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Web3 Icons',
  description:
    'Guides, tutorials, and insights on using crypto icons, building web3 UIs, and design systems for decentralized applications.',
  openGraph: {
    title: 'Blog — Web3 Icons',
    description:
      'Guides, tutorials, and insights on using crypto icons, building web3 UIs, and design systems for decentralized applications.',
    url: 'https://web3icons.io/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Web3 Icons',
    description:
      'Guides, tutorials, and insights on using crypto icons, building web3 UIs, and design systems for decentralized applications.',
  },
  alternates: {
    canonical: 'https://web3icons.io/blog',
  },
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12 px-4 py-12 sm:py-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl tracking-widest">blog</h1>
        <p className="font-mono text-white/40">
          Guides, tutorials, and insights on crypto icons, web3 UI design, and
          building better decentralized applications.
        </p>
      </div>

      <div className="flex flex-col gap-0">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border-gray-lightest group flex flex-col gap-2 border-b py-8 transition-colors first:border-t"
          >
            <div className="flex items-center gap-3 font-mono text-xs text-white/30">
              <time dateTime={post.frontmatter.date}>
                {formatDate(post.frontmatter.date)}
              </time>
              <span>·</span>
              <span>{post.frontmatter.author}</span>
            </div>
            <h2 className="text-xl text-white transition-colors group-hover:text-white/80">
              {post.frontmatter.title}
            </h2>
            <p className="text-sm text-white/40">
              {post.frontmatter.description}
            </p>
            <div className="mt-1 flex gap-2">
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-lightest rounded px-2 py-0.5 font-mono text-xs text-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
