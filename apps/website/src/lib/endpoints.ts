import { parseOpenAPISpec, EndpointGroup } from '../utils/open-api-parser'

let cachedEndpoints: EndpointGroup[] | null = null

export async function getEndpoints(): Promise<EndpointGroup[]> {
  if (cachedEndpoints) {
    return cachedEndpoints
  }

  const API_URL = process.env.NEXT_PUBLIC_API_URL

  try {
    const response = await fetch(`${API_URL}/docs/openapi.json`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch OpenAPI spec: ${response.status}`)
    }

    const spec = await response.json()
    cachedEndpoints = parseOpenAPISpec(spec)
    return cachedEndpoints
  } catch (error) {
    console.error('Failed to load endpoints:', error)
    return []
  }
}

export async function getEndpointById(id: string) {
  const endpoints = await getEndpoints()
  const flatEndpoints = endpoints.flatMap((group) => group.endpoints)

  return flatEndpoints.find((endpoint) => endpoint.id === id)
}
