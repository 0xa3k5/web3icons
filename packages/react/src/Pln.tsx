import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconPln = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.043 5.571H8.992L5.177 10.38l-.034.034 1.32 6.077 5.499 2.756.038.039 5.537-2.756 1.32-6.077zM16 14.104l1.684-2.121-.729 3.351zm-7.483.639 2.456 3.094-3.519-1.753zm1.504-8.349h3.999L12 9.073 10.02 6.39zM12 10.38l3.009 3.763L12 17.944l-3.008-3.801zm-3.518 3.094-2.387-2.978 3.085-3.84 2.306 3.055zm7.003 1.307 1.062 1.303-3.484 1.753zm2.455-4.247-2.383 2.979L12.55 9.71l2.314-3.055zm-9.938 3.54-.952 1.192-.733-3.318z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FC2952"
            d="M15.043 5.571H8.99L5.177 10.38l-.034.034 1.32 6.077 5.498 2.756.039.039 5.537-2.756 1.32-6.077zm.955 8.533 1.685-2.121-.729 3.351zm-7.483.639 2.456 3.094-3.518-1.753zm1.505-8.349h3.998L12 9.073 10.02 6.39zM12 10.38l3.008 3.763L12 17.944l-3.01-3.801zm-3.52 3.094-2.387-2.978 3.086-3.84 2.305 3.055zm7.003 1.307 1.063 1.303-3.484 1.753zm2.456-4.247-2.383 2.979-3.009-3.802 2.315-3.055zM8 14.074l-.951 1.192-.733-3.318z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPln.displayName = 'Pln'

export default IconPln
