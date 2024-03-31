import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconNETT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.58 12-4.165 5.177c-.146-.085-.133-.325-.112-.437L5.336 12zm2.97 2.122L8.584 12 4.41 17.186c.094.116.33.086.433.051zM8.585 12H5.332A985 985 0 0 1 6.78 6.883a.54.54 0 0 1 .253-.283z"
          />
          <path
            fill="currentColor"
            d="M7.5 6.604c-.18-.12-.386-.05-.471 0l1.56 5.4 6.981.425c-2.614-1.869-7.886-5.7-8.07-5.825"
          />
          <path fill="currentColor" d="M11.555 14.135 8.58 12l3.3.176z" />
          <path
            fill="currentColor"
            d="m15.562 12.429-3.686-.266-.334 1.959 5.301 3.223c.116.077.369.227.48.227.116 0 .232-.03.279-.043l-2.045-5.1z"
          />
          <path
            fill="currentColor"
            d="M18.622 12.352h-3.129l2.1 5.177c.266-.06.42-.334.454-.459l.575-4.714z"
          />
          <path
            fill="currentColor"
            d="m15.523 12.429-3.3-2.405 6.343-3.484c.056-.06.231-.158.48-.086s.257.37.231.506l-.668 5.469z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#NETT__a)"
            d="m8.58 12-4.165 5.177c-.146-.085-.133-.325-.112-.437L5.336 12z"
          />
          <path
            fill="url(#NETT__b)"
            d="M11.55 14.122 8.584 12 4.41 17.186c.094.116.33.086.433.051z"
          />
          <path
            fill="#54CCFF"
            d="M8.585 12H5.332A985 985 0 0 1 6.78 6.883a.54.54 0 0 1 .253-.283z"
          />
          <path
            fill="#A2AFFE"
            d="M7.5 6.604c-.18-.12-.386-.05-.471 0l1.56 5.4 6.981.425c-2.614-1.869-7.886-5.7-8.07-5.825"
          />
          <path fill="#3189F7" d="M11.555 14.135 8.58 12l3.3.176z" />
          <path
            fill="url(#NETT__c)"
            d="m15.562 12.429-3.686-.266-.334 1.959 5.301 3.223c.116.077.369.227.48.227.116 0 .232-.03.279-.043l-2.045-5.1z"
          />
          <path
            fill="url(#NETT__d)"
            d="M18.622 12.352h-3.129l2.1 5.177c.266-.06.42-.334.454-.459l.575-4.714z"
          />
          <path
            fill="url(#NETT__e)"
            d="m15.523 12.429-3.3-2.405 6.343-3.484c.056-.06.231-.158.48-.086s.257.37.231.506l-.668 5.469z"
          />
          <defs>
            <linearGradient
              id="NETT__a"
              x1="11.781"
              x2="11.781"
              y1="6.438"
              y2="17.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#38C2FF" />
              <stop offset="1" stopColor="#2698EE" />
            </linearGradient>
            <linearGradient
              id="NETT__b"
              x1="11.789"
              x2="11.789"
              y1="6.429"
              y2="17.57"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4196FF" />
              <stop offset="1" stopColor="#2588FD" />
            </linearGradient>
            <linearGradient
              id="NETT__c"
              x1="11.789"
              x2="10.031"
              y1="6.429"
              y2="14.126"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4583FC" />
              <stop offset="1" stopColor="#307EFA" />
            </linearGradient>
            <linearGradient
              id="NETT__d"
              x1="11.953"
              x2="11.953"
              y1="6.429"
              y2="17.535"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#718CFD" />
              <stop offset="1" stopColor="#5A86FF" />
            </linearGradient>
            <linearGradient
              id="NETT__e"
              x1="18.93"
              x2="15.956"
              y1="6.814"
              y2="12.446"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A796F6" />
              <stop offset="1" stopColor="#999FFF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconNETT.displayName = 'NETT'
