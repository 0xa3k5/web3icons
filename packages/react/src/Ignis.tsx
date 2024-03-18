import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconIgnis = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.143 5.782 10.5 3.429l-2.786 7.037 1.783 3.248zm2.571 3.861-2.121-3.591-8.164 14.057h4.093zm-2.391 4.929-3.18 5.571 5.143-3.051z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F9C011"
            d="M14.143 5.782 10.5 3.429l-2.786 7.037 1.783 3.248z"
          />
          <path
            fill="#DD6F2C"
            d="m16.714 9.643-2.121-3.591-8.164 14.057h4.093z"
          />
          <path fill="#B6230B" d="m14.323 14.572-3.18 5.571 5.143-3.051z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconIgnis.displayName = 'Ignis'

export default IconIgnis
