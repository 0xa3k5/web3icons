import type { MDXComponents } from 'mdx/types'
import React from 'react'
import CodeBlock from './src/components/CodeBlock/CodeBlock'
import NextLink from 'next/link'

const extractCodeContent = (
  children: any,
): { content: string; language: string } => {
  if (
    React.isValidElement(children) &&
    (children as any).props?.className?.includes('language-')
  ) {
    const match = (children as any).props.className.match(/language-(\w+)/)
    const language = match ? match[1] : 'text'
    const content =
      typeof (children as any).props.children === 'string'
        ? (children as any).props.children
        : String((children as any).props.children || '')
    return { content: content.replace(/\n$/, ''), language }
  }
  return { content: '', language: 'text' }
}

const Code = (props: any) => {
  return (
    <code
      className="bg-gray-dark rounded px-1 py-0.5 font-mono text-sm text-gray-200"
      {...props}
    />
  )
}

const Pre = (props: any) => {
  const { children, ...rest } = props
  const { content, language } = extractCodeContent(children)

  if (!content) {
    return <pre {...rest}>{children}</pre>
  }

  return (
    <CodeBlock
      content={content}
      language={language as any}
      lineNumbers={false}
      as="span"
    />
  )
}

const Link = (props: any) => {
  return (
    <NextLink
      {...props}
      className="hover:text-primary text-white/60 transition-colors"
    />
  )
}

const Table = (props: any) => {
  return (
    <div className="my-6 overflow-x-auto">
      <table
        className="divide-gray-lightest border-gray-lightest min-w-full divide-y border"
        {...props}
      />
    </div>
  )
}

const TableHead = (props: any) => {
  return <thead className="bg-gray-dark" {...props} />
}

const TableRow = (props: any) => {
  return (
    <tr
      className="hover:bg-gray-lightest border-gray-lightest border-b"
      {...props}
    />
  )
}

const TableHeader = (props: any) => {
  return (
    <th
      className="px-4 py-3 text-left font-mono text-xs text-white/80 capitalize"
      {...props}
    />
  )
}

const TableCell = (props: any) => {
  return <td className="px-4 py-3 text-sm text-white/60" {...props} />
}

const TableBody = (props: any) => {
  return <tbody className="divide-y divide-gray-700" {...props} />
}

const components: MDXComponents = {
  code: Code as any,
  pre: Pre as any,
  a: Link as any,
  table: Table as any,
  thead: TableHead as any,
  tbody: TableBody as any,
  tr: TableRow as any,
  th: TableHeader as any,
  td: TableCell as any,
  CodeBlock: CodeBlock as any,
}

export function useMDXComponents(): MDXComponents {
  return components
}
