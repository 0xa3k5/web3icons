import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconKZEN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#KZEN__a)"
        d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
      />
      <path
        fill="url(#KZEN__b)"
        d="M18.857 12a6.857 6.857 0 1 0-13.714 0 6.857 6.857 0 0 0 13.714 0"
      />
      <path
        fill="#181B1E"
        d="M10.714 7.714H12v8.143h-1.286zm5.481-2.142-.758-.798-.047-.06a11.77 11.77 0 0 0-2.533 7.252c0 2.777.964 5.327 2.571 7.32l.857-.849a10.56 10.56 0 0 1-2.181-6.471c0-2.392.776-4.637 2.091-6.394"
      />
      <defs>
        <linearGradient
          id="KZEN__a"
          x1="15.998"
          x2="7.893"
          y1="5.625"
          y2="18.245"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".16" stopColor="#FFA3A3" />
          <stop offset=".59" stopColor="#C50000" />
          <stop offset="1" stopColor="#C50101" />
        </linearGradient>
        <linearGradient
          id="KZEN__b"
          x1="14.143"
          x2="12.267"
          y1="5.17"
          y2="8.259"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".07" stopColor="#FF5353" />
          <stop offset="1" stopColor="#C50101" stopOpacity="0" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconKZEN.displayName = 'KZEN'
