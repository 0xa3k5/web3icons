'use client'
import { useEffect, useState } from 'react'
import { CopyButton } from '../buttons'
import { highlight, type Language } from '.'

type Props = {
  code: string
  language: Language
  lineNumbers?: boolean
  title: string
}

export default function CodeBlock({
  code,
  language,
  lineNumbers = true,
  title,
}: Props): JSX.Element {
  const [lines, setLines] = useState<{ content: string; style: any }[][]>([])

  useEffect(() => {
    const loadHighlighter = async () => {
      const { tokens } = await highlight(code, language)

      const formattedLines = tokens.map((line) =>
        line.map((token) => ({
          content: token.content,
          style: { color: token.color },
        })),
      )
      setLines(formattedLines)
    }

    loadHighlighter()
  }, [code, language])

  return (
    <div className="group flex w-full flex-col overflow-hidden rounded-lg border border-gray-lightest bg-gray-dark font-mono text-sm">
      <div className="sticky top-0 flex w-full items-center justify-between border-b border-gray-lightest bg-gray-darker px-4 py-2">
        <span>{title}</span>
        <span className="opacity-0 duration-150 group-hover:opacity-100">
          <CopyButton copyContent={code} tooltipPosition="bottom" />
        </span>
      </div>
      <div className="h-full max-h-64 overflow-scroll p-4">
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
