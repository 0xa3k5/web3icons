import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSAND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.572 9.429h-4.286V8.143h-2.572v2.571h5.515L17.572 12v5.45l-1.343 1.407H7.816l-1.387-1.406v-2.88h4.285v1.715h2.572v-3H7.783L6.429 12V6.55l1.387-1.407h8.413l1.343 1.407z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00AEEF"
            d="M17.572 9.429h-4.286V8.143h-2.572v2.571h5.515L17.572 12v5.45l-1.343 1.407H7.816l-1.387-1.406v-2.88h4.285v1.715h2.572v-3H7.783L6.429 12V6.55l1.387-1.407h8.413l1.343 1.407z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSAND.displayName = 'SAND'
