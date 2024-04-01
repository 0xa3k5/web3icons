import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDF = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.429 8.143H12a3.857 3.857 0 1 1 0 7.714h-.428V14.44h.184c1.556 0 2.816-1.132 2.816-2.508 0-1.37-1.26-2.502-2.816-2.502H7.714v7.285H6.43z"
          />
          <path
            fill="currentColor"
            d="M8.572 5.572h3.857a6.429 6.429 0 1 1 0 12.857H9v-7.715h1.286v6.429h2.143a5.143 5.143 0 0 0 0-10.286H8.572z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF9601"
            d="M6.429 8.143H12a3.857 3.857 0 1 1 0 7.714h-.428V14.44h.184c1.556 0 2.816-1.132 2.816-2.508 0-1.37-1.26-2.502-2.816-2.502H7.714v7.285H6.43z"
          />
          <path
            fill="#fff"
            d="M8.572 5.572h3.857a6.429 6.429 0 1 1 0 12.857H9v-7.715h1.286v6.429h2.143a5.143 5.143 0 0 0 0-10.286H8.572z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDF.displayName = 'DF'
