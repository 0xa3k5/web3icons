import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenAIT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.686 6.93a1.35 1.35 0 0 0-.814-.502h3.132c.502 0 .832.472.935.703l3.347 6.112v2.678c-.073.527-.403.797-.776.797-.3 0-.75-.492-.857-.737l-4.324-8.258-.639-.793zm1.641 7.642H6.613a8 8 0 0 0-.485.244c-.034.03-.287 1.277-.407 1.898h6.42c.159 0 .257-.175.18-.317z"
          />
          <path
            fill="currentColor"
            d="M6.673 14.64c-.815 1.569.72 2.066.758 2.074H4.556c-1.299 0-1.213-1.045-1.008-1.568C4.907 12.578 7.646 7.388 7.74 7.17c.116-.274.446-.742 1.003-.742.445 0 .754.245.848.365l.729.921c-.943 1.787-3 5.67-3.647 6.926m12.184-7.719v9.159a.627.627 0 0 1-.622.634h-2.78c.57 0 .78-.514.83-.771V6.917c0-.27.25-.493.515-.493h1.573c.27 0 .484.223.484.493z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AIT__a)"
            d="M9.686 6.93a1.35 1.35 0 0 0-.814-.501h3.133c.501 0 .831.471.934.702l3.347 6.112v2.678c-.073.528-.403.798-.776.798-.3 0-.75-.493-.857-.738L10.33 7.724l-.64-.794z"
          />
          <path
            fill="url(#AIT__b)"
            d="M11.328 14.572H6.613c-.141.068-.446.214-.484.244-.034.03-.287 1.277-.407 1.898h6.42c.158 0 .257-.175.18-.317z"
          />
          <path
            fill="url(#AIT__c)"
            d="M6.673 14.64c-.814 1.569.72 2.066.759 2.074H4.556c-1.299 0-1.213-1.045-1.007-1.568C4.907 12.579 7.646 7.389 7.74 7.17c.116-.274.446-.741 1.003-.741.446 0 .754.244.849.364l.728.921c-.943 1.787-3 5.67-3.647 6.926"
          />
          <path
            fill="url(#AIT__d)"
            d="M18.858 16.08a.627.627 0 0 1-.622.634h-2.781c.57 0 .78-.514.831-.771V6.917c0-.27.249-.493.514-.493h1.573a.49.49 0 0 1 .485.493z"
          />
          <defs>
            <linearGradient
              id="AIT__a"
              x1="5.302"
              x2="12.808"
              y1="6.986"
              y2="19.194"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06A9EE" />
              <stop offset="1" stopColor="#00529B" />
            </linearGradient>
            <linearGradient
              id="AIT__b"
              x1="4.437"
              x2="18.546"
              y1="11.16"
              y2="11.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#134491" />
              <stop offset="1" stopColor="#00ADF0" />
            </linearGradient>
            <linearGradient
              id="AIT__c"
              x1="11.143"
              x2="11.143"
              y1="6.424"
              y2="16.719"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0458A0" />
              <stop offset="1" stopColor="#00ACE8" />
            </linearGradient>
            <linearGradient
              id="AIT__d"
              x1="17.147"
              x2="17.147"
              y1="6.429"
              y2="16.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#05599F" />
              <stop offset="1" stopColor="#00ADF0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenAIT.displayName = 'AIT'
