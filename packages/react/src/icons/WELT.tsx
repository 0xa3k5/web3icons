import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWELT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.435 5.1a.86.86 0 0 1-.253 1.192L7.324 12.72a.858.858 0 0 1-.934-1.44l9.857-6.428a.857.857 0 0 1 1.188.252zm-4.15 12.686a1.072 1.072 0 1 1-2.142 0 1.072 1.072 0 0 1 2.143 0m3.9-7.423a.859.859 0 1 0-.942-1.436l-9.857 6.429a.86.86 0 0 0 .943 1.436z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#WELT__a)"
            d="M17.434 5.1a.856.856 0 0 1-.253 1.192L7.324 12.72a.858.858 0 0 1-.934-1.44l9.857-6.428a.857.857 0 0 1 1.187.252zm-4.149 12.686a1.071 1.071 0 1 1-2.142 0 1.071 1.071 0 0 1 2.142 0m3.9-7.423a.86.86 0 0 0-.942-1.436l-9.858 6.429a.86.86 0 0 0 .943 1.436z"
          />
          <defs>
            <linearGradient
              id="WELT__a"
              x1="16.714"
              x2="6"
              y1="8.786"
              y2="15.643"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CD5792" />
              <stop offset=".49" stopColor="#B041AD" />
              <stop offset="1" stopColor="#7F67CF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconWELT.displayName = 'WELT'
