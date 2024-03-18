import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLyra = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.957 9.604 12.57 12H6.523c-.437 0-.656-.501-.36-.801l6.759-6.802a.377.377 0 0 1 .604.103l1.684 3.75a1.21 1.21 0 0 1-.253 1.354m-9.814 2.825c.137.184.63.428 1.483.428h9.386c.544 0 1.037.317 1.251.814l1.556 3.678a.472.472 0 0 1-.437.651H8.589a1.54 1.54 0 0 1-1.415-.917z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#LYRA__a)"
            d="M14.957 9.604 12.57 12H6.523c-.438 0-.656-.501-.36-.801l6.758-6.802a.378.378 0 0 1 .604.103l1.685 3.75a1.21 1.21 0 0 1-.253 1.354"
          />
          <path
            fill="url(#LYRA__b)"
            d="M5.143 12.429c.137.184.63.428 1.482.428h9.386c.544 0 1.037.317 1.252.814l1.555 3.678a.472.472 0 0 1-.437.651H8.588a1.54 1.54 0 0 1-1.414-.917z"
          />
          <defs>
            <linearGradient
              id="LYRA__a"
              x1="11.998"
              x2="11.998"
              y1="4.284"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5ADCD3" />
              <stop offset="1" stopColor="#37C4B1" />
            </linearGradient>
            <linearGradient
              id="LYRA__b"
              x1="17.207"
              x2="6.87"
              y1="13.449"
              y2="17.229"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#47D1C1" />
              <stop offset="1" stopColor="#21BFA1" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconLyra.displayName = 'Lyra'

export default IconLyra
