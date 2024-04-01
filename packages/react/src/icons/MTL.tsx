import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconMTL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 6H6v12h-.857zM9.43 8.571h.857v7.715H9.43zm4.285 1.715h.858v4.285h-.857zM18 6h.857v12H18z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M5.143 6H6v12h-.857zm4.285 2.571h.857v7.715h-.857zm4.286 1.715h.857v4.285h-.857zM18 6h.857v12H18z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMTL.displayName = 'MTL'
