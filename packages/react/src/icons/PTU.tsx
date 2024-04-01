import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPTU = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.843 5.571h-3.686a3.343 3.343 0 0 0-3.3 3.386V18H9V8.957c0-.771.399-1.243 1.157-1.243h3.686c.758 0 1.157.467 1.157 1.243V18h2.143V8.957a3.34 3.34 0 0 0-3.3-3.386"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PTU__a)"
            d="M13.842 5.571h-3.685a3.343 3.343 0 0 0-3.3 3.386V18H9V8.957c0-.771.398-1.243 1.157-1.243h3.685c.759 0 1.158.467 1.158 1.243V18h2.142V8.957a3.344 3.344 0 0 0-3.3-3.386"
          />
          <defs>
            <linearGradient
              id="PTU__a"
              x1="8.121"
              x2="18.24"
              y1="10.037"
              y2="15.703"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A68F4" />
              <stop offset="1" stopColor="#3DFFB9" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPTU.displayName = 'PTU'
