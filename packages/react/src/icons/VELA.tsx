import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconVELA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m17.357 11.194-2.143 3.754c-.664 1.158-1.886 1.766-3.214 1.766l3.214-5.516 1.072-1.877z"
          />
          <path
            fill="currentColor"
            d="m17.357 11.194-2.143 3.754c-.664 1.158-1.864 1.74-3.193 1.74l3.193-5.49 1.072-1.877z"
          />
          <path
            fill="currentColor"
            d="m20.571 9.428-1.071 1.77-2.143 3.75c-.664 1.158-1.886 1.766-3.214 1.766H12c1.328 0 2.524-.63 3.188-1.787l2.169-3.729-1.071-1.77zm-4.225 0H7.714L8.4 8.07l.39-.784h4.324c1.32 0 2.542.801 3.214 2.1l.022.042z"
          />
          <path
            fill="currentColor"
            d="M16.346 9.428H7.714l1.14-2.142h4.359c1.32 0 2.46 1.002 3.128 2.142z"
          />
          <path
            fill="currentColor"
            d="M16.264 9.287c-.664-1.14-1.83-2.001-3.146-2.001H8.833L7.744 9.428 5.571 5.571H12a3.7 3.7 0 0 1 2.254.772l.099.077q.138.118.265.244.344.348.596.784z"
          />
          <path
            fill="currentColor"
            d="M12 16.714H9.857l-2.143-3.643a3.71 3.71 0 0 1 .017-3.677l.373.613 1.753 3.064z"
          />
          <path
            fill="currentColor"
            d="M12 16.718v-.004H9.857l-2.143-3.643a3.66 3.66 0 0 1 .022-3.651z"
          />
          <path
            fill="currentColor"
            d="m12.017 16.714-2.16 3.857-2.143-3.75-1.071-1.873a4 4 0 0 1-.305-.677l-.03-.103a4 4 0 0 1-.137-.625l-.008-.107-.009-.112v-.013l-.008-.115v-.116a3.8 3.8 0 0 1 .278-1.436l.047-.111q.079-.171.172-.335l1.08-1.778a3.66 3.66 0 0 0-.005 3.651l2.143 3.643z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#VELA__a)"
            d="m17.357 11.194-2.143 3.754c-.664 1.158-1.886 1.766-3.214 1.766l3.214-5.516 1.072-1.877z"
          />
          <path
            fill="url(#VELA__b)"
            d="m17.357 11.194-2.143 3.754c-.664 1.158-1.864 1.74-3.193 1.74l3.193-5.49 1.072-1.877z"
          />
          <path
            fill="url(#VELA__c)"
            d="m20.571 9.428-1.071 1.77-2.143 3.75c-.664 1.158-1.886 1.766-3.214 1.766H12c1.328 0 2.524-.63 3.188-1.787l2.169-3.729-1.071-1.77z"
          />
          <path
            fill="url(#VELA__d)"
            d="M16.346 9.428H7.714L8.4 8.07l.39-.784h4.324c1.32 0 2.542.801 3.214 2.1l.022.042z"
          />
          <path
            fill="url(#VELA__e)"
            d="M16.346 9.428H7.714l1.14-2.142h4.359c1.32 0 2.46 1.002 3.128 2.142z"
          />
          <path
            fill="url(#VELA__f)"
            d="M16.264 9.287c-.664-1.14-1.83-2.001-3.146-2.001H8.833L7.744 9.428 5.571 5.571H12a3.7 3.7 0 0 1 2.254.772l.099.077q.138.118.265.244.344.348.596.784z"
          />
          <path
            fill="url(#VELA__g)"
            d="M12 16.714H9.857l-2.143-3.643a3.71 3.71 0 0 1 .017-3.677l.373.613 1.753 3.064z"
          />
          <path
            fill="url(#VELA__h)"
            d="M12 16.718v-.004H9.857l-2.143-3.643a3.66 3.66 0 0 1 .022-3.651z"
          />
          <path
            fill="url(#VELA__i)"
            d="m12.017 16.714-2.16 3.857-2.143-3.75-1.071-1.873a4 4 0 0 1-.305-.677l-.03-.103a4 4 0 0 1-.137-.625l-.008-.107-.009-.112v-.013l-.008-.115v-.116a3.8 3.8 0 0 1 .278-1.436l.047-.111q.079-.171.172-.335l1.08-1.778a3.66 3.66 0 0 0-.005 3.651l2.143 3.643z"
          />
          <defs>
            <linearGradient
              id="VELA__a"
              x1="27.303"
              x2="10.454"
              y1="4.363"
              y2="24.488"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02F0FE" />
              <stop offset="1" stopColor="#4D7EFE" />
            </linearGradient>
            <linearGradient
              id="VELA__b"
              x1="18.933"
              x2="11.578"
              y1="8.111"
              y2="23.374"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D4AFE" />
              <stop offset="1" stopColor="#4D7EFE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="VELA__c"
              x1="19.971"
              x2="3.384"
              y1="5.227"
              y2="17.424"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02F0FE" />
              <stop offset="1" stopColor="#4D7EFE" />
            </linearGradient>
            <linearGradient
              id="VELA__d"
              x1="1.983"
              x2="21.571"
              y1="-.309"
              y2="1.088"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02F0FE" />
              <stop offset="1" stopColor="#4D7EFE" />
            </linearGradient>
            <linearGradient
              id="VELA__e"
              x1="5.333"
              x2="20.11"
              y1="13.371"
              y2="13.36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D4AFE" />
              <stop offset="1" stopColor="#4D7EFE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="VELA__f"
              x1="6.01"
              x2="21.584"
              y1="7.338"
              y2="9.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02F0FE" />
              <stop offset="1" stopColor="#4D7EFE" />
            </linearGradient>
            <linearGradient
              id="VELA__g"
              x1="17.036"
              x2="13.825"
              y1="28.027"
              y2="4.646"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02F0FE" />
              <stop offset="1" stopColor="#4D7EFE" />
            </linearGradient>
            <linearGradient
              id="VELA__h"
              x1="18.209"
              x2="11.39"
              y1="21.954"
              y2="4.002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D4AFE" />
              <stop offset="1" stopColor="#4D7EFE" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="VELA__i"
              x1="10.178"
              x2="7.83"
              y1="20.503"
              y2="9.373"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02F0FE" />
              <stop offset="1" stopColor="#4D7EFE" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconVELA.displayName = 'VELA'
