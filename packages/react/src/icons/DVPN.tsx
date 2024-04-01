import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconDVPN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18 6.039H6v6.192c0 3.232 2.687 6.588 6 6.588s6-3.356 6-6.588zm-.429.39H6.43v5.811c0 3.043 2.494 6.189 5.571 6.189s5.571-3.15 5.571-6.189z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M16.286 7.714H7.714v2.387l6.733 4.659-.48.407-6.253-4.213v1.329c0 2.387 1.92 4.86 4.286 4.86 2.349 0 4.256-2.434 4.286-4.804L10.4 8.314h1.132l4.753 3.305z"
          />
        </>
      ) : (
        <>
          <path
            fill="#162C51"
            d="M6 6h12v6.227c0 3.257-2.687 6.63-6 6.63s-6-3.373-6-6.63z"
          />
          <path
            fill="#07B3F5"
            d="M18 6.039H6v6.192c0 3.232 2.687 6.588 6 6.588s6-3.356 6-6.588zm-.429.39H6.43v5.811c0 3.043 2.494 6.189 5.571 6.189s5.571-3.15 5.571-6.189z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#07B3F5"
            d="M16.286 7.714H7.714v2.387l6.733 4.659-.48.407-6.253-4.213v1.329c0 2.387 1.92 4.86 4.286 4.86 2.349 0 4.256-2.434 4.286-4.804L10.4 8.314h1.132l4.753 3.305z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDVPN.displayName = 'DVPN'
