import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconQUAD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M17.143 6.857H6.857v10.286h9.377L14.091 15H9V9h6v5.091l2.143 2.143zM5.57 5.571v12.857h12.857V5.571zm4.715 4.715h3.428v3.428h-3.428z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconQUAD.displayName = 'QUAD'
