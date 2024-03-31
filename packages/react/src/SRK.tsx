import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSRK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 18.428H5.143l4.714-4.285h4.715zm9-8.571-4.285 4.286V9.857zm0-4.286-4.285 4.286V5.571zm-4.285 4.286-4.715 4.286V9.857zm0-4.286L9.857 9.857V5.571zM9.857 9.857l-4.714 4.286V9.857zm9 4.286-4.285 4.285v-4.285z"
          />
          <path
            fill="currentColor"
            d="M14.572 14.143H9.857l4.715-4.286zm0-4.286H9.857l4.715-4.286zm-4.715 4.286H5.143l4.714-4.286zm0-4.286H5.143l4.714-4.286zm9 4.286h-4.285l4.285-4.286zm-4.285 4.285H9.857l4.715-4.285z"
          />
        </>
      ) : (
        <>
          <path fill="#88B1CA" d="M9.856 18.428H5.143l4.713-4.285h4.715z" />
          <path fill="#F8782F" d="m18.857 9.857-4.286 4.286V9.857z" />
          <path fill="#CF4A00" d="M18.857 5.571 14.57 9.857V5.571z" />
          <path fill="#488EB2" d="m14.571 9.857-4.715 4.286V9.857z" />
          <path fill="#295C7B" d="M14.571 5.571 9.857 9.857V5.571z" />
          <path fill="#2471A5" d="m9.857 9.857-4.714 4.286V9.857z" />
          <path fill="#FA965A" d="m18.857 14.143-4.286 4.285v-4.285z" />
          <path fill="#F26A1E" d="M14.571 14.143H9.856l4.715-4.286z" />
          <path fill="#E75105" d="M14.571 9.857H9.857l4.714-4.286z" />
          <path fill="#377DAE" d="M9.856 14.143H5.143l4.714-4.286z" />
          <path fill="#206996" d="M9.857 9.857H5.143l4.714-4.286z" />
          <path fill="#F98749" d="M18.857 14.143H14.57l4.286-4.286z" />
          <path fill="#F8A77A" d="M14.571 18.428H9.856l4.715-4.285z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconSRK.displayName = 'SRK'
