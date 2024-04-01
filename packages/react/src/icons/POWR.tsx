import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPOWR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m11.963 5.157 2.285 2.285-2.285 2.288-2.29-2.283z"
            opacity=".9"
          />
          <path
            fill="currentColor"
            d="m8.519 6.113 3.138.77-.77 3.143-3.138-.77.77-3.15z"
            opacity=".85"
          />
          <path
            fill="currentColor"
            d="m15.376 6.086-1.883.507.85.854-1.536 1.535.29 1.07 3.123-.843z"
            opacity=".3"
          />
          <path
            fill="currentColor"
            d="m17.855 8.565-.77 3.139-3.144-.766.77-3.143z"
            opacity=".35"
          />
          <path
            fill="currentColor"
            d="m18.857 12.014-2.236 2.343-2.337-2.231 2.236-2.342 2.337 2.236z"
            opacity=".4"
          />
          <path
            fill="currentColor"
            d="m17.908 15.585-3.138.781-.781-3.138 3.138-.781z"
            opacity=".45"
          />
          <path
            fill="currentColor"
            d="m15.418 18.028-3.139-.77.765-3.133 3.144.77-.77 3.138z"
            opacity=".5"
          />
          <path
            fill="currentColor"
            d="m11.974 18.983-2.285-2.284 2.285-2.29 2.289 2.29z"
            opacity=".55"
          />
          <path
            fill="currentColor"
            d="m8.566 18.107-.844-3.123 3.118-.844.844 3.118-3.118.844z"
            opacity=".6"
          />
          <path
            fill="currentColor"
            d="m6.04 15.496.764-3.139 3.144.77-.77 3.139-3.144-.77z"
            opacity=".65"
          />
          <path
            fill="currentColor"
            d="m5.143 12.152 2.284-2.29 2.289 2.29-2.284 2.284z"
            opacity=".7"
          />
          <path
            fill="currentColor"
            d="m5.987 8.57 3.128-.775.78 3.138-3.138.781-.78-3.138z"
            opacity=".75"
          />
        </>
      ) : (
        <>
          <path
            fill="#45DAE2"
            d="m11.963 5.157 2.285 2.285-2.285 2.288-2.29-2.283z"
            opacity=".9"
          />
          <path
            fill="#45DAE2"
            d="m8.52 6.113 3.138.77-.77 3.143-3.139-.77.77-3.15z"
            opacity=".85"
          />
          <path
            fill="#45DAE2"
            d="m15.376 6.086-1.884.507.85.854-1.535 1.535.29 1.07 3.122-.843z"
            opacity=".3"
          />
          <path
            fill="#45DAE2"
            d="m17.856 8.565-.77 3.139-3.145-.766.77-3.143z"
            opacity=".35"
          />
          <path
            fill="#45DAE2"
            d="m18.858 12.014-2.237 2.343-2.337-2.231 2.237-2.342 2.337 2.236z"
            opacity=".4"
          />
          <path
            fill="#45DAE2"
            d="m17.908 15.585-3.139.781-.78-3.138 3.138-.781z"
            opacity=".45"
          />
          <path
            fill="#45DAE2"
            d="m15.418 18.028-3.139-.77.765-3.133 3.144.77-.77 3.138z"
            opacity=".5"
          />
          <path
            fill="#45DAE2"
            d="m11.974 18.983-2.285-2.284 2.285-2.29 2.289 2.29z"
            opacity=".55"
          />
          <path
            fill="#45DAE2"
            d="m8.566 18.107-.844-3.123 3.117-.844.844 3.118-3.117.844z"
            opacity=".6"
          />
          <path
            fill="#45DAE2"
            d="m6.04 15.496.764-3.139 3.144.77-.77 3.139-3.144-.77z"
            opacity=".65"
          />
          <path
            fill="#45DAE2"
            d="m5.143 12.152 2.284-2.29 2.288 2.29-2.283 2.284z"
            opacity=".7"
          />
          <path
            fill="#45DAE2"
            d="m5.987 8.57 3.128-.775.78 3.138-3.138.781-.78-3.138z"
            opacity=".75"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPOWR.displayName = 'POWR'
