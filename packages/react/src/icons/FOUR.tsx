import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconFOUR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.286 12 12 11.572V9.429l-.429.214-1.285 1.929z"
          />
          <path
            fill="currentColor"
            d="m5.571 7.461 12.857-1.89v11.722L5.571 18.428zm7.715 3.896V8.143H11.57L8.57 12v1.286l3.43-.429v3l1.286-.428v-2.786L15 12.214V10.93z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#FOUR__a)"
            d="M10.286 12 12 11.572V9.429l-.429.214-1.285 1.929z"
          />
          <path
            fill="url(#FOUR__b)"
            d="m5.571 7.461 12.857-1.89v11.722L5.571 18.428zm7.715 3.896V8.143H11.57L8.57 12v1.286l3.43-.429v3l1.286-.428v-2.786L15 12.214V10.93z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="FOUR__a"
              x1="17.987"
              x2="8.186"
              y1="5.948"
              y2="19.778"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#92988A" />
              <stop offset="1" stopColor="#3C554F" />
            </linearGradient>
            <linearGradient
              id="FOUR__b"
              x1="17.987"
              x2="8.186"
              y1="5.948"
              y2="19.778"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#92988A" />
              <stop offset="1" stopColor="#3C554F" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconFOUR.displayName = 'FOUR'
