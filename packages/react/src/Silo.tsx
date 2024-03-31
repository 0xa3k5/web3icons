import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSILO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M13.286 10.715V5.142H9.999A4 4 0 0 0 7.17 6.326a4.05 4.05 0 0 0 0 5.7 4.06 4.06 0 0 0 2.83 1.26h.715v-2.572z"
      />
      <path
        fill="currentColor"
        d="M14.002 10.715h-.716v2.57h-2.572v5.572h3.287a4 4 0 0 0 2.83-1.183 4.05 4.05 0 0 0 0-5.7 4.06 4.06 0 0 0-2.83-1.26"
      />
    </BaseIcon>
  ),
)

IconSILO.displayName = 'SILO'
