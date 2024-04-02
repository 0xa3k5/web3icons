import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenALGB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.786 3.857v9.215l-7.072 4.07zm.428 0v9.215l7.072 4.07zM12 13.5l-7.07 4.072h14.143z"
          />
        </>
      ) : (
        <>
          <path fill="#B41870" d="M11.785 3.857v9.215l-7.071 4.07z" />
          <path fill="#00CAB2" d="M12.214 3.857v9.215l7.071 4.07z" />
          <path fill="#5D32ED" d="m12 13.5-7.072 4.072h14.143z" />
        </>
      )}
    </BaseIcon>
  ),
)

TokenALGB.displayName = 'ALGB'
