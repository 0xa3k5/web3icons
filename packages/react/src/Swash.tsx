import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSWASH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.643 5.929a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M12 11.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-1.768-1.268a2.5 2.5 0 1 1 3.536 3.536 2.5 2.5 0 0 1-3.536-3.536m-1.875 6.84a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-1.768-1.268a2.5 2.5 0 1 1 3.536 3.536 2.5 2.5 0 0 1-3.536-3.536"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M6.428 9.214A3.214 3.214 0 0 1 9.643 6h4.5v.857h-4.5a2.357 2.357 0 1 0 0 4.715h.857v.857h-.857a3.214 3.214 0 0 1-3.215-3.215m11.143 5.572A3.214 3.214 0 0 1 14.357 18h-4.5v-.857h4.5a2.357 2.357 0 1 0 0-4.714H13.5v-.857h.857a3.214 3.214 0 0 1 3.214 3.214"
          />
        </>
      ) : (
        <>
          <path
            fill="#3CE35F"
            d="M15.643 5.929a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M12 11.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-1.767-1.268a2.5 2.5 0 1 1 3.535 3.536 2.5 2.5 0 0 1-3.536-3.536m-1.876 6.84a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M6.59 15.804a2.5 2.5 0 1 1 3.535 3.536 2.5 2.5 0 0 1-3.535-3.536"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#3CE35F"
            d="M6.429 9.214A3.214 3.214 0 0 1 9.643 6h4.5v.857h-4.5a2.357 2.357 0 1 0 0 4.715h.857v.857h-.857A3.214 3.214 0 0 1 6.43 9.214m11.143 5.572A3.214 3.214 0 0 1 14.357 18h-4.5v-.857h4.5a2.357 2.357 0 1 0 0-4.714H13.5v-.857h.857a3.214 3.214 0 0 1 3.215 3.214"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSWASH.displayName = 'SWASH'
