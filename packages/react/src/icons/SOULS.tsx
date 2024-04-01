import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSOULS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#SOULS__a)"
        d="M10.821 10.384c-.154-.471.017-1.093.12-1.346l-.78.279c-.283.788-.857 2.391-.87 2.469s1.097 2.455 1.65 3.634c.365-.202 1.26-.497 1.933-.073.673.428.454 1.311.262 1.697l.668-.364c.056-.035.69-.592.999-.87l-1.792-5.13c-1.114.626-2.001.3-2.19-.296"
      />
      <path
        fill="url(#SOULS__b)"
        d="M10.011 7.328c1.157-.882 1.95-2.858 1.95-3.471.21.309.63 1.268.63 2.657a3 3 0 0 1-1.474 2.542c-.369.3-1.106 1.024-1.106 1.542 0 .647.407 1.149 1.2 1.149.785 0 2.4-1.83 2.58-2.027l.005-.004c.154-.172.908-1.072 1.628-1.072.579 0 1.089.472 1.273.707C17.13 9.908 18 11.4 18 12.857c0 2.88-1.594 4.47-3.077 5.306-1.183.664-2.979.728-3.729.677l1.757-1.826c.373-.296 1.11-1.011 1.11-1.513 0-.63-.325-1.131-1.255-1.131-.926 0-1.856 1.337-2.52 2.074-.669.742-1.273.977-1.518.977-.24 0-1.054.129-2.001-1.714-.754-1.474-.814-2.349-.746-2.597 0-3.763 2.542-4.684 3.99-5.786z"
      />
      <path
        fill="url(#SOULS__c)"
        d="M7.971 10.071c.643-1.521 2.85-2.871 3.875-3.355 0 .758-2.203 2.905-2.203 4.2 0 1.285.317 1.594 1.62 1.594s2.185-1.389 2.618-1.873c.437-.484 1.119-1.016 1.706-1.016.583 0 1.701.549 1.701 3.502 0 2.957-2.288 4.603-2.987 4.842-.703.245-1.303-.012-.685-.32.617-.305 1.384-1.21 1.384-2.517 0-1.311-.484-2.005-1.552-2.005-1.071 0-2.018 1.02-2.67 1.663-.651.647-1.371 1.65-2.035 1.65-.669 0-1.2-.922-1.436-1.925-.236-.998-.133-2.528.669-4.435z"
      />
      <defs>
        <linearGradient
          id="SOULS__a"
          x1="7.932"
          x2="12.283"
          y1="6.322"
          y2="16.791"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8976FF" />
          <stop offset="1" stopColor="#662D91" />
        </linearGradient>
        <linearGradient
          id="SOULS__b"
          x1="6.553"
          x2="17.64"
          y1="9.96"
          y2="15.93"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0FF" />
          <stop offset=".55" stopColor="#25DBFF" />
          <stop offset="1" stopColor="#78F" />
        </linearGradient>
        <linearGradient
          id="SOULS__c"
          x1="9.862"
          x2="15.669"
          y1="7.667"
          y2="14.173"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62FFFF" />
          <stop offset=".55" stopColor="#85E7FF" />
          <stop offset="1" stopColor="#D0F0FF" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconSOULS.displayName = 'SOULS'
