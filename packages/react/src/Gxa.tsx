import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGxa = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 17.143a5.22 5.22 0 0 1-5.113-4.286H5.143c.467 3.386 3.433 6 6.857 6s6.39-2.614 6.857-6h-1.744A5.22 5.22 0 0 1 12 17.143m0-10.286a5.23 5.23 0 0 1 4.886 3.429h-1.894a3.44 3.44 0 0 0-3.013-1.701C10.166 8.619 8.576 10.17 8.572 12a3.51 3.51 0 0 0 3.407 3.429 3.446 3.446 0 0 0 3.368-2.572h-3.133a1.69 1.69 0 0 1 0-1.714h6.643c-.467-3.386-3.432-6-6.857-6-3.424 0-6.39 2.614-6.857 6h1.744C7.316 8.692 9.51 6.844 12 6.857"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GXA__a)"
            d="M12 17.143a5.22 5.22 0 0 1-5.113-4.286H5.143c.467 3.386 3.432 6 6.857 6 3.424 0 6.39-2.614 6.857-6h-1.744A5.22 5.22 0 0 1 12 17.143m0-10.286a5.23 5.23 0 0 1 4.885 3.429h-1.894a3.44 3.44 0 0 0-3.013-1.701C10.165 8.619 8.575 10.17 8.571 12a3.51 3.51 0 0 0 3.407 3.429 3.446 3.446 0 0 0 3.369-2.572h-3.133a1.69 1.69 0 0 1 0-1.714h6.643c-.467-3.386-3.433-6-6.857-6s-6.39 2.614-6.857 6h1.744C7.315 8.692 9.51 6.844 12 6.857"
          />
          <defs>
            <linearGradient
              id="GXA__a"
              x1="5.983"
              x2="18.055"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#13EFCF" />
              <stop offset=".48" stopColor="#A472FF" />
              <stop offset="1" stopColor="#543FFF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconGxa.displayName = 'Gxa'

export default IconGxa
