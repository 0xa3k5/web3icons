import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPUNDIX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 6.857 6.857 6l4.714 4.714-.857.857zm6.429 6.429.857-.857L18 17.143l-.857.857zM11.143 12l.857-.857.857.857-.857.857zm1.286-1.286L17.143 6l.857.857-4.714 4.714zM6 17.143l4.714-4.714.857.857L6.857 18z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F2D30E"
            d="M6 6.857 6.857 6l4.714 4.714-.857.857zm6.429 6.429.857-.857L18 17.143l-.857.857zM11.143 12l.857-.857.857.857-.857.857zm1.286-1.286L17.143 6l.857.857-4.714 4.714zM6 17.143l4.714-4.714.857.857L6.857 18z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPUNDIX.displayName = 'PUNDIX'
