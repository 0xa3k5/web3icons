import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkKava = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.2 19V5H7v14zm6.05 0-4.95-7.001 4.952-6.996H18l-4.95 6.996L18 19z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF564F"
            d="M9.2 19V5H7v14zm6.05 0-4.95-7.001 4.952-6.996H18l-4.95 6.996L18 19z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkKava.displayName = 'kava'
