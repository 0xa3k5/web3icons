import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenXCUR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m4.62-4.594c.22-.448-.082-.95-.569-1.059-.44-.098-.874.165-1.106.553a3.428 3.428 0 1 1-.139-3.727c.277.392.775.624 1.22.445.432-.173.651-.667.416-1.069A5.14 5.14 0 0 0 12 6.857a5.143 5.143 0 1 0 4.62 7.406"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

TokenXCUR.displayName = 'XCUR'
