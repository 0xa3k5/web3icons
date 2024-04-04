import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkZeta = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.804 15.047v1.86H8.126c.106-1.224.501-2.086 1.868-3.298l5.81-4.956v4.349h2.091V5H6.002v3.989h2.091V7.09h6.318l-5.782 4.934-.013.013C6.193 14.183 6 15.915 6 17.955V19h11.895v-3.953z"
          />
        </>
      ) : (
        <>
          <path
            fill="#005741"
            d="M15.804 15.047v1.86H8.126c.106-1.224.501-2.086 1.868-3.298l5.81-4.956v4.349h2.091V5H6.002v3.989h2.091V7.09h6.318l-5.782 4.934-.013.013C6.193 14.183 6 15.915 6 17.955V19h11.895v-3.953z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkZeta.displayName = 'zeta'
