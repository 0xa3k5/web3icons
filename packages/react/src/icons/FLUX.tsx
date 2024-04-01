import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconFLUX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.428 8.357 12 4.714 5.57 8.357v3.363l2.143-1.214 2.143 1.214v-.934l4.929-2.833 3.642 2.094zm0 7.286-3.783 2.144-3.502-2.043v-4.25l3.643-2.124 3.642 2.124zm-5.025 2.848L12 19.286l-3.036-1.72 1.425-.807zm-5.618-1.594 2.072-1.208v-2.5l-2.143-1.25-2.143 1.25v2.454z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2C61D3"
            d="M18.428 8.357 12 4.714 5.57 8.357v3.363l2.143-1.214 2.143 1.214v-.934l4.929-2.833 3.642 2.094zm0 7.286-3.783 2.144-3.502-2.043v-4.25l3.643-2.124 3.642 2.124zm-5.025 2.848L12 19.286l-3.036-1.72 1.425-.807zm-5.618-1.594 2.072-1.208v-2.5l-2.143-1.25-2.143 1.25v2.454z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFLUX.displayName = 'FLUX'
