import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWOO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m5.143 7.73 2.726 8.907a.71.71 0 0 0 .674.506H9.95a.71.71 0 0 0 .656-.454l1.382-3.537.004-.006.007-.002.006.002.005.006 1.398 3.54a.71.71 0 0 0 .656.45h1.344c.307 0 .58-.202.673-.501l1.311-4.212h-2.237l-.382 1.258-.004.005a.01.01 0 0 1-.013.001l-.004-.005-1.256-2.86a1.62 1.62 0 0 0-2.953-.006l-1.33 2.866-.004.005a.012.012 0 0 1-.017-.006L7.434 7.714h-2.28a.012.012 0 0 0-.01.016m10.404 3.413h2.247l1.063-3.413a.01.01 0 0 0-.002-.01.01.01 0 0 0-.01-.006H16.59z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconWOO.displayName = 'WOO'
