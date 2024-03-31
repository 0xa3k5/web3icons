import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCDAI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.143 6.386a8.02 8.02 0 0 0-4.929-1.672c-4.14 0-7.5 3.262-7.5 7.286s3.36 7.286 7.5 7.286a7.64 7.64 0 0 0 4.929-1.783l-.814-.986A6.36 6.36 0 0 1 12.214 18C8.786 18 6 15.313 6 12s2.786-6 6.214-6c1.509 0 3.035.514 4.115 1.38z"
          />
          <path
            fill="currentColor"
            d="M12.214 9H9.857v2.143H9v.428h.857v.858H9v.428h.857v1.715h2.357a2.785 2.785 0 0 0 2.572-1.715h.643v-.428h-.502c.066-.281.087-.57.065-.857h.437v-.429h-.502A2.786 2.786 0 0 0 12.214 9m2.272 3.429c.078-.279.104-.57.077-.857h-4.277v.857zm-4.2.428v1.286h1.928a2.36 2.36 0 0 0 2.1-1.286zm0-1.714h4.2a2.36 2.36 0 0 0-2.272-1.714h-1.928z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CDAI__a)"
            d="M17.142 6.386a8.02 8.02 0 0 0-4.928-1.672c-4.14 0-7.5 3.262-7.5 7.286s3.36 7.286 7.5 7.286a7.64 7.64 0 0 0 4.928-1.783l-.814-.986A6.36 6.36 0 0 1 12.214 18C8.785 18 6 15.313 6 12s2.785-6 6.214-6c1.508 0 3.034.514 4.114 1.38z"
          />
          <path
            fill="url(#CDAI__b)"
            d="M12.214 9H9.857v2.143H9v.428h.857v.858H9v.428h.857v1.715h2.357a2.785 2.785 0 0 0 2.571-1.715h.643v-.428h-.501c.065-.281.087-.57.064-.857h.437v-.429h-.501A2.786 2.786 0 0 0 12.214 9m2.271 3.429c.078-.279.104-.57.077-.857h-4.277v.857zm-4.2.428v1.286h1.929a2.36 2.36 0 0 0 2.1-1.286zm0-1.714h4.2a2.36 2.36 0 0 0-2.271-1.714h-1.929z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="CDAI__a"
              x1="10.928"
              x2="10.928"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#27D3A2" />
              <stop offset="1" stopColor="#9388FD" />
            </linearGradient>
            <linearGradient
              id="CDAI__b"
              x1="12.338"
              x2="12.338"
              y1="9"
              y2="14.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#304250" />
              <stop offset="1" stopColor="#5D6E7D" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCDAI.displayName = 'CDAI'
