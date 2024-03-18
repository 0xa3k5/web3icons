import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGami = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15 15.082a4.05 4.05 0 0 1-2.786 1.204c-1.976 0-4.071-1.757-4.071-4.286s2.095-4.285 4.071-4.285a4.14 4.14 0 0 1 3.206 1.684l2.151-1.406a6.64 6.64 0 0 0-5.357-2.85c-3.548 0-6.643 3.069-6.643 6.857s3.095 6.857 6.643 6.857a6.64 6.64 0 0 0 5.357-2.85v-4.864h-4.714v2.143H15z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FA096F"
            d="M15 15.082a4.05 4.05 0 0 1-2.786 1.204c-1.976 0-4.071-1.757-4.071-4.286s2.095-4.285 4.071-4.285a4.14 4.14 0 0 1 3.206 1.684l2.151-1.406a6.64 6.64 0 0 0-5.357-2.85c-3.548 0-6.643 3.069-6.643 6.857s3.095 6.857 6.643 6.857a6.64 6.64 0 0 0 5.357-2.85v-4.864h-4.714v2.143H15z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGami.displayName = 'Gami'

export default IconGami
