import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconMEX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6.017 8.7.859-.555.806.555-.806.49zm-1.457.808-.858.556.859.49.806-.49zm-1.131.778v4.017l3.428 1.983V12.32zm3.447-.778-.859.556.859.49.806-.49zm-.859 1.92.859-.557.806.556-.806.49zm-.313-1.234-.858.556.859.49.806-.49zm1.459.556.858-.556.807.556-.806.49zM9.19 9.508l-.859.556.859.49.806-.49zm1.096 5.063v-4.285h.857l1.285 2.844 1.286-2.844h3v.857h-2.152V12h2.152v.857h-2.152v.857h2.152v.589l1.336-1.96-1.333-2.057h1.043l.821 1.28.783-1.28h1.12l-1.352 2.057 1.44 2.228h-1.083l-.908-1.441-.899 1.441h-3.968v-2.228l-.857 2.228H12l-.857-2.228v2.228z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MEX__a)"
            d="m6.017 8.7.859-.555.806.555-.806.49zm-1.457.808-.858.556.859.49.806-.49zm-1.131.778v4.017l3.428 1.983V12.32zm3.447-.778-.859.556.859.49.806-.49zm-.859 1.92.859-.557.806.556-.806.49zm-.313-1.234-.858.556.859.49.806-.49zm1.459.556.858-.556.807.556-.806.49zM9.19 9.508l-.859.556.859.49.806-.49z"
          />
          <path
            fill="url(#MEX__b)"
            d="M10.286 14.571v-4.285h.857l1.286 2.844 1.286-2.844h3v.857h-2.153V12h2.153v.857h-2.153v.857h2.153v.589l1.335-1.96-1.333-2.057h1.043l.822 1.28.782-1.28h1.12l-1.352 2.057 1.44 2.228H19.49l-.908-1.441-.9 1.441h-3.967v-2.228l-.857 2.228H12l-.857-2.228v2.228z"
          />
          <defs>
            <linearGradient
              id="MEX__a"
              x1="6.713"
              x2="6.713"
              y1="8.145"
              y2="16.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#213973" />
              <stop offset="1" stopColor="#02094B" />
            </linearGradient>
            <linearGradient
              id="MEX__b"
              x1="15.429"
              x2="15.429"
              y1="10.286"
              y2="14.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#213973" />
              <stop offset="1" stopColor="#02094B" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMEX.displayName = 'MEX'
