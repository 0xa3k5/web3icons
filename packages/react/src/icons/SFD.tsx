import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSFD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#SFD__a)"
        d="M11.571 3.857 10.53 5.293v.48c-1.372.385-4 1.757-5.143 2.395 0 1.342.488 4.71.737 6.228l-.249.24-.732 1.67 2.202-1.43c-.587-1.535-.57-4.792-.488-6.228 1.174-.96 3.651-1.68 4.714-1.915z"
      />
      <path
        fill="url(#SFD__b)"
        d="m12.428 3.857 1.042 1.436v.48c1.371.385 3.998 1.757 5.143 2.395 0 1.342-.489 4.71-.738 6.228l.249.24.733 1.67-2.203-1.43c.587-1.535.57-4.792.489-6.228-1.175-.96-3.652-1.68-4.715-1.915z"
      />
      <path
        fill="url(#SFD__c)"
        d="m7.838 15.591-2.451 1.44 1.958.236.245-.236c.981 1.526 3.347 2.713 4.41 3.112 2.353-.96 3.917-2.473 4.41-3.112l.244.236 1.959-.236-2.452-1.44c-.78 1.727-3.098 2.957-4.161 3.356-2.156-.579-3.673-2.477-4.162-3.356"
      />
      <path
        fill="#303435"
        d="M12.051 6.428c-1.834 0-4.581.973-5.344 1.95C5.28 15.398 9.62 18.501 12 19.071c5.597-1.461 5.901-7.281 5.395-10.693-1.024-1.221-3.514-1.95-5.344-1.95"
      />
      <path
        fill="#CACAD4"
        d="M10.714 10.316c.583-.19.776-.236.857-.236V7.286c-1.358.184-3.313 1.165-4.123 1.628-.385.934 0 3.343.245 4.427.582-.373 2.292-.93 3.021-1.165v3.728c-.969-.188-1.809-1.629-2.053-2.331l-.968.471c.582 2.417 2.828 3.643 3.878 3.956v-7.222c-1.166 0-2.516.557-3 .793V9.857l2.143-.943z"
      />
      <path
        fill="#949398"
        d="M12.428 7.286V18c.995-.386 3.129-1.676 3.729-3.729a16.5 16.5 0 0 0 .497-5.357 8.7 8.7 0 0 0-4.226-1.628m.857 1.285v7.714c.956-.6 2.803-2.828 2.546-6.942-.527-.258-1.783-.772-2.546-.772"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="SFD__a"
          x1="11.936"
          x2="11.936"
          y1="3.857"
          y2="20.148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1BA9D1" />
          <stop offset="1" stopColor="#126DB0" />
        </linearGradient>
        <linearGradient
          id="SFD__b"
          x1="12.064"
          x2="12.064"
          y1="3.857"
          y2="20.148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1AA3CB" />
          <stop offset="1" stopColor="#126DB1" />
        </linearGradient>
        <linearGradient
          id="SFD__c"
          x1="12"
          x2="12"
          y1="3.857"
          y2="20.143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1868A7" />
          <stop offset="1" stopColor="#0E59AB" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconSFD.displayName = 'SFD'
