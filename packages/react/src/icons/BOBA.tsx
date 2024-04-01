import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconBOBA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.682 14.284H6.429V5.143h6.253a3.886 3.886 0 0 1 3.882 3.887v1.367a3.887 3.887 0 0 1-3.882 3.887"
          />
          <path
            fill="currentColor"
            d="M14.289 18.857h-7.86v-4.573a4.567 4.567 0 0 1 4.568-4.568h3.292a4.57 4.57 0 1 1 0 9.141"
          />
          <path
            fill="currentColor"
            d="M16.564 10.32v.077a3.887 3.887 0 0 1-3.887 3.887H6.43a4.57 4.57 0 0 1 4.568-4.568h3.292c.831 0 1.607.223 2.275.604"
          />
        </>
      ) : (
        <>
          <path
            fill="#AEDB01"
            d="M12.682 14.284H6.429V5.143h6.253a3.886 3.886 0 0 1 3.882 3.887v1.367a3.887 3.887 0 0 1-3.882 3.887"
          />
          <path
            fill="#B0B1AC"
            d="M14.289 18.857h-7.86v-4.573a4.567 4.567 0 0 1 4.568-4.568h3.292a4.57 4.57 0 1 1 0 9.141"
          />
          <path
            fill="#5D6D3C"
            d="M16.564 10.32v.077a3.887 3.887 0 0 1-3.887 3.887H6.43a4.57 4.57 0 0 1 4.568-4.568h3.292c.831 0 1.607.223 2.275.604"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBOBA.displayName = 'BOBA'
