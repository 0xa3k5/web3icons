import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAht = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.571 6.857h-.428v1.714h.428zm-7.714.429H9V15h.857v-2.571a1.715 1.715 0 0 1 3.429 0V15h.857v-2.571a2.572 2.572 0 0 0-4.286-1.916zM6 15c.66 0 1.26-.248 1.714-.656V15h.857v-2.571A2.571 2.571 0 1 0 6 15m0-.857a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429M17.143 15c.66 0 1.26-.248 1.714-.656V15h.857v-2.571A2.571 2.571 0 1 0 17.143 15m0-.857a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428M14.494 7.61l-.338.339 1.35 1.354.342-.343zm6.077.318-.338-.339-1.35 1.354.338.343z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AHT__a)">
            <path fill="#30BFBD" d="M0 0h24v24H0z" />
            <path
              fill="#FDFFFF"
              d="M17.571 6.857h-.428v1.714h.428zm-7.714.429H9V15h.857v-2.571a1.715 1.715 0 0 1 3.429 0V15h.857v-2.571a2.572 2.572 0 0 0-4.286-1.916zM6 15c.66 0 1.26-.248 1.714-.656V15h.857v-2.571A2.571 2.571 0 1 0 6 15m0-.857a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429M17.143 15c.66 0 1.26-.248 1.714-.656V15h.857v-2.571A2.571 2.571 0 1 0 17.143 15m0-.857a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428M14.494 7.61l-.338.339 1.35 1.354.342-.343zm6.077.318-.338-.339-1.35 1.354.338.343z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="AHT__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAht.displayName = 'Aht'

export default IconAht
