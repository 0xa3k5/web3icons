import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTPAD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.893 19.714 11.9 4.286l-6.33 2.94L7.298 8.24l3.416-1.56v12.343q.29.178.587.343zm1.393-.685-1.183.685V4.286l6.325 2.94-1.705 1.032-3.437-1.615zM5.57 7.85c.275.163.566.326.857.489s.583.326.858.489v6.162l3 1.783v1.929L5.57 15.956zm12 .489c.292-.163.583-.326.857-.489v8.105q-1.178.688-2.357 1.397l-2.357 1.393v-1.972c.514-.3 1.007-.596 1.5-.891.493-.3.986-.596 1.5-.892V8.83c.274-.163.566-.326.857-.49"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TPAD__a)"
            d="M11.893 19.714 11.9 4.286l-6.33 2.94L7.298 8.24l3.416-1.56v12.343q.29.178.587.343zm1.393-.685-1.183.685V4.286l6.325 2.94-1.705 1.032-3.437-1.615zM5.57 7.85c.275.163.566.326.857.489s.583.326.858.489v6.162l3 1.783v1.929L5.57 15.956zm12 .489c.292-.163.583-.326.857-.489v8.105q-1.178.688-2.357 1.397l-2.357 1.393v-1.972c.514-.3 1.007-.596 1.5-.891.493-.3.986-.596 1.5-.892V8.83c.274-.163.566-.326.857-.49"
          />
          <defs>
            <linearGradient
              id="TPAD__a"
              x1="11.498"
              x2="21.274"
              y1="17.837"
              y2="13.907"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FC01C2" />
              <stop offset="1" stopColor="#6D138E" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTPAD.displayName = 'TPAD'
