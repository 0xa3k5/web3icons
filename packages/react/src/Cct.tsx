import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCct = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#4E4F4F"
        d="M15.108 7.522a6.5 6.5 0 0 1 1.654 3.192h-3.069a3.38 3.38 0 0 0-2.7-2.112v-1.08z"
      />
      <path
        fill="#4F4F4F"
        d="M13.106 6.12 9.412 8.006v.784A3.4 3.4 0 0 0 7.286 12h-3c0-3.548 2.812-6.428 6.279-6.428.904 0 1.765.197 2.541.548"
      />
      <path
        fill="#F0F3FA"
        d="M19.715 13.286c-.592 2.927-3.129 5.143-6.172 5.143-3.48 0-6.257-2.88-6.257-6.429 0-3.548 2.777-6.428 6.257-6.428a6.34 6.34 0 0 1 6.172 5.142h-3a3.46 3.46 0 0 0-3.172-2.142c-1.855 0-3.257 1.538-3.257 3.428s1.402 3.424 3.257 3.424a3.46 3.46 0 0 0 3.172-2.138z"
      />
      <path
        fill="#4E504C"
        d="M7.286 12c0 1.89 1.432 3.424 3.279 3.424a3.44 3.44 0 0 0 3.15-2.138h3c-.587 2.927-3.12 5.143-6.15 5.143-3.472 0-6.279-2.88-6.279-6.429z"
      />
    </BaseIcon>
  ),
)

IconCct.displayName = 'Cct'

export default IconCct
