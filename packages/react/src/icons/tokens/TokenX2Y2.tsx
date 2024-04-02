import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenX2Y2 = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.657 8.13A5.88 5.88 0 0 0 13.5 6.428c-3.197 0-5.786 2.495-5.786 5.572s2.589 5.571 5.786 5.571a5.86 5.86 0 0 0 4.157-1.701 6.857 6.857 0 1 1 0-7.744z"
          />
          <path
            fill="currentColor"
            d="M13.5 17.143c2.957 0 5.357-2.302 5.357-5.143 0-2.842-2.4-5.143-5.357-5.143a5.48 5.48 0 0 0-3.596 1.329c.656-.343 1.406-.472 2.203-.472 2.571 0 4.607 1.774 4.607 4.286s-2.031 4.749-4.607 4.749a4.6 4.6 0 0 1-.849-.078c.682.3 1.44.472 2.242.472"
          />
          <path
            fill="currentColor"
            d="M12.214 16.286a4.071 4.071 0 1 0 0-8.143 4.071 4.071 0 0 0 0 8.143m0-1.286a2.786 2.786 0 1 0 0-5.571 2.786 2.786 0 0 0 0 5.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#X2Y2__a)"
            d="M17.657 8.13A5.88 5.88 0 0 0 13.5 6.428c-3.197 0-5.786 2.495-5.786 5.572s2.589 5.571 5.786 5.571a5.86 5.86 0 0 0 4.157-1.701 6.857 6.857 0 1 1 0-7.744z"
          />
          <path
            fill="url(#X2Y2__b)"
            d="M13.5 17.143c2.957 0 5.357-2.302 5.357-5.143 0-2.842-2.4-5.143-5.357-5.143a5.48 5.48 0 0 0-3.596 1.329c.656-.343 1.406-.472 2.203-.472 2.571 0 4.607 1.774 4.607 4.286s-2.031 4.749-4.607 4.749a4.6 4.6 0 0 1-.849-.078c.682.3 1.44.472 2.242.472"
          />
          <path
            fill="url(#X2Y2__c)"
            d="M12.214 16.286a4.071 4.071 0 1 0 0-8.143 4.071 4.071 0 0 0 0 8.143m0-1.286a2.786 2.786 0 1 0 0-5.571 2.786 2.786 0 0 0 0 5.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="X2Y2__a"
              x1="5.143"
              x2="20.172"
              y1="12.428"
              y2="12.428"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02DFFC" />
              <stop offset="1" stopColor="#5831C9" />
            </linearGradient>
            <linearGradient
              id="X2Y2__b"
              x1="-2.154"
              x2="18.857"
              y1="12.569"
              y2="12.569"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02DFFC" />
              <stop offset="1" stopColor="#5831C9" />
            </linearGradient>
            <linearGradient
              id="X2Y2__c"
              x1="5.143"
              x2="18.857"
              y1="12.429"
              y2="12.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02DFFC" />
              <stop offset="1" stopColor="#5831C9" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenX2Y2.displayName = 'X2Y2'
