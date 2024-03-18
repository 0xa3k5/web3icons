import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconMean = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.429 6.429 12 8.143 5.572 6.429c0 1.448-.429 3-.429 3l2.734 7.491L12 20.143l4.123-3.223 2.734-7.491c-.043 0-.428-1.552-.428-3m-6.429 3L6.857 8.143c0 1.264-.283 1.616-.283 1.616L9 16.072l1.286 1.071-2.143-7.286 2.571.857.858 6.643L12 18.43l.429-1.072.857-6.643 2.571-.857-2.142 7.286L15 16.072l2.426-6.313s-.283-.54-.283-1.616z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MEAN__a)"
            d="M18.428 6.429 12 8.143 5.57 6.429c0 1.448-.428 3-.428 3l2.734 7.491L12 20.143l4.123-3.223 2.734-7.491c-.043 0-.429-1.552-.429-3m-6.428 3L6.857 8.143c0 1.264-.283 1.616-.283 1.616L9 16.072l1.285 1.071-2.142-7.286 2.571.857.857 6.643L12 18.43l.428-1.072.857-6.643 2.572-.857-2.143 7.286L15 16.072l2.425-6.313s-.282-.54-.282-1.616z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="MEAN__a"
              x1="12"
              x2="12"
              y1="6.857"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F40315" />
              <stop offset="1" stopColor="#B8091C" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMean.displayName = 'Mean'

export default IconMean
