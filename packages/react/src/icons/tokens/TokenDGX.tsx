import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenDGX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 11.143 15.857 15 12 18.857zm0 0v7.714L8.143 15zm0-6v5.027l-4.363 4.401-2.494-2.515zm0 0 6.857 6.913-2.494 2.515L12 10.17z"
          />
        </>
      ) : (
        <>
          <path fill="#C2A059" d="M12 11.143 15.857 15 12 18.857z" />
          <path fill="#E3C88E" d="M12 11.143v7.714L8.143 15z" />
          <path fill="#243961" d="M12 5.143v5.027l-4.363 4.401-2.494-2.515z" />
          <path
            fill="#131F35"
            d="m12 5.143 6.857 6.913-2.494 2.515L12 10.17z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenDGX.displayName = 'DGX'
