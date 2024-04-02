import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSSX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.617 18c0-.07 1.08-3.242 1.621-4.818.18.307.877.813 2.234.876a.21.21 0 0 0 .17.085h3.252a.643.643 0 1 0 0-.429H9.643a.21.21 0 0 0-.189.113c-1.235-.039-3.179-.81-2.936-4.025C6.693 7.483 9.108 6 10.338 6h8.136l-1.684 4.893c-.46-.652-1.628-.928-2.298-.988a.2.2 0 0 0-.135-.048h-3.25a.643.643 0 1 0 0 .429h3.25q.083-.002.14-.053c1.477.162 3.042.945 3.042 3.689 0 2.847-2.472 3.905-3.708 4.078z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#F23A2E"
            d="M5.617 18c0-.07 1.08-3.242 1.621-4.818.18.307.877.813 2.234.876a.21.21 0 0 0 .17.085h3.252a.643.643 0 1 0 0-.429H9.643a.21.21 0 0 0-.189.113c-1.235-.039-3.179-.81-2.936-4.025C6.693 7.483 9.108 6 10.338 6h8.136l-1.684 4.893c-.46-.652-1.628-.928-2.298-.988a.2.2 0 0 0-.135-.048h-3.25a.643.643 0 1 0 0 .429h3.25q.083-.002.14-.053c1.477.162 3.042.945 3.042 3.689 0 2.847-2.472 3.905-3.708 4.078z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenSSX.displayName = 'SSX'
