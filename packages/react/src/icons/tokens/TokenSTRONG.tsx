import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSTRONG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.286 7.286 0 1 1-14.572 0 7.286 7.286 0 0 1 14.572 0m-.857 0A6.429 6.429 0 1 1 5.57 12a6.429 6.429 0 0 1 12.858 0m-4.837-4.286 2.694 2.015v.128H9.857V12h3.857v1.716h-6V7.714zm-3.306 2.572h6v6h-5.912l-2.66-1.99v-.151h6.429v-2.573h-3.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#1668B0"
            d="M19.285 12a7.286 7.286 0 1 1-14.571 0 7.286 7.286 0 0 1 14.571 0m-.857 0a6.429 6.429 0 1 1-12.857 0 6.429 6.429 0 0 1 12.857 0m-4.836-4.286 2.693 2.015v.128H9.857V12h3.857v1.716h-6V7.714zm-3.307 2.572h6v6h-5.911l-2.66-1.99v-.151h6.428v-2.573h-3.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenSTRONG.displayName = 'STRONG'
