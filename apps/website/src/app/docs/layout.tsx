import { ReactNode } from 'react'
import { generateNavigation } from './lib/docs'
import { Sidebar, MobileSidebar } from './components'

interface DocsLayoutProps {
  children: ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const sidebarGroups = generateNavigation()

  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 lg:gap-16 lg:py-16">
      <Sidebar groups={sidebarGroups} basePath="/docs" />
      <MobileSidebar groups={sidebarGroups} basePath="/docs" />
      {children}
    </div>
  )
}
