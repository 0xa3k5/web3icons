import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconAIRI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.493 12.857a5.58 5.58 0 0 0 4.65 4.659v1.77a7.34 7.34 0 0 1-6.429-6.429zm4.65-6.373a5.58 5.58 0 0 0-4.65 4.659H4.714a7.34 7.34 0 0 1 6.429-6.429zm6.364 4.659a5.575 5.575 0 0 0-4.65-4.659v-1.77a7.34 7.34 0 0 1 6.429 6.429zm-4.65 6.373a5.58 5.58 0 0 0 4.65-4.659h1.779a7.34 7.34 0 0 1-6.429 6.429zm-2.151-2.944H8.104L9.407 12h2.439l-1.136-1.984L12 7.714l3.9 6.858h-2.584l-1.389-2.422z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M6.492 12.857a5.58 5.58 0 0 0 4.65 4.659v1.77a7.34 7.34 0 0 1-6.428-6.429zm4.65-6.373a5.58 5.58 0 0 0-4.65 4.659H4.714a7.34 7.34 0 0 1 6.428-6.429zm6.365 4.659a5.575 5.575 0 0 0-4.65-4.659v-1.77a7.34 7.34 0 0 1 6.428 6.429zm-4.65 6.373a5.58 5.58 0 0 0 4.65-4.659h1.778a7.34 7.34 0 0 1-6.428 6.429zm-2.152-2.944H8.104L9.407 12h2.438l-1.135-1.984L12 7.714l3.9 6.858h-2.585l-1.388-2.422z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAIRI.displayName = 'AIRI'
