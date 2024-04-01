import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconML = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.571 5.571 2.572 1.08v10.762L5.57 18.428zM9 10.714l2.571 1.08v4.333L9 17.143zm9.428 7.714-2.571-1.08V6.587l2.571-1.016zM15 13.286l-2.572-1.08V7.873L15 6.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#11967F"
            d="m5.571 5.571 2.572 1.08v10.762L5.57 18.428zM9 10.714l2.571 1.08v4.333L9 17.143zm9.428 7.714-2.571-1.08V6.587l2.571-1.016zM15 13.286l-2.572-1.08V7.873L15 6.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconML.displayName = 'ML'
