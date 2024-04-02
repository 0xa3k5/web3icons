import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenGRND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#000"
        d="M5.49 17.572c-.468 0-.322-.386-.193-.575h-.583l.776-2.305 2.52-1.346-1.368-1.187a.39.39 0 0 1-.12-.39l.866-3.082a.4.4 0 0 1 .172-.223l3.265-1.98a.4.4 0 0 1 .202-.055h7.461a.386.386 0 0 1 .36.527l-.171.433h.218a.385.385 0 0 1 .365.514l-.583 1.599-2.525 1.345.776.579s.583.386.386.574c.471.154.458.45.39.574l-1.114 3.129a.4.4 0 0 1-.18.21l-3.082 1.616a.4.4 0 0 1-.184.043z"
      />
      <path
        fill="#FE3000"
        d="M18 7.286h-7.072L8.057 8.974l-.763 2.623 1.526 1.26h3.252l-.192.857H8.82l-2.868 1.449-.381 1.123h7.071l2.872-1.5.956-2.812-1.719-1.26h-3.253l.386-.857h3.056l2.678-1.448z"
      />
    </BaseIcon>
  ),
)

TokenGRND.displayName = 'GRND'
