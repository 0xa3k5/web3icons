import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAiri = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.493 12.857a5.58 5.58 0 0 0 4.65 4.659v1.77a7.34 7.34 0 0 1-6.429-6.429zm4.65-6.373a5.58 5.58 0 0 0-4.65 4.659H4.714a7.34 7.34 0 0 1 6.429-6.429zm6.364 4.659a5.575 5.575 0 0 0-4.65-4.659v-1.77a7.34 7.34 0 0 1 6.429 6.429zm-4.65 6.373a5.58 5.58 0 0 0 4.65-4.659h1.779a7.34 7.34 0 0 1-6.429 6.429zm-2.151-2.944H8.104L9.407 12h2.439l-1.136-1.984L12 7.714l3.9 6.858h-2.584l-1.389-2.422z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AIRI__a)">
            <path fill="#F0F3FA" d="M0 0h24v24H0z" />
            <path
              fill="#000"
              d="M6.493 12.857a5.58 5.58 0 0 0 4.65 4.659v1.77a7.34 7.34 0 0 1-6.429-6.429zm4.65-6.373a5.58 5.58 0 0 0-4.65 4.659H4.714a7.34 7.34 0 0 1 6.429-6.429zm6.364 4.659a5.575 5.575 0 0 0-4.65-4.659v-1.77a7.34 7.34 0 0 1 6.429 6.429zm-4.65 6.373a5.58 5.58 0 0 0 4.65-4.659h1.779a7.34 7.34 0 0 1-6.429 6.429zm-2.151-2.944H8.104L9.407 12h2.439l-1.136-1.984L12 7.714l3.9 6.858h-2.584l-1.389-2.422z"
            />
          </g>
          <defs>
            <clipPath id="AIRI__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAiri.displayName = 'Airi'

export default IconAiri
