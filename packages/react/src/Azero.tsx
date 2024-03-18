import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAzero = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m10.852 5.231-2.163 5.055H5.716a.145.145 0 0 0-.145.146v1.422c0 .08.065.146.145.146h2.24L5.66 17.365a.147.147 0 0 0 .132.206H7.54c.058 0 .11-.035.133-.09l4.307-10.43 4.249 10.43a.145.145 0 0 0 .134.09h1.845a.147.147 0 0 0 .133-.206L16.06 12h2.223c.08 0 .144-.066.144-.146v-1.422a.145.145 0 0 0-.144-.146h-2.95l-2.147-5.054a.145.145 0 0 0-.133-.09h-2.07a.145.145 0 0 0-.133.09"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#1D242C"
            d="m10.852 5.231-2.163 5.055H5.716a.145.145 0 0 0-.145.146v1.422c0 .08.065.146.145.146h2.24L5.66 17.365a.147.147 0 0 0 .132.206H7.54c.058 0 .11-.035.133-.09l4.307-10.43 4.249 10.43a.145.145 0 0 0 .134.09h1.845a.147.147 0 0 0 .133-.206L16.06 12h2.223c.08 0 .144-.066.144-.146v-1.422a.145.145 0 0 0-.144-.146h-2.95l-2.147-5.054a.145.145 0 0 0-.133-.09h-2.07a.145.145 0 0 0-.133.09"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAzero.displayName = 'Azero'

export default IconAzero
