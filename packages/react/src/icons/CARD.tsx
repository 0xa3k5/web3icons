import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCARD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m15.87 17.353 2.987-1.496L8.143 10.51 5.152 12l10.714 5.353zM12 19.286l3-1.496-6.857-3.428-2.979 1.495zM18.85 12l-2.992 1.492L12.875 12l2.987-1.491zM9.005 6.214l3-1.5L15 6.214l-3 1.492L9.005 6.21zm-.875.433L5.143 8.143 12 11.567l2.987-1.491L8.13 6.652zm7.727 2.996 2.996-1.5-2.987-1.487-3 1.496z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00EBE5"
            d="m15.87 17.353 2.987-1.496L8.143 10.51 5.15 12l10.714 5.353zM12 19.286l3-1.496-6.857-3.428-2.979 1.495zM18.848 12l-2.991 1.492L12.874 12l2.987-1.491z"
          />
          <path
            fill="#37EB77"
            d="m9.004 6.214 3-1.5L15 6.214l-3 1.492L9.004 6.21zm-.874.433L5.143 8.143 12 11.567l2.987-1.491L8.13 6.652zm7.727 2.996 2.996-1.5-2.988-1.487-3 1.496z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCARD.displayName = 'CARD'
