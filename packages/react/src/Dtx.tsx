import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconDtx = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m20.749 9.323-3.92 2.884a4.4 4.4 0 0 0-.93-2.7c-1.533-1.985-4.427-2.382-6.462-.886l-6.866 5.05 1.109 1.434 3.92-2.883c.001.978.328 1.928.93 2.7 1.533 1.985 4.426 2.382 6.46.886l6.867-5.05zm-6.803 5.132a2.94 2.94 0 0 1-3.192.177 2.83 2.83 0 0 1-1.131-1.199 2.75 2.75 0 0 1-.258-1.61c.08-.551.326-1.066.703-1.477a2.9 2.9 0 0 1 1.426-.848 2.95 2.95 0 0 1 1.669.067 2.9 2.9 0 0 1 1.349.96 2.755 2.755 0 0 1-.566 3.93"
          />
        </>
      ) : (
        <>
          <path
            fill="#78E6D0"
            d="m20.749 9.323-3.92 2.884a4.4 4.4 0 0 0-.93-2.7c-1.533-1.985-4.427-2.382-6.462-.886l-6.866 5.05 1.109 1.434 3.92-2.883c.001.978.328 1.928.93 2.7 1.533 1.985 4.426 2.382 6.46.886l6.867-5.05zm-6.803 5.132a2.94 2.94 0 0 1-3.192.177 2.83 2.83 0 0 1-1.131-1.199 2.75 2.75 0 0 1-.258-1.61c.08-.551.326-1.066.703-1.477a2.9 2.9 0 0 1 1.426-.848 2.95 2.95 0 0 1 1.669.067 2.9 2.9 0 0 1 1.349.96 2.755 2.755 0 0 1-.566 3.93"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDtx.displayName = 'Dtx'

export default IconDtx
