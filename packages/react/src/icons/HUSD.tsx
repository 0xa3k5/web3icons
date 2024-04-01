import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconHUSD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.143 18.857H14.57V14.52c0-.695-.625-1.234-1.345-1.234H9.469c-1.442 0-2.612-1.153-2.612-2.544V5.144h2.571v4.339c0 .694.625 1.231 1.346 1.231h3.756c1.442.002 2.61 1.156 2.611 2.547zm-7.715 0H6.857v-4.285a2.58 2.58 0 0 1 2.571 2.574zm5.143-13.714h2.572V9.43a2.576 2.576 0 0 1-2.572-2.572z"
          />
        </>
      ) : (
        <>
          <path
            fill="#1A61F0"
            d="M17.143 18.857h-2.571V14.52c0-.695-.625-1.234-1.346-1.234H9.47c-1.442 0-2.612-1.153-2.612-2.544V5.144H9.43v4.339c0 .694.625 1.231 1.345 1.231h3.756c1.442.002 2.61 1.156 2.612 2.547zm-7.714 0H6.857v-4.285a2.58 2.58 0 0 1 2.572 2.574zm5.143-13.714h2.571V9.43a2.576 2.576 0 0 1-2.571-2.572z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconHUSD.displayName = 'HUSD'
