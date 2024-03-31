import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPPAY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18.857 11.225-.012-.03L12 12.857c-2.404-.574-6.613-1.602-6.844-1.662l-.013.042C5.53 7.81 8.452 5.143 12 5.143s6.472 2.657 6.857 6.082m-.072 2.03L12 13.93l-6.784-.677q.13.68.377 1.303L12 15l6.386-.398c.176-.429.313-.879.399-1.346m-1.085 2.61a93 93 0 0 1-5.7.207c-1.843-.017-4.414-.202-5.768-.309q.333.508.758.952h10.02q.379-.397.69-.85m-1.675 1.707H7.971A6.9 6.9 0 0 0 12 18.857c1.5 0 2.893-.475 4.024-1.285"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PPAY__a)"
            d="m18.857 11.225-.013-.03L12 12.857c-2.405-.574-6.613-1.602-6.845-1.662l-.012.042C5.528 7.81 8.45 5.143 12 5.143c3.548 0 6.471 2.657 6.857 6.082m-.073 2.03L12 13.93l-6.785-.677c.086.454.215.887.378 1.303L12 15l6.385-.398a6.8 6.8 0 0 0 .399-1.346m-1.084 2.61a93 93 0 0 1-5.7.207c-1.843-.017-4.415-.202-5.769-.309q.335.508.759.952h10.02q.378-.397.69-.85m-1.676 1.707H7.971A6.9 6.9 0 0 0 12 18.857c1.5 0 2.893-.475 4.024-1.285"
          />
          <defs>
            <linearGradient
              id="PPAY__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FB4440" />
              <stop offset="1" stopColor="#A72DC4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPPAY.displayName = 'PPAY'
