'use client'
import { useEffect, useState } from 'react'
import { CopyButton } from '../buttons'
import { highlight, type Language } from '.'
import Tabs from '../tabs'
import cx from 'classnames'

interface Tab {
  label: string
  content: string
  language: Language
}

interface Props {
  lineNumbers?: boolean
  tabs: Tab[]
  classNames?: string
  wrap?: boolean
}

export default function CodeBlock({
  lineNumbers = true,
  tabs,
  classNames,
  wrap = false,
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
    <div
      className={cx(
        classNames,
        `border-gray-lightest group flex w-full flex-col overflow-hidden rounded-lg border font-mono text-sm`,
      )}
    >
      <div className="border-gray-lightest bg-gray-darkest flex items-center justify-between border-b">
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

      <div className="bg-gray-dark h-full overflow-scroll p-4">
        {lines.map((line, index) => (
          <div key={index} className="flex">
            {lineNumbers ? (
              <span className="mr-4 flex w-4 shrink-0 select-none text-right text-white/20">
                {index + 1}
              </span>
            ) : null}
            <pre
              data-wrap={wrap}
              className={cx(
                'flex-1 select-text',
                'data-[wrap=true]:whitespace-pre-wrap data-[wrap=true]:break-words',
                'data-[wrap=false]:whitespace-pre',
              )}
            >
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
