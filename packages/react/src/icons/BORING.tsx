import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconBORING = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857A6.857 6.857 0 1 0 9.857 5.486V12A2.143 2.143 0 1 0 12 9.857h-1.286V9H12a3 3 0 1 1-3 3V5.829q-.448.225-.857.501V12A3.857 3.857 0 1 0 12 8.143h-1.286v-.857H12A4.714 4.714 0 1 1 7.286 12V7.02A6.857 6.857 0 0 0 12 18.857M13.286 12a1.285 1.285 0 1 1-2.572 0v-1.286H12A1.286 1.286 0 0 1 13.286 12"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#BORING__a)"
            d="M12 18.857A6.857 6.857 0 1 0 9.857 5.486V12A2.143 2.143 0 1 0 12 9.857h-1.286V9H12a3 3 0 1 1-3 3V5.829q-.448.225-.857.501V12A3.857 3.857 0 1 0 12 8.143h-1.286v-.857H12A4.714 4.714 0 1 1 7.286 12V7.02A6.857 6.857 0 0 0 12 18.857M13.286 12a1.285 1.285 0 1 1-2.572 0v-1.286H12A1.286 1.286 0 0 1 13.286 12"
          />
          <defs>
            <linearGradient
              id="BORING__a"
              x1="11.999"
              x2="11.999"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0071E1" />
              <stop offset="1" stopColor="#015DD2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBORING.displayName = 'BORING'
