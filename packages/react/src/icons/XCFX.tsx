import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXCFX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.184 8.529a.22.22 0 0 0-.103.3 6.857 6.857 0 1 1-4.122-3.403.22.22 0 0 0 .286-.203.21.21 0 0 0-.15-.204 7.286 7.286 0 1 0 4.36 3.6.21.21 0 0 0-.27-.09M12 15.857a3.856 3.856 0 1 0 0-7.712 3.856 3.856 0 0 0 0 7.712m0 .429a4.286 4.286 0 1 0 0-8.572 4.286 4.286 0 0 0 0 8.572m5.571-9.857a1.286 1.286 0 1 1-2.571 0 1.286 1.286 0 0 1 2.571 0m.429 0a1.714 1.714 0 1 1-3.429 0 1.714 1.714 0 0 1 3.429 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF914C"
            d="M18.184 8.529a.22.22 0 0 0-.103.3 6.857 6.857 0 1 1-4.122-3.403.22.22 0 0 0 .286-.203.21.21 0 0 0-.15-.204 7.286 7.286 0 1 0 4.36 3.6.21.21 0 0 0-.27-.09M12 15.857a3.856 3.856 0 1 0 0-7.712 3.856 3.856 0 0 0 0 7.712m0 .429a4.286 4.286 0 1 0 0-8.572 4.286 4.286 0 0 0 0 8.572m5.571-9.857a1.286 1.286 0 1 1-2.571 0 1.286 1.286 0 0 1 2.571 0m.429 0a1.714 1.714 0 1 1-3.429 0 1.714 1.714 0 0 1 3.429 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXCFX.displayName = 'XCFX'
