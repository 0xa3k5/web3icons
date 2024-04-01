import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconFPIS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m6.857 6.669 1.521-1.526 1.68 1.689a3.6 3.6 0 0 1 1.668-.403h1.405c.6 0 1.17.145 1.667.403l1.68-1.689L18 6.67l-1.676 1.684c.258.497.391 1.048.39 1.607v.716c0 1.95-1.603 3.467-3.583 3.467h-2.845v4.714H8.143V9.956a3.5 3.5 0 0 1 .39-1.603zm3.429 3.386a1.517 1.517 0 0 1 1.542-1.483h1.2c.849 0 1.543.664 1.543 1.483v.462A1.517 1.517 0 0 1 13.028 12h-2.742z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconFPIS.displayName = 'FPIS'
