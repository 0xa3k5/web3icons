import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconVLX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m15 11.571-3 5.357-3-5.357zm2.572-1.714H6.429L12 19.714zm-12.858-3L5.786 8.57h12.428l1.072-1.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="m15 11.571-3 5.357-3-5.357zm2.571-1.714H6.428L12 19.714zm-12.857-3L5.785 8.57h12.429l1.071-1.714z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVLX.displayName = 'VLX'
