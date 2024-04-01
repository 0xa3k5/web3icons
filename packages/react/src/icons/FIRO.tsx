import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconFIRO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.858 6.858 0 0 0 6.36-9.429h-3.34a.43.43 0 0 0-.373.219l-.591 1.067h1.371a.43.43 0 0 1 .429.429v1.285a.43.43 0 0 1-.428.429h-2.572l-2.036 3.639a.43.43 0 0 1-.373.218H7.02A6.84 6.84 0 0 0 12 18.857M5.64 14.57a6.857 6.857 0 0 1 11.34-7.286h-3.214a.43.43 0 0 0-.373.22l-1.796 3.209H9a.43.43 0 0 0-.429.429v1.285a.43.43 0 0 0 .429.429h1.4l-.835 1.496a.43.43 0 0 1-.373.218z"
          />
        </>
      ) : (
        <>
          <path
            fill="#8D1B28"
            d="M12 18.857a6.858 6.858 0 0 0 6.36-9.429h-3.34a.43.43 0 0 0-.373.219l-.591 1.067h1.371a.43.43 0 0 1 .429.429v1.285a.43.43 0 0 1-.428.429h-2.572l-2.036 3.639a.43.43 0 0 1-.373.218H7.02A6.84 6.84 0 0 0 12 18.857M5.64 14.57a6.857 6.857 0 0 1 11.34-7.286h-3.214a.43.43 0 0 0-.373.22l-1.796 3.209H9a.43.43 0 0 0-.429.429v1.285a.43.43 0 0 0 .429.429h1.4l-.835 1.496a.43.43 0 0 1-.373.218z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFIRO.displayName = 'FIRO'
