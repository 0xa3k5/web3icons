import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m0 .429a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57M8.143 10.07v-.428L12 7.286l3.857 2.357v.428L12 12.43zM9 9.858l3-1.714 3 1.714-3 1.715zm1.714-.428.643-.43 2.143 1.286-.643.428zm-2.571 2.143v.642L12 14.357l3.857-2.143v-.643L12 13.715zm0 2.785v-.643L12 15.857l3.857-2.143v.643L12 16.5z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#7853FE"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713m0 .429a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572M8.142 10.07v-.428L12 7.286l3.857 2.357v.428L12 12.43zM9 9.858l3-1.714 3 1.714-3 1.715zm1.714-.428.643-.43 2.143 1.286-.643.428zm-2.572 2.143v.642L12 14.357l3.857-2.143v-.643L12 13.715zm0 2.785v-.643L12 15.857l3.857-2.143v.643L12 16.5z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconOS.displayName = 'OS'
