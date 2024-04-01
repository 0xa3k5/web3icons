import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSHX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.304 4.714-3.72 12.832a.35.35 0 0 0 .33.454h12.172c.227 0 .39-.223.33-.45l-3.63-12.836H13.67l.18.857h-.994v-.857h-1.714v.857h-.883l.129-.857H9.3z"
          />
          <path
            fill="currentColor"
            d="m18.077 16.311-6.069-3.222V4.714h.85v.857h.998l-.18-.857h1.114zm-12.146 0L12 13.09V4.714h-.609v.857H10.15l.184-.857H9.219z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SHX__a)"
            d="m9.305 4.714-3.72 12.832a.35.35 0 0 0 .33.454h12.171c.227 0 .39-.223.33-.45l-3.63-12.836h-1.114l.18.857h-.994v-.857h-1.715v.857h-.883l.129-.857H9.3z"
          />
          <path
            fill="url(#SHX__b)"
            d="m18.078 16.311-6.069-3.222V4.714h.849v.857h.998l-.18-.857h1.114z"
          />
          <path
            fill="url(#SHX__c)"
            d="M5.932 16.311 12 13.09V4.714h-.61v.857h-1.24l.184-.857H9.22z"
          />
          <defs>
            <linearGradient
              id="SHX__a"
              x1="12.001"
              x2="12.001"
              y1="4.714"
              y2="18.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".64" stopColor="#054DC9" />
              <stop offset="1" stopColor="#0B3299" />
            </linearGradient>
            <linearGradient
              id="SHX__b"
              x1="5.569"
              x2="7.548"
              y1="5.893"
              y2="19.155"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0556D9" />
              <stop offset=".77" stopColor="#0A2993" />
            </linearGradient>
            <linearGradient
              id="SHX__c"
              x1="5.46"
              x2="12.227"
              y1="5.494"
              y2="12.742"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#025EE3" />
              <stop offset="1" stopColor="#0E2FA2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSHX.displayName = 'SHX'
