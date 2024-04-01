import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconLUNC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.54 14.07A8.786 8.786 0 0 1 7.66 6.695a6.857 6.857 0 1 0 10.886 7.371h-.005zm.3-1.611a8.77 8.77 0 0 1-4.843-7.02 6.86 6.86 0 0 1 4.843 7.02"
          />
          <path
            fill="currentColor"
            d="M18.613 10.175c-.36-.108-.758-.24-1.217-.39-.904-.296-2.023-.665-3.437-1.055-2.134-.587-3.96-1.47-5.327-2.7a6.862 6.862 0 0 1 9.981 4.145"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFD83D"
            d="M18.54 14.07A8.787 8.787 0 0 1 7.658 6.695a6.857 6.857 0 1 0 10.886 7.371h-.004z"
          />
          <path
            fill="#FB6E04"
            d="M18.84 12.459a8.77 8.77 0 0 1-4.843-7.02 6.86 6.86 0 0 1 4.843 7.02"
          />
          <path
            fill="#FFD83D"
            d="M18.613 10.175c-.36-.108-.759-.24-1.218-.39-.904-.296-2.022-.665-3.437-1.055-2.134-.587-3.96-1.47-5.327-2.7a6.862 6.862 0 0 1 9.982 4.145"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLUNC.displayName = 'LUNC'
