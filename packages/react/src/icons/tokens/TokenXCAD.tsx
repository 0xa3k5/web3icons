import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenXCAD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m10.142 11.618-2.506-5.19h3.628l1.276 3.04h.032l2.334-3.04h3.737l-4.496 5.408 2.666 5.736H13.06l-1.372-3.492h-.032l-2.665 3.492H5.143z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#XCAD__a)"
            d="m10.142 11.618-2.506-5.19h3.627l1.276 3.04h.032l2.334-3.04h3.738l-4.496 5.408 2.665 5.736H13.06l-1.372-3.492h-.032L8.99 17.572H5.143z"
          />
          <defs>
            <linearGradient
              id="XCAD__a"
              x1="11.892"
              x2="11.892"
              y1="17.572"
              y2="6.428"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".015" stopColor="#FD6422" />
              <stop offset=".26" stopColor="#FC194A" />
              <stop offset=".605" stopColor="#FC125F" />
              <stop offset="1" stopColor="#9B2AA6" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenXCAD.displayName = 'XCAD'
