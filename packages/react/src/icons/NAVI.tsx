import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNAVI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.999 13.662-3 3.374v-9.76a1.5 1.5 0 1 1 3 0z"
          />
          <path
            fill="currentColor"
            d="m8.89 11.25-.132-4.795 8.274 9.976a1.47 1.47 0 0 1-.213 2.09 1.51 1.51 0 0 1-2.104-.216zm-2.888 5.67 3-3.561v3.997a1.5 1.5 0 0 1-3 0z"
          />
          <path
            fill="currentColor"
            d="m6.002 7.748 3 3.67V7.275a1.5 1.5 0 0 0-3 0zm11.848.687c.1-.244.15-.505.15-.768 0-1.158-.96-2.095-2.143-2.095s-2.143.937-2.143 2.095q.002.387.134.73c.406 1.331 1.468 2.366 1.998 2.746 1.182-.87 1.768-1.978 2.005-2.708"
          />
          <path
            fill="currentColor"
            d="M15.857 8.571a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#NAVI__a)"
            d="m8.999 13.662-3 3.374v-9.76a1.5 1.5 0 0 1 3 0z"
          />
          <path
            fill="url(#NAVI__b)"
            d="m8.891 11.25-.133-4.795 8.274 9.976a1.47 1.47 0 0 1-.213 2.09 1.51 1.51 0 0 1-2.103-.216z"
          />
          <path
            fill="#FFC524"
            d="m6.002 16.92 3-3.561v3.997a1.5 1.5 0 0 1-3 0z"
          />
          <path
            fill="#91D450"
            d="m6.002 7.748 3 3.67V7.275a1.5 1.5 0 1 0-3 0z"
          />
          <path
            fill="#FF7819"
            d="M17.851 8.435c.099-.244.15-.505.15-.768 0-1.158-.96-2.095-2.144-2.095-1.183 0-2.142.937-2.142 2.095q.002.387.134.73c.406 1.331 1.467 2.366 1.997 2.746 1.182-.87 1.769-1.978 2.005-2.708"
          />
          <path
            fill="#AC46BC"
            d="M15.858 8.571a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
          <defs>
            <linearGradient
              id="NAVI__a"
              x1="18"
              x2="6.012"
              y1="12.583"
              y2="12.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5DC17C" />
              <stop offset="1" stopColor="#8CD037" />
            </linearGradient>
            <linearGradient
              id="NAVI__b"
              x1="5.997"
              x2="13.787"
              y1="7.977"
              y2="20.624"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9CD863" />
              <stop offset="1" stopColor="#49ADDA" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconNAVI.displayName = 'NAVI'
