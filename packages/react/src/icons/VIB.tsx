import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconVIB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.928 6.857H5.571l6.857 12h3v-12h-2.142v9.214z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF1E43"
            d="M7.928 6.857H5.571l6.857 12h3v-12h-2.142v9.214z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVIB.displayName = 'VIB'
