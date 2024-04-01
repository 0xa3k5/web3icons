import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconVTHO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m7.286 13.286 3.483-9h4.661l-3.98 6.428h3.561l-7.28 9.857 3.038-7.285z"
          />
        </>
      ) : (
        <>
          <path
            fill="#C1CDDC"
            d="M17.572 4.286h-2.23l-5.108 7.053h1.603l-4.088 9.232 9.429-10.714h-3.995z"
          />
          <path
            fill="#2A5285"
            d="m7.286 13.286 3.483-9h4.662l-3.98 6.428h3.56l-7.28 9.857 3.039-7.285z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVTHO.displayName = 'VTHO'
