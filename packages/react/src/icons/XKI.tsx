import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXKI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.715 6.429H8.142v9.857h2.571v-4.38l3.858 4.38h3l-4.286-4.929 3.857-4.928h-3l-3.429 4.38zM9.429 19.714a1.286 1.286 0 1 0 0-2.57 1.286 1.286 0 0 0 0 2.57"
          />
        </>
      ) : (
        <>
          <path
            fill="#2A00FF"
            d="M10.714 6.429H8.143v9.857h2.571v-4.38l3.857 4.38h3l-4.286-4.929 3.858-4.928h-3l-3.429 4.38zM9.428 19.714a1.286 1.286 0 1 0 0-2.57 1.286 1.286 0 0 0 0 2.57"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXKI.displayName = 'XKI'
