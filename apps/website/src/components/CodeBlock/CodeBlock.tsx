'use client'
import React, { useEffect, useState } from 'react'
import { CopyButton } from '../copy-button'
import { highlight, type Language } from './shiki'
import Tabs from '../tabs'
import cx from 'classnames'

interface Tab {
  label: string
  content: string
  language: Language
}

interface Props {
  lineNumbers?: boolean
  tabs?: Tab[]
  classNames?: string
  wrap?: boolean
  as?: 'pre' | 'span'
  content?: string
  language?: Language
  label?: string
}

export default function CodeBlock({
  lineNumbers = true,
  tabs,
  classNames,
  wrap = false,
  as = 'pre',
  content,
  language,
  label,
}: Props): JSX.Element {
  const isSingleTab =
    !tabs || tabs.length === 0 || (tabs.length === 1 && !tabs[0]?.label)

  const singleTab: Tab = React.useMemo(
    () => ({
      label: label || '',
      content: content || '',
      language: language || 'text',
    }),
    [label, content, language],
  )

  const effectiveTabs = React.useMemo(
    () => (isSingleTab ? [singleTab] : tabs!),
    [isSingleTab, singleTab, tabs],
  )

  const [lines, setLines] = useState<{ content: string; style: any }[][]>([])
  const [activeTab, setActiveTab] = useState<Tab>(effectiveTabs[0]!)

  const handleTabChange = (label: string) => {
    const newActiveTab = effectiveTabs.find((tab) => tab.label === label)
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
  }, [activeTab])

  useEffect(() => {
    setActiveTab(effectiveTabs[0]!)
  }, [effectiveTabs])

  return (
    <div
      className={cx(
        classNames,
        `border-gray-lightest group relative flex w-full flex-col overflow-hidden rounded-lg border font-mono text-sm`,
      )}
    >
      {!isSingleTab && (
        <div className="border-gray-lightest bg-gray-darkest flex items-center justify-between border-b">
          <Tabs
            tabs={effectiveTabs.map((tab) => tab.label)}
            size="sm"
            onTabChange={handleTabChange}
            activeTab={activeTab.label}
            separator={false}
            slotAfter={
              <div className="mr-2">
                <CopyButton
                  onClick={() => {
                    navigator.clipboard.writeText(activeTab.content)
                  }}
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
            onClick={() => {
              navigator.clipboard.writeText(activeTab.content)
            }}
            tooltipPosition="bottom"
            className="rounded-sm p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </div>
      )}

      <div className="bg-gray-dark h-full overflow-auto p-4">
        {lines.map((line, index) => (
          <div key={index} className="flex">
            {lineNumbers ? (
              <span className="mr-4 flex w-4 shrink-0 select-none text-right text-white/20">
                {index + 1}
              </span>
            ) : null}
            {React.createElement(
              as,
              {
                'data-wrap': wrap,
                className: cx(
                  'flex-1 select-text',
                  'data-[wrap=true]:whitespace-pre-wrap data-[wrap=true]:break-words',
                  'data-[wrap=false]:whitespace-pre',
                ),
              },
              line.map((token, i) => (
                <span key={i} style={{ color: token.style.color }}>
                  {token.content}
                </span>
              )),
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
