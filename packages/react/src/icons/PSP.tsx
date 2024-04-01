import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPSP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.571 6h6L8.58 11.143zm.986 11.143h12.729L12.904 6zm2.734-1.714h7.132L12.848 9z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PSP__a)"
            d="M5.571 6h6L8.58 11.143zm.986 11.143h12.729L12.904 6zm2.734-1.714h7.132L12.848 9z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="PSP__a"
              x1="15.737"
              x2="11.129"
              y1="6.637"
              y2="17.313"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#568EFF" />
              <stop offset="1" stopColor="#185BEF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPSP.displayName = 'PSP'
