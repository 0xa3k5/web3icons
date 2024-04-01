import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconTHETA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.285 4.717h-8.57v14.57h8.57zm-9.428 0v14.57l.857.858h8.572l.857-.857V4.717l-.858-.858h-8.57z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.572 9.857H9.429v.857h5.143v-.857h-2.143V7.286h-.857zm0 4.286H9.429v-.857h5.143v.857h-2.143v2.571h-.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#THETA__a)"
            d="M16.286 4.717H7.715v14.57h8.571zm-9.429 0v14.57l.858.858h8.571l.857-.857V4.717l-.857-.858H7.715z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#THETA__b)"
            d="M11.572 9.857H9.429v.857h5.143v-.857h-2.143V7.286h-.857zm0 4.286H9.429v-.857h5.143v.857h-2.143v2.571h-.857z"
          />
          <defs>
            <linearGradient
              id="THETA__a"
              x1="5.509"
              x2="18.818"
              y1="5.085"
              y2="19.099"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2AB8E6" />
              <stop offset=".53" stopColor="#29CAD2" />
              <stop offset="1" stopColor="#2EE4BE" />
            </linearGradient>
            <linearGradient
              id="THETA__b"
              x1="8.754"
              x2="16.435"
              y1="7.995"
              y2="14.98"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2AB8E6" />
              <stop offset=".53" stopColor="#29CAD2" />
              <stop offset="1" stopColor="#2EE4BE" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTHETA.displayName = 'THETA'
