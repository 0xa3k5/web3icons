import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCgpt = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#CGPT__a)"
        d="m5.571 16.526 1.286-.883V8.357l1.5-1.5h7.457l1.329 1.5.805-.484a.242.242 0 0 0 .043-.373L16.2 5.64a.23.23 0 0 0-.163-.068H7.731a.23.23 0 0 0-.163.068L5.64 7.646a.24.24 0 0 0-.069.167z"
      />
      <path
        fill="#E1E7CD"
        d="m8.357 6.857-1.5 1.5v7.316l1.5 1.47h7.286l1.5-1.5V8.327l-1.286-1.47z"
      />
      <path
        fill="url(#CGPT__b)"
        d="M18.197 11.76h-1.054v3.814l-1.5 1.569H8.357l-1.5-1.5-1.286.883 1.77 1.834a.23.23 0 0 0 .163.069h8.533c.06 0 .12-.026.163-.069l2.16-2.241a.25.25 0 0 0 .068-.172V12a.24.24 0 0 0-.231-.24"
      />
      <path
        fill="#1A1A24"
        d="M10.286 13.714a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714m3.428 0a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
      />
      <defs>
        <linearGradient
          id="CGPT__a"
          x1="17.864"
          x2="4.945"
          y1="6.97"
          y2="15.218"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#684BFD" />
          <stop offset=".28" stopColor="#4663E9" />
          <stop offset=".52" stopColor="#4380E8" />
          <stop offset=".84" stopColor="#17DAC6" />
          <stop offset="1" stopColor="#18D6C9" />
        </linearGradient>
        <linearGradient
          id="CGPT__b"
          x1="17.97"
          x2="5.198"
          y1="6.034"
          y2="9.296"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F17165" />
          <stop offset=".25" stopColor="#F19C5C" />
          <stop offset=".47" stopColor="#E9BE4D" />
          <stop offset="1" stopColor="#E7C653" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconCgpt.displayName = 'Cgpt'

export default IconCgpt
