import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDOLA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.429 6h-2.323L6 17.143h6.429a5.572 5.572 0 0 0 0-11.143m0 1.286h-1.286l-3.214 8.571h4.5a4.286 4.286 0 1 0 0-8.571"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M13.071 5.143h1.762L9.904 18.857H8.143zm2.572 0h1.761l-4.928 13.714h-1.762z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFBB51"
            d="M12.429 6h-2.323L6 17.143h6.429a5.572 5.572 0 0 0 0-11.143m0 1.286h-1.286l-3.214 8.571h4.5a4.286 4.286 0 1 0 0-8.571"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#FFBB51"
            d="M13.071 5.143h1.762L9.904 18.857H8.143zm2.572 0h1.761l-4.928 13.714h-1.762z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDOLA.displayName = 'DOLA'
