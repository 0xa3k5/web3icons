import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCCD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          <path
            fill="currentColor"
            d="M14.143 7.311a5.155 5.155 0 0 0-7.286 4.668c0 2.85 2.344 5.164 5.186 5.164.75 0 1.457-.167 2.1-.454v2.288a7.333 7.333 0 0 1-9.429-6.998 7.3 7.3 0 0 1 9.429-6.956zm4.5 7.676h-2.464a5.14 5.14 0 0 0 0-6.017h2.46a7.3 7.3 0 0 1 0 6.017z"
          />
        </>
      ) : (
        <>
          <path fill="#000" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          <path
            fill="#000"
            d="M14.142 7.311a5.155 5.155 0 0 0-7.285 4.668c0 2.85 2.344 5.164 5.185 5.164.75 0 1.458-.167 2.1-.454v2.288a7.333 7.333 0 0 1-9.428-6.998 7.3 7.3 0 0 1 9.428-6.956zm4.5 7.676h-2.464a5.14 5.14 0 0 0 0-6.017h2.46a7.3 7.3 0 0 1 0 6.017z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCCD.displayName = 'CCD'
