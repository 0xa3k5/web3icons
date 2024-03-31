import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconAVT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m14.825 15.189 4.114 1.954H5.722l9.107-1.954zM11.353 4.714v3.412l-6.21 7.753z"
          />
          <path
            fill="currentColor"
            d="m19.286 8.473-5.572 2.606-5.468 8.207z"
          />
          <path
            fill="currentColor"
            d="m11.353 4.714 7.564 12.42-4.195-1.945-3.369-7.063z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AVT__a)"
            d="m14.824 15.189 4.114 1.954H5.721l9.107-1.954z"
          />
          <path fill="url(#AVT__b)" d="M11.353 4.714v3.412l-6.21 7.753z" />
          <path fill="#5100FF" d="m19.285 8.473-5.571 2.606-5.469 8.207z" />
          <path
            fill="#1D2733"
            d="m11.353 4.714 7.564 12.42-4.196-1.945-3.368-7.063z"
          />
          <defs>
            <linearGradient
              id="AVT__a"
              x1="7.101"
              x2="18.332"
              y1="18.711"
              y2="18.711"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F2F1F1" />
              <stop offset="1" stopColor="#1D2733" />
            </linearGradient>
            <linearGradient
              id="AVT__b"
              x1="7.104"
              x2="18.329"
              y1="19.286"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F2F1F1" />
              <stop offset="1" stopColor="#1D2733" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAVT.displayName = 'AVT'
