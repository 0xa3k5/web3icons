import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenVTC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.881 11.143h3.34l1.72 2.328-1.648 2.354zm.123 1.286h-1.12l.6-.835.509.835zM9.648 16.3l2.38-3.407 5.346-7.609a9 9 0 0 1 1.709 2.09l-.006.101-7.384 10.478a.507.507 0 0 1-.813.01z"
          />
        </>
      ) : (
        <>
          <path
            fill="#35633E"
            d="M5.881 11.143h3.34l1.72 2.328-1.648 2.354zm.123 1.286h-1.12l.6-.835.509.835zM9.648 16.3l2.38-3.407 5.346-7.609a9 9 0 0 1 1.709 2.09l-.006.101-7.384 10.478a.507.507 0 0 1-.813.01z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenVTC.displayName = 'VTC'
