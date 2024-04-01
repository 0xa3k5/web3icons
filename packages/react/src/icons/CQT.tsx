import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconCQT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.428 5.143a6.857 6.857 0 0 0 0 13.714v-3a3.857 3.857 0 0 1 0-7.714zm0 10.714a3.858 3.858 0 0 0 0-7.714m3.858.428a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428m0 10.286a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.43"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M12.428 5.143a6.857 6.857 0 0 0 0 13.714v-3a3.857 3.857 0 0 1 0-7.714zm0 10.714a3.858 3.858 0 0 0 0-7.714"
          />
          <path
            fill="#00D8D5"
            d="M16.286 8.571a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428"
          />
          <path
            fill="#F2548B"
            d="M16.286 18.857a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.43"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCQT.displayName = 'CQT'
