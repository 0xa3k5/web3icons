import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCTK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.053 18.429H6.994c-.398 0-.728-.257-.758-.647l-.665-9.9a.73.73 0 0 1 .36-.678l5.709-3.231a.8.8 0 0 1 .386-.116c.141 0 .287.039.411.112l5.623 3.064a.73.73 0 0 1 .369.681l-.613 10.063c-.026.386-.36.652-.763.652m-.742-1.715h-8.58l-.6-8.185 4.903-2.958 4.83 2.816-.557 8.327zM8.871 9.22l.18 3.21h4.458l-.09 1.285h-2.675l-.068-.857H9.073l.141 2.572h5.627l.296-4.286h-4.586l-.085-1.029L12.02 9l1.693 1.114v.6h1.453l.103-1.495-3.201-1.933z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#E1AB4B"
            d="M17.053 18.429H6.995c-.399 0-.729-.257-.759-.647l-.664-9.9a.73.73 0 0 1 .36-.678l5.708-3.231a.8.8 0 0 1 .386-.116c.142 0 .287.039.412.112l5.623 3.064a.73.73 0 0 1 .368.681l-.613 10.063c-.025.386-.36.652-.763.652m-.741-1.715h-8.58l-.6-8.185 4.903-2.958 4.83 2.816-.557 8.327zM8.872 9.22l.18 3.21h4.457l-.09 1.285h-2.674l-.069-.857H9.073l.142 2.572h5.627l.296-4.286h-4.586l-.086-1.029L12.022 9l1.693 1.114v.6h1.453l.103-1.495-3.202-1.933z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCTK.displayName = 'CTK'
