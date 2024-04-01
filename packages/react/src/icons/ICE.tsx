import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconICE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m7.037 10.423.471 3.223 3.587.248 2.16-4.08-.95-3.317-1.47-1.748h-.404l-.788.651-.798 2.743z"
          />
          <path
            fill="currentColor"
            d="m16.586 17.666-1.15.75-2.75-8.344-.133-2.666-1.758-2.692 2.786 2.083.802 1.53 1.598.63L18 13.594z"
          />
          <path
            fill="currentColor"
            d="m9.844 13.543-2.464-.167-.523 1.564 1.521 3.489h7.059l.999-4.616-2.165-3.219-1.628-.582v.338l-2.799 3.19z"
          />
        </>
      ) : (
        <>
          <path
            fill="#66E2FF"
            d="m7.037 10.423.472 3.223 3.587.248 2.16-4.08-.951-3.317-1.47-1.748h-.403l-.789.651-.797 2.743z"
          />
          <path
            fill="#21B3D3"
            d="m16.586 17.666-1.149.75-2.751-8.344-.133-2.666-1.757-2.692 2.786 2.083.801 1.53 1.599.63L18 13.594z"
          />
          <path
            fill="#3FDCFF"
            d="m9.845 13.543-2.465-.167-.523 1.564 1.523 3.49h7.058l.999-4.616-2.164-3.219-1.629-.582v.338L9.845 13.54z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconICE.displayName = 'ICE'
