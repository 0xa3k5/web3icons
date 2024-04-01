import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSWEAT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.206 6.429H12.96l-1.79 1.984-1.046-1.984H7.792L4.714 9.84v.06l4.05 7.672h2.285l1.761-1.959 1.037 1.959h2.37l3.069-3.408zm-5.186 9.364-2.97-5.627 1.8-1.993 2.966 5.623-1.8 1.997zm5.113.06-2.97-5.623 1.8-1.993 2.97 5.627z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF0D74"
            d="M15.205 6.429H12.96l-1.792 1.984-1.046-1.984H7.791L4.714 9.84v.06l4.05 7.672h2.284l1.762-1.959 1.037 1.959h2.37l3.068-3.408zm-5.185 9.364-2.97-5.627 1.8-1.993 2.965 5.623-1.8 1.997zm5.112.06-2.97-5.623 1.8-1.993 2.97 5.627z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSWEAT.displayName = 'SWEAT'
