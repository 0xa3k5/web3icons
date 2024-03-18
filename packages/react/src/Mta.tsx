import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconMta = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.286 6H5.143v8.571h2.572V9.616c-.005-.619-.013-1.902 1.5-1.902 1.398 0 1.5 1.275 1.5 1.933v4.924h2.57V10.4c0-1.256 0-2.686 1.5-2.686 1.314 0 1.5 1.076 1.5 1.988v4.87h2.57V9.76c.002-.728.005-1.679-.428-2.376C18.24 7.047 17.598 6 15.857 6c-.887 0-2.122.134-2.835 1.502C12.854 7.097 12.265 6 10.286 6c-1.647 0-2.247.833-2.533 1.231l-.038.053zm11.571 9.857H5.143V18h13.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFB634"
            d="M7.285 6H5.143v8.571h2.571V9.616c-.004-.619-.013-1.902 1.5-1.902 1.399 0 1.5 1.275 1.5 1.933v4.924h2.571V10.4c0-1.256 0-2.686 1.5-2.686 1.314 0 1.5 1.076 1.5 1.988v4.87h2.57V9.76c.002-.728.004-1.679-.428-2.376-.188-.338-.83-1.385-2.57-1.385-.887 0-2.123.134-2.836 1.502C12.854 7.097 12.264 6 10.285 6 8.64 6 8.04 6.833 7.752 7.231l-.038.053zm11.572 9.857H5.143V18h13.714z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMta.displayName = 'Mta'

export default IconMta
