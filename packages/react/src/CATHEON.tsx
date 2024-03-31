import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCATHEON = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.521 14.571c-.745 0-.801-.711-.737-1.071l-.926-.309-.728 1.68.441 1.23 2.216 2.396.87.257a3.5 3.5 0 0 0 .771.103c3.579 0 4.728-2.198 4.71-3.368q-.002-.11-.017-.206c-.355-2.314-2.078-2.426-2.515-2.426a2.2 2.2 0 0 0-1.106.266c-2.443 1.166-2.803 1.448-2.979 1.448"
          />
          <path
            fill="currentColor"
            d="M5.571 11.674c0-.377.099-.943.15-1.178l.407-.9.652-.986 4.71-1.08.488 2.383a3.3 3.3 0 0 0-1.474-.484c-.557 0-.638.634-.647.865v5.897c0 1.578 1.264 2.375 1.929 2.593-5.872-.994-6.215-5.914-6.215-7.11"
          />
          <path
            fill="currentColor"
            d="M17.143 8.486c0 1.898-1.715 2.657-2.615 2.657-.754 0-2.258-.695-3.505-1.393-1.252-.699-2.229-1.179-2.679-1.179-1.5 0-2.061 1.188-2.631 1.95 1.191-4.804 5.203-5.378 6.887-5.378s4.543.968 4.543 3.343"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CATHEON__a)"
            d="M10.521 14.571c-.745 0-.801-.711-.737-1.071l-.926-.309-.728 1.68.441 1.23 2.216 2.396.87.257a3.5 3.5 0 0 0 .771.103c3.579 0 4.728-2.198 4.71-3.368q-.002-.11-.017-.206c-.355-2.314-2.078-2.426-2.515-2.426a2.2 2.2 0 0 0-1.106.266c-2.443 1.166-2.803 1.448-2.979 1.448"
          />
          <path
            fill="url(#CATHEON__b)"
            d="M5.571 11.674c0-.377.099-.943.15-1.178l.407-.9.652-.986 4.71-1.08.488 2.383a3.3 3.3 0 0 0-1.474-.484c-.557 0-.638.634-.647.865v5.897c0 1.578 1.264 2.375 1.929 2.593-5.872-.994-6.215-5.914-6.215-7.11"
          />
          <path
            fill="url(#CATHEON__c)"
            d="M17.143 8.486c0 1.898-1.715 2.657-2.615 2.657-.754 0-2.258-.695-3.505-1.393-1.252-.699-2.229-1.179-2.679-1.179-1.5 0-2.061 1.188-2.631 1.95 1.191-4.804 5.203-5.378 6.887-5.378s4.543.968 4.543 3.343"
          />
          <defs>
            <linearGradient
              id="CATHEON__a"
              x1="17.131"
              x2="7.322"
              y1="11.198"
              y2="11.198"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6CDBF5" />
              <stop offset=".27" stopColor="#377EF2" />
              <stop offset=".71" stopColor="#1E4DA1" />
              <stop offset=".91" stopColor="#04145E" />
            </linearGradient>
            <linearGradient
              id="CATHEON__b"
              x1="11.361"
              x2="11.361"
              y1="5.143"
              y2="18.894"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".11" stopColor="#330665" />
              <stop offset=".5" stopColor="#392388" />
              <stop offset=".71" stopColor="#424BD2" />
              <stop offset=".92" stopColor="#88BFFD" />
            </linearGradient>
            <linearGradient
              id="CATHEON__c"
              x1="17.143"
              x2="5.888"
              y1="8.529"
              y2="8.464"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C767ED" />
              <stop offset=".15" stopColor="#82018F" />
              <stop offset=".71" stopColor="#FC5E8E" />
              <stop offset="1" stopColor="#F8AAD5" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCATHEON.displayName = 'CATHEON'
