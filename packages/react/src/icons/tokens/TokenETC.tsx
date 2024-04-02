import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenETC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6.836 11.107 5.214-2.129 5.043 2.186-5.057-7.736zm.014 2.364 5.2 2.929 5.307-2.929-5.257 7.1zm5.215-3.45 5.278 2.279-5.278 2.857-5.422-2.921 5.429-2.215z"
          />
        </>
      ) : (
        <>
          <path
            fill="#01C853"
            d="m6.835 11.107 5.215-2.129 5.042 2.186-5.057-7.736zm.015 2.364 5.2 2.929 5.307-2.929-5.257 7.1zm5.214-3.45 5.279 2.279-5.279 2.857-5.421-2.921 5.428-2.215z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenETC.displayName = 'ETC'
