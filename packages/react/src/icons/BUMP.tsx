import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconBUMP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.93 5.143-1.359 6h9.12c.386-.42 1.166-1.611 1.166-3.043 0-2.434-2.04-2.983-3.06-2.957zm5.944 7.286H6.917l-1.346 6h5.64c2.233 0 5.075-1.706 5.075-4.672a2 2 0 0 0-.412-1.328"
          />
        </>
      ) : (
        <>
          <path
            fill="#FA7438"
            d="m9.93 5.143-1.359 6h9.12c.386-.42 1.166-1.611 1.166-3.043 0-2.434-2.04-2.983-3.06-2.957z"
          />
          <path
            fill="#FD4C27"
            d="M15.874 12.429H6.917l-1.346 6h5.64c2.233 0 5.075-1.706 5.075-4.672a2 2 0 0 0-.412-1.328"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBUMP.displayName = 'BUMP'
