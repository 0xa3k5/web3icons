import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconHXD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.429 7.072v2.357h3.428V5.143z" />
          <path
            fill="currentColor"
            d="M14.143 10.286H6.429v1.286h11.143v-4.5l-3.429-1.929zm3.429 3.428V12.43H6.429v4.714l3.428 1.714v-5.142z"
          />
          <path
            fill="currentColor"
            d="M17.572 14.571h-3.429v4.286l3.429-1.929z"
          />
        </>
      ) : (
        <>
          <path fill="#F8C007" d="M6.429 7.072v2.357h3.428V5.143z" />
          <path
            fill="#F8C007"
            d="M14.143 10.286H6.429v1.286h11.143v-4.5l-3.429-1.929zm3.429 3.428V12.43H6.429v4.714l3.428 1.714v-5.142z"
          />
          <path fill="#F8C007" d="M17.571 14.571h-3.428v4.286l3.428-1.929z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconHXD.displayName = 'HXD'
