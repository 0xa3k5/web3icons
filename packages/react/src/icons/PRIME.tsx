import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPRIME = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.286 5.143h-2.572v7.5l1.286.643 1.286-.643zM6.857 9H4.286l.814 3.66a.43.43 0 0 0 .227.287l1.912.96a.86.86 0 0 1 .475.768v2.897l3 1.285v-3.642l-2.4-1.106a.86.86 0 0 1-.476-.6zm6.429 9.857v-3.642l2.4-1.106a.86.86 0 0 0 .475-.6L17.143 9h2.571l-.814 3.66a.43.43 0 0 1-.227.287l-1.912.96a.86.86 0 0 0-.475.768v2.897z"
          />
        </>
      ) : (
        <>
          <path
            fill="#ED1651"
            d="M13.286 5.143h-2.571v7.5l1.285.643 1.286-.643zM6.858 9H4.286l.814 3.66a.43.43 0 0 0 .228.287l1.911.96a.86.86 0 0 1 .476.768v2.897l3 1.285v-3.642l-2.4-1.106a.86.86 0 0 1-.476-.6zm6.428 9.857v-3.642l2.4-1.106a.86.86 0 0 0 .476-.6L17.143 9h2.572l-.815 3.66a.43.43 0 0 1-.227.287l-1.911.96a.86.86 0 0 0-.476.768v2.897z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPRIME.displayName = 'PRIME'
