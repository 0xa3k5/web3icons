import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconTUSD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 6.429H5.571v4.285A4.285 4.285 0 0 0 9.857 6.43m0 12.857V10.71c0-2.366 1.77-4.281 4.174-4.281h4.397v4.285h-4.285v8.572z"
          />
        </>
      ) : (
        <>
          <path
            fill="#1B5AFF"
            d="M9.857 6.429H5.571v4.285A4.285 4.285 0 0 0 9.857 6.43m0 12.857V10.71c0-2.366 1.77-4.281 4.174-4.281h4.397v4.285h-4.285v8.572z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTUSD.displayName = 'TUSD'
