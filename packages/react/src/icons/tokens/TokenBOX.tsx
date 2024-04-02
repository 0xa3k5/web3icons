import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenBOX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M17.292 12.857v.91c.046.367-.23.688-.598.734-.369.046-.69-.23-.737-.596v-1.048h-.874c-.139.55-.415 1.002-.829 1.415-1.197 1.239-3.222 1.239-4.465.046l-.046-.046c-1.243-1.285-1.243-3.305 0-4.543 1.243-1.24 3.222-1.286 4.465-.046l.046.046c.414.412.69.863.828 1.414h3.775c-.46-3.763-3.867-6.37-7.641-5.958-3.775.413-6.445 3.855-6.03 7.618.413 3.763 3.866 6.425 7.64 6.012 3.177-.367 5.663-2.79 6.031-5.958z"
      />
      <path
        fill="currentColor"
        d="M12 13.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
      />
    </BaseIcon>
  ),
)

TokenBOX.displayName = 'BOX'
