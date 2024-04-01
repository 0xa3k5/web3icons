import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconGRT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-3.333-9c0 1.655 1.346 3 3 3s3-1.345 3-3-1.347-3-3-3-3 1.345-3 3m1 0c0-1.103.896-2 2-2 1.103 0 2 .897 2 2s-.897 2-2 2c-1.104 0-2-.897-2-2m4.853 3.853-2 2a.496.496 0 0 1-.707 0 .5.5 0 0 1 0-.706l2-2a.5.5 0 0 1 .707.706m.047-6.353c0-.33.27-.6.6-.6s.6.27.6.6-.27.6-.6.6-.6-.27-.6-.6"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#6F4CFF"
            d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-3.5-9c0 1.655 1.347 3 3 3s3-1.345 3-3-1.347-3-3-3-3 1.345-3 3m1 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2m4.853 3.853-2 2a.496.496 0 0 1-.707 0 .5.5 0 0 1 0-.706l2-2a.5.5 0 0 1 .707.706M14.4 8.5c0-.33.27-.6.6-.6s.6.27.6.6-.27.6-.6.6-.6-.27-.6-.6"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGRT.displayName = 'GRT'
