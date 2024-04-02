import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenRAY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18 10.286v5.143l-6 3.325-6-3.326V8.572l6-3.337 4.72 2.509.712-.4L12 4.286 5.143 8.144v7.712L12 19.714l6.857-3.858v-6.18z"
          />
          <path
            fill="currentColor"
            d="M10.715 15.429H9.429v-3.43h3c.652-.006 1.284-.434 1.285-1.095.008-.65-.64-1.051-1.285-1.047h-3V8.571h3.253c1.373 0 2.307 1.03 2.318 2.333.012 1.407-1.102 2.382-2.664 2.382h-1.622z"
          />
          <path
            fill="currentColor"
            d="M15.22 15.429h-1.494l-.924-1.625c.366-.022.994-.172 1.348-.364zm2.137-6.413.75.412.75-.412v-.871l-.75-.43-.75.43z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RAY__a)"
            d="M18 10.286v5.143l-6 3.325-6-3.326V8.572l6-3.337 4.72 2.509.712-.4L12 4.286 5.143 8.144v7.712L12 19.714l6.857-3.858v-6.18z"
          />
          <path
            fill="url(#RAY__b)"
            d="M10.714 15.429H9.428v-3.43h3c.652-.006 1.284-.434 1.286-1.095.008-.65-.64-1.051-1.286-1.047h-3V8.571h3.253c1.373 0 2.308 1.03 2.319 2.333.011 1.407-1.103 2.382-2.665 2.382h-1.621z"
          />
          <path
            fill="url(#RAY__c)"
            d="M15.22 15.429h-1.494l-.925-1.625c.366-.022.994-.172 1.349-.364z"
          />
          <path
            fill="url(#RAY__d)"
            d="m17.357 9.016.75.412.75-.412v-.871l-.75-.43-.75.43z"
          />
          <defs>
            <linearGradient
              id="RAY__a"
              x1="18.845"
              x2="4.41"
              y1="8.148"
              y2="14.072"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C200FB" />
              <stop offset=".49" stopColor="#3773FE" />
              <stop offset="1" stopColor="#5AC4BE" />
            </linearGradient>
            <linearGradient
              id="RAY__b"
              x1="28.322"
              x2="-6.23"
              y1="3.333"
              y2="18.846"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C200FB" />
              <stop offset=".49" stopColor="#3773FE" />
              <stop offset="1" stopColor="#5AC4BE" />
            </linearGradient>
            <linearGradient
              id="RAY__c"
              x1="39.409"
              x2="-48.331"
              y1="-36.785"
              y2="-10.477"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C200FB" />
              <stop offset=".49" stopColor="#3773FE" />
              <stop offset="1" stopColor="#5AC4BE" />
            </linearGradient>
            <linearGradient
              id="RAY__d"
              x1="18.859"
              x2="3.521"
              y1="8.146"
              y2="14.342"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C200FB" />
              <stop offset=".49" stopColor="#3773FE" />
              <stop offset="1" stopColor="#5AC4BE" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenRAY.displayName = 'RAY'
