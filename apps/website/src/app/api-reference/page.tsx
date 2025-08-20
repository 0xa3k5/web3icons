import { redirect } from 'next/navigation'
import { getEndpoints } from '../../lib/endpoints'

export default async function ApiReferencePage() {
  const endpointGroups = await getEndpoints()

  // Redirect to the first endpoint
  const firstEndpoint = endpointGroups[0]?.endpoints[0]
  if (firstEndpoint) {
    redirect(`/api-reference/${firstEndpoint.id}`)
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>No endpoints available</div>
    </div>
  )
}
