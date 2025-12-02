'use client'
import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface SidebarItem {
  id: string
  name: string
  href: string
}

export interface SidebarGroup {
  category: string
  items: SidebarItem[]
}

interface Props {
  groups: SidebarGroup[]
  className?: string
  basePath?: string
}

export function Sidebar({ groups, className, basePath = '' }: Props) {
  const pathname = usePathname()
  const selectedItem = pathname?.replace(basePath, '').replace(/^\//, '')

  return (
    <div className={cx('border-gray-lightest border-r', className)}>
      <nav className="divide-gray-lightest sticky top-0 flex flex-col gap-2 divide-y">
        {groups.map((group) => (
          <div key={group.category} className="flex flex-col py-2">
            {group.category && (
              <h3 className="mb-2 px-3 font-mono text-sm capitalize text-white">
                {group.category}
              </h3>
            )}
            {group.items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                data-selected={
                  selectedItem === item.id || pathname === item.href
                }
                className={cx(
                  'w-full px-3 py-2 text-sm transition-colors',
                  'hover:bg-gray-light text-white/60 hover:text-white',
                  'data-[selected=true]:border-l',
                  'data-[selected=true]:border-primary',
                  'data-[selected=true]:text-white',
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  )
}
