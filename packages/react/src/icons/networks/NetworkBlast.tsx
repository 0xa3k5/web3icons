import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkBlast = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m16.607 11.905 2.523-1.257.87-2.67-1.74-1.265H6.679L4 8.702h13.615l-.724 2.239h-5.46l-.525 1.636h5.46l-1.533 4.71 2.558-1.265.913-2.825-1.714-1.257z"
          />
          <path
            fill="currentColor"
            d="m7.85 15.264 1.575-4.909-1.748-1.309-2.626 8.241h9.782l.655-2.023z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FCFC03"
            d="m16.607 11.905 2.523-1.257.87-2.67-1.74-1.265H6.679L4 8.702h13.615l-.724 2.239h-5.46l-.525 1.636h5.46l-1.533 4.71 2.558-1.265.913-2.825-1.714-1.257z"
          />
          <path
            fill="#FCFC03"
            d="m7.85 15.264 1.575-4.909-1.748-1.309-2.626 8.241h9.782l.655-2.023z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkBlast.displayName = 'blast'
