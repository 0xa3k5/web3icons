import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconXEP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.858 6.858 0 0 0 6.741-8.108l-1.607.943.009.308a5.143 5.143 0 0 1-9.244 3.107l2.052-1.225a2.785 2.785 0 0 0 4.552-2.717l2.228-1.33L18.163 9A6.857 6.857 0 1 0 12 18.857M9.043 12.28 7.07 13.457a5.143 5.143 0 0 1 8.555-5.108l-2.1 1.255a2.786 2.786 0 0 0-4.475 2.67zM16.2 9.287l-3.116 1.877v1.372l-1.298.75-1.136-.656-2.987 1.796-.172-.283 2.996-1.8v-1.307l1.299-.75 1.08.626 3.163-1.903z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#XEP__a)"
            d="M12 18.857a6.858 6.858 0 0 0 6.741-8.108l-1.607.943.009.308a5.143 5.143 0 0 1-9.244 3.107l2.052-1.225a2.785 2.785 0 0 0 4.552-2.717l2.228-1.33L18.163 9A6.857 6.857 0 1 0 12 18.857M9.043 12.28 7.07 13.457a5.143 5.143 0 0 1 8.555-5.108l-2.1 1.255a2.786 2.786 0 0 0-4.475 2.67zM16.2 9.287l-3.116 1.877v1.372l-1.298.75-1.136-.656-2.987 1.796-.172-.283 2.996-1.8v-1.307l1.299-.75 1.08.626 3.163-1.903z"
          />
          <defs>
            <linearGradient
              id="XEP__a"
              x1="11.998"
              x2="11.998"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#017FEE" />
              <stop offset="1" stopColor="#171B6E" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconXEP.displayName = 'XEP'
