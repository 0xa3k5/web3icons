import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenASD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.136 16.286H3.429l7.89-7.719a1.1 1.1 0 0 1 1.114-.18c.493.202.42.613.424.797V15.3h-1.285v-5.16L6.557 15h2.04z"
          />
          <path
            fill="currentColor"
            d="m17.293 6.219-4.436 4.495v1.715l4.715-4.715V15h-7.089l-.626-1.286-2.717 2.572h10.432A1.286 1.286 0 0 0 18.857 15V6.964c.013-.158-.064-.544-.471-.827s-.9-.064-1.093.086z"
          />
        </>
      ) : (
        <>
          <path
            fill="#43DCF2"
            d="M7.136 16.286H3.429l7.89-7.719a1.1 1.1 0 0 1 1.114-.18c.493.202.42.613.424.797V15.3h-1.285v-5.16L6.557 15h2.04z"
          />
          <path
            fill="#fff"
            d="m17.293 6.219-4.436 4.495v1.715l4.715-4.715V15h-7.089l-.626-1.286-2.717 2.572h10.432A1.286 1.286 0 0 0 18.857 15V6.964c.013-.158-.064-.544-.471-.827s-.9-.064-1.093.086z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenASD.displayName = 'ASD'
