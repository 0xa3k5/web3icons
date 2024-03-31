import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMSOL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.286 6.857h12l-3 2.571H4.714zm.001 7.714h11.57l-2.562 2.572H4.715zm8.999-3.857-11.572.003 2.573 2.569h11.57z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#308D8A"
            d="M7.286 6.857h12l-3 2.571H4.714zm.001 7.714h11.57l-2.562 2.572H4.715zm8.999-3.857-11.572.003 2.573 2.569h11.57z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMSOL.displayName = 'MSOL'
