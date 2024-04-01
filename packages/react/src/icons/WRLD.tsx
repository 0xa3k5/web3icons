import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconWRLD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12 6.857-8.143 3.429v3.428L12 17.143l8.143-3.429v-3.428zm0 1.286L18.857 11 12 14.143 5.143 11z"
          />
        </>
      ) : (
        <>
          <path
            fill="#03F"
            d="m12 6.857-8.143 3.429v3.428L12 17.143l8.143-3.429v-3.428zm0 1.286L18.857 11 12 14.143 5.143 11z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWRLD.displayName = 'WRLD'
