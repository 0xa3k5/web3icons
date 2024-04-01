import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconUND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.428 14.349V6c-2.94 0-3.672 2.387-3.672 3.579v4.47c0 3.578-4.492 4.474-6.738 4.474 1.715.951 3.575 1.191 4.286 1.191 4.899 0 6.124-3.578 6.124-5.365"
          />
          <path
            fill="currentColor"
            d="M18.428 6c-.827.497-1.838 1.483-1.838 2.983v4.77c0 1.688-.857 5.066-4.286 5.066-1.958 0-3.343-.129-4.247-.279a9.84 9.84 0 0 0 4.243 1.174c4.903 0 6.128-3.578 6.128-5.365z"
          />
          <path
            fill="currentColor"
            d="M5.571 13.753V6l1.839.6v6.857c0 2.859 2.04 3.772 3.06 3.87-.489.24-1.427.3-1.839.3-2.447 0-3.06-2.584-3.06-3.874"
          />
          <path
            fill="currentColor"
            d="M9.244 8.983c0-1.672-1.226-2.289-1.834-2.387v7.157c0 2.978 1.834 3.574 2.751 3.574 1.102 0 2.045-.596 2.452-.891-2.696.475-3.369-1.59-3.369-2.683z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#UND__a)"
            d="M18.428 14.349V6c-2.94 0-3.672 2.387-3.672 3.579v4.47c0 3.578-4.492 4.474-6.738 4.474 1.715.951 3.575 1.191 4.286 1.191 4.899 0 6.124-3.578 6.124-5.365"
          />
          <path
            fill="url(#UND__b)"
            d="M18.428 6c-.827.497-1.838 1.483-1.838 2.983v4.77c0 1.688-.857 5.066-4.286 5.066-1.958 0-3.343-.129-4.247-.279a9.84 9.84 0 0 0 4.243 1.174c4.903 0 6.128-3.578 6.128-5.365z"
          />
          <path
            fill="url(#UND__c)"
            d="M5.571 13.753V6l1.839.6v6.857c0 2.859 2.04 3.772 3.06 3.87-.489.24-1.427.3-1.839.3-2.447 0-3.06-2.584-3.06-3.874"
          />
          <path
            fill="url(#UND__d)"
            d="M9.244 8.983c0-1.672-1.226-2.289-1.834-2.387v7.157c0 2.978 1.834 3.574 2.751 3.574 1.102 0 2.045-.596 2.452-.891-2.696.475-3.369-1.59-3.369-2.683z"
          />
          <defs>
            <linearGradient
              id="UND__a"
              x1="12.002"
              x2="12.002"
              y1="6"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A41351" />
              <stop offset="1" stopColor="#E0196C" />
            </linearGradient>
            <linearGradient
              id="UND__b"
              x1="16.909"
              x2="15.253"
              y1="6.596"
              y2="19.542"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AA1654" />
              <stop offset="1" stopColor="#E51970" />
            </linearGradient>
            <linearGradient
              id="UND__c"
              x1="11.994"
              x2="11.994"
              y1="6"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1631B6" />
              <stop offset="1" stopColor="#025DE1" />
            </linearGradient>
            <linearGradient
              id="UND__d"
              x1="10.012"
              x2="10.012"
              y1="6.596"
              y2="17.327"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#133BC1" />
              <stop offset="1" stopColor="#0264EB" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconUND.displayName = 'UND'
