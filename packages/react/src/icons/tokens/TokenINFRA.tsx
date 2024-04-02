import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenINFRA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12 4.714 6 5.143v4.286l-6 5.143-6-4.92V9.857zm-5.571 5.692v3.403l2.074-1.702zm2.417 1.98-2.293 1.877 5.233 4.286v-3.75zm3.368 2.413v3.741l5.229-4.483-2.212-1.731zm3.36-2.756 1.997 1.564v-3.201zm1.877-2.091-2.228 1.82-3.009-2.356V5.464zm-5.665-4.488V9.42l-2.94 2.413-2.297-1.886 5.237-4.478zM12 9.797l-2.816 2.314L12 14.414l2.884-2.366-2.88-2.254z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FDB913"
            d="m12 4.714 6 5.143v4.286l-6 5.143-6-4.92V9.857zm-5.571 5.692v3.403l2.074-1.702zm2.417 1.98-2.293 1.877 5.233 4.286v-3.75zm3.368 2.413v3.741l5.229-4.483-2.212-1.731zm3.36-2.756 1.997 1.564v-3.201zm1.877-2.091-2.228 1.82-3.009-2.356V5.464zm-5.665-4.488V9.42l-2.94 2.413-2.297-1.886 5.237-4.478zM12 9.797l-2.816 2.314L12 14.414l2.884-2.366-2.88-2.254z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenINFRA.displayName = 'INFRA'
