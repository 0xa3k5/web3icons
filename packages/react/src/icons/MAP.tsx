import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMAP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        stroke="#E1CA7D"
        d="M10.7 6.111a1.5 1.5 0 0 1 2.6 0l4.94 8.568a1.5 1.5 0 0 1-1.3 2.25H7.06a1.5 1.5 0 0 1-1.3-2.25z"
      />
      <path
        stroke="#E1CA7D"
        d="M11.22 7.505a1.5 1.5 0 0 1 2.59.233l3.07 6.64a1.5 1.5 0 0 1-1.497 2.124l-7.279-.656a1.5 1.5 0 0 1-1.092-2.357z"
      />
      <path
        stroke="#E1CA7D"
        d="M11.914 8.278a1.071 1.071 0 0 1 1.826.338l2.107 5.963a1.071 1.071 0 0 1-1.205 1.41l-6.211-1.15a1.071 1.071 0 0 1-.62-1.75z"
      />
      <path
        stroke="#E1CA7D"
        d="M12.48 9.06a.643.643 0 0 1 1.071.308l1.324 5.342a.644.644 0 0 1-.801.772l-5.284-1.52a.643.643 0 0 1-.269-1.08z"
      />
      <path
        stroke="#E1CA7D"
        d="M12.736 10.128a.43.43 0 0 1 .675.308l.38 3.986a.43.43 0 0 1-.605.431l-3.639-1.66a.43.43 0 0 1-.071-.74z"
      />
    </BaseIcon>
  ),
)

IconMAP.displayName = 'MAP'
