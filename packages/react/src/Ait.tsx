import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAit = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.686 6.93a1.35 1.35 0 0 0-.815-.502h3.133c.502 0 .832.472.934.703l3.348 6.112v2.678c-.073.527-.403.797-.776.797-.3 0-.75-.492-.857-.737l-4.324-8.258-.64-.793zM11.327 14.572H6.613c-.142.068-.446.214-.484.244-.035.03-.288 1.277-.408 1.898h6.42c.159 0 .258-.175.18-.317z"
          />
          <path
            fill="currentColor"
            d="M6.673 14.64c-.814 1.569.72 2.066.758 2.074H4.556c-1.299 0-1.213-1.045-1.007-1.568C4.907 12.578 7.646 7.388 7.74 7.17c.116-.274.446-.742 1.003-.742.446 0 .754.245.848.365l.73.921c-.944 1.787-3 5.67-3.648 6.926M18.857 6.921v9.159a.627.627 0 0 1-.621.634h-2.782c.57 0 .78-.514.832-.771V6.917c0-.27.248-.493.514-.493h1.573c.27 0 .484.223.484.493z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AIT__a)">
            <path fill="#F0F3FA" d="M0 0h24v24H0z" />
            <path
              fill="url(#AIT__b)"
              d="M9.686 6.93a1.35 1.35 0 0 0-.815-.501h3.133c.502 0 .832.471.935.702l3.347 6.112v2.678c-.073.528-.403.798-.776.798-.3 0-.75-.493-.857-.738l-4.324-8.258-.639-.793z"
            />
            <path
              fill="url(#AIT__c)"
              d="M11.327 14.572H6.613c-.142.068-.446.214-.484.244-.035.03-.288 1.277-.408 1.898h6.42c.16 0 .258-.175.18-.317z"
            />
            <path
              fill="url(#AIT__d)"
              d="M6.673 14.64c-.814 1.569.72 2.066.758 2.074H4.556c-1.299 0-1.213-1.045-1.007-1.568C4.907 12.579 7.646 7.389 7.74 7.17c.116-.274.446-.741 1.003-.741.446 0 .754.244.848.364l.73.921c-.944 1.787-3 5.67-3.648 6.926"
            />
            <path
              fill="url(#AIT__e)"
              d="M18.857 16.08a.627.627 0 0 1-.621.634h-2.782c.57 0 .78-.514.832-.771V6.917c0-.27.248-.493.514-.493h1.573c.27 0 .484.223.484.493z"
            />
          </g>
          <defs>
            <linearGradient
              id="AIT__b"
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
              id="AIT__c"
              x1="4.437"
              x2="18.545"
              y1="11.16"
              y2="11.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#134491" />
              <stop offset="1" stopColor="#00ADF0" />
            </linearGradient>
            <linearGradient
              id="AIT__d"
              x1="11.142"
              x2="11.142"
              y1="6.424"
              y2="16.719"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0458A0" />
              <stop offset="1" stopColor="#00ACE8" />
            </linearGradient>
            <linearGradient
              id="AIT__e"
              x1="17.147"
              x2="17.147"
              y1="6.429"
              y2="16.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#05599F" />
              <stop offset="1" stopColor="#00ADF0" />
            </linearGradient>
            <clipPath id="AIT__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAit.displayName = 'Ait'

export default IconAit
