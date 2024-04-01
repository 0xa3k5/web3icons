import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDSETH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.857 15.694-4.714-2.837 4.714 6.857zm4.286 0 4.714-2.837-4.714 6.857zM12 9.214V3.428l-4.714 7.715z"
          />
          <path
            fill="currentColor"
            d="M12 9v5.143l-4.714-3zm0 .214V3.428l4.715 7.715z"
          />
          <path fill="currentColor" d="M12 9v5.143l4.715-3z" />
        </>
      ) : (
        <>
          <path fill="#FDFEFF" d="m9.857 15.694-4.714-2.837 4.714 6.857z" />
          <path fill="#B6C5C2" d="m14.143 15.694 4.714-2.837-4.714 6.857z" />
          <path fill="#FDFEFF" d="M12 9.214V3.428l-4.715 7.715z" />
          <path
            fill="#B6C5C2"
            d="M12 9v5.143l-4.715-3zm0 .214V3.428l4.714 7.715z"
          />
          <path fill="#869193" d="M12 9v5.143l4.714-3z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconDSETH.displayName = 'DSETH'
