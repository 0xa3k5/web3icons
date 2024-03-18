import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconIdia = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.286 5.572v12.214a.63.63 0 0 0 .643.638.63.63 0 0 0 .587-.402l4.787-12.009a.64.64 0 0 0-.592-.87H7.714a.43.43 0 0 0-.424.429zm3.24 12.711 4.358-11.16a.42.42 0 0 1 .364-.266.4.4 0 0 1 .275.086c4.89 3.904 2.117 12.244-4.642 11.906a.407.407 0 0 1-.355-.566"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF0EA9"
            d="M7.286 5.572v12.214a.63.63 0 0 0 .643.638.63.63 0 0 0 .587-.402l4.787-12.009a.64.64 0 0 0-.591-.87H7.715a.43.43 0 0 0-.425.429z"
          />
          <path
            fill="#00DAFF"
            d="m10.526 18.283 4.359-11.16a.42.42 0 0 1 .364-.266.4.4 0 0 1 .274.086c4.89 3.904 2.117 12.244-4.641 11.906a.407.407 0 0 1-.356-.566"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconIdia.displayName = 'Idia'

export default IconIdia
