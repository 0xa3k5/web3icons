import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAe = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.13 8.143h.701c1.107.1 2.127.632 2.883 1.396 1.559 1.574 2.416 3.796 4.41 4.96 1.442.849 3.46.155 4.162-1.273h1.09A4.1 4.1 0 0 1 19 15.05a4.14 4.14 0 0 1-2.152.807h-.584a4.7 4.7 0 0 1-2.65-1.057c-1.067-.864-1.753-2.052-2.587-3.109-.709-.933-1.441-1.99-2.618-2.414a3.1 3.1 0 0 0-2.217.12c-.696.311-1.25.87-1.555 1.57a2.8 2.8 0 0 0-.086 1.81 2.82 2.82 0 0 0 1.045 1.491c.78.579 1.87.794 2.813.463a5.05 5.05 0 0 0 2.416-2.06l.693.98c-.935 1.11-2.213 2.075-3.74 2.206h-.624a4.06 4.06 0 0 1-2.511-1.106 3.98 3.98 0 0 1-1.213-2.442v-.602A3.97 3.97 0 0 1 4.627 9.26 4.05 4.05 0 0 1 7.13 8.143m9.101 0h.585a4.1 4.1 0 0 1 2.526 1.118c.685.651 1.12 1.805 1.23 2.739v.857h-4.715V12h3.701c0-.728-.232-1.14-.506-1.566a3.1 3.1 0 0 0-1.603-1.115 3.13 3.13 0 0 0-1.958.058 5 5 0 0 0-2.33 1.96q-.333-.459-.654-.926c.911-1.142 2.181-2.122 3.724-2.26z"
          />
        </>
      ) : (
        <>
          <path
            fill="#DE3F6B"
            d="M7.13 8.143h.701c1.107.1 2.127.632 2.883 1.396 1.559 1.574 2.416 3.796 4.41 4.96 1.442.849 3.46.155 4.162-1.273h1.09A4.1 4.1 0 0 1 19 15.05a4.14 4.14 0 0 1-2.152.807h-.584a4.7 4.7 0 0 1-2.65-1.057c-1.067-.864-1.753-2.052-2.587-3.109-.709-.933-1.441-1.99-2.618-2.414a3.1 3.1 0 0 0-2.217.12c-.696.311-1.25.87-1.555 1.57a2.8 2.8 0 0 0-.086 1.81 2.82 2.82 0 0 0 1.045 1.491c.78.579 1.87.794 2.813.463a5.05 5.05 0 0 0 2.416-2.06l.693.98c-.935 1.11-2.213 2.075-3.74 2.206h-.624a4.06 4.06 0 0 1-2.511-1.106 3.98 3.98 0 0 1-1.213-2.442v-.602A3.97 3.97 0 0 1 4.627 9.26 4.05 4.05 0 0 1 7.13 8.143m9.101 0h.585a4.1 4.1 0 0 1 2.526 1.118c.685.651 1.12 1.805 1.23 2.739v.857h-4.715V12h3.701c0-.728-.232-1.14-.506-1.566a3.1 3.1 0 0 0-1.603-1.115 3.13 3.13 0 0 0-1.958.058 5 5 0 0 0-2.33 1.96q-.333-.459-.654-.926c.911-1.142 2.181-2.122 3.724-2.26z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAe.displayName = 'Ae'

export default IconAe
