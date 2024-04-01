import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconJMPT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.286 6.857 14.357 3.43 12.43 6.857h.857v9.686a1.286 1.286 0 0 1-2.572 0v-6.257h.857L9.644 6.857l-1.929 3.429h.857v6.407c0 1.671 1.3 3.021 2.898 3.021h1.063c1.598 0 2.897-1.354 2.897-3.021V6.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#3256F2"
            d="M16.285 6.857 14.357 3.43l-1.929 3.428h.857v9.686a1.286 1.286 0 0 1-2.571 0v-6.257h.857l-1.929-3.43-1.928 3.429h.857v6.407c0 1.671 1.299 3.021 2.897 3.021h1.063c1.599 0 2.897-1.354 2.897-3.021V6.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconJMPT.displayName = 'JMPT'
