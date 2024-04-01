import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconVGX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.73 6.429H6.172a.167.167 0 0 0-.155.231l5.512 12.33a.503.503 0 0 0 .917 0L17.99 6.66a.166.166 0 0 0-.154-.231H15.29a.5.5 0 0 0-.458.295L12 12.887 9.19 6.724a.5.5 0 0 0-.459-.295"
          />
        </>
      ) : (
        <>
          <path
            fill="#292375"
            d="M8.73 6.429H6.17a.167.167 0 0 0-.154.231l5.511 12.33a.503.503 0 0 0 .917 0L17.99 6.66a.166.166 0 0 0-.154-.231H15.29a.5.5 0 0 0-.459.295L12 12.887 9.188 6.724a.5.5 0 0 0-.458-.295"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVGX.displayName = 'VGX'
