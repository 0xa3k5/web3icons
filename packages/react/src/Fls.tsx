import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconFLS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.55 15c2.52.639 3.064 1.86 3.017 2.392L8.55 18.857h-.6A1.94 1.94 0 0 1 6 16.93 1.94 1.94 0 0 1 7.95 15zm2.374.142-4.881-2.409C5.7 10.702 7.316 10.256 8.48 10.29c.305.005.6.107.87.245 1.213.617 3.343 1.692 4.62 2.322 1.44.708 1.543 1.818 1.415 2.285l-3.206 1.573a2.83 2.83 0 0 0-1.256-1.573"
          />
          <path
            fill="currentColor"
            d="M14.936 12.365 6 7.929C6 5.7 7.646 5.143 8.533 5.143c.711 0 1.238.176 1.414.266a1689 1689 0 0 1 7.599 3.711c1.461.729 2.168 1.187 2.168 2.4 0 1.114-.471 1.685-.913 1.912-.681.347-1.812.908-2.378 1.14a2.8 2.8 0 0 0-1.487-2.207"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#FLS__a)"
            d="M8.55 15c2.52.639 3.064 1.86 3.017 2.392L8.55 18.857h-.6A1.94 1.94 0 0 1 6 16.93 1.94 1.94 0 0 1 7.95 15zm2.374.142-4.881-2.409C5.7 10.702 7.316 10.256 8.48 10.29c.305.005.6.107.87.245 1.213.617 3.343 1.692 4.62 2.322 1.44.708 1.543 1.818 1.415 2.285l-3.206 1.573a2.83 2.83 0 0 0-1.256-1.573"
          />
          <path
            fill="url(#FLS__b)"
            d="M14.936 12.365 6 7.929C6 5.7 7.646 5.143 8.533 5.143c.711 0 1.238.176 1.414.266a1689 1689 0 0 1 7.599 3.711c1.461.729 2.168 1.187 2.168 2.4 0 1.114-.471 1.685-.913 1.912-.681.347-1.812.908-2.378 1.14a2.8 2.8 0 0 0-1.487-2.207"
          />
          <defs>
            <linearGradient
              id="FLS__a"
              x1="19.714"
              x2="5.996"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5B8AFF" />
              <stop offset=".99" stopColor="#3F58FF" />
            </linearGradient>
            <linearGradient
              id="FLS__b"
              x1="19.714"
              x2="5.996"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5B8AFF" />
              <stop offset=".99" stopColor="#3F58FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconFLS.displayName = 'FLS'
