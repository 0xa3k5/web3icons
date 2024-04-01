import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconTOSHI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M3.857 6v1.723l1.667 1.65 3.634.986v.771l1.462 3.617v1.196l1.367 1.513v.03l.013-.013.013.013v-.03l1.367-1.513v-1.2l1.457-3.617v-.772l3.643-.985 1.663-1.646V6L19.7 7.196l-1.226.737-3.634.63-2.828-.626v-.004h-.026v.004l-2.829.626-3.634-.63-1.226-.737z"
          />
          <path
            fill="currentColor"
            d="m7.714 15.403.883-3.969 1.389 3.369-.322 1.371 1.907 1.972v1.14zm8.571 0-.882-3.969-1.389 3.369.322 1.371-1.908 1.972v1.14z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TOSHI__a)"
            d="M3.857 6v1.723l1.668 1.65 3.634.986v.771l1.461 3.617v1.196l1.367 1.513v.03l.013-.013.013.013v-.03l1.367-1.513v-1.2l1.457-3.617v-.772l3.643-.985 1.663-1.646V6l-.441 1.196-1.226.737-3.634.63-2.829-.626v-.004h-.026v.004l-2.828.626-3.634-.63-1.226-.737z"
          />
          <path
            fill="url(#TOSHI__b)"
            d="m7.715 15.403.882-3.969 1.389 3.369-.321 1.371 1.907 1.972v1.14z"
          />
          <path
            fill="url(#TOSHI__c)"
            d="m16.286 15.403-.883-3.969-1.388 3.369.321 1.371-1.907 1.972v1.14z"
          />
          <defs>
            <linearGradient
              id="TOSHI__a"
              x1="4.672"
              x2="19.806"
              y1="8.399"
              y2="8.114"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#380D78" />
              <stop offset=".43" stopColor="#56758A" />
              <stop offset=".75" stopColor="#7BF29E" />
              <stop offset=".93" stopColor="#8FD5B8" />
              <stop offset="1" stopColor="#A7ACC2" />
            </linearGradient>
            <linearGradient
              id="TOSHI__b"
              x1="3.857"
              x2="9.677"
              y1="10.54"
              y2="21.718"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#24153E" />
              <stop offset="1" stopColor="#77E397" />
            </linearGradient>
            <linearGradient
              id="TOSHI__c"
              x1="14.357"
              x2="14.357"
              y1="11.434"
              y2="19.285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A69BD7" />
              <stop offset=".3" stopColor="#84E7AE" />
              <stop offset=".48" stopColor="#70D78F" />
              <stop offset="1" stopColor="#3D5F5E" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTOSHI.displayName = 'TOSHI'
