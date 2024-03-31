import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconVENT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m19.286 6.857-2.61 8.944q-.094.336-.202.677a5 5 0 0 1-.111.335 2.96 2.96 0 0 1-1.599 1.71c-.437.18-.9.257-1.367.291-.433.034-.96.043-1.397.043-.433 0-.964-.009-1.397-.043a4.4 4.4 0 0 1-1.367-.291 2.8 2.8 0 0 1-1.599-1.715 4 4 0 0 1-.111-.33c-.073-.227-.137-.454-.202-.677l-2.61-8.944c.48.017 1.068.039 1.543.086.502.047 1.037.137 1.505.355.497.236.857.583 1.13 1.072.267.471.43 1.011.58 1.521a818 818 0 0 0 2.382 7.873h.292s1.285-4.17 2.387-7.873c.15-.51.309-1.05.574-1.517.251-.47.648-.847 1.132-1.071.471-.223 1.007-.309 1.5-.36a27 27 0 0 1 1.547-.086"
      />
    </BaseIcon>
  ),
)

IconVENT.displayName = 'VENT'
