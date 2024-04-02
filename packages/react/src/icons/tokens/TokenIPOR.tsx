import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenIPOR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.072 17.571 3.429 9.857l6.643 6.429 6-8.143.642.857 1.093-1.714 2.765 5.571-2.786-4.5-1.072 1.714-.642-.643z"
          />
          <path
            fill="currentColor"
            d="M13.877 13.243a126 126 0 0 0 6.695-.429 188 188 0 0 0-6.313-.338l-.386.771zm-1.718-.815-.506.858a79 79 0 0 1-4.333-.168l-.356-.53a98 98 0 0 1 5.195-.16m-8.73.386c.493-.038 1.187-.085 1.988-.137l.185.326a99 99 0 0 1-2.173-.189"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#IPOR__a)"
            d="M10.072 17.571 3.429 9.857l6.643 6.429 6-8.143.642.857 1.093-1.714 2.765 5.571-2.786-4.5-1.072 1.714-.642-.643z"
          />
          <path
            fill="url(#IPOR__b)"
            d="M13.877 13.243a126 126 0 0 0 6.695-.429 188 188 0 0 0-6.313-.338l-.386.771zm-1.718-.815-.506.858a79 79 0 0 1-4.333-.168l-.356-.53a98 98 0 0 1 5.195-.16m-8.73.386c.493-.038 1.187-.085 1.988-.137l.185.326a99 99 0 0 1-2.173-.189"
          />
          <defs>
            <linearGradient
              id="IPOR__a"
              x1="3.12"
              x2="20.542"
              y1="9.883"
              y2="9.883"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6DA88" />
              <stop offset="1" stopColor="#E15F50" />
            </linearGradient>
            <linearGradient
              id="IPOR__b"
              x1="3.544"
              x2="21.973"
              y1="12.857"
              y2="12.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".67" stopColor="#2E80BF" />
              <stop offset=".95" stopColor="#2A3985" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenIPOR.displayName = 'IPOR'
