import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPOOLX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.729 15.878 14.52 5.807l.677.527L7.41 16.406l-.677-.528z"
          />
          <path
            fill="currentColor"
            d="m18.45 10.988-8.563 1.886L5.4 10.971l.334-.788 4.23 1.8 8.298-1.826.184.836z"
          />
          <path
            fill="currentColor"
            d="m11.58 18.694 2.717-12.643.836.18-2.713 12.643z"
          />
          <path
            fill="currentColor"
            d="m9.352 6.428-3.283 4.273 1.178 5.216 4.758 2.409 4.817-2.409 1.114-5.203-3.351-4.286zM15 5.571H8.927L5.143 10.5l1.359 6L12 19.286l5.572-2.786 1.285-6z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M16.809 16.478 8.807 6.343l.673-.532 8.002 10.132-.673.531z"
          />
        </>
      ) : (
        <>
          <path
            fill="#181B1E"
            d="M6.728 15.878 14.52 5.807l.677.527L7.41 16.406l-.677-.528z"
          />
          <path
            fill="#181B1E"
            d="m18.45 10.988-8.563 1.886L5.4 10.971l.334-.788 4.23 1.8 8.297-1.826.184.836z"
          />
          <path
            fill="#181B1E"
            d="m11.58 18.694 2.717-12.643.836.18-2.713 12.643z"
          />
          <path
            fill="#181B1E"
            d="m9.351 6.428-3.283 4.273 1.179 5.216 4.757 2.409 4.817-2.409 1.114-5.203-3.351-4.286zM15 5.571H8.927L5.143 10.5l1.358 6L12 19.286l5.57-2.786 1.286-6z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#181B1E"
            d="M16.808 16.478 8.807 6.343l.673-.532 8.001 10.132-.673.531z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPOOLX.displayName = 'POOLX'
