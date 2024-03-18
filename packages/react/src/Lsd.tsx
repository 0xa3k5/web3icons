import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLsd = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.061 18.857C14.597 16.106 13.016 15 11.576 15c-1.273 0-2.443.883-4.016 2.143l-.746-.857c2.276-3.729 1.016-5.473-1.243-8.529l.742-.9c3.63 2.272 6.248 3.369 9.943-1.714l.917.634C16.26 7.8 15.908 9.472 15.93 11.05c.03 2.314.926 4.423 2.07 7.136z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#LSD__a)"
            d="M17.061 18.857C14.597 16.106 13.016 15 11.576 15c-1.273 0-2.443.883-4.016 2.143l-.746-.857c2.276-3.729 1.016-5.473-1.243-8.529l.742-.9c3.63 2.272 6.248 3.369 9.943-1.714l.917.634C16.26 7.8 15.908 9.472 15.93 11.05c.03 2.314.926 4.423 2.07 7.136z"
          />
          <defs>
            <linearGradient
              id="LSD__a"
              x1="11.786"
              x2="11.786"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6F76FB" />
              <stop offset="1" stopColor="#2730EC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconLsd.displayName = 'Lsd'

export default IconLsd
