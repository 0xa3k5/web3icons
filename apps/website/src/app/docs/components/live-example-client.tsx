'use client'

import React, { useState } from 'react'
import {
  CodeBlockParts,
  type HighlightedTab,
} from '../../../components/codeblock/codeblock.parts'

interface Props {
  title?: string
  description?: string
  highlightedTabs: HighlightedTab[]
  previews: React.ReactNode[]
}

export const LiveExampleClient = ({
  title,
  description,
  highlightedTabs,
  previews,
}: Props) => {
  const [activeTab, setActiveTab] = useState(highlightedTabs[0]?.label ?? '')

  const activeIndex = Math.max(
    0,
    highlightedTabs.findIndex((t) => t.label === activeTab),
  )

  return (
    <div className="border-gray-lightest my-6 overflow-hidden rounded-lg border">
      {(title || description) && (
        <div className="border-gray-lightest bg-gray-darkest border-b px-4 py-3">
          {title && <h4 className="text-sm font-medium text-white">{title}</h4>}
          {description && (
            <p className="mt-1 text-sm text-white/60">{description}</p>
          )}
        </div>
      )}

      <div className="flex flex-col">
        <div className="bg-gray-darkest p-6">
          <div className="flex min-h-[100px] items-center justify-center">
            {previews[activeIndex]}
          </div>
        </div>

        <div className="not-prose border-gray-lightest group relative flex w-full flex-col overflow-hidden border-t font-mono text-sm">
          <CodeBlockParts
            tabs={highlightedTabs}
            lineNumbers={true}
            wrap={false}
            activeTabLabel={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>
    </div>
  )
}
