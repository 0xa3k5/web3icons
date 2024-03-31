import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconVERSA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#2B2D78"
        d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
      />
      <path
        fill="#434487"
        d="M12 18.223a6.223 6.223 0 1 0 0-12.446 6.223 6.223 0 0 0 0 12.446"
      />
      <path
        fill="#5C5D96"
        d="M12 17.079A5.079 5.079 0 1 0 12 6.92a5.079 5.079 0 0 0 0 10.158"
      />
      <path
        fill="#7373A5"
        d="M12 15.913a3.913 3.913 0 1 0 0-7.826 3.913 3.913 0 0 0 0 7.826"
      />
      <path
        fill="#898BB4"
        d="M12 14.786a2.786 2.786 0 1 0 0-5.572 2.786 2.786 0 0 0 0 5.572"
      />
      <path
        fill="#9F9FC1"
        d="M12 13.774a1.774 1.774 0 1 0 0-3.548 1.774 1.774 0 0 0 0 3.548"
      />
      <path
        fill="#B1B1CD"
        d="M12 12.832a.831.831 0 1 0 0-1.663.831.831 0 0 0 0 1.662"
      />
      <path
        fill="#fff"
        d="M12.004 16.286 8.198 8.143h1.56l2.246 4.826 2.314-4.826h1.492z"
      />
    </BaseIcon>
  ),
)

IconVERSA.displayName = 'VERSA'
