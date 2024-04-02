import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPRISM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M15.03 16.714s.129.172-2.417-4.286l2.074-3.544.66 1.239-1.328 2.318 2.468 4.273zm-1.7-10.11.711 1.251-2.785 4.573H7.372c.244-.428.501-.874.728-1.285h2.336zm-1.483 6.682 1.997 3.428h-1.44l-1.294-2.143H6.112l.745-1.285z"
      />
      <path
        fill="currentColor"
        d="M5.529 16.714a.385.385 0 0 1-.334-.566l.42-.72h4.92l.702 1.277c-.557.009-.985.009-1.44.009zm13.298-.656s.189.656-.377.656h-.75l-2.49-4.23.746-1.303zM11.666 4.903a.382.382 0 0 1 .651-.009l.467.78-2.982 4.612H8.375z"
      />
    </BaseIcon>
  ),
)

TokenPRISM.displayName = 'PRISM'
