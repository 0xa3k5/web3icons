import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconANGLE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#131620"
        d="M11.927 8.503a.106.106 0 0 1 .146 0l6.428 6.283a.107.107 0 0 1 0 .15l-3.214 3.034a.107.107 0 0 1-.146 0L12 15.013 8.858 17.97a.107.107 0 0 1-.145 0l-3.215-3.034a.107.107 0 0 1 0-.15zM12 8.73l-6.275 6.128 3.06 2.885 3.142-2.957c.043-.043.107-.043.146 0l3.14 2.957 3.06-2.884z"
      />
      <path
        fill="#131620"
        d="M12 14.859 8.785 18l-.642-1.556L12 12.677v2.186z"
      />
      <path
        fill="#F2E2D8"
        d="M5.571 14.859 8.785 18l-.642-1.556-3.858-3.767 1.286 2.186z"
      />
      <path
        fill="#131620"
        d="M4.328 12.591a.11.11 0 0 1 .137.009l3.75 3.771a.07.07 0 0 1 .026.035l.643 1.444a.107.107 0 0 1-.171.12l-3.215-3.034a.1.1 0 0 1-.021-.022L4.298 12.73a.11.11 0 0 1 .03-.138m.566.729.763 1.474 2.828 2.764-.432-1.05-3.16-3.192z"
      />
      <path
        fill="#FFE6D6"
        d="M12 14.859 15.214 18l.643-1.556L12 12.677v2.186z"
      />
      <path
        fill="#131620"
        d="M12.064 12.656a.11.11 0 0 1 .116.025l3.75 3.686c.034.03.043.077.025.12l-.651 1.449a.1.1 0 0 1-.077.061.1.1 0 0 1-.095-.027l-3.098-2.957A.1.1 0 0 1 12 14.94v-2.186c0-.043.025-.081.064-.098m-.064.201V14.7l3.171 3.004.557-1.234z"
      />
      <path
        fill="#131620"
        d="M18.428 14.859 15.214 18l.643-1.556 3.857-3.767-1.286 2.186z"
      />
      <path
        fill="url(#ANGLE__a)"
        d="M4.285 12.677 12 5.143l7.714 7.534-3.857 3.771L12 12.679l-3.857 3.77z"
      />
      <path
        fill="#131620"
        d="M11.927 5.173a.107.107 0 0 1 .146 0L19.68 12.6a.11.11 0 0 1 .024.119.1.1 0 0 1-.024.035l-3.75 3.767c-.043.043-.107.043-.146 0L12 12.827l-3.78 3.694a.104.104 0 0 1-.15 0l-3.75-3.767a.107.107 0 0 1 0-.154zM12 5.4l-7.457 7.277 3.6 3.617 3.784-3.694c.043-.043.107-.043.146 0l3.784 3.694 3.6-3.617z"
      />
      <defs>
        <linearGradient
          id="ANGLE__a"
          x1="11.999"
          x2="11.999"
          y1="5.143"
          y2="17.995"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6958C" />
          <stop offset="1" stopColor="#FFCAA3" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconANGLE.displayName = 'ANGLE'