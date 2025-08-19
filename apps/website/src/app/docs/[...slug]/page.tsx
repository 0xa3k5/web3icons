import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getDocData, getAllDocsPaths } from '../../../lib/docs'
import { useMDXComponents } from '../../../../mdx-components'

interface DocPageProps {
  params: { slug: string[] }
}

export function generateStaticParams() {
  const paths = getAllDocsPaths()
  return paths.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: DocPageProps) {
  const docData = getDocData(params.slug || [])

  if (!docData) {
    return {
      title: 'Page Not Found',
      description: 'This documentation page could not be found.',
    }
  }

  return {
    title: `${docData.metadata.title} - Web3 Icons`,
    description: docData.metadata.description,
  }
}

export default function DocPage({ params }: DocPageProps) {
  const docData = getDocData(params.slug || [])

  if (!docData) {
    notFound()
  }

  const components = useMDXComponents()

  return <MDXRemote source={docData.content} components={components} />
}
