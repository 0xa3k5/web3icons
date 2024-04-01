import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconAHT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.572 6.857h-.429v1.714h.429zm-7.715.429H9V15h.857v-2.571a1.714 1.714 0 1 1 3.429 0V15h.857v-2.571a2.572 2.572 0 0 0-4.286-1.916zM6 15c.66 0 1.26-.248 1.714-.656V15h.858v-2.571A2.571 2.571 0 1 0 6 15m0-.857a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429M17.143 15c.66 0 1.26-.248 1.714-.656V15h.857v-2.571A2.572 2.572 0 1 0 17.143 15m0-.857a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429M14.494 7.61l-.338.339 1.35 1.354.343-.343zm6.078.318-.339-.339-1.35 1.354.339.343z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#30BFBD"
            d="M17.572 6.857h-.429v1.714h.429zm-7.715.429H9V15h.857v-2.571a1.714 1.714 0 1 1 3.429 0V15h.857v-2.571a2.572 2.572 0 0 0-4.286-1.916zM6 15c.66 0 1.26-.248 1.714-.656V15h.858v-2.571A2.571 2.571 0 1 0 6 15m0-.857a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429M17.143 15c.66 0 1.26-.248 1.714-.656V15h.857v-2.571A2.572 2.572 0 1 0 17.143 15m0-.857a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429M14.494 7.61l-.338.339 1.35 1.354.343-.343zm6.078.318-.339-.339-1.35 1.354.339.343z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAHT.displayName = 'AHT'
