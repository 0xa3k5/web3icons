import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNABOX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.143 8.571 6.429 3.858v7.285L9.429 18.43v-5.143L7.286 12v5.143l-2.143-1.286z"
          />
          <path
            fill="currentColor"
            d="M12.429 19.714V12L5.572 7.928 12 4.287l6.857 3.857v7.714l-2.142 1.286V9.428l-2.143 1.286v7.714zM9.857 7.93 12 6.643l2.572 1.5-2.143 1.285z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2AC98B"
            d="m5.143 8.571 6.428 3.858v7.285L9.428 18.43v-5.143L7.285 12v5.143l-2.142-1.286z"
          />
          <path
            fill="#2AC98B"
            d="M12.428 19.714V12L5.571 7.928 12 4.287l6.857 3.857v7.714l-2.143 1.286V9.428l-2.143 1.286v7.714zM9.857 7.93 12 6.643l2.571 1.5-2.143 1.285z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNABOX.displayName = 'NABOX'
