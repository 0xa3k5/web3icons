import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenACRIA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M10.715 10.286h-1.93L12 5.143l4.072 7.286H9.643L8.143 15h1.5l1.286-2.143h2.143L14.357 15h1.715l-1.286-2.143H16.5l2.357 3.857h-5.571L12 14.143l-1.286 2.571h-5.57l3.428-6h4.714L12 8.143z"
      />
    </BaseIcon>
  ),
)

TokenACRIA.displayName = 'ACRIA'
