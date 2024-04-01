import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconUOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.714 12.472V6.429h2.572v6.043c0 .48-.442 1.242-1.247 1.242a1.283 1.283 0 0 1-1.325-1.242"
          />
          <path
            fill="currentColor"
            d="M5.143 13.016V6.429h2.572v6.454c0 1.53 1.08 3.831 4.285 3.831 2.897 0 4.286-1.872 4.286-3.831V6.429h2.571v6.248c0 1.316-.445 6.566-6.857 6.609-5.55.038-6.857-4.183-6.857-6.27"
          />
        </>
      ) : (
        <>
          <path
            fill="#7A51D1"
            d="M10.714 12.472V6.429h2.571v6.043c0 .48-.441 1.242-1.247 1.242a1.283 1.283 0 0 1-1.324-1.242"
          />
          <path
            fill="#7A51D1"
            d="M5.143 13.016V6.429h2.571v6.454c0 1.53 1.08 3.831 4.286 3.831 2.897 0 4.285-1.872 4.285-3.831V6.429h2.572v6.248c0 1.316-.446 6.566-6.857 6.609-5.55.038-6.857-4.183-6.857-6.27"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconUOS.displayName = 'UOS'
