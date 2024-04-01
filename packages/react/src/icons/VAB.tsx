import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconVAB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.999 19.328a.815.815 0 0 1-1.385 0L4.821 8.014c-.308-.514.078-1.157.695-1.157h12.167c1.243 0 2.01 1.299 1.38 2.323l-1.479 2.413c-.574.938-1.564 1.264-2.7 1.264H10.26a.42.42 0 0 0-.403.429c.009.257.215.428.403.428h3.356a1.56 1.56 0 0 1 1.328 2.37z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#VAB__a)"
            d="M12.999 19.328a.815.815 0 0 1-1.385 0L4.821 8.014c-.308-.514.078-1.157.695-1.157h12.167c1.243 0 2.01 1.299 1.38 2.323l-1.479 2.413c-.574.938-1.564 1.264-2.7 1.264H10.26a.42.42 0 0 0-.403.429c.009.257.215.428.403.428h3.356a1.56 1.56 0 0 1 1.328 2.37z"
          />
          <defs>
            <linearGradient
              id="VAB__a"
              x1="6.643"
              x2="12.42"
              y1="8.357"
              y2="19.076"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#470180" />
              <stop offset=".82" stopColor="#EF62C9" />
              <stop offset="1" stopColor="#FFCCF7" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconVAB.displayName = 'VAB'
