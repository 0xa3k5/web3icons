'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Fragment } from 'react'
import cx from 'classnames'

interface BreadcrumbProps {
  className?: string
  homeIcon?: boolean
  maxItems?: number
}

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb({ className }: BreadcrumbProps) {
  const pathname = usePathname()

  if (pathname === '/') {
    return null
  }

  const segments = pathname.split('/').filter(Boolean)
  const items: BreadcrumbItem[] = []

  segments.forEach((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')

    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    if (pathname.includes('v1')) {
      if (index === 0 || index === segments.length - 1) {
        items.push({
          label,
          href,
        })
        return
      }
      return
    }

    items.push({
      label,
      href,
    })
  })

  return (
    <nav
      className={cx('flex items-center gap-2 font-mono text-xs', className)}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <Fragment key={index}>
          <span className="text-white/40" aria-hidden="true">
            /
          </span>
          <Link
            data-active={pathname === item.href}
            href={item.href}
            className="text-white/40 transition-colors hover:text-white data-[active=true]:pointer-events-none data-[active=true]:text-white"
          >
            {item.label}
          </Link>
        </Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumb
