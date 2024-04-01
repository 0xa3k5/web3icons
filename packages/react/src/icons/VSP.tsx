import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconVSP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 6.857H4.714l.86 2.571h2.308l3.26 9.429h2.572l4.286-12h-2.786L12.43 15z"
          />
        </>
      ) : (
        <>
          <path
            fill="#4138AB"
            d="M9.857 6.857H4.714l.859 2.571H7.88l3.261 9.429h2.572l4.286-12h-2.786L12.428 15z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVSP.displayName = 'VSP'
