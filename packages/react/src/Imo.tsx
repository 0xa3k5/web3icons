import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconImo = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.857 18.428H6v-8.125l6.857-6.446zm2.143 0V8.34l2.143 2.241v7.847z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M12.857 18.428H6v-8.125l6.857-6.446zm2.143 0V8.34l2.143 2.241v7.847z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconImo.displayName = 'Imo'

export default IconImo
