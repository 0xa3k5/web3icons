'use client'
import { useEffect, useState } from 'react'
import { CopyButton } from '../buttons'
import { highlight, type Language } from '.'
import Tabs from '../Tabs'

interface Tab {
  label: string
  content: string
  language: Language
}

interface Props {
  lineNumbers?: boolean
  tabs: Tab[]
}

export default function CodeBlock({
  lineNumbers = true,
  tabs,
}: Props): JSX.Element {
  const [lines, setLines] = useState<{ content: string; style: any }[][]>([])
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]!)

  const handleTabChange = (label: string) => {
    const newActiveTab = tabs.find((tab) => tab.label === label)
    if (newActiveTab) {
      setActiveTab(newActiveTab)
    }
  }

  useEffect(() => {
    const loadHighlighter = async () => {
      const { content, language } = activeTab
      const { tokens } = await highlight(content, language)

      const formattedLines = tokens.map((line) =>
        line.map((token) => ({
          content: token.content,
          style: { color: token.color },
        })),
      )
      setLines(formattedLines)
    }

    loadHighlighter()
  }, [activeTab, tabs])

  useEffect(() => {
    setActiveTab(tabs[0]!)
  }, [tabs])

  return (
    <div className="group flex w-full flex-col overflow-hidden rounded-lg border border-gray-lightest font-mono text-sm">
      <div className="flex items-center justify-between border-b border-gray-lightest bg-gray-darkest">
        <Tabs
          tabs={tabs.map((tab) => tab.label)}
          size="sm"
          onTabChange={handleTabChange}
          activeTab={activeTab.label}
          separator={false}
          slotAfter={
            <CopyButton
              onClick={() => {
                navigator.clipboard.writeText(activeTab.content)
              }}
              tooltipPosition="bottom"
              className="mr-2 rounded-sm p-2"
            />
          }
        />
      </div>

      <div className="h-full max-h-64 overflow-scroll bg-gray-dark p-4">
        {lines.map((line, index) => (
          <div key={index} className="flex">
            {lineNumbers ? (
              <span className="mr-4 flex w-4 shrink-0 select-none justify-end text-right text-white/20">
                {index + 1}
              </span>
            ) : null}
            <pre className="flex-1 select-text">
              {line.map((token, i) => (
                <span key={i} style={{ color: token.style.color }}>
                  {token.content}
                </span>
              ))}
            </pre>
          </div>
        ))}
      </div>
    </div>
  )
}
