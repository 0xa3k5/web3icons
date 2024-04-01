import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPOLS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.143 5.571h5.352A4.93 4.93 0 0 1 18.43 10.5a4.93 4.93 0 0 1-4.934 4.928h-1.923v3.429h-3.43v-1.766a3.32 3.32 0 0 0 2.469-3.216 3.32 3.32 0 0 0-2.469-3.217zm3.429 2.572h1.992c1.267 0 2.293 1.055 2.293 2.357s-1.026 2.357-2.293 2.357h-1.992zM7.286 16.07a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF3364"
            d="M8.143 5.571h5.352a4.93 4.93 0 0 1 4.933 4.929 4.93 4.93 0 0 1-4.933 4.928H11.57v3.429H8.143v-1.766a3.32 3.32 0 0 0 2.468-3.216 3.32 3.32 0 0 0-2.468-3.217zm3.428 2.572h1.992c1.267 0 2.294 1.055 2.294 2.357s-1.027 2.357-2.294 2.357h-1.992zM7.285 16.07a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPOLS.displayName = 'POLS'
