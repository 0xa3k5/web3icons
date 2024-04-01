import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTRU = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.28 10.286h-2.573l-4.07 7.153-2.608-1.484 4.256-7.478a2.36 2.36 0 0 1 2.048-1.191h2.946zm-5.566-3H4.286v3.428a3.43 3.43 0 0 0 3.428-3.428m7.237 1.193a2.36 2.36 0 0 1 2.05-1.193h3.142v3h-2.768l-3.459 6.092a2.36 2.36 0 0 1-2.05 1.193H8.57v-3h2.922zm3.477 7.378a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#1A5AFF"
            d="M13.28 10.286h-2.573l-4.07 7.153-2.608-1.484 4.256-7.478a2.36 2.36 0 0 1 2.048-1.191h2.946zm-5.566-3H4.286v3.428a3.43 3.43 0 0 0 3.428-3.428m7.237 1.193a2.36 2.36 0 0 1 2.05-1.193h3.142v3h-2.768l-3.459 6.092a2.36 2.36 0 0 1-2.05 1.193H8.57v-3h2.922zm3.477 7.378a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTRU.displayName = 'TRU'
