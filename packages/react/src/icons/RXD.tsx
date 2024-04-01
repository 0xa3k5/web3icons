import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconRXD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.607 17.079a6.857 6.857 0 1 0-9.964-9.365h-1.5L7.49 9.91c.257.244.6.377.956.377h4.131c.626 0 1.136.445 1.136 1.071s-.638 1.072-1.264 1.072H12l2.138 2.142c1.419 0 2.576-1.285 2.576-3.214v-.06a3.583 3.583 0 0 0-3.578-3.583H7.093a6.514 6.514 0 1 1 9.295 9.094l.215.27zm-9.493-4.393 5.657 5.785A6.515 6.515 0 0 1 6.073 9.3L5.828 9a6.857 6.857 0 0 0 7.243 9.771l.086.082h4.414l-7.585-7.71H7.757c-.793 0-1.191.968-.634 1.538z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RXD__a)"
            d="M16.607 17.079a6.857 6.857 0 1 0-9.964-9.365h-1.5L7.49 9.91c.257.244.6.377.956.377h4.131c.626 0 1.136.445 1.136 1.071s-.638 1.072-1.264 1.072H12l2.138 2.142c1.419 0 2.576-1.285 2.576-3.214v-.06a3.583 3.583 0 0 0-3.578-3.583H7.093a6.514 6.514 0 1 1 9.295 9.094l.215.27zm-9.493-4.393 5.657 5.785A6.515 6.515 0 0 1 6.073 9.3L5.828 9a6.857 6.857 0 0 0 7.243 9.771l.086.082h4.414l-7.585-7.71H7.757c-.793 0-1.191.968-.634 1.538z"
          />
          <defs>
            <linearGradient
              id="RXD__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D8FB2" />
              <stop offset=".36" stopColor="#35C6F3" />
              <stop offset=".71" stopColor="#FFF4C4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconRXD.displayName = 'RXD'
