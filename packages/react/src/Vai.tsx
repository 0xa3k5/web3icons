import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconVAI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m7.736 6.96 3.698 3.617a.34.34 0 0 1 0 .489L7.731 14.69a.36.36 0 0 1-.5 0l-3.7-3.62a.343.343 0 0 1 0-.49l3.703-3.62a.36.36 0 0 1 .502-.001m4.517 4.491 3.698 3.622a.343.343 0 0 1 0 .489l-3.702 3.62a.36.36 0 0 1-.502 0L8.05 15.567a.343.343 0 0 1 0-.489l3.703-3.626a.36.36 0 0 1 .5 0M16.77 6.96l3.699 3.617a.343.343 0 0 1 0 .489l-3.703 3.625a.36.36 0 0 1-.502 0l-3.698-3.62a.34.34 0 0 1 0-.49l3.703-3.62a.36.36 0 0 1 .501-.001"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#VAI__a)"
            d="m7.735 6.96 3.699 3.617a.343.343 0 0 1 0 .489L7.73 14.69a.36.36 0 0 1-.501 0L3.53 11.07a.343.343 0 0 1 0-.49l3.703-3.62a.36.36 0 0 1 .501-.001m4.517 4.491 3.699 3.622a.343.343 0 0 1 0 .489l-3.703 3.62a.36.36 0 0 1-.501 0l-3.699-3.616a.343.343 0 0 1 0-.489l3.703-3.626a.36.36 0 0 1 .501 0m4.519-4.49 3.698 3.617a.34.34 0 0 1 0 .489l-3.703 3.625a.36.36 0 0 1-.501 0l-3.699-3.62a.344.344 0 0 1 0-.49l3.703-3.62a.36.36 0 0 1 .502-.001"
          />
          <defs>
            <linearGradient
              id="VAI__a"
              x1="19.255"
              x2="9.428"
              y1="8.473"
              y2="17.679"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5C84F9" />
              <stop offset=".28" stopColor="#5D70F8" />
              <stop offset=".57" stopColor="#5F5BF6" />
              <stop offset="1" stopColor="#6349F4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconVAI.displayName = 'VAI'
