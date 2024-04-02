import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMCADE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 4.286a.857.857 0 0 1 1.714 0v.87a6.8 6.8 0 0 0-1.714.33zm0 14.228v1.629a.857.857 0 0 0 1.714 0v-1.299a6.8 6.8 0 0 1-1.714-.33m2.572.33v1.299a.857.857 0 0 0 1.714 0v-1.629a7 7 0 0 1-1.714.33m1.714-13.358v-1.2a.857.857 0 1 0-1.714 0v.87a6.8 6.8 0 0 1 1.714.33m3 3.086L12 12.214l5.143 3.643C16.02 17.233 14.057 18 12.124 18 8.74 18 6 15.313 6 12s2.743-6 6.124-6a6.23 6.23 0 0 1 5.019 2.572"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFC010"
            d="M9.857 4.286a.857.857 0 0 1 1.714 0v.87a6.8 6.8 0 0 0-1.714.33zm0 14.228v1.629a.857.857 0 0 0 1.714 0v-1.299a6.8 6.8 0 0 1-1.714-.33m2.572.33v1.299a.857.857 0 0 0 1.714 0v-1.629a7 7 0 0 1-1.714.33m1.714-13.358v-1.2a.857.857 0 1 0-1.714 0v.87a6.8 6.8 0 0 1 1.714.33m3 3.086L12 12.214l5.143 3.643C16.02 17.233 14.057 18 12.124 18 8.74 18 6 15.313 6 12s2.743-6 6.124-6a6.23 6.23 0 0 1 5.019 2.572"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenMCADE.displayName = 'MCADE'
