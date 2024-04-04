import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkHedera = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M14.284 12.492H9.812v-1.116h4.472z" />
          <path
            fill="currentColor"
            d="M7.555 5.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304m6.681 10.112h1.016V8.456h-1.016v2.108H9.764V8.456H8.748v7.004h1.016V13.3h4.472z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path fill="#000" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16" />
          <path
            fill="#fff"
            d="M15.252 15.46h-1.016V13.3H9.764v2.16H8.748V8.456h1.016v2.108h4.472V8.456h1.016zm-5.44-2.968h4.472v-1.116H9.812z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkHedera.displayName = 'hedera'
