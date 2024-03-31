import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconAIMBOT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.143 11.85 3.84 1.864L15.857 12l-3.874-1.714"
          />
          <path fill="currentColor" d="m8.143 11.85 3.84 1.864v-3.428z" />
          <path
            fill="currentColor"
            d="M18.459 7.714H5.542l-2.113 2.43v3.712l2.113 2.43h12.917l2.113-2.43v-3.712zm.107 5.743s-.694 1.114-1.054 1.114H6.489c-.36 0-1.055-1.114-1.055-1.114s-.072-.741-.072-1.448.072-1.449.072-1.449L6.49 9.43h11.023l1.054 1.131s.073.742.073 1.449-.073 1.448-.073 1.448"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AIMBOT__a)"
            d="m8.143 11.85 3.84 1.864L15.857 12l-3.874-1.714"
          />
          <path fill="url(#AIMBOT__b)" d="m8.143 11.85 3.84 1.864v-3.428z" />
          <path
            fill="url(#AIMBOT__c)"
            d="M18.459 7.714H5.542l-2.113 2.43v3.712l2.113 2.43h12.917l2.113-2.43v-3.712zm.107 5.743s-.694 1.114-1.054 1.114H6.489c-.36 0-1.055-1.114-1.055-1.114s-.072-.741-.072-1.448.072-1.449.072-1.449L6.49 9.43h11.023l1.054 1.131s.073.742.073 1.449-.073 1.448-.073 1.448"
          />
          <defs>
            <linearGradient
              id="AIMBOT__a"
              x1="1024.4"
              x2="879.866"
              y1="363.054"
              y2="606.23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#8F9196" />
            </linearGradient>
            <linearGradient
              id="AIMBOT__b"
              x1="5676"
              x2="7825.99"
              y1="581.657"
              y2="7339.38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
            </linearGradient>
            <linearGradient
              id="AIMBOT__c"
              x1="34432.6"
              x2="34432.6"
              y1="581.314"
              y2="35995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAIMBOT.displayName = 'AIMBOT'
