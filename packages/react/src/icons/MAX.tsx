import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconMAX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.857 17.768a2.906 2.906 0 0 1-4.067-.055l-4.123-4.205a2.854 2.854 0 0 1 .056-4.037 2.906 2.906 0 0 1 4.071.056l4.123 4.204a2.83 2.83 0 0 1-.056 4.037zM6.43 12a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714m6.235 3.724a1.55 1.55 0 0 1-1.555 1.543 1.55 1.55 0 0 1-1.556-1.543 1.55 1.55 0 0 1 1.556-1.543c.857 0 1.555.69 1.555 1.543"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M9.103 17.996a3.44 3.44 0 0 1-.313-4.882l5.26-5.944a3.506 3.506 0 0 1 4.915-.309 3.443 3.443 0 0 1 .309 4.882l-5.254 5.944a3.506 3.506 0 0 1-4.916.309m2.006-.729a1.55 1.55 0 0 0 1.555-1.543 1.55 1.55 0 0 0-1.555-1.543 1.55 1.55 0 0 0-1.556 1.543 1.55 1.55 0 0 0 1.556 1.543m7.32-7.629a1.929 1.929 0 1 1-3.858 0 1.929 1.929 0 0 1 3.858 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MAX__a)"
            d="M12.857 17.768a2.906 2.906 0 0 1-4.067-.055l-4.123-4.205a2.854 2.854 0 0 1 .056-4.037 2.906 2.906 0 0 1 4.071.056l4.123 4.204a2.83 2.83 0 0 1-.056 4.037zM6.43 12a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714m6.235 3.724a1.55 1.55 0 0 1-1.555 1.543 1.55 1.55 0 0 1-1.556-1.543 1.55 1.55 0 0 1 1.556-1.543c.857 0 1.555.69 1.555 1.543"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#MAX__b)"
            d="M9.103 17.996a3.44 3.44 0 0 1-.313-4.882l5.26-5.944a3.506 3.506 0 0 1 4.915-.309 3.443 3.443 0 0 1 .309 4.882l-5.254 5.944a3.506 3.506 0 0 1-4.916.309m2.006-.729a1.55 1.55 0 0 0 1.555-1.543 1.55 1.55 0 0 0-1.555-1.543 1.55 1.55 0 0 0-1.556 1.543 1.55 1.55 0 0 0 1.556 1.543m7.32-7.629a1.929 1.929 0 1 1-3.858 0 1.929 1.929 0 0 1 3.858 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="MAX__a"
              x1="18.127"
              x2="9.381"
              y1="7.605"
              y2="17.026"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0CB5AD" />
              <stop offset="1" stopColor="#9CCE7E" />
            </linearGradient>
            <linearGradient
              id="MAX__b"
              x1="18.127"
              x2="9.381"
              y1="7.605"
              y2="17.026"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0CB5AD" />
              <stop offset="1" stopColor="#9CCE7E" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMAX.displayName = 'MAX'
