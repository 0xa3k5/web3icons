import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCly = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#CLY__a)"
        d="M12 4.714a7.269 7.269 0 1 0 0 14.533 7.27 7.27 0 0 0 7.445-7.266A7.27 7.27 0 0 0 12 4.714m0 11.143c-2.143 0-3.857-1.68-3.857-3.857 0-2.143 1.671-3.857 3.857-3.857 2.143 0 3.857 1.68 3.857 3.857A3.84 3.84 0 0 1 12 15.857"
      />
      <path
        fill="url(#CLY__b)"
        d="M19.286 11.983v-.112a7.22 7.22 0 0 0-1.702-4.538 7.1 7.1 0 0 0-1.701 4.65 7.1 7.1 0 0 0 1.701 4.645 7.3 7.3 0 0 0 1.702-4.534z"
      />
      <path
        fill="url(#CLY__c)"
        d="M6.415 7.333a7.22 7.22 0 0 0-1.701 4.538v.223a7.22 7.22 0 0 0 1.701 4.534 7.1 7.1 0 0 0 1.702-4.645c0-1.77-.665-3.395-1.702-4.65"
      />
      <path
        fill="url(#CLY__d)"
        d="M16.659 6.412a7.26 7.26 0 0 0-4.547-1.698h-.223a7.26 7.26 0 0 0-4.547 1.697A7.15 7.15 0 0 0 12 8.11a7.57 7.57 0 0 0 4.659-1.697"
      />
      <path
        fill="url(#CLY__e)"
        d="M7.342 17.589A7.35 7.35 0 0 0 12 19.286a7.14 7.14 0 0 0 4.659-1.698A7.35 7.35 0 0 0 12 15.892a7.14 7.14 0 0 0-4.658 1.697"
      />
      <path
        fill="url(#CLY__f)"
        d="M12 13.714a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428"
      />
      <defs>
        <linearGradient
          id="CLY__a"
          x1="8.691"
          x2="15.103"
          y1=".184"
          y2="23.164"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".14" stopColor="#FF78F1" />
          <stop offset=".3" stopColor="#C199F2" />
          <stop offset=".49" stopColor="#7DBDF4" />
          <stop offset=".66" stopColor="#47D9F5" />
          <stop offset=".81" stopColor="#20EEF6" />
        </linearGradient>
        <linearGradient
          id="CLY__b"
          x1="17.597"
          x2="17.597"
          y1="7.303"
          y2="16.646"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8172E8" />
          <stop offset="1" stopColor="#00C4EF" />
        </linearGradient>
        <linearGradient
          id="CLY__c"
          x1="6.407"
          x2="6.407"
          y1="7.35"
          y2="16.243"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8172E8" />
          <stop offset="1" stopColor="#00C4EF" />
        </linearGradient>
        <linearGradient
          id="CLY__d"
          x1="16.479"
          x2="9.305"
          y1="6.403"
          y2="6.403"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#008DEB" />
          <stop offset="1" stopColor="#956DE7" />
        </linearGradient>
        <linearGradient
          id="CLY__e"
          x1="7.342"
          x2="16.659"
          y1="17.571"
          y2="17.571"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#009BEC" />
          <stop offset="1" stopColor="#00CAEF" />
        </linearGradient>
        <linearGradient
          id="CLY__f"
          x1="12"
          x2="12"
          y1="15.806"
          y2="10.924"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF78F1" />
          <stop offset="1" stopColor="#00FFF7" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconCly.displayName = 'Cly'

export default IconCly
