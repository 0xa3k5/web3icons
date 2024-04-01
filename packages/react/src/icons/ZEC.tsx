import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconZEC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.266 15h5.02v3h-3v2.143h-2.574V18H7.714v-2.723L12.71 9H7.714V6h2.998V3.857h2.574V6h3v2.723z"
          />
        </>
      ) : (
        <>
          <path
            fill="#ECB244"
            d="M11.266 15h5.02v3h-3v2.143h-2.574V18H7.714v-2.723L12.709 9H7.714V6h2.998V3.857h2.573V6h3v2.723z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconZEC.displayName = 'ZEC'
