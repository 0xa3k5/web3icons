import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSAI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 0 0 5.282-11.23l-9.654 9.655A6.83 6.83 0 0 0 12 18.857m-5.245-2.44 9.662-9.663a6.857 6.857 0 0 0-9.662 9.662"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#21201D"
            d="M12 18.857a6.857 6.857 0 0 0 5.282-11.23l-9.655 9.655A6.83 6.83 0 0 0 12 18.857m-5.246-2.44 9.662-9.663a6.857 6.857 0 0 0-9.662 9.662"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSAI.displayName = 'SAI'
