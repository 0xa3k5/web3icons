import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCOTI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#COTI__a)"
        d="M5.46 10.873c-.219 0-.317.099-.317.296v5.044c0 .218.098.291.317.291 2.421.026 5.378-2.13 7.825-3.818V6.857C10.864 8.524 7.834 10.9 5.46 10.873"
      />
      <path
        fill="url(#COTI__b)"
        d="M18.54 13.153c.218 0 .317-.099.317-.296V7.813c0-.223-.099-.296-.317-.296-2.443-.021-5.379 2.13-7.826 3.823v5.803c2.421-1.667 5.451-4.042 7.826-3.99"
      />
      <path
        fill="#194AAD"
        d="M13.285 12.634V9.587a89 89 0 0 0-2.571 1.757v3.086c.9-.587 1.757-1.213 2.571-1.8z"
      />
      <defs>
        <linearGradient
          id="COTI__a"
          x1="13.263"
          x2="12.279"
          y1="16.38"
          y2="7.593"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".1" stopColor="#194AAD" />
          <stop offset=".5" stopColor="#248FCB" />
          <stop offset=".8" stopColor="#2BBFDF" />
        </linearGradient>
        <linearGradient
          id="COTI__b"
          x1="13.508"
          x2="12.203"
          y1="6.289"
          y2="17.935"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".1" stopColor="#194AAD" />
          <stop offset=".5" stopColor="#248FCB" />
          <stop offset=".8" stopColor="#2BBFDF" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconCOTI.displayName = 'COTI'
