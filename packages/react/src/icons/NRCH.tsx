import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconNRCH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.143 10.714V7.256A1.264 1.264 0 0 1 9.42 6h7.295v.887a1.3 1.3 0 0 1-1.312 1.256h-4.371a.31.31 0 0 0-.318.308v2.263h4.715v.909a1.256 1.256 0 0 1-1.277 1.234H6.42a1.256 1.256 0 0 1-1.277-1.234v-.909zm2.572 3.429v1.337c0 .21.17.377.372.377h4.346a1.287 1.287 0 0 1 1.282 1.294v.85h-7.29a1.286 1.286 0 0 1-1.282-1.295v-2.563z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00E9B3"
            d="M8.143 10.714V7.256A1.264 1.264 0 0 1 9.42 6h7.294v.887a1.3 1.3 0 0 1-1.311 1.256H11.03a.31.31 0 0 0-.317.308v2.263h4.714v.909a1.256 1.256 0 0 1-1.277 1.234H6.42a1.256 1.256 0 0 1-1.277-1.234v-.909z"
          />
          <path
            fill="#fff"
            d="M10.714 14.143v1.337c0 .21.171.377.373.377h4.346a1.287 1.287 0 0 1 1.281 1.294v.85h-7.29a1.286 1.286 0 0 1-1.281-1.295v-2.563z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNRCH.displayName = 'NRCH'
