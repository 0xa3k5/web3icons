import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconQRDO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 7.286a4.714 4.714 0 0 0-4.62 5.657 1.072 1.072 0 0 1-2.1.429A6.857 6.857 0 1 1 18.857 12h-2.142A4.714 4.714 0 0 0 12 7.286"
          />
          <path
            fill="currentColor"
            d="M17.486 9.862a1.07 1.07 0 0 1 1.251.857q.12.632.12 1.277V12a6.84 6.84 0 0 1-1.731 4.556l.416.501a1.071 1.071 0 1 1-1.655 1.363l-.415-.506A6.856 6.856 0 0 1 5.143 12h2.143a4.714 4.714 0 0 0 6.797 4.23l-.626-.758a1.073 1.073 0 0 1 .93-1.749c.283.028.544.166.725.386l.634.767a4.7 4.7 0 0 0 .891-3.759 1.07 1.07 0 0 1 .853-1.251z"
          />
          <path
            fill="currentColor"
            d="M7.299 12.36q.025.301.081.583a1.072 1.072 0 0 1-2.1.429q-.136-.664-.137-1.372h2.143"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#QRDO__a)"
            d="M12 7.286a4.715 4.715 0 0 0-4.62 5.657 1.071 1.071 0 1 1-2.1.429A6.857 6.857 0 1 1 18.857 12h-2.143A4.714 4.714 0 0 0 12 7.286"
          />
          <path
            fill="url(#QRDO__b)"
            d="M17.485 9.862a1.07 1.07 0 0 1 1.252.857q.12.632.12 1.277V12a6.84 6.84 0 0 1-1.732 4.556l.416.501a1.073 1.073 0 0 1-1.654 1.363l-.416-.506A6.856 6.856 0 0 1 5.143 12h2.142a4.714 4.714 0 0 0 6.798 4.23l-.626-.758a1.071 1.071 0 1 1 1.654-1.363l.634.767a4.7 4.7 0 0 0 .892-3.759 1.07 1.07 0 0 1 .853-1.251z"
          />
          <path
            fill="#FFE000"
            d="M7.298 12.36q.024.301.082.583a1.072 1.072 0 0 1-2.1.429q-.136-.664-.137-1.372h2.142"
          />
          <defs>
            <linearGradient
              id="QRDO__a"
              x1="17.357"
              x2="5.704"
              y1="11.61"
              y2="14.334"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DDE41" />
              <stop offset="1" stopColor="#FFE000" />
            </linearGradient>
            <linearGradient
              id="QRDO__b"
              x1="22.714"
              x2="7.712"
              y1="13.969"
              y2="14.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".36" stopColor="#FF26EB" />
              <stop offset=".66" stopColor="#137FF9" />
              <stop offset="1" stopColor="#27B3F9" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconQRDO.displayName = 'QRDO'
