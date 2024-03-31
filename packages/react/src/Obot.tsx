import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconOBOT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.571 5.571h5.143v2.143h2.572V5.571h5.142v5.143h-2.142v2.572h2.142v5.142h-5.142v-2.142h-2.572v2.142H5.571v-5.142h2.143v-2.572H5.571zm3 5.143v2.572h2.143v2.142h2.572v-2.142h2.142v-2.572h-2.142V8.571h-2.572v2.143zM6.857 6.857h2.571v2.571H6.857zm0 7.714h2.571v2.572H6.857zm10.286-7.714H14.57v2.571h2.572zm-2.572 7.714h2.572v2.572H14.57z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FE0000"
            d="M5.571 5.571h5.143v2.143h2.572V5.571h5.142v5.143h-2.142v2.572h2.142v5.142h-5.142v-2.142h-2.572v2.142H5.571v-5.142h2.143v-2.572H5.571zm3 5.143v2.572h2.143v2.142h2.572v-2.142h2.142v-2.572h-2.142V8.571h-2.572v2.143zM6.857 6.857h2.571v2.571H6.857zm0 7.714h2.571v2.572H6.857zm10.286-7.714H14.57v2.571h2.572zm-2.572 7.714h2.572v2.572H14.57z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconOBOT.displayName = 'OBOT'
