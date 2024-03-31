import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMLN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.286 6.857c-.712 0-1.286.591-1.286 1.32V12H9.428V9.433a.857.857 0 1 0-1.714 0V12H5.571v-.857a.857.857 0 1 0-1.714 0V12H5.57v1.384c0 .656.48 1.187 1.072 1.187.591 0 1.071-.531 1.071-1.187V12h1.714v3.8a1.316 1.316 0 0 0 1.286 1.342c.711 0 1.286-.6 1.286-1.342V12h2.571v3.013c0 .467.386.844.857.844a.85.85 0 0 0 .857-.844V12H18v.857a.857.857 0 1 0 1.714 0V12H18V9.308c0-.407-.386-.737-.857-.737-.472 0-.858.33-.858.737V12h-1.714V8.177c0-.729-.574-1.32-1.285-1.32"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MLN__a)"
            d="M13.286 6.857c-.711 0-1.286.591-1.286 1.32V12H9.43V9.433a.857.857 0 1 0-1.714 0V12H5.572v-.857a.857.857 0 1 0-1.715 0V12h1.715v1.384c0 .656.48 1.187 1.071 1.187.592 0 1.072-.531 1.072-1.187V12h1.714v3.8a1.316 1.316 0 0 0 1.286 1.342c.711 0 1.285-.6 1.285-1.342V12h2.572v3.013a.85.85 0 0 0 .857.844.85.85 0 0 0 .857-.844V12H18v.857a.857.857 0 1 0 1.715 0V12H18V9.308c0-.407-.385-.737-.857-.737-.471 0-.857.33-.857.737V12h-1.714V8.177c0-.729-.575-1.32-1.286-1.32"
          />
          <defs>
            <linearGradient
              id="MLN__a"
              x1="11.786"
              x2="11.786"
              y1="6.857"
              y2="17.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".24" stopColor="#6F4AEF" />
              <stop offset=".66" stopColor="#01CBBF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMLN.displayName = 'MLN'
