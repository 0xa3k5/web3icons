import { getEndpoints } from '../../lib/endpoints'
import { Sidebar } from './components/sidebar'

export default async function ApiReferenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const endpointGroups = await getEndpoints()

  return (
    <div className="grid h-full w-full grid-cols-12 gap-2">
      <Sidebar endpointGroups={endpointGroups} className="col-span-2" />
      {children}
    </div>
  )
}
