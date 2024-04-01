import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconZYN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m16.157 5.571-1.611 2.572h3.167l-4.084 6.428h1.148L16.457 12h1.972l-2.606 4.286h-3.279l-1.902 3h-1.93l1.878-3H7.427l4.033-6.429h-1.166l-1.843 2.846L5.83 8.546 7.76 5.57h8.4zM8.644 7.286 7.813 8.57 8.45 9.6l.952-1.457h3.133l.54-.857zm4.809 2.571-3.004 4.714h1.217l2.953-4.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F8B003"
            d="m16.157 5.571-1.612 2.572h3.167l-4.084 6.428h1.149L16.457 12h1.971l-2.606 4.286h-3.278l-1.903 3H8.712l1.878-3H7.427l4.033-6.429h-1.166L8.45 12.703 5.828 8.546 7.761 5.57h8.4zM8.644 7.286 7.812 8.57l.639 1.03.951-1.457h3.133l.54-.857zm4.808 2.571-3.004 4.714h1.217l2.953-4.714z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconZYN.displayName = 'ZYN'
