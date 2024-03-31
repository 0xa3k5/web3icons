import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconL2 = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.429a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M12.874 15.189 8.636 7.714h8.507z" />
          <path fill="currentColor" d="m11.092 8.812-4.235 7.474h8.507z" />
          <path
            fill="currentColor"
            d="m10.174 10.432 2.7 4.757.93-1.629-2.713-4.748z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FC8800"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.429a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="url(#L2__a)" d="M12.874 15.189 8.635 7.714h8.507z" />
          <path fill="url(#L2__b)" d="m11.091 8.812-4.234 7.474h8.507z" />
          <path
            fill="#FFCD05"
            d="m10.174 10.432 2.7 4.757.93-1.629-2.713-4.748z"
          />
          <defs>
            <linearGradient
              id="L2__a"
              x1="18.316"
              x2="8.757"
              y1="5.851"
              y2="12.827"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#915512" />
              <stop offset="1" stopColor="#E0A662" />
            </linearGradient>
            <linearGradient
              id="L2__b"
              x1="15.175"
              x2="4.421"
              y1="11.825"
              y2="17.646"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#935E26" />
              <stop offset="1" stopColor="#F1BD84" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconL2.displayName = 'L2'
