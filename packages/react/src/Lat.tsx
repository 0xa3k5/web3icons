import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLat = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.27 6.857c-.78 0-1.413.605-1.413 1.35v7.222h1.715V8.572h6.857V6.857zm.302 10.286V15.43h6.857V8.572h1.714v7.22c0 .746-.633 1.351-1.413 1.351z"
          />
          <path
            fill="currentColor"
            d="M10.286 10.286h3.428v3.428h-3.428zm6.857-5.143h1.714v1.714h-1.714zm-12 12h1.714v1.714H5.143z"
          />
        </>
      ) : (
        <>
          <path
            fill="#050505"
            d="M8.27 6.857c-.78 0-1.413.605-1.413 1.35v7.222H8.57V8.572h6.857V6.857zm.301 10.286V15.43h6.857V8.572h1.715v7.22c0 .746-.633 1.351-1.413 1.351z"
          />
          <path fill="#F8BD00" d="M10.285 10.286h3.429v3.428h-3.429z" />
          <path fill="#00B6DE" d="M17.143 5.143h1.714v1.714h-1.714z" />
          <path fill="#E30065" d="M5.143 17.143h1.714v1.714H5.143z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconLat.displayName = 'Lat'

export default IconLat
