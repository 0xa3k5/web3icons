import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenXPLA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m13.466 12.728-.725.72 4.963 4.968.724-.725-4.962-4.967zM6.29 5.571l-.72.725 4.963 4.962.72-.72zm11.405.009-4.955 4.97.72.72 4.96-4.97zm-7.149 7.157-4.959 4.971.72.72 4.963-4.971z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00B1FF"
            d="m13.466 12.728-.725.72 4.963 4.968.724-.725-4.962-4.967zM6.29 5.571l-.72.725 4.963 4.962.72-.72zm11.405.009-4.955 4.97.72.72 4.96-4.97zm-7.149 7.157-4.959 4.971.72.72 4.963-4.971z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenXPLA.displayName = 'XPLA'
