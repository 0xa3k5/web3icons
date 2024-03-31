import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSTEP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.852 15.856V8.151l-6.853-3.858v7.71l-6.852 3.855 6.854 3.856 6.847-3.852.004.002v-.005l.002-.001z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m12.003 4.286 6.854 3.856-2.143 1.392L9.857 5.5z"
          />
          <path fill="currentColor" d="M16.714 9.319v2.608L9.857 8.04V5.496z" />
          <path
            fill="currentColor"
            d="m9.855 8.039 6.859 3.877-2.571 1.45-6.856-3.881z"
          />
          <path
            fill="currentColor"
            d="M14.14 13.366v2.595l-6.855-4.003V9.48z"
          />
          <path
            fill="currentColor"
            d="m7.286 11.956 6.857 3.97L12 17.143l-6.858-3.856z"
          />
          <path
            fill="currentColor"
            d="M12 17.143v2.571l-6.857-3.86v-2.57zm4.716-7.813 2.141-1.172v7.714l-2.141 1.19zm-2.576 4.036 2.574-1.455v5.152L14.14 18.5zM12 17.141l2.14-1.218v2.59l-2.14 1.2z"
          />
        </>
      ) : (
        <>
          <path
            fill="#64C557"
            d="M18.852 15.856V8.15l-6.853-3.857v7.71l-6.852 3.855L12 19.714l6.847-3.853.004.003v-.005l.002-.001z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="#118AB2" d="m5.143 8.15 6.86-3.857v7.714l-6.86 3.857z" />
          <path
            fill="#00F8B7"
            d="m12.003 4.286 6.854 3.856-2.143 1.392L9.857 5.5z"
          />
          <path fill="#09BD8E" d="M16.714 9.319v2.608L9.857 8.04V5.496z" />
          <path
            fill="#FFE3A3"
            d="m9.855 8.039 6.859 3.877-2.571 1.45-6.856-3.88z"
          />
          <path fill="#FFBB1D" d="M14.14 13.366v2.595l-6.855-4.003V9.48z" />
          <path
            fill="#FF965E"
            d="m7.286 11.956 6.857 3.97L12 17.143l-6.858-3.857z"
          />
          <path fill="#D94C00" d="M12 17.143v2.571l-6.857-3.86v-2.57z" />
          <path fill="#06D6A0" d="m16.716 9.33 2.14-1.172v7.714l-2.14 1.19z" />
          <path
            fill="#FFD166"
            d="m14.14 13.366 2.574-1.455v5.152L14.14 18.5z"
          />
          <path fill="#F3722C" d="m12 17.141 2.14-1.218v2.59l-2.14 1.2z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconSTEP.displayName = 'STEP'
