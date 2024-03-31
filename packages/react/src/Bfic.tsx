import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBFIC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.714 6H7.286v10.714h2.143V8.143h4.714c.261 0 .428.197.428.428v1.286c0 .27-.167.429-.428.429H11.57v2.143h2.572c.261 0 .428.235.428.428v1.286c0 .214-.244.428-.428.428H11.57v5.572h2.143v-3.429h1.427c1.329 0 1.573-.874 1.573-1.457V12.43a1.14 1.14 0 0 0-.643-1.072c.446-.231.643-.9.643-1.285V8.199C16.714 6.57 15.76 6 15.141 6h-2.284V3.857h-2.143z"
          />
          <path fill="currentColor" d="M9.429 18H7.286v2.143h2.143z" />
        </>
      ) : (
        <>
          <path
            fill="#F8E000"
            d="M10.715 6H7.286v10.714H9.43V8.143h4.714c.262 0 .429.197.429.428v1.286c0 .27-.167.429-.429.429h-2.571v2.143h2.571c.262 0 .429.235.429.428v1.286c0 .214-.244.428-.429.428h-2.571v5.572h2.143v-3.429h1.427c1.328 0 1.573-.874 1.573-1.457V12.43a1.14 1.14 0 0 0-.643-1.072c.446-.231.643-.9.643-1.285V8.199C16.715 6.57 15.759 6 15.142 6h-2.284V3.857h-2.143z"
          />
          <path fill="#F8E000" d="M9.429 18H7.286v2.143H9.43z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconBFIC.displayName = 'BFIC'
