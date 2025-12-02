import React from 'react'
import { highlight, type Language } from './shiki'
import { CodeBlockParts } from './codeblock.parts'
import cx from 'classnames'

interface Tab {
  label: string
  content: string
  language: Language
  message?: React.ReactNode
}

interface Props {
  lineNumbers?: boolean
  tabs: Tab[]
  classNames?: string
  wrap?: boolean
}

export async function CodeBlock({
  lineNumbers = true,
  tabs,
  classNames,
  wrap = false,
}: Props) {
  if (tabs.length === 0) {
    return null
  }

  const highlightedTabs = await Promise.all(
    tabs.map(async (tab) => {
      const { tokens } = await highlight(tab.content, tab.language)
      const lines = tokens.map((line) =>
        line.map((token) => ({
          content: token.content,
          color: token.color,
        })),
      )
      return {
        label: tab.label,
        content: tab.content,
        lines,
        message: tab.message,
      }
    }),
  )

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
