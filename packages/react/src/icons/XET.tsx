import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXET = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.686 6H5.143l4.007 6-4.007 6h4.543l4.277-6z"
          />
          <path
            fill="currentColor"
            d="m12.523 9.446 2.074-3.017h3.408L14.203 12 18 17.571h-3.42l-1.855-2.708-.335.386L14.315 18h4.542l-4.045-6 4.045-6h-4.542l-2.113 3.026z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0681FF"
            d="M9.685 6H5.143l4.007 6-4.007 6h4.542l4.278-6z"
          />
          <path
            fill="#0681FF"
            d="m12.523 9.446 2.074-3.017h3.407L14.203 12 18 17.571h-3.42l-1.856-2.708-.334.386L14.314 18h4.543l-4.046-6 4.046-6h-4.543l-2.113 3.026z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXET.displayName = 'XET'
