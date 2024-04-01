import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSTFX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m12 5.571 6.857 10.715H5.143z" />
        </>
      ) : (
        <>
          <path fill="#00DD73" d="m12 5.571 6.857 10.715H5.143z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconSTFX.displayName = 'STFX'
