import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconCTXC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.936 5.396c-.09-.21.24-.36.33-.159l6.416 11.259c-.112 0-.223-.039-.33-.056l-5.713-1.157c-.184-.009-.227-.317-.043-.364l2.237-.626a.18.18 0 0 0 .129-.103.2.2 0 0 0 0-.163l-3.026-8.636z"
          />
          <path
            fill="currentColor"
            d="M11.606 5.413c.021.03.043.064.056.098.677 1.955 1.371 3.909 2.044 5.863.06.163-.167.3-.274.176-.579-.613-1.127-1.243-1.693-1.86-.09-.086-.223-.03-.283.06l-5.889 7.041c-.068.073-.128.185-.24.198-.085 0-.137-.065-.184-.129v-.107c2.156-3.78 4.311-7.556 6.463-11.34"
          />
          <path
            fill="currentColor"
            d="M9.806 12.12c.111-.034.257.043.219.18-.228.81-.472 1.616-.708 2.417-.038.103.056.197.15.202 3.082.63 6.163 1.281 9.245 1.907.06.008.098.055.145.094v.129l-.085.094H5.692c1.371-1.671 2.738-3.36 4.114-5.023"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CTXC__a)"
            d="M11.935 5.396c-.09-.21.24-.36.33-.159l6.416 11.259c-.111 0-.223-.039-.33-.056l-5.713-1.157c-.184-.009-.227-.317-.043-.364l2.238-.626a.18.18 0 0 0 .128-.103.2.2 0 0 0 0-.163l-3.026-8.636z"
          />
          <path
            fill="url(#CTXC__b)"
            d="M11.605 5.413q.035.046.056.098c.677 1.955 1.372 3.909 2.044 5.863.06.163-.167.3-.274.176-.578-.613-1.127-1.243-1.693-1.86-.09-.086-.223-.03-.283.06l-5.888 7.041c-.069.073-.129.185-.24.198-.086 0-.137-.065-.184-.129v-.107c2.155-3.78 4.311-7.556 6.462-11.34"
          />
          <path
            fill="url(#CTXC__c)"
            d="M9.805 12.12c.112-.034.258.043.219.18-.227.81-.471 1.616-.707 2.417-.039.103.056.197.15.202 3.081.63 6.163 1.281 9.244 1.907.06.008.099.055.146.094v.129l-.086.094H5.691c1.372-1.671 2.739-3.36 4.114-5.023"
          />
          <defs>
            <linearGradient
              id="CTXC__a"
              x1="5.139"
              x2="9.921"
              y1="5.143"
              y2="20.017"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#307CC0" />
              <stop offset="1" stopColor="#58BFDC" />
            </linearGradient>
            <linearGradient
              id="CTXC__b"
              x1="16.942"
              x2="10.266"
              y1="7.79"
              y2="19.956"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#388BC7" />
              <stop offset="1" stopColor="#58BFDC" />
            </linearGradient>
            <linearGradient
              id="CTXC__c"
              x1="5.691"
              x2="18.145"
              y1="17.143"
              y2="17.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ACADAD" />
              <stop offset=".47" stopColor="#DEDFDF" />
              <stop offset="1" stopColor="#B1B2B2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCTXC.displayName = 'CTXC'
