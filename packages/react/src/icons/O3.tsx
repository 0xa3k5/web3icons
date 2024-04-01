import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconO3 = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.571 16.714h8.143a2.572 2.572 0 0 0 1.975-4.218 2.356 2.356 0 1 0-3.545-3.103c-.197.283-.344.862.044 1.206.381.34.942.203 1.24-.075a.643.643 0 1 1 .486 1.048l.002.003c-.488 0-1.061.336-1.061 1.068 0 .733.584 1.032 1.06 1.064v.002h.01a.646.646 0 1 1 0 1.292q-.118 0-.216-.004v.004H9.108l.001-.002a3.43 3.43 0 1 1 2.864-1.714c-.288.513-.27.869.088 1.157.626.313 1.215-.025 1.347-.22a5.143 5.143 0 1 0-4.837 2.475z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#O3__a)"
            d="M8.572 16.714h8.143a2.572 2.572 0 0 0 1.974-4.218 2.358 2.358 0 1 0-3.537-3.116l-.008.013c-.197.283-.343.862.044 1.206.382.34.942.203 1.241-.075a.643.643 0 1 1 .486 1.048l.001.003c-.488 0-1.06.336-1.06 1.068 0 .733.583 1.032 1.06 1.064v.002h.01a.646.646 0 1 1 0 1.292q-.12 0-.216-.004l-.001.004h-7.6v-.002a3.43 3.43 0 1 1 2.864-1.714c-.288.513-.269.869.089 1.157.626.313 1.215-.025 1.347-.22a5.143 5.143 0 1 0-4.837 2.475z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="O3__a"
              x1="11.572"
              x2="10.428"
              y1="6.429"
              y2="16.297"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42B06B" />
              <stop offset="1" stopColor="#06AF8F" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconO3.displayName = 'O3'
