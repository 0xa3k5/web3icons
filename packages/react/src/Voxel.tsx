import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconVOXEL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.821 15.236 11.293 9c-1.414 0-3.287 1.299-4.007 1.95v3.214C7.757 16.886 10.629 19 12 19.714v-2.241c-.394-.232-1.179-1.654-1.179-2.237m2.358 0L12.707 9c1.414 0 3.287 1.299 4.007 1.95v3.214C16.243 16.886 13.371 19 12 19.714v-2.241c.394-.232 1.178-1.654 1.178-2.237M12 7.526 9.429 8.57 9 8.143c.501-.257 1.611-.755 2.061-.905.45-.154.51-1.31.51-1.88-.15-.155-.214-.335-.214-.43 0-.458.454-.642.643-.642zm0 0 2.571 1.045.429-.428a23 23 0 0 0-2.061-.905c-.45-.154-.51-1.31-.51-1.88.15-.155.214-.335.214-.43 0-.458-.454-.642-.643-.642z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#VOXEL__a)"
            d="M10.822 15.236 11.293 9c-1.414 0-3.287 1.299-4.007 1.95v3.214C7.758 16.886 10.63 19 12 19.714v-2.241c-.394-.232-1.178-1.654-1.178-2.237"
          />
          <path
            fill="url(#VOXEL__b)"
            d="M13.179 15.236 12.708 9c1.414 0 3.287 1.299 4.007 1.95v3.214C16.243 16.886 13.372 19 12 19.714v-2.241c.395-.232 1.179-1.654 1.179-2.237"
          />
          <path
            fill="#F5C700"
            d="M12 7.526 9.429 8.57 9 8.143c.501-.257 1.611-.755 2.061-.905.45-.154.51-1.31.51-1.88-.15-.155-.214-.335-.214-.43 0-.458.454-.642.643-.642z"
          />
          <path
            fill="#EFBB1E"
            d="m12 7.526 2.571 1.045.429-.428a23 23 0 0 0-2.061-.905c-.45-.154-.51-1.31-.51-1.88.15-.155.214-.335.214-.43 0-.458-.454-.642-.643-.642z"
          />
          <defs>
            <linearGradient
              id="VOXEL__a"
              x1="12"
              x2="12"
              y1="9"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E2C5E" />
              <stop offset="1" stopColor="#16448F" />
            </linearGradient>
            <linearGradient
              id="VOXEL__b"
              x1="12"
              x2="12"
              y1="9"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E2C5E" />
              <stop offset="1" stopColor="#16448F" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconVOXEL.displayName = 'VOXEL'
