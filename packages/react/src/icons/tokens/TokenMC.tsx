import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 5.143c3.78 0 6.857 3.077 6.857 6.857S15.78 18.857 12 18.857 5.143 15.78 5.143 12 8.22 5.143 12 5.143M12 15c-.857-.763-1.286-1.757-1.286-3s.43-2.237 1.286-3c.857.763 1.286 1.757 1.286 3s-.429 2.216-1.286 3"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M5.336 13.642c.026.043 1.53 2.687 3.986 2.644.801-.013 1.688-.536 2.678-1.286.857-.763 1.286-1.757 1.286-3S12.857 9.763 12 9c0 0 1.38-1.315 3-1.285 1.269.02 2.7.852 3.763 3.14A6.868 6.868 0 0 1 12 18.84a6.83 6.83 0 0 1-6.664-5.198"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MC__a)"
            d="M12 5.143c3.78 0 6.857 3.077 6.857 6.857S15.78 18.857 12 18.857 5.143 15.78 5.143 12 8.22 5.143 12 5.143M12 15c-.857-.763-1.286-1.757-1.286-3S11.143 9.763 12 9c.857.763 1.285 1.757 1.285 3s-.428 2.216-1.285 3"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#MC__b)"
            d="M5.335 13.642c.026.043 1.53 2.687 3.986 2.644.802-.013 1.689-.536 2.679-1.286.857-.763 1.285-1.757 1.285-3S12.857 9.763 12 9c0 0 1.38-1.315 3-1.285 1.268.02 2.7.852 3.763 3.14A6.868 6.868 0 0 1 12 18.84a6.83 6.83 0 0 1-6.665-5.198"
          />
          <defs>
            <linearGradient
              id="MC__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="16.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F4C251" />
              <stop offset=".89" stopColor="#E47236" />
            </linearGradient>
            <linearGradient
              id="MC__b"
              x1="12.095"
              x2="12.095"
              y1="7.714"
              y2="18.84"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".15" stopColor="#E1602B" />
              <stop offset="1" stopColor="#EDAD3F" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenMC.displayName = 'MC'
