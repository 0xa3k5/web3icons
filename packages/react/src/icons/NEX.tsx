import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconNEX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6.857 17.242 3.857 1.002v-7.688c0-.54.386-1.277 1.089-1.23.707.051 1.054.553 1.054 1.007v8.173l3.857.78V7.47c.03-2.258-1.097-2.756-1.971-2.756-2.957 0-3.485 2.829-3.523 4.132h-.506V5.944L6.857 7.06z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFF600"
            d="m6.857 17.242 3.858 1.002v-7.688c0-.54.385-1.277 1.088-1.23.707.051 1.054.553 1.054 1.007v8.173l3.858.78V7.47c.03-2.258-1.098-2.756-1.972-2.756-2.957 0-3.484 2.829-3.523 4.132h-.505V5.944L6.857 7.06z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNEX.displayName = 'NEX'
