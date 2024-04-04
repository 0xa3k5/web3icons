import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenVITE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6 9.6 4.286-1.028-.429 10.714zm5.143-1.161 8.571-2.01-9.728 12.733 1.157-10.719z"
          />
        </>
      ) : (
        <>
          <path
            fill="#007AFF"
            d="m6 9.6 4.286-1.028-.429 10.714zm5.143-1.161 8.571-2.01-9.728 12.733 1.157-10.719z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenVITE.displayName = 'VITE'
