import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconAREA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12 4.286-3.857 6h1.928L12 7.054l1.929 3.232h1.928zm0 16.285-3.857-6h1.928L12 17.803l1.929-3.232h1.928zm-4.5-9L6 13.286h12l-1.5-1.715z"
          />
        </>
      ) : (
        <>
          <path
            fill="#B8A874"
            d="m12 4.286-3.857 6h1.928L12 7.054l1.929 3.232h1.928z"
          />
          <path
            fill="#A0857C"
            d="m12 20.571-3.857-6h1.928L12 17.803l1.929-3.232h1.928z"
          />
          <path fill="#A4A4A4" d="M7.5 11.571 6 13.286h12l-1.5-1.715z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconAREA.displayName = 'AREA'
