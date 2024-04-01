import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPAC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18 12-6-8.143L6 12l5.143 6.943v-6.978l-.776 3.283-2.464-3.244 4.101-5.516L16.101 12l-2.468 3.244L12 8.721v11.422z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PAC__a)"
            d="m18 12-6-8.143L6 12l5.143 6.943v-6.978l-.776 3.283-2.464-3.244 4.101-5.516L16.101 12l-2.468 3.244L12 8.721v11.422z"
          />
          <defs>
            <linearGradient
              id="PAC__a"
              x1="6"
              x2="21.555"
              y1="3.857"
              y2="15.318"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00DDF8" />
              <stop offset="1" stopColor="#0290A4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPAC.displayName = 'PAC'
