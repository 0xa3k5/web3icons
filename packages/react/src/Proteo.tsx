import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPROTEO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m10.277 6.446-3.42 5.125L12 20.143l5.143-8.572-3.42-5.125 1.011 5.125h1.204L12.428 18v-6.43h1.102l-1.513-7.693-.017-.02-.017.021-1.513 7.693h1.101V18l-3.514-6.43h1.209z"
          />
          <path
            fill="currentColor"
            d="m10.277 6.446-3.42 5.125L12 20.143l5.143-8.572-3.42-5.125 1.011 5.125h1.204L12.428 18v-6.43h1.102l-1.513-7.693-.017-.02-.017.021-1.513 7.693h1.101V18l-3.514-6.43h1.209z"
          />
        </>
      ) : (
        <>
          <path
            fill="#D7A012"
            d="m10.277 6.446-3.42 5.125L12 20.143l5.143-8.572-3.42-5.125 1.012 5.125h1.204L12.429 18v-6.43h1.101l-1.513-7.693-.017-.02-.017.021-1.513 7.693h1.102V18l-3.515-6.43h1.209z"
          />
          <path
            fill="url(#PROTEO__a)"
            d="m10.277 6.446-3.42 5.125L12 20.143l5.143-8.572-3.42-5.125 1.012 5.125h1.204L12.429 18v-6.43h1.101l-1.513-7.693-.017-.02-.017.021-1.513 7.693h1.102V18l-3.515-6.43h1.209z"
            fillOpacity=".3"
          />
          <defs>
            <linearGradient
              id="PROTEO__a"
              x1="12"
              x2="12"
              y1="7.5"
              y2="18.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset=".68" stopColor="#fff" stopOpacity="0" />
              <stop offset="1" stopColor="#fff" stopOpacity=".5" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPROTEO.displayName = 'PROTEO'
