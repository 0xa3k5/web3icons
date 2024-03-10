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
            d="m10.852 5.231-2.163 5.055H5.716a.145.145 0 0 0-.144.146v1.422c0 .08.064.146.144.146h2.24L5.66 17.365a.147.147 0 0 0 .133.206H7.54c.059 0 .111-.035.134-.09l4.306-10.43 4.25 10.43a.145.145 0 0 0 .133.09h1.845a.147.147 0 0 0 .133-.206L16.062 12h2.222c.08 0 .145-.066.145-.146v-1.422a.146.146 0 0 0-.145-.146h-2.95l-2.147-5.054a.14.14 0 0 0-.133-.09h-2.07a.145.145 0 0 0-.132.09"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AZERO__a)">
            <path fill="#F0F3FA" d="M24 0H0v24h24z" />
            <path
              fill="#1D242C"
              d="m10.852 5.231-2.163 5.055H5.716a.145.145 0 0 0-.144.146v1.422c0 .08.064.146.144.146h2.24L5.66 17.365a.147.147 0 0 0 .133.206H7.54c.059 0 .111-.035.134-.09l4.306-10.43 4.25 10.43a.145.145 0 0 0 .133.09h1.845a.147.147 0 0 0 .133-.206L16.062 12h2.222c.08 0 .145-.066.145-.146v-1.422a.146.146 0 0 0-.145-.146h-2.95l-2.147-5.054a.14.14 0 0 0-.133-.09h-2.07a.145.145 0 0 0-.132.09"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="AZERO__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAzero.displayName = 'Azero'

export default IconAzero
