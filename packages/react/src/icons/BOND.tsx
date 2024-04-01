import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBOND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9 15.904-2.584 1.843a7.7 7.7 0 0 1-2.13-5.267v-.094a7.714 7.714 0 0 1 15.428.004v.086a7.7 7.7 0 0 1-2.108 5.258L15 15.887v-3.904l.951-.703-3.925-2.97L8.1 11.28l.9.703zm3-4.761h.064c1.166 0 2.143.861 2.075 1.954v2.186l-2.143-1.5-2.139 1.521v-2.207c0-1.097.973-1.954 2.143-1.954"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF4339"
            d="m9 15.904-2.584 1.843a7.7 7.7 0 0 1-2.13-5.267v-.094a7.714 7.714 0 0 1 15.429.004v.086a7.7 7.7 0 0 1-2.109 5.258L15 15.887v-3.904l.952-.703-3.926-2.97L8.1 11.28l.9.703zm3-4.761h.065c1.165 0 2.143.861 2.074 1.954v2.186l-2.143-1.5-2.138 1.521v-2.207c0-1.097.972-1.954 2.142-1.954"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBOND.displayName = 'BOND'
