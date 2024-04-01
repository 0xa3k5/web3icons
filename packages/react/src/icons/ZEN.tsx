import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconZEN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m17.58 8.003-1.122 1.738a5 5 0 0 1-3.654 7.186c-1.037.17-2.098 0-3.038-.47l-1.742 1.12a6.846 6.846 0 0 0 10.81-5.02 6.88 6.88 0 0 0-1.254-4.558h.004z"
          />
          <path
            fill="currentColor"
            d="M12.01 15.436a3.44 3.44 0 0 0 3.388-2.823 7.85 7.85 0 0 0-6.245 1.298 3.45 3.45 0 0 0 2.856 1.525"
          />
          <path
            fill="currentColor"
            d="M13.708 11.81q.882.001 1.746.19a3.447 3.447 0 0 0-6.746-.992 3.4 3.4 0 0 0-.111 1.456c-.476.35-.91.754-1.291 1.205a5 5 0 0 1 4.062-6.605 5 5 0 0 1 2.872.484l1.734-1.126A6.846 6.846 0 0 0 5.16 11.52a6.86 6.86 0 0 0 1.327 4.561 8.3 8.3 0 0 1 1.17-1.617 10 10 0 0 1 1.21-1.06 8.2 8.2 0 0 1 4.844-1.593z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ZEN__a)"
            d="m17.58 8.003-1.122 1.738a5 5 0 0 1-3.655 7.186c-1.037.17-2.097 0-3.037-.47l-1.743 1.12a6.846 6.846 0 0 0 10.81-5.02 6.88 6.88 0 0 0-1.254-4.558h.005z"
          />
          <path
            fill="url(#ZEN__b)"
            d="M12.009 15.436a3.44 3.44 0 0 0 3.388-2.823 7.85 7.85 0 0 0-6.244 1.298 3.45 3.45 0 0 0 2.856 1.525"
          />
          <path
            fill="#fff"
            d="M13.707 11.81q.883.001 1.746.19a3.447 3.447 0 0 0-6.746-.992 3.4 3.4 0 0 0-.11 1.456q-.718.527-1.291 1.205a5 5 0 0 1 4.061-6.605 5 5 0 0 1 2.872.484l1.735-1.126A6.846 6.846 0 0 0 5.16 11.52a6.86 6.86 0 0 0 1.327 4.561 8.3 8.3 0 0 1 1.17-1.617 10 10 0 0 1 1.21-1.06 8.2 8.2 0 0 1 4.844-1.593z"
          />
          <defs>
            <radialGradient
              id="ZEN__a"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(14.6004 0 0 14.5854 17.244 5.139)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".1" stopColor="#26DB8D" />
              <stop offset=".26" stopColor="#23D29A" />
              <stop offset=".56" stopColor="#1ABBBB" />
              <stop offset=".89" stopColor="#0E9DE5" />
            </radialGradient>
            <radialGradient
              id="ZEN__b"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(25.3307 0 0 52.7683 23.658 -15.141)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".26" stopColor="#23D29A" />
              <stop offset=".56" stopColor="#1ABBBB" />
              <stop offset=".89" stopColor="#0E9DE5" />
            </radialGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconZEN.displayName = 'ZEN'
