import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenYDF = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.143 9.429a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
          />
          <path
            fill="currentColor"
            d="M11.143 9a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715m-6.497-.176-.026.035a1.58 1.58 0 0 0 .394 2.297L8.328 13.4a1.84 1.84 0 0 0 2.456-.368l.026-.034a1.58 1.58 0 0 0-.394-2.298L7.102 8.456a1.84 1.84 0 0 0-2.456.368m8.991 10.033c-.193 0-.377-.051-.535-.141a.97.97 0 0 1-.373-.386l-1.543-2.957a1.48 1.48 0 0 1 .013-1.406l3.51-6.42c-1.749 3.197-1.886 4.822-.686 7.119l1.059 2.023c.527.998-.258 2.168-1.445 2.168"
          />
          <path
            fill="currentColor"
            d="M18 9.249a.17.17 0 0 1-.094.154.2.2 0 0 1-.193-.004L17.122 9l-3.095 5.661c-1.2-2.297-1.071-3.921.682-7.118l.06-.103-.506-.334a.17.17 0 0 1 .073-.236l3.317-1.71a.2.2 0 0 1 .18 0c.06.034.167.086.167.15z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#YDF__a)"
            d="M11.143 9.429a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
          />
          <path
            fill="url(#YDF__b)"
            d="M11.143 9a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715"
          />
          <path
            fill="url(#YDF__c)"
            d="m4.645 8.824-.025.035a1.58 1.58 0 0 0 .394 2.297L8.327 13.4a1.84 1.84 0 0 0 2.456-.368l.025-.034a1.58 1.58 0 0 0-.394-2.298L7.101 8.456a1.84 1.84 0 0 0-2.456.368"
          />
          <path
            fill="url(#YDF__d)"
            d="M13.637 18.857c-.193 0-.377-.051-.536-.141a.97.97 0 0 1-.373-.386l-1.543-2.957a1.48 1.48 0 0 1 .013-1.406l3.51-6.42c-1.748 3.197-1.885 4.822-.685 7.119l1.058 2.023c.527.998-.257 2.168-1.444 2.168"
          />
          <path
            fill="url(#YDF__e)"
            d="M18 9.249a.17.17 0 0 1-.095.154.2.2 0 0 1-.192-.004L17.12 9l-3.094 5.661c-1.2-2.297-1.072-3.921.681-7.118l.06-.103-.505-.334a.17.17 0 0 1 .072-.236l3.318-1.71a.2.2 0 0 1 .18 0c.06.034.167.086.167.15z"
          />
          <defs>
            <linearGradient
              id="YDF__a"
              x1="11.144"
              x2="11.144"
              y1="5.138"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EB508F" />
              <stop offset="1" stopColor="#FBAB1F" />
            </linearGradient>
            <linearGradient
              id="YDF__b"
              x1="11.144"
              x2="11.144"
              y1="5.138"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CE427F" />
              <stop offset="1" stopColor="#642F1E" />
            </linearGradient>
            <linearGradient
              id="YDF__c"
              x1="5.569"
              x2="17.927"
              y1="6.722"
              y2="14.759"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E1479A" />
              <stop offset="1" stopColor="#54459C" />
            </linearGradient>
            <linearGradient
              id="YDF__d"
              x1="7.479"
              x2="8.89"
              y1="11.319"
              y2="18.853"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCB415" />
              <stop offset="1" stopColor="#F3785F" />
            </linearGradient>
            <linearGradient
              id="YDF__e"
              x1="17.357"
              x2="13.285"
              y1="5.786"
              y2="14.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E0479A" />
              <stop offset="1" stopColor="#5A459C" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenYDF.displayName = 'YDF'
