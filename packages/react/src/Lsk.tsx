import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLsk = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m10.839 6.307 1.12-1.991 5.609 9.854L14.333 18h-2.587l3.322-4.082c-1.417-2.533-2.843-5.061-4.23-7.611"
          />
          <path
            fill="currentColor"
            d="M10.568 15.857h1.937L10.742 18H9.66l-3.225-3.81 3.968-7.099L11.6 9.132l-2.684 4.796z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0288D1"
            d="m10.838 6.307 1.12-1.991 5.61 9.854L14.332 18h-2.587l3.321-4.082c-1.417-2.533-2.842-5.061-4.23-7.611z"
          />
          <path
            fill="#0288D1"
            d="M10.568 15.857h1.936L10.741 18h-1.08l-3.225-3.81 3.968-7.099L11.6 9.132l-2.684 4.796z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLsk.displayName = 'Lsk'

export default IconLsk
