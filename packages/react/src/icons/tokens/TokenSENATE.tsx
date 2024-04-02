import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSENATE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M7.869 8.842a1.54 1.54 0 0 1 1.281-.699h11.421c.36 0 .493.141.39.437-.03.086-.077.18-.141.27l-.514.694a1.74 1.74 0 0 1-.845.618c-.171.051-.312.124-.445.124h-9.9a.78.78 0 0 0-.647.321.4.4 0 0 0-.069.129c-.056.15.013.407.201.407h9.515c.535 0 .724.026.578.454a1.3 1.3 0 0 1-.214.403l-2.336 3.15a1.72 1.72 0 0 1-1.281.707H3.42c-.356 0-.489-.141-.386-.437.03-.085.077-.18.142-.27l1.56-2.1c.313-.416.745-.578 1.285-.621h9.129c.236 0 .459-.197.647-.429a.4.4 0 0 0 .069-.133c.043-.145-.013-.295-.189-.295H6.934c-.548 0-.75-.133-.604-.557.043-.112.124-.245.231-.408l1.308-1.77z"
      />
    </BaseIcon>
  ),
)

TokenSENATE.displayName = 'SENATE'
