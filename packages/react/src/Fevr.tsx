import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconFEVR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.446 6.857H6.857a.43.43 0 0 0-.428.429v9.428a.43.43 0 0 0 .428.429H9v-3.429h1.637l.677-2.571H9V9.429h2.769zm.116 4.286h1.474a.857.857 0 1 0 0-1.714h-1.02l.677-2.572h.249a3.428 3.428 0 0 1 1.937 6.257L18 17.143h-2.867l-1.809-3.429h-1.44z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#FEVR__a)"
            d="M12.446 6.857H6.857a.43.43 0 0 0-.428.429v9.428a.43.43 0 0 0 .428.429H9v-3.429h1.637l.677-2.571H9V9.429h2.769zm.116 4.286h1.474a.857.857 0 1 0 0-1.714h-1.02l.677-2.572h.249a3.428 3.428 0 0 1 1.937 6.257L18 17.143h-2.867l-1.809-3.429h-1.44z"
          />
          <defs>
            <linearGradient
              id="FEVR__a"
              x1="8.702"
              x2="14.657"
              y1="8.235"
              y2="16.634"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E752F5" />
              <stop offset=".48" stopColor="#5C0CA9" />
              <stop offset="1" stopColor="#44019C" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconFEVR.displayName = 'FEVR'
