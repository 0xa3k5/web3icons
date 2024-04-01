import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTHT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#0E134D"
        d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
      />
      <path fill="#0E376B" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
      <path
        fill="#0E608C"
        d="M12 16.715a4.714 4.714 0 1 0 0-9.43 4.714 4.714 0 0 0 0 9.43"
      />
      <path fill="#fff" d="m9.857 11.559-.437-1.393-.39.428L9.48 12z" />
      <path
        fill="#A5BCCA"
        d="m8.091 9.857-.377.455 1.316.283.385-.43-1.328-.308z"
      />
      <path fill="#fff" d="m12 11.13-.437-1.393-.39.429.45 1.406z" />
      <path
        fill="#A5BCCA"
        d="m10.234 9.429-.377.454 1.316.283.385-.429-1.328-.308z"
      />
      <path fill="#fff" d="m14.571 10.715-.437-1.406-.39.433.45 1.414z" />
      <path fill="#A5BCCA" d="m12.805 9-.377.459 1.316.283.386-.429L12.8 9z" />
      <path fill="#fff" d="M14.143 13.273 13.7 11.88l-.39.429.454 1.406z" />
      <path fill="#A5BCCA" d="m12.364 11.572-.381.454 1.328.283.386-.429z" />
      <path fill="#fff" d="m14.143 15.845-.438-1.393-.39.428.45 1.406z" />
      <path
        fill="#A5BCCA"
        d="m12.377 14.143-.377.454 1.315.283.386-.428-1.328-.309z"
      />
    </BaseIcon>
  ),
)

IconTHT.displayName = 'THT'
