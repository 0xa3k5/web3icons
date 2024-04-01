import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPIXEL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9 15h3.428v3.428H9zm3.428-9.429h1.342a4.66 4.66 0 0 1 4.658 4.663c0 2.572-2.087 4.766-4.662 4.766H9V8.57h3.428v3h1.342c.844 0 1.658-.655 1.658-1.5 0-.844-.814-1.5-1.662-1.5h-1.338zm-6.857 6H9V15H5.57z"
          />
          <path fill="currentColor" d="M9 11.571h3.428V15H9z" />
        </>
      ) : (
        <>
          <path fill="url(#PIXEL__a)" d="M9 15h3.428v3.428H9z" />
          <path
            fill="url(#PIXEL__b)"
            d="M12.428 5.571h1.342a4.66 4.66 0 0 1 4.658 4.663c0 2.572-2.087 4.766-4.662 4.766H9V8.57h3.428v3h1.342c.844 0 1.658-.655 1.658-1.5 0-.844-.814-1.5-1.662-1.5h-1.338z"
          />
          <path fill="url(#PIXEL__c)" d="M5.571 11.571H9V15H5.57z" />
          <path fill="url(#PIXEL__d)" d="M9 11.571h3.428V15H9z" />
          <defs>
            <linearGradient
              id="PIXEL__a"
              x1="5.571"
              x2="18.428"
              y1="9.428"
              y2="14.845"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3EFF6E" />
              <stop offset="1" stopColor="#16DDDE" />
            </linearGradient>
            <linearGradient
              id="PIXEL__b"
              x1="5.717"
              x2="19.533"
              y1="9.049"
              y2="15.29"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5B3C" />
              <stop offset="1" stopColor="#FF3196" />
            </linearGradient>
            <linearGradient
              id="PIXEL__c"
              x1="5.571"
              x2="18.428"
              y1="9.428"
              y2="14.845"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6F3F" />
              <stop offset="1" stopColor="#FFC546" />
            </linearGradient>
            <linearGradient
              id="PIXEL__d"
              x1="9"
              x2="12.429"
              y1="12.6"
              y2="14.044"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E059FE" />
              <stop offset="1" stopColor="#656FFF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPIXEL.displayName = 'PIXEL'
