import { createElement, forwardRef } from 'react'
import { BaseIcon } from './BaseIcon'
import { IconComponentProps } from './types'
import type { IconNode, TIconVariants } from '@web3icons/common'

/**
 * factory function to create icon components from data structures.
 *
 * @param name - component display name
 * @param variants - icon data for each variant (branded/mono/background)
 * @returns react component with forwardRef support
 */
export const createWeb3Icon = (name: string, variants: TIconVariants) => {
  const availableVariants = Object.keys(variants) as Array<keyof TIconVariants>
  const defaultVariant = availableVariants[0]

  if (!defaultVariant) {
    throw new Error(`Icon "${name}" must have at least one variant`)
  }

  const Component = forwardRef<SVGSVGElement, IconComponentProps>(
    ({ variant = defaultVariant, fallback, ...props }, ref) => {
      const iconData = variants[variant as keyof TIconVariants]

      if (!iconData) {
        console.warn(
          `Icon "${name}" does not have variant "${variant}". ` +
            `Available variants: ${availableVariants.join(', ')}`,
        )
        return null
      }

      return createElement(
        BaseIcon,
        { fallback, ...props, ref },
        renderIconNode(iconData),
      )
    },
  )

  Component.displayName = name
  return Component
}

/**
 * recursively render IconNode data structure to react elements.
 *
 * @param nodes array of IconNode elements to render
 * @returns array of react elements
 */
function renderIconNode(nodes: IconNode): React.ReactNode[] {
  return nodes.map((node, index) => {
    const [element, attrs, children] = node
    const { style, ...restAttrs } = attrs || {}

    const elementProps = {
      key: index,
      ...restAttrs,
      ...(style && { style }),
    }

    // check if this is a 3-element tuple with children (element, attributes, children)
    const childElements = children ? renderIconNode(children) : undefined

    return createElement(element, elementProps, childElements)
  })
}
