import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCBETH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.214a6.215 6.215 0 1 0 0-12.429 6.215 6.215 0 0 0 0 12.43M18.857 12a6.857 6.857 0 1 1-13.714 0 6.857 6.857 0 0 1 13.714 0"
          />
          <path
            fill="currentColor"
            d="M12 6.857V10.5l3 1.376zm0 0-3 5.019 3-1.372zm0 7.38v2.477l3-4.264zm0 2.477v-2.477L9 12.45z"
          />
          <path
            fill="currentColor"
            d="m12 13.667 3-1.791-3-1.372zm-3-1.791 3 1.791V10.5z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0052FF"
            d="M12 18.214a6.214 6.214 0 1 0 0-12.428 6.214 6.214 0 0 0 0 12.428M18.857 12a6.857 6.857 0 1 1-13.715 0 6.857 6.857 0 0 1 13.715 0"
          />
          <path fill="#0052FF" d="M12 6.857V10.5l3 1.376z" fillOpacity=".6" />
          <path fill="#0052FF" d="m12 6.857-3 5.019 3-1.372z" />
          <path fill="#0052FF" d="M12 14.237v2.477l3-4.264z" fillOpacity=".6" />
          <path fill="#0052FF" d="M12 16.714v-2.477L9 12.45z" />
          <path
            fill="#0052FF"
            d="m12 13.667 3-1.791-3-1.372z"
            fillOpacity=".2"
          />
          <path fill="#0052FF" d="m9 11.876 3 1.791V10.5z" fillOpacity=".6" />
        </>
      )}
    </BaseIcon>
  ),
)

IconCBETH.displayName = 'CBETH'
