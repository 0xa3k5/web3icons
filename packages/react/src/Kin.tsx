import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconKIN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12 4.714 6.428 3.643v7.286L12 19.286l-6.43-3.643V8.357z"
          />
        </>
      ) : (
        <>
          <path
            fill="#7E43FF"
            d="m12 4.714 6.428 3.643v7.286L12 19.286l-6.43-3.643V8.357z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconKIN.displayName = 'KIN'
