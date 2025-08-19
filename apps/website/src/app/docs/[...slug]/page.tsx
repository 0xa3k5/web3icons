import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getDocData, getAllDocsPaths } from '../../../lib/docs'
import { useMDXComponents } from '../../../../mdx-components'
import remarkGfm from 'remark-gfm'

interface DocPageProps {
  params: { slug: string[] }
}

export async function generateStaticParams() {
  const paths = await getAllDocsPaths()
  return paths.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: DocPageProps) {
  const docData = await getDocData(params.slug || [])

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

export default async function DocPage({ params }: DocPageProps) {
  const docData = await getDocData(params.slug || [])

  if (!docData) {
    notFound()
  }

  const components = useMDXComponents()

  return (
    <MDXRemote
      source={docData.content}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  )
}
