import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenRAKE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.632 6.026 2.082 8.331 8.143-2.382V12A6.858 6.858 0 1 1 8.632 6.026"
          />
          <path
            fill="currentColor"
            d="m10.457 5.315 1.757 6.257 6.326-1.633a6.8 6.8 0 0 0-.715-1.556L13.5 9.643l-1.17-4.491a7 7 0 0 0-1.873.167z"
          />
        </>
      ) : (
        <>
          <path
            fill="#12CF9C"
            d="m8.631 6.026 2.083 8.331 8.143-2.382V12A6.857 6.857 0 1 1 8.63 6.026"
          />
          <path
            fill="#133932"
            d="m10.457 5.315 1.757 6.257 6.326-1.633a6.8 6.8 0 0 0-.716-1.556L13.5 9.643l-1.17-4.491a7 7 0 0 0-1.873.167z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenRAKE.displayName = 'RAKE'
