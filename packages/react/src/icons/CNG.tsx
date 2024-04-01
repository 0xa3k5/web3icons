import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconCNG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.286 7.226v4.345L15 10.5V6zm2.511 4.024-2.94 1.607L15 14.143l3.857-2.233-1.183-.686a1.84 1.84 0 0 0-1.877.026M15 15.643l-3.428-2.357v2.357L15 18zm-4.286.098V12.43L9 13.286V18l.93-.647c.553-.36.784-.934.784-1.612m.575-4.658L9.163 9.857l-4.02 2.447 1.89 1.226zm1.14-2.554L8.572 6v1.586c0 .531.278 1.024.728 1.285l3.129 1.865z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0FF"
            d="M13.285 7.226v4.345L15 10.5V6zm2.512 4.024-2.94 1.607L15 14.143l3.857-2.233-1.183-.686a1.84 1.84 0 0 0-1.877.026M15 15.643l-3.429-2.357v2.357L15 18zm-4.286.098V12.43L9 13.286V18l.93-.647c.553-.36.784-.934.784-1.612m.574-4.658L9.163 9.857l-4.02 2.447 1.89 1.226zm1.14-2.554L8.571 6v1.586c0 .531.279 1.024.729 1.285l3.128 1.865z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCNG.displayName = 'CNG'
