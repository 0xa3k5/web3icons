import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWAN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.571 8.572 1.715.857v4.114L12 10.937l4.714 2.606V9.43l1.714-.857v7.885L12 12.9l-6.43 3.557z"
          />
          <path
            fill="currentColor"
            d="m12 17.867-3.202-1.993-1.667 1.008L12 19.843l4.937-2.97-1.68-1.003L12 17.872zm0-11.755L7.547 8.469l-1.787-.78L12 4.029l6.343 3.656-1.895.784L12 6.116z"
          />
        </>
      ) : (
        <>
          <path
            fill="#136AAD"
            d="m5.571 8.572 1.715.857v4.114L12 10.937l4.714 2.606V9.43l1.714-.857v7.885L12 12.9l-6.43 3.557z"
          />
          <path
            fill="#3FBCED"
            d="m12 17.867-3.202-1.993-1.667 1.008L12 19.843l4.937-2.97-1.68-1.003L12 17.872zm0-11.755L7.547 8.469l-1.787-.78L12 4.029l6.343 3.656-1.895.784L12 6.116z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWAN.displayName = 'WAN'
