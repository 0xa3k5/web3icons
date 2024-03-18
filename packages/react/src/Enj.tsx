import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconEnj = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.614 15.429h-5.8c-1.358-.003-2.281-.968-2.826-2.143h8.75c.717 0 1.262-.59 1.262-1.286s-.545-1.286-1.262-1.286H7.87c.428-1.168 1.651-2.144 2.943-2.143h5.8c.717 0 1.263-.547 1.263-1.237 0-.695-.553-1.334-1.262-1.334h-5.8c-3.134 0-5.67 2.696-5.67 6v.18c.045 1.558.662 3.036 1.72 4.122s2.474 1.695 3.95 1.698h5.8c.717 0 1.262-.639 1.262-1.334s-.545-1.237-1.262-1.237"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ENJ__a)"
            d="M16.613 15.429h-5.8c-1.358-.003-2.28-.968-2.826-2.143h8.75c.718 0 1.263-.59 1.263-1.286s-.545-1.286-1.262-1.286H7.87c.428-1.168 1.65-2.144 2.943-2.143h5.8c.716 0 1.262-.547 1.262-1.237 0-.695-.552-1.334-1.262-1.334h-5.8c-3.133 0-5.67 2.696-5.67 6v.18a6.17 6.17 0 0 0 1.72 4.122c1.058 1.086 2.475 1.695 3.95 1.698h5.8c.717 0 1.262-.639 1.262-1.334s-.545-1.237-1.262-1.237"
          />
          <defs>
            <linearGradient
              id="ENJ__a"
              x1="17.41"
              x2="8.32"
              y1="15.093"
              y2="6.642"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9468FF" />
              <stop offset="1" stopColor="#ADF8FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconEnj.displayName = 'Enj'

export default IconEnj
