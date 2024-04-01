import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconRDT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.017 5.143 8.92 8.25l3.098 3.103 3.099-3.103zM7.813 9.592l-3.099 3.107 3.099 3.103 3.099-3.103zm5.276 3.107 3.098-3.107 3.099 3.107-3.099 3.103zM8.13 18l3.926-3.934L15.977 18z"
          />
        </>
      ) : (
        <>
          <path
            fill="#6601FF"
            d="M12.017 5.143 8.918 8.25l3.099 3.103 3.098-3.103zM7.812 9.592l-3.098 3.107 3.098 3.103 3.099-3.103zm5.276 3.107 3.099-3.107 3.098 3.107-3.098 3.103zM8.13 18l3.925-3.934L15.977 18z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconRDT.displayName = 'RDT'
