import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconXAVA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.479 5.644a1.641 1.641 0 0 0-2.958 0L5.77 14.992c-.592 1.17.214 2.58 1.478 2.58.3 0 .587-.095.827-.27l2.923-2.148a1.71 1.71 0 0 1 2.07.026l2.644 2.036a1.7 1.7 0 0 0 1.042.356c1.264 0 2.07-1.41 1.478-2.58z"
          />
          <path
            fill="currentColor"
            d="M7.766 11.07c.428.214 1.097.639 1.941 1.354 1.556 1.316 3.763.66 4.402-.064.617-.703.985-1.093 2.074-1.393l-2.704-5.323a1.641 1.641 0 0 0-2.958 0z"
          />
          <path
            fill="currentColor"
            d="M8.576 9.472c.278.184.621.445.977.788.606.592 1.416.93 2.263.943.445 0 1.495-.214 2.477-1.127a6.6 6.6 0 0 1 1.02-.823l-1.834-3.609a1.641 1.641 0 0 0-2.958 0z"
          />
          <path
            fill="currentColor"
            d="m9.321 8.002 1.2-2.358a1.642 1.642 0 0 1 2.958 0l1.058 2.088a3.33 3.33 0 0 1-2.713 1.362 3.36 3.36 0 0 1-2.503-1.092"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#XAVA__a)"
            d="M13.478 5.644a1.641 1.641 0 0 0-2.957 0l-4.753 9.348c-.591 1.17.214 2.58 1.479 2.58.3 0 .587-.095.827-.27l2.923-2.148a1.71 1.71 0 0 1 2.07.026l2.644 2.036a1.7 1.7 0 0 0 1.041.356c1.265 0 2.07-1.41 1.479-2.58z"
          />
          <path
            fill="url(#XAVA__b)"
            d="M7.765 11.07c.429.214 1.097.639 1.942 1.354 1.555 1.316 3.762.66 4.401-.064.617-.703.986-1.093 2.074-1.393l-2.704-5.323a1.641 1.641 0 0 0-2.957 0z"
          />
          <path
            fill="url(#XAVA__c)"
            d="M8.575 9.472c.279.184.622.445.977.788.607.592 1.416.93 2.263.943.446 0 1.496-.214 2.477-1.127a6.6 6.6 0 0 1 1.02-.823l-1.834-3.609a1.641 1.641 0 0 0-2.957 0z"
          />
          <path
            fill="#FF4746"
            d="m9.32 8.002 1.2-2.358a1.642 1.642 0 0 1 2.958 0l1.059 2.088a3.33 3.33 0 0 1-2.713 1.362A3.36 3.36 0 0 1 9.32 8.002"
          />
          <defs>
            <linearGradient
              id="XAVA__a"
              x1="12.132"
              x2="11.987"
              y1="12.596"
              y2="17.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7153" />
              <stop offset="1" stopColor="#FF2F45" />
            </linearGradient>
            <linearGradient
              id="XAVA__b"
              x1="11.999"
              x2="11.999"
              y1="4.714"
              y2="17.57"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".69" stopColor="#FF6C58" />
              <stop offset="1" stopColor="#FF4746" />
            </linearGradient>
            <linearGradient
              id="XAVA__c"
              x1="11.999"
              x2="11.999"
              y1="4.713"
              y2="17.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".55" stopColor="#FF8368" />
              <stop offset=".94" stopColor="#FF4746" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconXAVA.displayName = 'XAVA'
