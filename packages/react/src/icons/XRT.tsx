import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXRT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.225 5.506a.427.427 0 1 0-.486-.702.428.428 0 0 0 .05.71l-6.023 10.39a.428.428 0 1 0 .234.382h12a.43.43 0 0 0 .428.427.428.428 0 1 0-.012-.855zm5.981 10.413L12 5.572 5.928 16.048l.014.022h12.116a.4.4 0 0 1 .148-.15"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="m9 14.143 2.998-1.547L15 14.143z" />
          <path
            fill="currentColor"
            d="m12 9-3 5.143 3-1.517zm0 0 3 5.143-3-1.517z"
          />
        </>
      ) : (
        <>
          <path
            fill="#03A2E5"
            d="M12.225 5.506a.427.427 0 1 0-.486-.702.428.428 0 0 0 .05.71l-6.023 10.39a.428.428 0 1 0 .234.382h12a.43.43 0 0 0 .428.427.428.428 0 1 0-.012-.855zm5.981 10.413L12 5.572 5.928 16.048l.014.022h12.116a.4.4 0 0 1 .148-.15"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="#545873" d="m9 14.143 2.998-1.547L15 14.143z" />
          <path fill="#00A8EB" d="m12 9-3 5.143 3-1.517z" />
          <path fill="#B4C0F2" d="m12 9 3 5.143-3-1.517z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconXRT.displayName = 'XRT'
