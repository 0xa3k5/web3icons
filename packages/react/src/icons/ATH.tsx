import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconATH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15 19.286h-1.937L12 6.947l-1.063 12.339H9l1.757-14.572h2.49z"
          />
        </>
      ) : (
        <>
          <path
            fill="#EA6E25"
            d="M15 19.286h-1.937L12 6.947l-1.063 12.339H9l1.757-14.572h2.49z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconATH.displayName = 'ATH'
