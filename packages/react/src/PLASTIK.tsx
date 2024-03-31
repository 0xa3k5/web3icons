import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPLASTIK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.857 12a6.857 6.857 0 1 1-2.078-4.92l-.922.904a5.572 5.572 0 1 0 1.586 2.855l-3.257 3.214-.171.163v.008a3 3 0 1 1 .012-4.436l-.921.905a1.714 1.714 0 1 0 .017 2.601l.15-.15.073-.085 1.603-1.586v.017l2.027-1.993v-.004l.951-.943a6.83 6.83 0 0 1 .93 3.45"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PLASTIK__a)"
            d="M18.857 12a6.857 6.857 0 1 1-2.079-4.92l-.921.904a5.572 5.572 0 1 0 1.586 2.855l-3.258 3.214-.171.163v.008a3 3 0 1 1 .013-4.436l-.922.905a1.714 1.714 0 1 0 .018 2.601l.15-.15.072-.085 1.603-1.586v.017l2.027-1.993v-.004l.952-.943a6.83 6.83 0 0 1 .93 3.45"
          />
          <defs>
            <linearGradient
              id="PLASTIK__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0440A8" />
              <stop offset=".59" stopColor="#00B4B0" />
              <stop offset="1" stopColor="#02BFA1" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPLASTIK.displayName = 'PLASTIK'
