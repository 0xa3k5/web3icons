import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXNO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.675 6.597 6.65 14.654l2.41 2.997 8.362-8.36z"
          />
          <path
            fill="currentColor"
            d="M16.071 9.848a1.928 1.928 0 1 0 0-3.857 1.928 1.928 0 0 0 0 3.857m-8.142.01a1.929 1.929 0 1 0 0-3.858 1.929 1.929 0 0 0 0 3.857m0 8.142a1.927 1.927 0 0 0 1.363-3.292A1.928 1.928 0 1 0 7.93 18M18 16.072a1.93 1.93 0 1 1-3.858 0 1.93 1.93 0 0 1 3.858 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#092049"
            d="M14.675 6.597 6.65 14.654l2.41 2.997 8.362-8.36z"
            fillOpacity=".4"
          />
          <path
            fill="#092049"
            d="M16.071 9.848a1.928 1.928 0 1 0 0-3.857 1.928 1.928 0 0 0 0 3.857m-8.142.01a1.929 1.929 0 1 0 0-3.858 1.929 1.929 0 0 0 0 3.857m0 8.142a1.927 1.927 0 0 0 1.363-3.292A1.928 1.928 0 1 0 7.93 18M18 16.072a1.93 1.93 0 1 1-3.858 0 1.93 1.93 0 0 1 3.858 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXNO.displayName = 'XNO'
