import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDAD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.937 5.572H6.429v2.571h5.596c1.081.029 3.404 1.288 3.404 3.694 0 2.885-2.217 4.02-3.404 4.02H9v2.572h3.937c1.844 0 5.575-1.839 5.49-6.592-.084-4.752-3.752-6.265-5.49-6.265m-2.651 5.142h1.286a1.285 1.285 0 1 1 0 2.572h-1.286zM6.429 12a1.286 1.286 0 0 1 1.285-1.286v2.572A1.285 1.285 0 0 1 6.43 12"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DAD__a)"
            d="M12.937 5.572H6.429v2.571h5.596c1.081.029 3.404 1.288 3.404 3.694 0 2.885-2.217 4.02-3.404 4.02H9v2.572h3.937c1.844 0 5.575-1.839 5.49-6.592-.084-4.752-3.752-6.265-5.49-6.265m-2.651 5.142h1.286a1.285 1.285 0 1 1 0 2.572h-1.286zM6.429 12a1.286 1.286 0 0 1 1.285-1.286v2.572A1.285 1.285 0 0 1 6.43 12"
          />
          <defs>
            <linearGradient
              id="DAD__a"
              x1="9.037"
              x2="16.795"
              y1="7.187"
              y2="16.078"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00EDEF" />
              <stop offset="1" stopColor="#0094FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDAD.displayName = 'DAD'
