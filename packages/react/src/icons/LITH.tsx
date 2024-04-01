import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconLITH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.357 10.714a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714m7.286 0a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714M8.357 18a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714m7.286 0a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M8.357 10.714a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714"
          />
          <path
            fill="#E96036"
            d="M15.643 10.714a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714"
          />
          <path
            fill="#000"
            d="M8.357 18a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714m7.286 0a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLITH.displayName = 'LITH'
