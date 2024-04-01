import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNPC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.63 12a6.63 6.63 0 1 1-13.26 0 6.63 6.63 0 0 1 13.26 0m-5.912-2.998a.257.257 0 0 0-.281.32l1.114 4.307h-3.437a.257.257 0 0 0 0 .514h3.771a.257.257 0 0 0 .249-.322l-1.2-4.628a.26.26 0 0 0-.216-.191M9.69 15.857c-.146 0-.262.095-.262.215h-.004c0 .12.116.214.261.214h4.629c.146 0 .261-.095.261-.215s-.115-.214-.261-.214zM9.214 9.43a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286m6.214-.643a.643.643 0 1 1-1.285 0 .643.643 0 0 1 1.285 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#BCBCBC"
            d="M18.63 12a6.63 6.63 0 1 1-13.26 0 6.63 6.63 0 0 1 13.26 0m-5.912-2.998a.257.257 0 0 0-.281.32l1.114 4.307h-3.437a.257.257 0 0 0 0 .514h3.771a.257.257 0 0 0 .249-.322l-1.2-4.628a.26.26 0 0 0-.216-.191M9.69 15.857c-.146 0-.262.095-.262.215h-.004c0 .12.116.214.261.214h4.629c.146 0 .261-.095.261-.215s-.115-.214-.261-.214zM9.214 9.43a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286m6.214-.643a.643.643 0 1 1-1.285 0 .643.643 0 0 1 1.285 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNPC.displayName = 'NPC'
