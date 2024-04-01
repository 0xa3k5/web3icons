import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconTELOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 17.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TELOS__a)"
            d="M12 17.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <radialGradient
              id="TELOS__a"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(0 8 -8 0 12 12)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".152" stopColor="#42A0B9" />
              <stop offset=".247" stopColor="#70C38D" />
              <stop offset=".344" stopColor="#6FC68F" />
              <stop offset=".488" stopColor="#3B74CE" />
              <stop offset=".66" stopColor="#954494" />
              <stop offset=".76" stopColor="#9A4290" />
              <stop offset=".871" stopColor="#7256AB" />
              <stop offset="1" stopColor="#3D7DC7" />
            </radialGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTELOS.displayName = 'TELOS'
