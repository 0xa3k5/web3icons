import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDEXE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m14.606 7.08-2.28 2.271a.46.46 0 0 1-.652 0L9.4 7.08l-3.262-.652 4.766 4.753c.6.609 1.676.519 2.284-.085l4.676-4.668zm-.463 10.02v-3.223c0-.244.313-.587.566-.587h3.154l2.709-1.719h-6.618c-.84 0-1.525.819-1.525 1.672v6.043l1.714-2.19zm-4.834-3.814H6.142L3.429 11.57h6.497c.84 0 1.646.699 1.646 1.556v6.159L9.857 17.09v-3.214c0-.248-.3-.591-.548-.591"
      />
    </BaseIcon>
  ),
)

IconDEXE.displayName = 'DEXE'
