import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSNT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.686 11.16a8 8 0 0 0-1.423.12 7.003 7.003 0 0 1 6.927-6.29c2.177 0 3.668 1.063 3.668 3.274 0 2.203-1.791 3.266-4.405 3.266-1.929 0-2.838-.369-4.766-.369m-.137 1.303c-2.614 0-4.406 1.08-4.406 3.274 0 2.212 1.491 3.275 3.669 3.275a7.003 7.003 0 0 0 6.925-6.292q-.706.125-1.422.12c-1.93 0-2.838-.368-4.766-.368"
          />
        </>
      ) : (
        <>
          <path
            fill="#5B6DEE"
            d="M9.685 11.16a8 8 0 0 0-1.422.12 7.003 7.003 0 0 1 6.925-6.291c2.177 0 3.669 1.063 3.669 3.274 0 2.203-1.792 3.266-4.406 3.266-1.928 0-2.837-.369-4.766-.369m-.137 1.303c-2.614 0-4.405 1.08-4.405 3.274 0 2.212 1.491 3.275 3.668 3.275a7.003 7.003 0 0 0 6.926-6.292q-.706.125-1.423.12c-1.929 0-2.837-.368-4.766-.368"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSNT.displayName = 'SNT'
