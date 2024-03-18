import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGbex = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 12a3.43 3.43 0 0 0 3.428 3.428h6.858c.287 0 .857-.171.857-.857s-.57-.857-.857-.857H9.857v-2.571h6.214c.287 0 1.072-.172 1.072-.857 0-.858-.643-.858-1.072-.858h-1.5V6.857h2.572c.784 0 2.571.428 2.571 2.786 0 .643-.343 2.271-1.714 2.785.57.073 1.714.6 1.714 2.143 0 1.929-.857 3.429-3.428 3.429H9v-.017a6 6 0 1 1 4.839-10.055l-1.89 1.745A3.428 3.428 0 0 0 5.998 12"
          />
        </>
      ) : (
        <>
          <path
            fill="#FE036A"
            d="M6 12a3.43 3.43 0 0 0 3.428 3.428h6.858c.287 0 .857-.171.857-.857s-.57-.857-.857-.857H9.857v-2.571h6.214c.287 0 1.072-.172 1.072-.857 0-.858-.643-.858-1.072-.858h-1.5V6.857h2.572c.784 0 2.571.428 2.571 2.786 0 .643-.343 2.271-1.714 2.785.57.073 1.714.6 1.714 2.143 0 1.929-.857 3.429-3.428 3.429H9v-.017a6 6 0 1 1 4.839-10.055l-1.89 1.745A3.428 3.428 0 0 0 5.998 12"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGbex.displayName = 'Gbex'

export default IconGbex
