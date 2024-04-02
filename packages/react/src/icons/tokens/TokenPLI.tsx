import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPLI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.732 11.143a5.7 5.7 0 0 1-3.018-.793c.356-.27 1.457-.81 3.017-.81a6.8 6.8 0 0 1 3.258.814 7.15 7.15 0 0 1-3.258.789m1.016-1.954A4.2 4.2 0 0 1 7.03 7.346a3.9 3.9 0 0 1 2.438.578A4.97 4.97 0 0 1 11.34 9.88c-.428.025-1.551-.078-2.593-.686zm1.539-1.355A3.15 3.15 0 0 1 9.922 6c.244.086.98.514 1.414 1.273.428.763.351 1.491.325 1.791-.27-.141-.96-.488-1.38-1.23zm5.983 3.309a5.7 5.7 0 0 0 3.017-.793c-.356-.27-1.457-.81-3.017-.81a6.8 6.8 0 0 0-3.257.814c.454.257 1.744.789 3.257.789m-1.016-1.954a4.2 4.2 0 0 0 1.718-1.843 3.9 3.9 0 0 0-2.438.578A4.97 4.97 0 0 0 12.66 9.88c.429.025 1.551-.078 2.593-.686zm-1.539-1.355c.425-.737.403-1.568.365-1.834-.245.086-.982.514-1.415 1.273-.428.763-.351 1.491-.325 1.791.27-.141.96-.488 1.38-1.23zm-9 6.309v2.143H6v-.857h2.413c.797 0 1.444-.84 1.444-1.715C9.857 12.84 9.21 12 8.413 12H5.537l-.823 1.286H8.16c.24 0 .412.167.412.428 0 .262-.172.429-.412.429zm6.858 2.143V12h1.285v3h3l-.797 1.286zm6 0V12h1.285v4.286z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PLI__a)"
            d="M7.731 11.143a5.7 5.7 0 0 1-3.017-.793c.356-.27 1.457-.81 3.017-.81a6.8 6.8 0 0 1 3.257.814 7.15 7.15 0 0 1-3.257.789"
          />
          <path
            fill="url(#PLI__b)"
            d="M8.747 9.189a4.2 4.2 0 0 1-1.719-1.843 3.9 3.9 0 0 1 2.439.578A4.97 4.97 0 0 1 11.34 9.88c-.429.025-1.552-.078-2.593-.686z"
          />
          <path
            fill="url(#PLI__c)"
            d="M10.285 7.834c-.303-.56-.43-1.2-.364-1.834.244.086.981.514 1.414 1.273.429.763.352 1.491.326 1.791-.27-.141-.96-.488-1.38-1.23z"
          />
          <path
            fill="url(#PLI__d)"
            d="M16.268 11.143a5.7 5.7 0 0 0 3.017-.793c-.355-.27-1.457-.81-3.017-.81a6.8 6.8 0 0 0-3.257.814c.454.257 1.744.789 3.257.789"
          />
          <path
            fill="url(#PLI__e)"
            d="M15.252 9.189a4.2 4.2 0 0 0 1.719-1.843 3.9 3.9 0 0 0-2.439.578A4.97 4.97 0 0 0 12.66 9.88c.428.025 1.551-.078 2.592-.686z"
          />
          <path
            fill="url(#PLI__f)"
            d="M13.714 7.834c.424-.737.403-1.568.364-1.834-.244.086-.981.514-1.414 1.273-.429.763-.352 1.491-.326 1.791.27-.141.96-.488 1.38-1.23z"
          />
          <path
            fill="#FEFEFE"
            d="M4.714 14.143v2.143H6v-.857h2.412c.798 0 1.445-.84 1.445-1.715C9.857 12.84 9.21 12 8.412 12H5.537l-.823 1.286H8.16c.24 0 .411.167.411.428 0 .262-.171.429-.411.429zm6.857 2.143V12h1.286v3h3l-.797 1.286z"
          />
          <path fill="#FE620D" d="M17.571 16.286V12h1.286v4.286z" />
          <defs>
            <linearGradient
              id="PLI__a"
              x1="6.764"
              x2="16.279"
              y1="11.139"
              y2="11.139"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F36511" />
              <stop offset="1" stopColor="#FFDF1A" />
            </linearGradient>
            <linearGradient
              id="PLI__b"
              x1="6.495"
              x2="17.469"
              y1="5.967"
              y2="12.276"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F36511" />
              <stop offset="1" stopColor="#FFDF1A" />
            </linearGradient>
            <linearGradient
              id="PLI__c"
              x1="6.715"
              x2="8.973"
              y1="6.935"
              y2="18.038"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F36511" />
              <stop offset="1" stopColor="#FFDF1A" />
            </linearGradient>
            <linearGradient
              id="PLI__d"
              x1="17.235"
              x2="7.72"
              y1="11.139"
              y2="11.139"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F36511" />
              <stop offset="1" stopColor="#FFDF1A" />
            </linearGradient>
            <linearGradient
              id="PLI__e"
              x1="17.504"
              x2="6.53"
              y1="5.967"
              y2="12.276"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F36511" />
              <stop offset="1" stopColor="#FFDF1A" />
            </linearGradient>
            <linearGradient
              id="PLI__f"
              x1="17.271"
              x2="15.011"
              y1="6.935"
              y2="18.038"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F36511" />
              <stop offset="1" stopColor="#FFDF1A" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenPLI.displayName = 'PLI'
