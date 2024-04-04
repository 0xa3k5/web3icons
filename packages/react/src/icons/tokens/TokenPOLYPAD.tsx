import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPOLYPAD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.428 15.639V8.353L12 4.714 5.57 8.353v7.286l2.143 1.204V9.57L12 7.127l4.286 2.443v4.86L12 16.864v2.422z"
          />
          <path
            fill="currentColor"
            d="m15 10.316-3-1.684-3 1.684v7.286l1.714.925v-7.273l1.286-.75 1.286.75v1.492l-1.286.75v1.864l3-1.676z"
          />
          <path
            fill="currentColor"
            d="M18.428 8.353 12 4.714 5.57 8.353 7.706 9.57 12 7.127l4.294 2.443z"
          />
          <path
            fill="currentColor"
            d="m12 8.632-2.974 1.684 1.654.938L12 10.5l1.32.75 1.68-.934z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#POLYPAD__a)"
            d="M18.428 15.639V8.353L12 4.714 5.57 8.353v7.286l2.143 1.204V9.57L12 7.127l4.286 2.443v4.86L12 16.864v2.422z"
          />
          <path
            fill="url(#POLYPAD__b)"
            d="m15 10.316-3-1.684-3 1.684v7.286l1.714.925v-7.273l1.286-.75 1.286.75v1.492l-1.286.75v1.864l3-1.676z"
          />
          <path
            fill="#fff"
            d="M18.428 8.353 12 4.714 5.57 8.353 7.706 9.57 12 7.127l4.294 2.443z"
          />
          <path
            fill="#fff"
            d="m12 8.632-2.974 1.684 1.654.938L12 10.5l1.32.75 1.68-.934z"
          />
          <defs>
            <linearGradient
              id="POLYPAD__a"
              x1="15.214"
              x2="8.966"
              y1="6.536"
              y2="17.563"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E4AFF" />
              <stop offset="1" stopColor="#A873FF" />
            </linearGradient>
            <linearGradient
              id="POLYPAD__b"
              x1="15.177"
              x2="9.88"
              y1="5.958"
              y2="19.567"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E4AFF" />
              <stop offset="1" stopColor="#A873FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenPOLYPAD.displayName = 'POLYPAD'
