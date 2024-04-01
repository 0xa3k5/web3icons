import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNGM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 12h1.239A5.57 5.57 0 0 0 12 17.572v1.285A6.857 6.857 0 0 1 5.143 12M12 5.143V6.43A5.57 5.57 0 0 1 17.525 12h1.332A6.857 6.857 0 0 0 12 5.143m2.126 8.302a2.571 2.571 0 0 1-4.663-1.016h-.891v-.857h.891a2.571 2.571 0 0 1 5.074 0h1.106l-.429.857H10.56a1.5 1.5 0 0 0 2.61.514zm-3.566-1.873a1.5 1.5 0 0 1 2.876 0z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#CBF6EC"
            d="M5.143 12H6.38A5.57 5.57 0 0 0 12 17.572v1.285A6.857 6.857 0 0 1 5.143 12M12 5.143V6.43A5.57 5.57 0 0 1 17.524 12h1.333A6.857 6.857 0 0 0 12 5.143m2.125 8.302a2.571 2.571 0 0 1-4.662-1.016H8.57v-.857h.892a2.571 2.571 0 0 1 5.074 0h1.106l-.429.857H10.56a1.5 1.5 0 0 0 2.61.514zm-3.565-1.873a1.5 1.5 0 0 1 2.875 0z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNGM.displayName = 'NGM'
