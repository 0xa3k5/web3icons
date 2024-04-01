import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconWAGMI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.077 6.857H6v4.093l6 5.151 6-5.43V6.883l-6 4.997zm9.197 0L12 9.686l-3.274-2.83zM18 13.25l-4.629 3.892H18zm-7.329 3.892L6 13.114v4.029z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#WAGMI__a)"
            d="M6.077 6.857H6v4.093l6 5.151 6-5.43V6.883l-6 4.997zm9.197 0L12 9.686l-3.274-2.83zM18 13.25l-4.629 3.892H18zm-7.329 3.892L6 13.114v4.029z"
          />
          <defs>
            <linearGradient
              id="WAGMI__a"
              x1="6"
              x2="17.441"
              y1="11.192"
              y2="11.192"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DCC093" />
              <stop offset="1" stopColor="#C4A878" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconWAGMI.displayName = 'WAGMI'
