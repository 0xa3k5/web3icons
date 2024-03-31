import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPOND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.835 6.733a1.05 1.05 0 0 0-.742-.304h-.002a1.04 1.04 0 0 0-.74.308l-8.188 8.195a1.04 1.04 0 0 0 .003 1.478 1.04 1.04 0 0 0 .74.305c.281 0 .546-.11.745-.308l8.187-8.195a1.046 1.046 0 0 0-.003-1.479m4.8-.224a1.05 1.05 0 0 0-1.148.229l-8.214 8.194c-.197.197-.274.462-.273.74 0 .277.079.542.277.738a1.06 1.06 0 0 0 1.489-.004l6.377-6.398v5.661c0 .277.148.543.345.739a1.06 1.06 0 0 0 1.489 0c.197-.196.308-.462.308-.739V7.475a1.04 1.04 0 0 0-.65-.966"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2DB8E3"
            d="M13.835 6.733a1.05 1.05 0 0 0-.741-.304h-.003a1.04 1.04 0 0 0-.74.308l-8.188 8.195a1.04 1.04 0 0 0 .004 1.478 1.04 1.04 0 0 0 .74.305c.28 0 .546-.11.744-.308l8.187-8.195a1.046 1.046 0 0 0-.003-1.479"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#3840C7"
            d="M18.635 6.509a1.05 1.05 0 0 0-1.148.229l-8.214 8.194c-.197.197-.274.462-.273.74s.08.542.277.738a1.06 1.06 0 0 0 1.49-.004l6.376-6.398v5.661c0 .277.148.543.346.739a1.06 1.06 0 0 0 1.488 0 1.04 1.04 0 0 0 .309-.739V7.475a1.04 1.04 0 0 0-.65-.966"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPOND.displayName = 'POND'
