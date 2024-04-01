import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconACT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.471 5.143h3.058c.106 0 .21.028.302.083a.6.6 0 0 1 .22.231l4.73 8.8a.64.64 0 0 1 0 .607l-1.508 2.822a.6.6 0 0 1-.22.23.6.6 0 0 1-.301.084H7.249a.6.6 0 0 1-.302-.084.6.6 0 0 1-.22-.23L5.22 14.864a.64.64 0 0 1 0-.607l4.724-8.8a.6.6 0 0 1 .22-.23.6.6 0 0 1 .301-.084zm1.53 3.5-3.19 5.928h6.378z"
          />
        </>
      ) : (
        <>
          <path
            fill="#767DFF"
            d="M13.53 5.143c.105 0 .21.028.3.083a.6.6 0 0 1 .22.231l4.731 8.8a.64.64 0 0 1 0 .607l-1.508 2.822a.6.6 0 0 1-.22.23.6.6 0 0 1-.301.084H7.249a.6.6 0 0 1-.302-.084.6.6 0 0 1-.22-.23L5.22 14.864a.64.64 0 0 1 0-.607l4.724-8.8a.6.6 0 0 1 .22-.23.6.6 0 0 1 .301-.084zM12 8.643l-3.188 5.928h6.377z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconACT.displayName = 'ACT'
