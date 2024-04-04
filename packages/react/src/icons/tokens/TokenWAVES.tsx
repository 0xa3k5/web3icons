import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenWAVES = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.143 12 6.643-6.643L18.429 12l-6.643 6.643z"
          />
        </>
      ) : (
        <>
          <path
            fill="#1857F5"
            d="m5.143 12 6.642-6.643L18.428 12l-6.643 6.643z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenWAVES.displayName = 'WAVES'
