import { ReactNode } from 'react'
import { generateNavigation } from './lib/docs'
import { Sidebar } from './components'

interface DocsLayoutProps {
  children: ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const sidebarGroups = generateNavigation()

  return (
    <div className="mx-auto flex w-fit gap-16 py-16">
      <Sidebar groups={sidebarGroups} basePath="/docs" className="w-64" />
      {children}
    </div>
  )
}
