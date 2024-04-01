import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconFDUSD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 15h6.857v3H6zm11.143-9.428H9.857v7.285h7.286v-2.571h-4.286V8.143h4.286z"
          />
        </>
      ) : (
        <>
          <path fill="#00E98D" d="M6 15h6.857v3H6z" />
          <path
            fill="#fff"
            d="M17.143 5.572H9.857v7.285h7.286v-2.571h-4.286V8.143h4.286z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFDUSD.displayName = 'FDUSD'
