import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconRBIF = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.286 18.429h3.857V4.714h-.965c.138 3.712-.257 11.653-2.892 13.715m9.428 0h-3.857V4.714h.964c-.137 3.712.258 11.653 2.893 13.715"
          />
        </>
      ) : (
        <>
          <path
            fill="#0095F1"
            d="M7.286 18.429h3.857V4.714h-.964c.137 3.712-.257 11.653-2.893 13.715m9.429 0h-3.857V4.714h.964c-.137 3.712.257 11.653 2.893 13.715"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconRBIF.displayName = 'RBIF'
