import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconQUBE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.428 8.246v4.86l-2.142-1.239V9.66L12 7.286 7.714 9.57v4.637L12 16.5l3.214-1.714 3.214 1.714v2.786l-3.214-1.715L12 19.287l-6.43-3.533V8.246L12 4.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0057FF"
            d="M18.428 8.246v4.86l-2.142-1.239V9.66L12 7.286 7.714 9.57v4.637L12 16.5l3.214-1.714 3.214 1.714v2.786l-3.214-1.715L12 19.287l-6.43-3.533V8.246L12 4.714z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconQUBE.displayName = 'QUBE'
