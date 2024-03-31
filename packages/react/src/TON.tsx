import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTON = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.012 9.201 12.66 19.316a.857.857 0 0 1-1.453-.005L4.98 9.197a1.8 1.8 0 0 1-.266-.943 1.856 1.856 0 0 1 1.882-1.826h10.817c1.033 0 1.873.815 1.873 1.822a1.8 1.8 0 0 1-.274.951M6.51 8.863l4.633 7.144V8.143H6.994c-.48 0-.694.317-.484.72m6.347 7.144 4.633-7.144c.214-.403-.004-.72-.484-.72h-4.149z"
          />
        </>
      ) : (
        <>
          <path
            fill="#08C"
            d="M19.011 9.201 12.66 19.316a.857.857 0 0 1-1.453-.005L4.98 9.197a1.8 1.8 0 0 1-.266-.943 1.856 1.856 0 0 1 1.881-1.826h10.817c1.033 0 1.873.815 1.873 1.822 0 .334-.094.664-.274.951M6.51 8.863l4.632 7.144V8.143H6.994c-.48 0-.694.317-.484.72m6.347 7.144 4.633-7.144c.214-.403-.005-.72-.485-.72h-4.148z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTON.displayName = 'TON'
