import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBPT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 5.572h1.714v3h-1.285a.43.43 0 0 0-.43.428v6a.43.43 0 0 0 .43.429h1.285v3H9.857a3 3 0 0 1-3-3V8.572a3 3 0 0 1 3-3m2.571 12.857h1.715a3 3 0 0 0 3-3v-1.715h-3V15a.43.43 0 0 1-.429.429h-1.286zM14.143 9a.43.43 0 0 0-.429-.428h-1.286v-3h1.715a3 3 0 0 1 3 3v.857h-3z"
          />
        </>
      ) : (
        <>
          <path
            fill="#05BF68"
            d="M9.857 5.572h1.715v3h-1.286A.43.43 0 0 0 9.857 9v6a.43.43 0 0 0 .429.429h1.286v3H9.857a3 3 0 0 1-3-3V8.572a3 3 0 0 1 3-3m2.572 12.857h1.714a3 3 0 0 0 3-3v-1.715h-3V15a.43.43 0 0 1-.428.429h-1.286zM14.143 9a.43.43 0 0 0-.428-.428h-1.286v-3h1.714a3 3 0 0 1 3 3v.857h-3z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBPT.displayName = 'BPT'
