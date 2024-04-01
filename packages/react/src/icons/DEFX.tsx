import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDEFX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.929 6.857 11.936 9.3l4.187-2.443 4.449 2.559v5.198l-4.445 2.529-4.195-2.306-4.003 2.306-4.5-2.529V9.416zm7.714 9.18v-3.75L8.357 8.006v3.724zM7.5 11.726V7.97l-3.214 1.9v3.836zm-2.786 2.657 3.24 1.903 3.189-1.912-3.214-1.945zM16.5 12.279v3.745l3.214-1.86V10.33zm2.786-2.636-3.163-1.929-3.266 1.929 3.266 1.856z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DEFX__a)"
            d="M7.929 6.857 11.936 9.3l4.187-2.443 4.449 2.559v5.198l-4.445 2.529-4.195-2.306-4.003 2.306-4.5-2.529V9.416zm7.714 9.18v-3.75L8.357 8.006v3.724zM7.5 11.726V7.97l-3.214 1.9v3.836zm-2.786 2.657 3.24 1.903 3.189-1.912-3.214-1.945zM16.5 12.279v3.745l3.214-1.86V10.33zm2.786-2.636-3.163-1.929-3.266 1.929 3.266 1.856z"
          />
          <defs>
            <linearGradient
              id="DEFX__a"
              x1="20.602"
              x2="3.429"
              y1="12.021"
              y2="12.021"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2D73BA" />
              <stop offset="1" stopColor="#4BA69B" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDEFX.displayName = 'DEFX'
