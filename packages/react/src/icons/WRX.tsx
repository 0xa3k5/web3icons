import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconWRX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.722 14.143-.579-6.429 3 2.143zm.707.857 5.601-9.857L15 9.712 8.284 15zm12.428-7.286L9.557 15h8.683zM5.572 15.857h12.857v1.286H5.572z"
          />
        </>
      ) : (
        <>
          <path
            fill="#3067F0"
            d="m5.721 14.143-.578-6.429 3 2.143zm.707.857 5.602-9.857L15 9.712 8.284 15zm12.429-7.286L9.557 15h8.683zM5.57 15.857h12.857v1.286H5.571z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWRX.displayName = 'WRX'
