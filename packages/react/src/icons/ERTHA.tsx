import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconERTHA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M3.857 15.36v-5.074H3.43L3.93 9H6.3l-.077 1.286h-1.08v1.285h.951l-.072 1.286h-.879v1.286H6.3l-.056 1.028c-.852.052-1.542.116-2.387.189m16.715.069L19.749 9h-2.152l-.501 1.286h.566l-.72 4.855 1.234.078.103-.648h1.033l.115.742c.425.034.725.073 1.145.116m-1.775-4.423.343 2.28h-.686z"
      />
      <path
        fill="currentColor"
        d="m9.913 15-.45-1.56a1.4 1.4 0 0 0 .394-1.011v-2.1c0-.472-.103-.806-.313-1.012-.205-.21-.63-.313-1.105-.313H6.81l-.501 1.286h.548v4.852l1.286-.06v-1.368h.214L8.721 15zm-1.389-4.714h-.381v2.143h.386c.025 0 .042-.018.042-.043v-2.057c0-.026-.017-.043-.042-.043z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.714 15.116V9h-1.286v3h-.857V9h-1.328l-.386 1.286V9h-2.773l-.227 1.286h.857V15H12v-4.714h1.286V15h1.285v-2.143h.857v2.203q.645.024 1.286.056"
      />
    </BaseIcon>
  ),
)

IconERTHA.displayName = 'ERTHA'
