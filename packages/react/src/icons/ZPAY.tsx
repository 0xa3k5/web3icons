import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconZPAY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.322 5.571H7.929c-.309 0-.643.245-.643.54v1.492c0 .3.334.54.643.54h4.294L4.714 15h3.613l7.989-7.132c.857-.857.236-2.297-.994-2.297M8.679 18.428h7.607c.308 0 .428-.244.428-.54v-1.491c0-.3-.12-.54-.428-.54h-4.509L19.286 9h-3.613l-7.989 7.13c-.857.857-.235 2.297.995 2.297"
          />
        </>
      ) : (
        <>
          <path
            fill="#11F"
            d="M15.321 5.571H7.928c-.308 0-.643.245-.643.54v1.492c0 .3.335.54.643.54h4.294L4.714 15h3.613l7.988-7.132c.857-.857.236-2.297-.994-2.297M8.678 18.428h7.607c.309 0 .429-.244.429-.54v-1.491c0-.3-.12-.54-.429-.54h-4.508L19.285 9h-3.613l-7.988 7.13c-.857.857-.236 2.297.994 2.297"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconZPAY.displayName = 'ZPAY'
