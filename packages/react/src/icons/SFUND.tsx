import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSFUND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.373 6.921 12.202 3.9l.115 1.907c-.42.437-1.778 1.714-3.338 3.763-1.389 1.821-.056 4.144.96 4.98v1.693c-.665-.36-1.873-.845-2.76-3.035-1.097-2.7.865-4.748 2.194-6.287M14.7 16.937l-2.837 3.026-.111-1.908c.42-.44 1.671-1.808 3.342-3.762 1.372-1.612 0-4.222-.96-4.766V7.85c.66.36 1.775.703 2.666 2.893 1.093 2.7-.643 4.963-2.1 6.193"
          />
          <path
            fill="currentColor"
            d="M11.782 20.143c-1.329-1.226-3.33-4.56-.729-8.109l.994-1.307c.553-.746 1.243-2.807.022-4.496-.15-.205-1.153-.904-1.895-.171l-.094.107.094-.103 2.002-2.207c1.358 1.209 3.463 4.449 1.016 7.744l-1.286 1.663c-.467.664-1.127 2.529 0 4.697.261.395 1.286.609 2.138-.343z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SFUND__a)"
            d="m9.372 6.921 2.83-3.021.115 1.907c-.42.437-1.779 1.714-3.339 3.763-1.388 1.821-.056 4.144.96 4.98v1.693c-.664-.36-1.873-.845-2.76-3.035-1.097-2.7.866-4.748 2.194-6.287"
          />
          <path
            fill="url(#SFUND__b)"
            d="m14.7 16.937-2.837 3.026-.112-1.908c.42-.44 1.672-1.808 3.343-3.762 1.371-1.612 0-4.222-.96-4.766V7.85c.66.36 1.774.703 2.666 2.893 1.092 2.7-.643 4.963-2.1 6.193"
          />
          <path
            fill="url(#SFUND__c)"
            d="M11.781 20.143c-1.328-1.226-3.33-4.56-.729-8.109l.995-1.307c.553-.746 1.243-2.807.021-4.496-.15-.205-1.153-.904-1.894-.171l-.094.107.094-.103 2.001-2.207c1.359 1.209 3.463 4.449 1.016 7.744l-1.286 1.663c-.467.664-1.127 2.529 0 4.697.262.395 1.286.609 2.139-.343z"
          />
          <defs>
            <linearGradient
              id="SFUND__a"
              x1="11.992"
              x2="11.992"
              y1="3.857"
              y2="20.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#986EF8" />
              <stop offset="1" stopColor="#4592E6" />
            </linearGradient>
            <linearGradient
              id="SFUND__b"
              x1="12"
              x2="12"
              y1="20.143"
              y2="3.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3CD7FE" />
              <stop offset="1" stopColor="#8651E7" />
            </linearGradient>
            <linearGradient
              id="SFUND__c"
              x1="12.051"
              x2="12.051"
              y1="3.857"
              y2="20.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#45CFFB" />
              <stop offset="1" stopColor="#9E68FC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSFUND.displayName = 'SFUND'
