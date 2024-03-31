import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCROWN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#CROWN__a)"
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 1.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
      />
      <path fill="url(#CROWN__b)" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
      <path
        fill="url(#CROWN__c)"
        d="M7.285 10.714a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857"
      />
      <path
        fill="#EDEEF0"
        d="M16.714 10.714a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857"
      />
      <path
        fill="url(#CROWN__d)"
        d="M12.642 9.214a.643.643 0 1 1-1.285 0 .643.643 0 0 1 1.285 0"
      />
      <path
        fill="url(#CROWN__e)"
        d="M7.752 11.143c-.45 0-.895.214-.895.643 0 .857 1.114 1.928 2.237 1.928.3 0 .891-.214 1.114-.428.227.214.72.428 1.792.428 1.071 0 1.641-.287 1.787-.428.227.141.9.428 1.118.428 1.123 0 2.237-.857 2.237-1.928 0-.643-.531-.643-.895-.643-.36 0-1.565.428-2.015 1.071-.441-.643-1.332-1.928-2.232-1.928s-1.865 1.286-2.238 1.928c-.3-.355-1.114-1.071-2.014-1.071zm.446.428c.536 0 1.114.57 1.342.858 0 .141-.133.428-.669.428-.673 0-1.341-.643-1.341-.857s0-.428.668-.428m3.802 0c-.536 0-1.269.858-1.565 1.286.43.39.984.618 1.565.643.715 0 1.341-.428 1.564-.643-.3-.428-1.029-1.285-1.564-1.285m3.801 0c-.536 0-1.114.57-1.341.858 0 .141.132.428.668.428.673 0 1.342-.643 1.342-.857s0-.428-.669-.428"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="url(#CROWN__f)"
        d="M8.871 12.857c-.673 0-1.341-.643-1.341-.857s0-.428.668-.428v-.373a2 2 0 0 0-.446-.056c-.45 0-.895.214-.895.643 0 .857 1.114 1.928 2.237 1.928 1.787 0 1.787-2.142 2.906-2.142.895 0 1.448 2.142 2.905 2.142 1.123 0 2.237-.857 2.237-1.928 0-.643-.531-.643-.895-.643-.099 0-.257.03-.446.086v.343c.669 0 .669.214.669.428s-.909.857-1.342.857c-1.114 0-1.114-2.571-3.128-2.571-1.5 0-2.298 2.571-3.129 2.571"
      />
      <defs>
        <linearGradient
          id="CROWN__a"
          x1="6.214"
          x2="16.285"
          y1="7.286"
          y2="17.572"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#717074" />
          <stop offset=".1" stopColor="#EBE9ED" />
          <stop offset=".93" stopColor="#F5FCFD" />
          <stop offset="1" stopColor="#5F647A" />
        </linearGradient>
        <linearGradient
          id="CROWN__b"
          x1="8.617"
          x2="15.382"
          y1="6.015"
          y2="18.245"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#435AB6" />
          <stop offset=".5" stopColor="#616267" />
          <stop offset="1" stopColor="#4059C0" />
        </linearGradient>
        <linearGradient
          id="CROWN__c"
          x1="12"
          x2="12"
          y1="4.714"
          y2="19.286"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFF5FC" />
          <stop offset="1" stopColor="#B4B3B1" />
        </linearGradient>
        <linearGradient
          id="CROWN__d"
          x1="14.428"
          x2="14.428"
          y1="4.714"
          y2="19.286"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F6F6" />
          <stop offset="1" stopColor="#BFBEBE" />
        </linearGradient>
        <linearGradient
          id="CROWN__e"
          x1="5.667"
          x2="17.416"
          y1="8.357"
          y2="9.68"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".1" stopColor="#7A819D" />
          <stop offset=".28" stopColor="#E4E4EE" />
          <stop offset=".41" stopColor="#F6F7F9" />
          <stop offset=".59" stopColor="#7D818A" />
          <stop offset="1" stopColor="#070708" />
        </linearGradient>
        <linearGradient
          id="CROWN__f"
          x1="7.53"
          x2="16.641"
          y1="11.357"
          y2="13.907"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#878DA7" />
          <stop offset=".11" stopColor="#898A89" />
          <stop offset=".31" stopColor="#D8D7D7" />
          <stop offset=".63" stopColor="#585858" />
          <stop offset=".84" stopColor="#0A090E" />
          <stop offset="1" stopColor="#62615F" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconCROWN.displayName = 'CROWN'
