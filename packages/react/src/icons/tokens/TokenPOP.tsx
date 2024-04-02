import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPOP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.429 13.714h12V8.571h2.143v6.857H6.429zm-.857 1.714H3.429V8.571h14.143v1.715h-12zm12-2.571v-1.714H6.429v1.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#POP__a)"
            d="M6.429 13.714h12V8.571h2.143v6.857H6.429zm-.857 1.714H3.429V8.571h14.143v1.715h-12zm12-2.571v-1.714H6.429v1.714z"
          />
          <defs>
            <linearGradient
              id="POP__a"
              x1="12.429"
              x2="9.857"
              y1="7.714"
              y2="15.428"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00BAC9" />
              <stop offset=".12" stopColor="#2060B2" />
              <stop offset=".18" stopColor="#7046B2" />
              <stop offset=".24" stopColor="#CC83A1" />
              <stop offset=".3" stopColor="#663FA9" />
              <stop offset=".37" stopColor="#3557B8" />
              <stop offset=".45" stopColor="#8851B7" />
              <stop offset=".56" stopColor="#E096AC" />
              <stop offset=".75" stopColor="#7443B7" />
              <stop offset=".91" stopColor="#8F48A9" />
              <stop offset="1" stopColor="#C379AD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenPOP.displayName = 'POP'
