import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconDivi = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.041 5.572H6c.896 2.078 2.066 3 3.519 3h3.355c1.342 0 2.85 1.697 2.85 3.428 0 1.732-1.508 3.429-2.85 3.429h-2.588v-3.832H7.204v6.832h5.837c2.85 0 5.816-2.096 5.816-6.429s-2.966-6.428-5.816-6.428"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DIVI__a)"
            d="M13.041 5.572H6c.896 2.078 2.066 3 3.519 3h3.355c1.342 0 2.85 1.697 2.85 3.428 0 1.732-1.508 3.429-2.85 3.429h-2.588v-3.832H7.204v6.832h5.837c2.85 0 5.816-2.096 5.816-6.429s-2.966-6.428-5.816-6.428"
          />
          <defs>
            <linearGradient
              id="DIVI__a"
              x1="18.001"
              x2="7.405"
              y1="7.753"
              y2="16.535"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EC1F55" />
              <stop offset="1" stopColor="#EC2928" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDivi.displayName = 'Divi'

export default IconDivi
