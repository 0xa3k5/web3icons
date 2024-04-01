import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconKOGE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.857A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M9.429 8.91v6.93l1.285-.686V9.626zm2.143 4.277.968.737-.968.643z"
          />
          <path
            fill="currentColor"
            d="m12.544 11.152 1.063.77-.865.558 1.088.861 2.027-1.187-5.318-3.921-1.11.656 2.143 1.555v1.307z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFC800"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.857A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#2C2E35"
            d="M9.428 8.91v6.93l1.286-.686V9.626zm2.143 4.277.969.737-.969.643z"
          />
          <path
            fill="#FFC700"
            d="m12.544 11.152 1.063.77-.866.558 1.089.861 2.027-1.187-5.319-3.921-1.11.656 2.143 1.555v1.307z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconKOGE.displayName = 'KOGE'
