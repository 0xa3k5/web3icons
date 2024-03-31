import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconXVG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.857 6.857 12 16.286l-3.857-9.43H6.429L12 20.144l5.572-13.286z"
          />
          <path fill="currentColor" d="m12 11.813 2.143-4.956H9.857z" />
        </>
      ) : (
        <>
          <path
            fill="#34BDE2"
            d="M15.857 6.857 12 16.286l-3.857-9.43H6.429L12 20.144l5.572-13.286z"
          />
          <path fill="#34BDE2" d="m12 11.813 2.143-4.956H9.857z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconXVG.displayName = 'XVG'
