import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBlank = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#BLANK__a)"
        d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714M9 8.143l6.857 1.928-1.072 6-6.857-1.928z"
      />
      <path
        fill="url(#BLANK__b)"
        d="M12 5.143a6.84 6.84 0 0 0-3.129.754 6.857 6.857 0 0 0 7.552 11.344A6.857 6.857 0 0 0 12 5.143M9.428 7.286l7.286 2.143-1.071 6.214-7.286-1.929z"
      />
      <defs>
        <linearGradient
          id="BLANK__a"
          x1="7.714"
          x2="14.143"
          y1="6.857"
          y2="18.429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#337C01" />
          <stop offset=".21" stopColor="#2B6F04" />
          <stop offset=".39" stopColor="#62E700" />
          <stop offset=".53" stopColor="#66E604" />
          <stop offset=".77" stopColor="#142417" />
          <stop offset="1" stopColor="#406925" />
        </linearGradient>
        <linearGradient
          id="BLANK__b"
          x1="16.928"
          x2="7.928"
          y1="7.286"
          y2="15.857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C601" />
          <stop offset="1" stopColor="#C7FE02" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconBlank.displayName = 'Blank'

export default IconBlank
