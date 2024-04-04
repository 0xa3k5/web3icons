import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkZksync = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m20 12-4.539-3.998v2.93l-4.506 2.931 4.506.002V16zM4 12l4.539 4v-2.9l4.475-2.933-4.473-.002V8z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="m20 12-4.539-3.998v2.93l-4.506 2.931 4.506.002V16zM4 12l4.539 4v-2.9l4.475-2.933-4.473-.002V8z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkZksync.displayName = 'zksync'
