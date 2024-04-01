import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSCP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.857 10.715c0 1.757-1.243 3-3 3h-3v-3c0-1.758 1.243-3 3-3s3 1.242 3 3m2.572 0a5.57 5.57 0 0 1-5.572 5.57h-3v2.572H7.286v-8.142a5.571 5.571 0 0 1 11.142 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2074EE"
            d="M15.858 10.715c0 1.757-1.243 3-3 3h-3v-3c0-1.758 1.242-3 3-3 1.757 0 3 1.242 3 3m2.571 0a5.57 5.57 0 0 1-5.571 5.57h-3v2.572H7.286v-8.142a5.571 5.571 0 0 1 11.143 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSCP.displayName = 'SCP'
