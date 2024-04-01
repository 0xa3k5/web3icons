import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWCFG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M5.571 12.862c0 1.17.296 2.271.815 3.24l-.772.385A7.723 7.723 0 0 1 18.43 7.99l-.652.557a6.866 6.866 0 0 0-12.206 4.311zm6.652 4.71a4.714 4.714 0 1 1 3.921-7.616l.647-.557a5.572 5.572 0 1 0-4.568 9.03v-.862zm2.07-2.945a2.563 2.563 0 0 1-4.436-1.765 2.57 2.57 0 0 1 4.676-1.483l.651-.557A3.424 3.424 0 0 0 9 12.857a3.428 3.428 0 0 0 5.807 2.469l-.514-.703z"
      />
    </BaseIcon>
  ),
)

IconWCFG.displayName = 'WCFG'
