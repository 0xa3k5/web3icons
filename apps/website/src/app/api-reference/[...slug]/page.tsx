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

    console.log(
      'Generated static params for endpoints:',
      params.map((p) => p.slug.join('/')),
    )
    return params
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}

// Force dynamic for development
export const dynamic = 'force-dynamic'

export default async function EndpointPage({ params }: PageProps) {
  const endpointId = params.slug.join('/')

  console.log('Requested endpoint ID:', endpointId)
  console.log('Slug parts:', params.slug)

  const endpoint = await getEndpointById(endpointId)

  if (!endpoint) {
    // Debug: show what endpoints are available
    const allEndpoints = await getEndpoints()
    const allIds = allEndpoints.flatMap((g) => g.endpoints.map((e) => e.id))
    console.log('Available endpoint IDs:', allIds)
    console.log('Requested ID not found:', endpointId)
    notFound()
  }

  return <EndpointView endpoint={endpoint} />
}
