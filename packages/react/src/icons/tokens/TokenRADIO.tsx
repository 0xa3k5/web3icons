import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenRADIO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18 12c0 3.27-2.73 6-6 6a5.97 5.97 0 0 1-4.166-1.714H9.43v-2.572h1.101l1.959 2.572h2.451l-2.083-2.572c1.072-.214 2.143-1.5 2.143-3 0-2.142-2.018-3-3-3H7.834A5.97 5.97 0 0 1 12 6c3.27 0 6 2.73 6 6M7.286 8.323A5.96 5.96 0 0 0 6 12a5.96 5.96 0 0 0 1.286 3.677zm12 3.677a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0m-7.715 0H9.43V9.43h2.143c.642 0 1.285.334 1.285 1.285 0 .952-.643 1.286-1.285 1.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#EC1D25"
            d="M18 12c0 3.27-2.73 6-6 6a5.97 5.97 0 0 1-4.166-1.714h1.594v-2.572h1.102l1.958 2.572h2.452l-2.083-2.572c1.071-.214 2.143-1.5 2.143-3 0-2.142-2.019-3-3-3H7.834A5.97 5.97 0 0 1 12 6c3.27 0 6 2.73 6 6M7.285 8.323A5.96 5.96 0 0 0 6 12a5.96 5.96 0 0 0 1.285 3.677zm12 3.677a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0m-7.714 0H9.428V9.43h2.143c.643 0 1.286.334 1.286 1.285 0 .952-.643 1.286-1.286 1.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenRADIO.displayName = 'RADIO'
