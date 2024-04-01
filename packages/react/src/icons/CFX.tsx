import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconCFX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.009 3.857 6.848 6.566-.012 3.141-6.866-6.583-6.814 6.536-.022-3.077zm0 13.243 3.557-3.407 1.577 1.513-5.151 4.937-5.135-4.92 5.152-4.937 1.577 1.513-3.553 3.407 1.98 1.894z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CFX__a)"
            d="m12.008 3.857 6.849 6.566-.013 3.141-6.866-6.583-6.814 6.536-.021-3.077zm0 13.243 3.557-3.407 1.578 1.513-5.152 4.937-5.134-4.92 5.151-4.937 1.577 1.513-3.552 3.407 1.98 1.894z"
          />
          <defs>
            <linearGradient
              id="CFX__a"
              x1="18.857"
              x2="3.907"
              y1="17.049"
              y2="9.117"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#13C77F" />
              <stop offset="1" stopColor="#295DB2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCFX.displayName = 'CFX'
