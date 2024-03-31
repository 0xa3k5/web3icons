import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconAMO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M11.144 6.715v4.428H6.902c-.733 0-.902-.241-.902-.664.011-1.033 0-3.232 0-3.764C6 6.213 6.363 6 6.685 6h3.69c.616 0 .77.457.77.715m0 10.57v-4.428H6.902c-.733 0-.902.241-.902.664.011 1.033 0 3.232 0 3.764 0 .502.363.715.685.715h3.69c.616 0 .77-.457.77-.715m1.712-10.57v4.427h4.242c.733 0 .902-.24.902-.664-.011-1.033 0-3.23 0-3.763 0-.502-.363-.715-.685-.715h-3.69c-.615 0-.77.457-.77.715m.001 10.57v-4.428h4.241c.733 0 .902.241.902.664-.011 1.033 0 3.232 0 3.764 0 .502-.363.715-.684.715h-3.69c-.616 0-.769-.457-.769-.715"
      />
    </BaseIcon>
  ),
)

IconAMO.displayName = 'AMO'
