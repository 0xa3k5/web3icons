import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSHIDO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.838 6.536A1.83 1.83 0 0 1 12 8.357a1.83 1.83 0 0 1-1.839-1.821A1.83 1.83 0 0 1 12 4.714c1.016 0 1.838.815 1.838 1.822M9 11.143v1.38l1.886 1.191L12 12.986zm6 0v1.38l-1.886 1.191L12 12.986zm-1.946-2.841a2.045 2.045 0 0 0 .964-2.208l4.41 2.456v2.374l-2.142 1.149v-1.976l-3.232-1.8zm3.232 4.932 2.142-1.17v3.643L12 19.286l-6.43-3.579v-3.655l2.143 1.17v1.64L12 17.243l4.286-2.38zM5.57 8.55v2.357l2.143 1.153v-1.963l3.232-1.8a2.04 2.04 0 0 1-.965-2.203z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SHIDO__a)"
            d="M13.838 6.536A1.83 1.83 0 0 1 12 8.357a1.83 1.83 0 0 1-1.839-1.821A1.83 1.83 0 0 1 12 4.714c1.016 0 1.838.815 1.838 1.822M9 11.143v1.38l1.886 1.191L12 12.986zm6 0v1.38l-1.886 1.191L12 12.986zm-1.946-2.841a2.045 2.045 0 0 0 .964-2.208l4.41 2.456v2.374l-2.142 1.149v-1.976l-3.232-1.8zm3.232 4.932 2.142-1.17v3.643L12 19.286l-6.43-3.579v-3.655l2.143 1.17v1.64L12 17.243l4.286-2.38zM5.57 8.55v2.357l2.143 1.153v-1.963l3.232-1.8a2.04 2.04 0 0 1-.965-2.203z"
          />
          <defs>
            <linearGradient
              id="SHIDO__a"
              x1="18.428"
              x2="8.104"
              y1="8.957"
              y2="16.187"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009CFF" />
              <stop offset="1" stopColor="#0070FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSHIDO.displayName = 'SHIDO'
