import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPXP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.715 5.143H12V6.43H8.143v1.714H9v9h-.857v1.714h3.429v-1.714h-.857v-3H12v1.286h1.714v-1.286c2.135-.017 3.858-1.748 3.858-3.857a3.88 3.88 0 0 0-3.857-3.857zm-3 7.286V8.143h2.978a2.15 2.15 0 0 1 2.164 2.143 2.154 2.154 0 0 1-2.164 2.143z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PXP__a)"
            d="M13.714 5.143H12V6.43H8.143v1.714H9v9h-.857v1.714h3.428v-1.714h-.857v-3H12v1.286h1.714v-1.286c2.134-.017 3.857-1.748 3.857-3.857a3.88 3.88 0 0 0-3.857-3.857zm-3 7.286V8.143h2.979a2.15 2.15 0 0 1 2.164 2.143 2.154 2.154 0 0 1-2.164 2.143z"
          />
          <defs>
            <linearGradient
              id="PXP__a"
              x1="12.857"
              x2="12.857"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5BC5F7" />
              <stop offset="1" stopColor="#057EFF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPXP.displayName = 'PXP'
