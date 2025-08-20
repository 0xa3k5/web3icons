import { getEndpoints } from '../../lib/endpoints'
import { Sidebar, SidebarGroup } from '../../components/sidebar'

export default async function ApiReferenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const endpointGroups = await getEndpoints()

  const sidebarGroups: SidebarGroup[] = endpointGroups.map((group) => ({
    category: group.category,
    items: group.endpoints.map((endpoint) => ({
      id: endpoint.id,
      name: endpoint.name,
      href: `/api-reference/${endpoint.id}`,
    })),
  }))

  return (
    <div className="grid h-full w-full grid-cols-12 gap-2">
      <Sidebar
        groups={sidebarGroups}
        basePath="/api-reference"
        className="col-span-2"
      />
      {children}
    </div>
  )
}
