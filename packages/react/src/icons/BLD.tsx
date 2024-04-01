import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBLD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M3.429 10.286h3.428v3.428H3.43z" />
          <path
            fill="currentColor"
            d="M20.143 6.857H9.857v10.286h10.286zm-3.429 3.429h-3.428v3.428h3.428z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path fill="#BB2D40" d="M3.429 10.286h3.428v3.428H3.43z" />
          <path
            fill="#BB2D40"
            d="M20.143 6.857H9.857v10.286h10.286zm-3.429 3.429h-3.428v3.428h3.428z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBLD.displayName = 'BLD'
