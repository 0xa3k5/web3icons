import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTOWER = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m15.428 5.571-.254 1.286H13.16l-.302-1.286h-1.714l-.23 1.286H8.827l-.214-1.286H6.857l.429 3.857h9.428l.429-3.857zM7.286 9.857l.625 6.685 4.082 3.6.007-.04.007.04 4.082-3.6.625-6.685zm1.285 1.714h2.572v6.215L9 15.857zm4.286 6.215V11.57h2.571L15 15.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="m15.429 5.571-.254 1.286H13.16l-.303-1.286h-1.714l-.229 1.286H8.827l-.215-1.286H6.857l.429 3.857h9.429l.428-3.857zM7.286 9.857l.626 6.685 4.081 3.6.007-.04.008.04 4.081-3.6.626-6.685zm1.286 1.714h2.571v6.215L9 15.857zm4.285 6.215V11.57h2.572L15 15.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTOWER.displayName = 'TOWER'
