import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDEGO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.429 5.143h3v3h-3zm9 0 3 3h-3zm0 13.714 3-3h-3zm-6-13.714h6v3h-6zm-3 10.714h9v3h-9zm0-7.714h3v3.428h-3z"
          />
          <path
            fill="currentColor"
            d="M15.429 8.143h3v7.714h-3zm-9 3h3v4.714h-3z"
          />
        </>
      ) : (
        <>
          <path fill="#FF5174" d="M6.429 5.143h3v3h-3z" />
          <path fill="#787878" d="m15.429 5.143 3 3h-3zm0 13.714 3-3h-3z" />
          <path fill="#4F4F4F" d="M9.429 5.143h6v3h-6zm-3 10.714h9v3h-9z" />
          <path fill="#FFD766" d="M6.429 8.143h3v3.428h-3z" />
          <path fill="#4F4F4F" d="M15.429 8.143h3v7.714h-3z" />
          <path fill="#21D99D" d="M6.429 11.143h3v4.714h-3z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconDEGO.displayName = 'DEGO'
