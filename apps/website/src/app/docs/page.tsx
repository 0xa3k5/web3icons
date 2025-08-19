import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getDocData } from '../../lib/docs'
import { useMDXComponents } from '../../../mdx-components'

export const metadata = {
  title: 'Web3 Icons Documentation',
  description:
    'Comprehensive guide to using Web3 Icons - the most complete library of crypto icons for tokens, networks, wallets, and exchanges',
}

export default function DocsPage() {
  const docData = getDocData([])

  if (!docData) {
    notFound()
  }

  const components = useMDXComponents()

  return (
    <article className="prose prose-invert prose-headings:underline max-w-none">
      <MDXRemote source={docData.content} components={components} />
    </article>
  )
}
