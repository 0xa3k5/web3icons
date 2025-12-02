import React from 'react'
import { highlight, type Language } from '../../../components/codeblock/shiki'
import { LiveExampleClient } from './live-example-client'

interface Tab {
  label: string
  preview: React.ReactNode
  content: string
  language?: Language
}

interface Props {
  title?: string
  description?: string
  tabs: Tab[]
}

export async function LiveExample({ title, description, tabs }: Props) {
  const highlightedTabs = await Promise.all(
    tabs.map(async (tab) => {
      const { tokens } = await highlight(
        tab.content,
        tab.language || ('jsx' as Language),
      )
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
      }
    }),
  )

  const previews = tabs.map((tab) => tab.preview)

  return (
    <LiveExampleClient
      title={title}
      description={description}
      highlightedTabs={highlightedTabs}
      previews={previews}
    />
  )
}
