import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenEGLD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.857 12 6-3.212-1.03-1.93-5.603 2.1a.6.6 0 0 1-.448 0l-5.603-2.1-1.03 1.936 6 3.206-6 3.206 1.03 1.937 5.603-2.1a.6.6 0 0 1 .448 0l5.603 2.1 1.03-1.948z"
          />
        </>
      ) : (
        <>
          <path
            fill="#23F7DD"
            d="m12.857 12 6-3.212-1.03-1.93-5.603 2.1a.6.6 0 0 1-.449 0l-5.602-2.1-1.03 1.936 6 3.206-6 3.206 1.03 1.937 5.602-2.1a.6.6 0 0 1 .449 0l5.603 2.1 1.03-1.948z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenEGLD.displayName = 'EGLD'
