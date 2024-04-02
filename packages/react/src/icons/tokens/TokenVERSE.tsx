import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenVERSE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.326 9-1.329-2.143H4.714l7.222 12.857 1.35-2.25L8.49 9zm-2.057 1.286h2.605l1.042 1.73 2.764-5.16h2.606l-5.37 9.55z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0085FF"
            d="m12.325 9-1.328-2.143H4.714l7.221 12.857 1.35-2.25L8.49 9zm-2.057 1.286h2.606l1.041 1.73 2.765-5.16h2.605l-5.37 9.55z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenVERSE.displayName = 'VERSE'
