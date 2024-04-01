import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconDUA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#1E1E1E"
        d="M7.358 5.143A1.787 1.787 0 0 0 5.571 6.93v10.14c0 .986.802 1.787 1.787 1.787h8.499a3.429 3.429 0 0 0 .506-6.818 3.471 3.471 0 0 0-.545-6.896z"
      />
      <path
        fill="#86D900"
        d="M6.857 8.143a1.286 1.286 0 0 1 1.286-1.286h6a2.571 2.571 0 1 1 0 5.143 2.572 2.572 0 1 1-2.572 2.571v.215a2.357 2.357 0 0 1-4.714 0z"
      />
    </BaseIcon>
  ),
)

IconDUA.displayName = 'DUA'
