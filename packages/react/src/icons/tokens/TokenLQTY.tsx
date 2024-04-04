import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLQTY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path fill="#2EB6EA" d="M11.143 17.571a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
      <path
        fill="#1542CD"
        d="M11.173 17.564c-6.02 0-8.396-7.845-3.078-11.152-.633 6.557 2.731 6.703 5.853 6.557 5.231-.243 5.235 4.595 5.235 4.595z"
      />
      <path
        fill="#745DDF"
        d="M16.825 13.502c-.91 2.329-3.045 3.993-5.682 4.067l.187.002h7.955s-.106-2.854-2.46-4.07"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

TokenLQTY.displayName = 'LQTY'
