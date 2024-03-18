import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGymnet = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 12a1.714 1.714 0 1 0 0-3.429A1.714 1.714 0 0 0 12 12m6.206-6.429C18 9.026 14.7 11.918 13.08 12.938a6.72 6.72 0 0 0 5.635-1.272c.412-2.64-.17-5.165-.514-6.095z"
          />
          <path
            fill="currentColor"
            d="M18.206 12.938c-8.199 3.043-11.615-3.642-12.3-7.367-2.816 8.383 2.82 12.446 6.15 13.715 3.685-1.423 5.635-4.826 6.15-6.348"
          />
        </>
      ) : (
        <>
          <path
            fill="#2F6EB6"
            d="M12 12a1.714 1.714 0 1 0 0-3.429A1.714 1.714 0 0 0 12 12m6.206-6.429C18 9.026 14.7 11.918 13.08 12.938a6.72 6.72 0 0 0 5.636-1.272c.412-2.64-.171-5.165-.514-6.095z"
          />
          <path
            fill="#2F6EB6"
            d="M18.206 12.938c-8.198 3.043-11.614-3.642-12.3-7.367-2.816 8.383 2.82 12.446 6.15 13.715 3.686-1.423 5.636-4.826 6.15-6.348"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGymnet.displayName = 'Gymnet'

export default IconGymnet
