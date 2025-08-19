import type { MDXComponents } from 'mdx/types'
import React from 'react'
import CodeBlock from './src/components/CodeBlock/CodeBlock'

function CustomCode(props: any) {
  return (
    <code
      className="rounded bg-gray-800 px-1 py-0.5 font-mono text-sm text-gray-200"
      {...props}
    />
  )
}

function CustomPre(props: any) {
  const { children, ...rest } = props

  if (
    React.isValidElement(children) &&
    (children as any).props?.className?.includes('language-')
  ) {
    const match = (children as any).props.className.match(/language-(\w+)/)
    const language = match ? match[1] : 'javascript'

    const codeContent =
      typeof (children as any).props.children === 'string'
        ? (children as any).props.children
        : String((children as any).props.children || '')

    const cleanContent = codeContent.replace(/\n$/, '')

    return (
      <CodeBlock
        tabs={[
          {
            label: language.charAt(0).toUpperCase() + language.slice(1),
            content: cleanContent,
            language: language as any,
          },
        ]}
        lineNumbers={true}
        as="span"
      />
    )
  }

  return <pre {...rest}>{children}</pre>
}

const components: MDXComponents = {
  code: CustomCode as any,
  pre: CustomPre as any,
}

export function useMDXComponents(): MDXComponents {
  return components
}
