import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAssa = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18.429 16.714-5.7-12-3.695 7.5-2.901.502-.347.57h5.571l-5.751.428-.463.857 5.786-.214-6 .643-.215.643 5.786-.214-6 .643-.214.642H9.3c.84 0 1.401-.998 1.577-1.5l1.851-4.5 1.483 3H12.63l1.054 3z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#ASSA__a)">
            <path fill="#EF2525" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="m18.429 16.714-5.7-12-3.695 7.5-2.901.502-.347.57h5.571l-5.751.428-.463.857 5.786-.214-6 .643-.215.643 5.786-.214-6 .643-.214.642H9.3c.84 0 1.401-.998 1.577-1.5l1.851-4.5 1.483 3H12.63l1.054 3z"
            />
          </g>
          <defs>
            <clipPath id="ASSA__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAssa.displayName = 'Assa'

export default IconAssa
