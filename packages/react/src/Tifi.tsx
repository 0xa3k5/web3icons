import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTIFI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M3.429 14.572V14.4l6.107-6.257h2.828l2.208 2.28-1.453 1.521-2.165-2.267-4.714 4.895zm17.143-5.143V9.6l-6.108 6.257h-2.828l-2.207-2.28 1.453-1.521 2.164 2.267L17.76 9.43z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00A3FF"
            d="M3.429 14.572V14.4l6.107-6.257h2.828l2.208 2.28-1.453 1.521-2.165-2.267-4.714 4.895zm17.143-5.143V9.6l-6.108 6.257h-2.828l-2.207-2.28 1.453-1.521 2.164 2.267L17.76 9.43z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTIFI.displayName = 'TIFI'
