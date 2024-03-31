import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconGMPD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.714 8.143H7.033L3 9.43h6.18l-2.871 6.857h10.285l1.972-4.714h-5.949l-.54 1.285h4.487l-.9 2.143h-7.35l2.332-5.571h8.528z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFB800"
            d="M19.714 8.143H7.033L3 9.43h6.18l-2.871 6.857h10.285l1.972-4.714h-5.949l-.54 1.285h4.487l-.9 2.143h-7.35l2.332-5.571h8.528z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGMPD.displayName = 'GMPD'
