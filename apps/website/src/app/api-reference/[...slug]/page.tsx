import { notFound } from 'next/navigation'
import { getEndpointById, getEndpoints } from '../../../lib/endpoints'
import { EndpointView } from '../components/endpoint-view'

interface PageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  try {
    const endpointGroups = await getEndpoints()
    const params = []

    for (const group of endpointGroups) {
      for (const endpoint of group.endpoints) {
        params.push({
          slug: endpoint.id.split('/'),
        })
      }
    }

    return params
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}

export const dynamic = 'force-dynamic'

export default async function EndpointPage({ params }: PageProps) {
  const endpointId = params.slug.join('/')

  const endpoint = await getEndpointById(endpointId)

  if (!endpoint) {
    notFound()
  }

  return <EndpointView endpoint={endpoint} />
}
