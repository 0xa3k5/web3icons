import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNVT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m11.296 6.857-.22.59 3.159 5.59.22-.59zM9.54 11.569l3.168 5.575.21-.562-3.162-5.594zm3.925 3.533-3.159-5.59.22-.59 3.159 5.59z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M15.756 17.143h-3.05l3.636-9.758a.8.8 0 0 1 .294-.383.8.8 0 0 1 .454-.145h3.053l-3.638 9.757a.8.8 0 0 1-.294.383.8.8 0 0 1-.455.146m-8.848 0H3.857l3.636-9.758a.8.8 0 0 1 .294-.383.8.8 0 0 1 .455-.145h3.052l-3.637 9.757a.8.8 0 0 1-.294.383.8.8 0 0 1-.455.146"
          />
          <path
            fill="currentColor"
            d="M11.294 6.857h.004l.44.78-.222.584-.44-.78zm-.333 2.822-.436-.77-.22.59.433.765zm-.782 2.057-.423-.748-.216.58.42.742z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m14.022 11.68.435.77-.226.59-.428-.776zm-.334 2.831-.445-.781-.22.586.445.789zm-.772 2.065-.444-.78-.21.571.443.776z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#NVT__a)"
            d="m11.296 6.857-.22.59 3.16 5.59.22-.59zM9.54 11.569l3.168 5.575.21-.562-3.162-5.594zm3.925 3.533-3.158-5.59.22-.59 3.158 5.59z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#NVT__b)"
            d="M15.756 17.143h-3.05l3.636-9.758a.8.8 0 0 1 .294-.383.8.8 0 0 1 .455-.145h3.052l-3.638 9.757a.8.8 0 0 1-.294.383.8.8 0 0 1-.455.146"
          />
          <path
            fill="url(#NVT__c)"
            d="M6.908 17.143h-3.05l3.636-9.758a.8.8 0 0 1 .294-.383.8.8 0 0 1 .455-.145h3.052l-3.638 9.757a.8.8 0 0 1-.294.383.8.8 0 0 1-.455.146"
          />
          <path
            fill="url(#NVT__d)"
            d="M11.295 6.857h.004l.44.78-.223.584-.44-.78zm-.334 2.822-.435-.77-.22.59.433.765zm-.782 2.057-.423-.748-.216.58.421.742z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#NVT__e)"
            d="m14.023 11.68.435.77-.226.59-.429-.776z"
          />
          <path
            fill="url(#NVT__f)"
            d="m13.688 14.511-.445-.781-.22.586.446.789z"
          />
          <path
            fill="url(#NVT__g)"
            d="m12.917 16.576-.444-.78-.21.571.443.776z"
          />
          <defs>
            <linearGradient
              id="NVT__a"
              x1="6.185"
              x2="9.22"
              y1="12.617"
              y2="18.842"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E90E2" />
              <stop offset=".857" stopColor="#17E9D9" />
            </linearGradient>
            <linearGradient
              id="NVT__b"
              x1="18.131"
              x2="7.428"
              y1="10.402"
              y2="7.609"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5D7CE9" />
              <stop offset="1" stopColor="#17EAD9" />
            </linearGradient>
            <linearGradient
              id="NVT__c"
              x1="18.131"
              x2="7.428"
              y1="10.402"
              y2="7.609"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5D7CE9" />
              <stop offset="1" stopColor="#17EAD9" />
            </linearGradient>
            <linearGradient
              id="NVT__d"
              x1="3.178"
              x2="7.684"
              y1="12.001"
              y2="18.975"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".39" stopColor="#2E4177" />
              <stop offset="1" stopColor="#2E4177" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="NVT__e"
              x1="3.324"
              x2="-13.588"
              y1="31.087"
              y2="15.605"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B8382" />
              <stop offset="1" stopColor="#439A99" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="NVT__f"
              x1="22.441"
              x2="5.726"
              y1="15.477"
              y2=".251"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B8382" />
              <stop offset="1" stopColor="#439A99" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="NVT__g"
              x1="13.782"
              x2="12.622"
              y1="14.882"
              y2="14.559"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B8382" />
              <stop offset="1" stopColor="#439A99" stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconNVT.displayName = 'NVT'
