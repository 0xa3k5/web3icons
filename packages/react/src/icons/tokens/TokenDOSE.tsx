import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenDOSE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.527 5.143H7.74a1.333 1.333 0 0 0-1.312 1.354v11.027a1.33 1.33 0 0 0 1.312 1.333h4.787c3.729 0 6.759-3.094 6.759-6.857 0-3.784-3.052-6.857-6.759-6.857m-.099 11.143a4.286 4.286 0 1 0 0-8.572 4.286 4.286 0 0 0 0 8.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.428 14.143c1.192 0 2.143-.896 2.143-2.023 0-1.123-1.046-1.813-1.851-2.571a.416.416 0 0 0-.583 0c-.806.758-1.851 1.422-1.851 2.571 0 1.127.972 2.023 2.142 2.023"
          />
        </>
      ) : (
        <>
          <path
            fill="#131519"
            d="M12.528 5.143H7.74a1.333 1.333 0 0 0-1.31 1.354v11.027a1.33 1.33 0 0 0 1.311 1.333h4.788c3.728 0 6.758-3.094 6.758-6.857 0-3.784-3.051-6.857-6.759-6.857m-.1 11.143a4.285 4.285 0 1 0 .001-8.571 4.285 4.285 0 0 0 0 8.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#FF7A15"
            d="M12.429 14.143c1.191 0 2.143-.896 2.143-2.023 0-1.123-1.046-1.813-1.852-2.571a.416.416 0 0 0-.583 0c-.805.758-1.851 1.422-1.851 2.571 0 1.127.973 2.023 2.143 2.023"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenDOSE.displayName = 'DOSE'
