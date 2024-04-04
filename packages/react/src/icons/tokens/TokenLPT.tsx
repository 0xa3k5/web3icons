import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLPT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 5.571H7.286v2.572h2.571zm0 5.143H7.286v2.572h2.571zm-2.571 5.143h2.571v2.571H7.286zm7.286-2.571H12v2.572h2.572zM12 8.143h2.571v2.571H12zm7.286 2.571h-2.572v2.572h2.572z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00EB88"
            d="M9.858 5.571H7.286v2.572h2.572zm0 5.143H7.286v2.572h2.572zm-2.572 5.143h2.572v2.571H7.286zm7.287-2.571H12v2.572h2.573zM12 8.143h2.572v2.571H12zm7.286 2.571h-2.571v2.572h2.571z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenLPT.displayName = 'LPT'
