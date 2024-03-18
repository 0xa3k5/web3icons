import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconFor = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.143 18.557v-7.47c0-3.518 2.884-6.373 6.437-6.373h.527a1.174 1.174 0 0 1 1.179 1.17c0 .643-.527.973-1.179.973h-.711c-2.164 0-4.11 1.929-4.11 4.072v.643h4.881a1.1 1.1 0 0 1 1.119 1.07c0 .592-.502 1.072-1.119 1.072h-4.881v4.843c0 .643-.429 1.157-1.072 1.157-.642 0-1.07-.514-1.07-1.157"
          />
        </>
      ) : (
        <>
          <path
            fill="#49C5AB"
            d="M8.143 18.557v-7.47c0-3.518 2.884-6.373 6.437-6.373h.527a1.174 1.174 0 0 1 1.178 1.17c0 .643-.527.973-1.178.973h-.712c-2.164 0-4.11 1.929-4.11 4.072v.643h4.882a1.1 1.1 0 0 1 1.118 1.07c0 .592-.501 1.072-1.118 1.072h-4.882v4.843c0 .643-.428 1.157-1.071 1.157s-1.071-.514-1.071-1.157"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFor.displayName = 'For'

export default IconFor
