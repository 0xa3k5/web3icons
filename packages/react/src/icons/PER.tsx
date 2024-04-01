import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPER = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#PER__a)"
        d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
      />
      <path
        fill="url(#PER__b)"
        d="m5.19 11.186-.022.24C6.188 10.556 8.743 9 11.507 9c2.241 0 3.527 1.286 3.887 1.946l-.36 2.837-4.024 2.22-.296.227V11.1a.808.808 0 0 0-1.616 0v7.115c.51.235 1.05.41 1.616.514v-1.415c2.083-.274 5.571-1.52 5.571-4.958 0-1.307-.968-2.722-1.482-3.262l-2.7-.784-3.039.459-2.34 1.204z"
      />
      <path
        fill="url(#PER__c)"
        d="m5.203 11.019-.026.214c1.478-1.406 4.226-2.451 6.244-2.451C13.5 8.782 15 10.024 15 11.55c0 2.237-3.305 3.3-4.715 3.502v-3.909a.857.857 0 1 0-1.714 0v8.143a.857.857 0 1 0 1.714 0v-2.58c5.4-1.277 6-4.106 6-4.967 0-.857-.638-3.596-4.594-3.596-2.863 0-5.336 1.749-6.488 2.876"
      />
      <defs>
        <linearGradient
          id="PER__a"
          x1="17.275"
          x2="5.265"
          y1="8.134"
          y2="14.857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD2307" />
          <stop offset="1" stopColor="#FDB106" />
        </linearGradient>
        <linearGradient
          id="PER__b"
          x1="16.594"
          x2="10.026"
          y1="5.89"
          y2="19.068"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E67F5E" />
          <stop offset="1" stopColor="#FCC252" />
        </linearGradient>
        <linearGradient
          id="PER__c"
          x1="10.152"
          x2="9.184"
          y1="17.602"
          y2="19.924"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEFEFC" />
          <stop offset="1" stopColor="#FFC125" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconPER.displayName = 'PER'
