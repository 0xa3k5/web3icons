import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconHTM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.277 9.45c-.814-.93-.493-2.4-.227-3.021-.416.154-1.479.968-1.479 3.021 0 2.323 2.615 3.369 3.755 4.646s1.478 4.761 2.614 4.761c1.14 0 1.663-3.805 2.734-4.761.909-.814 3.754-2.443 3.754-4.646 0-1.766-.985-2.751-1.478-3.021.818 1.208.227 2.323-.454 3.021-2.276 2.554-4.098 1.629-4.552 3.832-.227-2.208-3.643-2.67-4.667-3.832"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#HTM__a)"
            d="M7.277 9.45c-.814-.93-.493-2.4-.227-3.021-.416.154-1.479.968-1.479 3.021 0 2.323 2.615 3.369 3.755 4.646s1.478 4.761 2.614 4.761c1.14 0 1.663-3.805 2.734-4.761.909-.814 3.754-2.443 3.754-4.646 0-1.766-.985-2.751-1.478-3.021.818 1.208.227 2.323-.454 3.021-2.276 2.554-4.098 1.629-4.552 3.832-.227-2.208-3.643-2.67-4.667-3.832"
          />
          <defs>
            <linearGradient
              id="HTM__a"
              x1="12"
              x2="12"
              y1="6.429"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#64EAB7" />
              <stop offset="1" stopColor="#33CBF0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconHTM.displayName = 'HTM'
