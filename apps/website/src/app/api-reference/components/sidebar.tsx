'use client'
import cx from 'classnames'
import Link from 'next/link'
import { EndpointGroup } from '../../../utils/open-api-parser'
import { usePathname } from 'next/navigation'

interface Props {
  endpointGroups: EndpointGroup[]
  className?: string
}

export function Sidebar({ endpointGroups, className }: Props) {
  const pathname = usePathname()
  const selectedEndpoint = pathname?.replace('/api-reference/', '')

  return (
    <div className={cx('border-gray-lightest border-r', className)}>
      <div className="sticky top-0 p-6">
        <h1 className="mb-6 text-xl">API Reference</h1>
        <nav className="flex flex-col gap-4">
          {endpointGroups.map((group) => (
            <div key={group.category} className="flex flex-col gap-1">
              <h3 className="mb-2 font-mono text-sm text-white/60">
                {group.category}
              </h3>
              {group.endpoints.map((endpoint) => (
                <Link
                  key={endpoint.id}
                  href={`/api-reference/${endpoint.id}`}
                  data-selected={selectedEndpoint === endpoint.id}
                  // prettier-ignore
                  className={`
                    block w-full px-3 py-2 text-sm transition-colors text-left
                    text-white/60 hover:text-white
                    data-[selected=true]:border-l 
                    data-[selected=true]:border-primary 
                    data-[selected=true]:text-white
                    `}
                >
                  {endpoint.name}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
