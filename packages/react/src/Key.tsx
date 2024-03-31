import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconKEY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.571 15.857a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
          <path
            fill="currentColor"
            d="M12 4.286 5.143 8.13v7.706L12 19.714l6.857-3.878V8.13zm1.753 3h-2.147c-.163.004-.455.12-.463.527v5.527a1.715 1.715 0 1 0 .857 0V9.856h1.354c.129 0 .36-.146.36-.428 0-.28-.227-.43-.36-.43H12v-.856h1.757c.15 0 .386-.167.386-.429a.41.41 0 0 0-.39-.428"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#KEY__a)"
            d="M11.571 15.857a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
          <path
            fill="url(#KEY__b)"
            d="M12 4.286 5.143 8.13v7.706L12 19.714l6.857-3.878V8.13zm1.753 3h-2.147c-.163.004-.455.12-.463.527v5.527a1.715 1.715 0 1 0 .857 0V9.856h1.354c.129 0 .36-.146.36-.428 0-.28-.227-.43-.36-.43H12v-.856h1.757c.15 0 .386-.167.386-.429a.41.41 0 0 0-.39-.428"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="KEY__a"
              x1="12"
              x2="12"
              y1="4.286"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4AB0E1" />
              <stop offset="1" stopColor="#58B9CF" />
            </linearGradient>
            <linearGradient
              id="KEY__b"
              x1="12"
              x2="12"
              y1="4.286"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4AB0E1" />
              <stop offset="1" stopColor="#58B9CF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconKEY.displayName = 'KEY'
