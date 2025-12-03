'use client'

import React, { useEffect, useState } from 'react'
import { highlight, type Language } from './shiki'
import { CopyButton } from '../copy-button'
import { Tabs } from '../tabs'
import cx from 'classnames'

interface Token {
  content: string
  color?: string
}

export interface HighlightedTab {
  label: string
  content: string
  lines: Token[][]
  message?: React.ReactNode
}

interface CodeBlockPartsProps {
  tabs: HighlightedTab[]
  lineNumbers: boolean
  wrap: boolean
  activeTabLabel?: string
  onTabChange?: (label: string) => void
}

export const CodeBlockParts = ({
  tabs,
  lineNumbers,
  wrap,
  activeTabLabel,
  onTabChange,
}: CodeBlockPartsProps) => {
  const [internalIndex, setInternalIndex] = useState(0)
  const isControlled = activeTabLabel !== undefined

  const activeTabIndex = isControlled
    ? Math.max(
        0,
        tabs.findIndex((t) => t.label === activeTabLabel),
      )
    : internalIndex

  const isSingleTab = tabs.length === 1
  const activeTab = tabs[activeTabIndex]!

  const handleTabChange = (label: string) => {
    if (isControlled) {
      onTabChange?.(label)
    } else {
      const index = tabs.findIndex((tab) => tab.label === label)
      if (index !== -1) {
        setInternalIndex(index)
      }
    }
  }

  return (
    <>
      {!isSingleTab && (
        <div className="border-gray-lightest bg-gray-darkest flex items-center justify-between border-b">
          <Tabs
            tabs={tabs.map((tab) => ({ label: tab.label }))}
            size="sm"
            onTabChange={handleTabChange}
            activeTab={activeTab.label}
            separator={false}
            slotAfter={
              <div className="mr-2">
                <CopyButton
                  onClick={() =>
                    navigator.clipboard.writeText(activeTab.content)
                  }
                  tooltipPosition="bottom"
                  className="mt-1 rounded-sm p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </div>
            }
          />
        </div>
      )}

      {isSingleTab && (
        <div className="absolute right-2 top-3">
          <CopyButton
            onClick={() => navigator.clipboard.writeText(activeTab.content)}
            tooltipPosition="bottom"
            className="rounded-sm p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </div>
      )}

      <div className="bg-gray-dark h-full overflow-auto p-4">
        {activeTab.lines.map((line, index) => (
          <div key={index} className="flex">
            {lineNumbers && (
              <span className="mr-4 flex w-4 shrink-0 select-none text-right text-white/20">
                {index + 1}
              </span>
            )}
            <pre
              data-wrap={wrap}
              className={cx(
                'flex-1 select-text',
                'data-[wrap=true]:whitespace-pre-wrap data-[wrap=true]:break-words',
                'no-scrollbar whitespace-pre',
              )}
            >
              {line.map((token, i) => (
                <span key={i} style={{ color: token.color }}>
                  {token.content}
                </span>
              ))}
            </pre>
          </div>
        ))}
      </div>

      {activeTab.message && (
        <div className="border border-blue-500/20 bg-blue-500/50 p-4">
          <p className="text-white">{activeTab.message}</p>
        </div>
      )}
    </>
  )
}

interface Tab {
  label: string
  content: string
  language: Language
  message?: React.ReactNode
}

interface CodeBlockProps {
  lineNumbers?: boolean
  tabs: Tab[]
  classNames?: string
  wrap?: boolean
}

export function CodeBlock({
  lineNumbers = true,
  tabs,
  classNames,
  wrap = false,
}: CodeBlockProps) {
  const [highlightedTabs, setHighlightedTabs] = useState<HighlightedTab[]>(() =>
    tabs.map((tab) => ({
      label: tab.label,
      content: tab.content || '',
      lines: (tab.content || '').split('\n').map((line) => [{ content: line }]),
      message: tab.message,
    })),
  )

  useEffect(() => {
    let cancelled = false

    async function highlightTabs() {
      const results = await Promise.all(
        tabs.map(async (tab) => {
          const content = tab.content || ''
          const { tokens } = await highlight(content, tab.language)
          const lines = tokens.map((line) =>
            line.map((token) => ({
              content: token.content,
              color: token.color,
            })),
          )
          return {
            label: tab.label,
            content,
            lines,
            message: tab.message,
          }
        }),
      )

      if (!cancelled) {
        setHighlightedTabs(results)
      }
    }

    highlightTabs()

    return () => {
      cancelled = true
    }
  }, [tabs])

  if (tabs.length === 0) {
    return null
  }

  return (
    <div
      className={cx(
        classNames,
        'not-prose border-gray-lightest group relative flex w-full flex-col overflow-hidden rounded-lg border font-mono text-xs',
      )}
    >
      <CodeBlockParts
        tabs={highlightedTabs}
        lineNumbers={lineNumbers}
        wrap={wrap}
      />
    </div>
  )
}
