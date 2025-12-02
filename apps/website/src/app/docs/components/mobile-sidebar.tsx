'use client'

import { useState } from 'react'
import { SidebarContent, SidebarGroup } from './sidebar'

interface Props {
  groups: SidebarGroup[]
  basePath?: string
}

export function MobileSidebar({ groups, basePath = '' }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-5 z-50 text-white/60 transition-colors hover:text-white lg:hidden"
        aria-label="Open menu"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="size-6"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <nav
        data-open={isOpen}
        className={`bg-gray-darkest fixed inset-y-0 left-0 z-50 w-[80dvw] flex-col gap-2 overflow-y-auto p-4 lg:hidden ${isOpen ? 'flex' : 'hidden'}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/60 hover:text-white"
          aria-label="Close navigation"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="size-6"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <SidebarContent groups={groups} basePath={basePath} />
      </nav>
    </>
  )
}
