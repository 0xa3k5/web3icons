import type { MDXComponents } from 'mdx/types'
import React from 'react'
import { CodeBlock } from './src/components/codeblock/codeblock'
import type { Language } from './src/components/codeblock/shiki'

// Extract code content and language from MDX's pre > code structure
function extractCodeFromPre(children: React.ReactNode): {
  content: string
  language: Language
} {
  // MDX wraps code blocks as: <pre><code className="language-xxx">content</code></pre>
  // The type can be 'code' string OR our custom code component function
  if (React.isValidElement(children)) {
    const element = children as React.ReactElement<{
      className?: string
      children?: React.ReactNode
    }>
    const className = element.props.className || ''
    const langMatch = className.match(/language-(\w+)/)
    const language = (langMatch?.[1] || 'text') as Language
    const content = extractTextContent(element.props.children).trim()
    return { content, language }
  }

  // Fallback
  return { content: extractTextContent(children), language: 'text' }
}

function extractTextContent(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(extractTextContent).join('')
  if (React.isValidElement(node)) {
    return extractTextContent(
      (node.props as { children?: React.ReactNode }).children,
    )
  }
  return ''
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <a
        {...props}
        className="hover:text-primary text-white/60 transition-colors"
      />
    ),
    table: (props) => (
      <div className="my-6 overflow-x-auto">
        <table
          className="divide-gray-lightest border-gray-lightest min-w-full divide-y border"
          {...props}
        />
      </div>
    ),
    thead: (props) => <thead className="bg-gray-dark" {...props} />,
    tbody: (props) => <tbody className="divide-y divide-gray-700" {...props} />,
    tr: (props) => (
      <tr
        className="hover:bg-gray-lightest border-gray-lightest border-b"
        {...props}
      />
    ),
    th: (props) => (
      <th
        className="px-4 py-3 text-left font-mono text-xs capitalize text-white/80"
        {...props}
      />
    ),
    td: (props) => <td className="px-4 py-3 text-sm text-white/60" {...props} />,
    pre: ({ children }) => {
      const { content, language } = extractCodeFromPre(children)
      return (
        <CodeBlock
          tabs={[{ label: 'Code', content, language }]}
          lineNumbers={true}
        />
      )
    },
    code: ({ children, className, ...props }) => {
      // If it has a language class, it's inside a pre block - let pre handle it
      if (className?.includes('language-')) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
      // Inline code
      return (
        <code
          className="bg-primary/10 text-primary border-primary/20 rounded border px-1.5 py-0.5 font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      )
    },
    blockquote: (props) => <blockquote className="border-l-primary/20 border-l-2 pl-4" {...props} />,
    ...components,
  }
}
