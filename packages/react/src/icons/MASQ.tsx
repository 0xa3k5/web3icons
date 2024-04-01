import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconMASQ = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.611 6.548c-2.421-2.442-6.801-2.442-9.223 0-2.421 2.443-2.421 6.785 0 9.232l2.04 1.706V15.92c0-.891.485-2.395 1.856-3.617a210 210 0 0 1 2.803-2.447l.056.111L12.03 12c-.429.557-1.286 2.027-1.286 3.454 0 1.547.583 3.052 1.599 4.26l4.268-4.311a6.31 6.31 0 0 0 0-8.855"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MASQ__a)"
            d="M16.611 6.548c-2.421-2.442-6.801-2.442-9.223 0-2.421 2.443-2.421 6.785 0 9.232l2.04 1.706V15.92c0-.891.485-2.395 1.856-3.617a210 210 0 0 1 2.803-2.447l.056.111L12.03 12c-.429.557-1.286 2.027-1.286 3.454 0 1.547.583 3.052 1.599 4.26l4.268-4.311a6.31 6.31 0 0 0 0-8.855"
          />
          <defs>
            <linearGradient
              id="MASQ__a"
              x1="11.999"
              x2="11.999"
              y1="4.716"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00C0FF" />
              <stop offset="1" stopColor="#0188FE" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMASQ.displayName = 'MASQ'
