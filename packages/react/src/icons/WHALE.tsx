import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconWHALE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 12q0-.216.013-.428h-.013v-1.286h12.16a5.574 5.574 0 0 0-5.731-3.84v-1.29q.212-.013.428-.013A6.857 6.857 0 1 1 5.143 12m1.286 0q0-.216.016-.428h.86a4.714 4.714 0 0 0 5.116 5.125v-1.294a3.428 3.428 0 0 1-3.823-3.831h8.957q.017.212.017.428a5.571 5.571 0 1 1-11.143 0M12 14.572a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M5.143 12q0-.216.012-.428h-.012v-1.286h12.16a5.574 5.574 0 0 0-5.732-3.84v-1.29q.213-.013.429-.013A6.857 6.857 0 1 1 5.143 12m1.285 0q0-.216.017-.428h.86a4.714 4.714 0 0 0 5.116 5.125v-1.294a3.428 3.428 0 0 1-3.823-3.831h8.957q.016.212.016.428a5.571 5.571 0 1 1-11.143 0M12 14.572a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWHALE.displayName = 'WHALE'
