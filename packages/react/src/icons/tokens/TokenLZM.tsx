import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLZM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.571 12.514-3-4.371V18h8.572l-1.929-2.572H8.571zM9 5.571l3.214 5.357 3.214-5.357h3V18h-3v-7.714l-3.214 5.142-6.643-9.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#36A4DE"
            d="m8.571 12.514-3-4.371V18h8.572l-1.929-2.572H8.571zM9 5.571l3.214 5.357 3.214-5.357h3V18h-3v-7.714l-3.214 5.142-6.643-9.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenLZM.displayName = 'LZM'
