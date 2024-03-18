import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLvl = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.857 5.143h4.286v3H6.857zm0 5.143h7.286v3H6.857zm0 5.143h11.571v3H6.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFB313"
            d="M6.857 5.143h4.286v3H6.857zm0 5.143h7.286v3H6.857zm0 5.143H18.43v3H6.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLvl.displayName = 'Lvl'

export default IconLvl
