import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconVXV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.429 8.393 12 4.777 5.572 8.393v7.213L12 19.222l6.429-3.616zm-6.219-3.99a.43.43 0 0 0-.42 0L5.362 8.02a.43.43 0 0 0-.219.373v7.213a.43.43 0 0 0 .219.374l6.428 3.616a.43.43 0 0 0 .42 0l6.429-3.616a.43.43 0 0 0 .218-.374V8.393a.43.43 0 0 0-.218-.373z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m12.266 16.998 4.607-7.879c.188-.321-.174-.682-.499-.498l-4.362 2.476-4.348-2.474c-.325-.185-.687.175-.5.497l4.595 7.877a.294.294 0 0 0 .507 0m-.019-1.375 2.909-5.136c.073-.129-.072-.27-.2-.197l-2.958 1.686.007.015L10.232 13l1.505 2.623a.294.294 0 0 0 .51 0m-2.396-3.288 1.393-.79-2.289-1.32c-.13-.076-.275.068-.2.197z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m11.77 12.123-.757-.443 1.161-.675.732.45z"
          />
          <path
            fill="currentColor"
            d="m10.785 11.281 3.038 1.75.512-.555-3.003-1.765z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#VXV__a)"
            d="M18.428 8.393 12 4.777 5.57 8.393v7.213L12 19.222l6.428-3.616zm-6.218-3.99a.43.43 0 0 0-.42 0L5.36 8.02a.43.43 0 0 0-.218.373v7.213c0 .155.083.298.218.374l6.429 3.616a.43.43 0 0 0 .42 0l6.428-3.616a.43.43 0 0 0 .219-.374V8.393a.43.43 0 0 0-.219-.373z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#VXV__b)"
            d="m12.266 16.998 4.607-7.879c.188-.321-.174-.682-.5-.498l-4.361 2.476-4.349-2.474c-.325-.185-.687.175-.5.497l4.595 7.877a.294.294 0 0 0 .508 0m-.02-1.375 2.91-5.136c.072-.129-.072-.27-.201-.197l-2.957 1.686.006.015L10.232 13l1.504 2.623a.294.294 0 0 0 .51 0m-2.395-3.288 1.392-.79-2.288-1.32c-.13-.076-.275.068-.201.197z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#VXV__c)"
            d="m11.77 12.123-.758-.443 1.162-.675.731.45z"
          />
          <path
            fill="url(#VXV__d)"
            d="m10.784 11.281 3.039 1.75.511-.555-3.002-1.765z"
          />
          <defs>
            <linearGradient
              id="VXV__a"
              x1="8.893"
              x2="15.508"
              y1="6.09"
              y2="17.707"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DCDCDC" />
              <stop offset="1" stopColor="#585858" />
            </linearGradient>
            <linearGradient
              id="VXV__b"
              x1="5.82"
              x2="19.195"
              y1="12.684"
              y2="9.852"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#51898A" />
              <stop offset="1" stopColor="#7DB9C9" />
            </linearGradient>
            <linearGradient
              id="VXV__c"
              x1="17.101"
              x2="3.023"
              y1="4.15"
              y2="11.948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6AA4AE" />
              <stop offset=".334" stopColor="#538289" />
              <stop offset=".597" stopColor="#538289" />
              <stop offset="1" stopColor="#629CA3" />
            </linearGradient>
            <linearGradient
              id="VXV__d"
              x1="11.071"
              x2="13.976"
              y1="10.971"
              y2="12.652"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#639CA3" />
              <stop offset="1" stopColor="#6EA9B4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconVXV.displayName = 'VXV'
