import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconGALA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6.429 8.143 5.588 3.433 2.143-1.277-.874-.442-1.192.768-4.028-2.482 3.874-2.07 4.826 2.666.857-.51-5.606-3.086zm.428 1.08L6 8.68v6.578l5.571 3.6v-6.801L9.43 10.715v1.032l1.285.832v4.62l-3.857-2.473zm5.572 8.546v1.084L18 15.28V8.7l-5.571 3.356v2.606l.857-.553V12.6l3.857-2.314v4.466l-4.714 3.021z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="m6.429 8.143 5.588 3.433 2.143-1.277-.874-.442-1.192.768-4.028-2.482 3.874-2.07 4.826 2.666.857-.51-5.606-3.086zm.428 1.08L6 8.68v6.578l5.571 3.6v-6.801L9.43 10.715v1.032l1.285.832v4.62l-3.857-2.473zm5.572 8.546v1.084L18 15.28V8.7l-5.571 3.356v2.606l.857-.553V12.6l3.857-2.314v4.466l-4.714 3.021z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGALA.displayName = 'GALA'
