import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconVEGA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.286 6H9v9.429H7.286zm3.428 11.143H9v-1.714h1.714zm1.714 0v1.714h-1.714v-1.714zm0 0v-1.714h1.715v1.714zM14.572 6h1.715v7.714H14.57zm1.715 7.714H18v1.715h-1.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M7.286 6H9v9.429H7.286zm3.429 11.143H9v-1.714h1.715zm1.714 0v1.714h-1.714v-1.714zm0 0v-1.714h1.714v1.714zM14.572 6h1.714v7.714h-1.714zm1.714 7.714H18v1.715h-1.714z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVEGA.displayName = 'VEGA'
