import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconEDEN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.012 9.969 12.857 6.92v6.099zm-6.463 6.458 1.594-1.543v-.06l-3.394-3.278v3.145zm.934.904.66-.638v3.021h1.714v-3L14.186 18v-.009l.257.249 3.116-3.013h.013V9.643h-.026l-4.612-4.457-.934-.9-5.546 5.357H6.43v5.584h.013l2.172 2.104.93.905h.009l.934-.9zm2.374-2.417 1.586 1.53 1.843-1.787v-3.146l-3.429 3.313zM7.99 9.97l3.154 3.05V6.922z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#EDEN__a)"
            d="M16.012 9.969 12.857 6.92v6.099zm-6.463 6.458 1.594-1.543v-.06l-3.394-3.278v3.145zm.934.904.66-.638v3.021h1.714v-3L14.186 18v-.009l.257.249 3.116-3.013h.013V9.643h-.026l-4.612-4.457-.934-.9-5.546 5.357H6.43v5.584h.013l2.172 2.104.93.905h.009l.934-.9zm2.374-2.417 1.586 1.53 1.843-1.787v-3.146l-3.429 3.313zM7.99 9.97l3.154 3.05V6.922z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="EDEN__a"
              x1="7.642"
              x2="16.337"
              y1="16.479"
              y2="9.553"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#10CB88" />
              <stop offset="1" stopColor="#BDF418" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconEDEN.displayName = 'EDEN'
