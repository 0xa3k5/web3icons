import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconLYM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.27 17.333 3.91 7.945c.01 0-.39-1.084.865-1.084H8.23a1.14 1.14 0 0 1 1.05.542C9.66 8.029 15 17.427 15 17.427L10.41 18a1.22 1.22 0 0 1-1.14-.667"
          />
          <path
            fill="currentColor"
            d="m10.304 15.967 3.323-5.576s.264-.534 1.1-.534h3.524s1.46.03.91.975c-.55.955-3.894 6.582-3.894 6.582s-.222.586-1.121.586H9.849s-.794-.031-.201-.986.656-1.047.656-1.047"
          />
        </>
      ) : (
        <>
          <path
            fill="#FDC5CA"
            d="M9.27 17.333 3.91 7.945c.01 0-.39-1.084.865-1.084H8.23a1.14 1.14 0 0 1 1.05.542C9.66 8.029 15 17.427 15 17.427L10.41 18a1.22 1.22 0 0 1-1.14-.667"
          />
          <path
            fill="#fff"
            d="m10.305 15.967 3.323-5.576s.264-.534 1.1-.534h3.524s1.46.03.91.975c-.55.955-3.894 6.582-3.894 6.582s-.222.586-1.122.586H9.85s-.794-.031-.202-.986.657-1.047.657-1.047"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLYM.displayName = 'LYM'
