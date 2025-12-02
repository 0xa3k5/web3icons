import { ReactNode } from 'react'
import { generateNavigation } from './lib/docs'
import { Sidebar } from './components'
import cx from 'classnames'

interface DocsLayoutProps {
  children: ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const sidebarGroups = generateNavigation()

  return (
    <div className="grid h-full w-full grid-cols-12 gap-2">
      <Sidebar groups={sidebarGroups} basePath="/docs" className="col-span-2" />
      <main className="col-span-10 min-w-0">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className={cx('prose prose-invert max-w-none')}>
            {children}
          </article>
        </div>
      </main>
    </div>
  )
}
