import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconGSWIFT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m3.429 16.714 5.357-5.76 1.071.523-1.607 1.834L11.2 12l1.337.784z"
          />
          <path
            fill="currentColor"
            d="M20.572 16.714 15.75 11.74l2.679-1.453-3.215-3H8.786l-3.214 3zM9.322 8.143h5.357l1.877 1.761-1.877.784-.965-.83H9.857l2.357.856h1.072l2.464 2.597-8.306-3.407z"
          />
          <path
            fill="currentColor"
            d="m16.153 11.541-.977-1.058-.497.205-.3-.287 1.371 1.338z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GSWIFT__a)"
            d="m3.429 16.714 5.357-5.76 1.071.523-1.607 1.834L11.2 12l1.337.784z"
          />
          <path
            fill="#fff"
            d="M20.572 16.714 15.75 11.74l2.679-1.453-3.215-3H8.786l-3.214 3zM9.322 8.143h5.357l1.877 1.761-1.877.784-.965-.83H9.857l2.357.856h1.072l2.464 2.597-8.306-3.407z"
          />
          <path
            fill="#E9E9E9"
            d="m16.153 11.541-.977-1.058-.497.205-.3-.287 1.371 1.338z"
            fillOpacity=".6"
          />
          <defs>
            <linearGradient
              id="GSWIFT__a"
              x1="16.038"
              x2="6.416"
              y1="8.142"
              y2="17.396"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA902" />
              <stop offset="1" stopColor="#FFF000" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconGSWIFT.displayName = 'GSWIFT'
