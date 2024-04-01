import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTDROP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 20.143a6.857 6.857 0 0 0 6.857-6.857c0-3.79-6-9.43-6.857-9.43s-6.857 5.64-6.857 9.43A6.857 6.857 0 0 0 12 20.143M8.572 12v3h2.143v2.143h2.57V15h2.144v-3z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TDROP__a)"
            d="M12 20.143a6.857 6.857 0 0 0 6.857-6.857c0-3.79-6-9.43-6.857-9.43s-6.857 5.64-6.857 9.43A6.857 6.857 0 0 0 12 20.143M8.57 12v3h2.143v2.143h2.571V15h2.143v-3z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="TDROP__a"
              x1="12"
              x2="12"
              y1="3.857"
              y2="20.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00F2FF" />
              <stop offset="1" stopColor="#00BCF3" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTDROP.displayName = 'TDROP'
