import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconFEI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.553 5.884A.64.64 0 0 0 12 5.572a.64.64 0 0 0-.553.312l-1.097 2.04a.429.429 0 0 0 .369.648h2.567a.428.428 0 0 0 .369-.648L12.557 5.89zm2.541 4.393a.86.86 0 0 0-.737-.42H9.643a.86.86 0 0 0-.737.42L5.692 15.42a.857.857 0 0 0 .737 1.294h11.143a.857.857 0 0 0 .737-1.294z"
          />
        </>
      ) : (
        <>
          <path
            fill="#22996F"
            d="M12.553 5.884A.64.64 0 0 0 12 5.572a.63.63 0 0 0-.553.312l-1.097 2.04a.429.429 0 0 0 .368.648h2.567a.429.429 0 0 0 .369-.648L12.557 5.89zm2.541 4.393a.86.86 0 0 0-.737-.42H9.643a.86.86 0 0 0-.738.42L5.691 15.42a.857.857 0 0 0 .737 1.294h11.143a.857.857 0 0 0 .737-1.294z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFEI.displayName = 'FEI'
