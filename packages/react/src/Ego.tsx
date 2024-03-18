import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconEgo = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 1 0-6.643-8.571H6.7a5.571 5.571 0 0 1 10.444-.429h-1.432a4.285 4.285 0 0 0-7.64.429h4.358v1.285H7.736c-.043.43-.021.863.064 1.286h9.707a5.572 5.572 0 0 1-10.65 1.286H5.486A6.86 6.86 0 0 0 12 18.857m-6.806-6h1.299a5.6 5.6 0 0 1-.047-1.286H5.16a7 7 0 0 0 .034 1.286M12 16.286a4.29 4.29 0 0 0 3.711-2.143H8.29A4.29 4.29 0 0 0 12 16.286"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF5D01"
            d="M12 18.857a6.857 6.857 0 1 0-6.643-8.571h1.341a5.571 5.571 0 0 1 10.444-.429h-1.43a4.286 4.286 0 0 0-7.642.429h4.358v1.285H7.735c-.042.43-.02.863.065 1.286h9.707a5.572 5.572 0 0 1-10.65 1.286H5.485A6.86 6.86 0 0 0 12 18.857m-6.806-6h1.298a5.6 5.6 0 0 1-.047-1.286H5.16a7 7 0 0 0 .034 1.286M12 16.286a4.29 4.29 0 0 0 3.711-2.143H8.288A4.29 4.29 0 0 0 12 16.286"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconEgo.displayName = 'Ego'

export default IconEgo
