import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenFRIN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M7.286 6H17.57l-.973 3.857H12V12h4.431l-.835 3.429H12v3H7.286zM12 15h3.257l.626-2.571H12zm-.429-3V9.75L7.714 6.643V12zm-3.857.626V18h3.857v-2.674zm3.857 2.177v-2.374h-3.39zM8.143 6.429h3.428v2.785zm3.857 3h4.273l.741-3H12z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

TokenFRIN.displayName = 'FRIN'
