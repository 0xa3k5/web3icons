import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLit = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m19.714 12.32-1.028-.92-1.225 1.417c-.162.134-.65.378-1.306.284s-1.012.118-1.109.236l-4.06 4.567 1.014.953c1.429-1.602 4.375-4.917 4.698-5.248.405-.414.763-.177 1.34-.107.463.057.717-.086.787-.165zm-9.96 4.408-1.005-.921 3.085-3.463c.358-.401.855-.106 1.41-.106.443 0 .816-.228.947-.343l2.311-2.563.994.933q-.923 1.04-1.849 2.08c-.381.425-.855.236-1.352.118-.397-.095-.782.15-.924.283zm2.257-11.585L7.55 10.138c-.282.316-1.052.297-1.523.198-.378-.08-.698.156-.81.284l-.931 1.026 1.027.928c.42-.507 1.33-1.575 1.62-1.793.363-.272.92-.16 1.258 0 .27.128.62-.054.761-.16l4.099-4.526zM7.54 14.679l-1.007-.95a181 181 0 0 1 2.037-2.276c.361-.382 1.014-.144 1.493-.155.383-.008.733-.253.861-.373l3.347-3.683.988.968c-.857.91-2.632 2.816-2.88 3.162a.79.79 0 0 1-.777.332 44 44 0 0 1-.678-.159c-.384-.092-.734.154-.862.289z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#LIT__a)"
            d="m19.715 12.32-1.029-.92-1.224 1.417c-.162.134-.65.378-1.306.284s-1.013.118-1.11.236l-4.06 4.567 1.014.953c1.43-1.602 4.375-4.917 4.699-5.248.404-.414.763-.177 1.34-.107.462.057.717-.086.786-.165z"
          />
          <path
            fill="url(#LIT__b)"
            d="m9.755 16.728-1.006-.921 3.086-3.463c.358-.401.855-.106 1.41-.106.443 0 .816-.228.946-.343l2.312-2.563.993.933q-.922 1.04-1.848 2.08c-.382.425-.855.236-1.352.118-.398-.095-.782.15-.925.283z"
          />
          <path
            fill="url(#LIT__c)"
            d="M12.012 5.143 7.55 10.138c-.282.316-1.052.297-1.523.198-.377-.08-.697.156-.81.284l-.93 1.026 1.027.928c.419-.507 1.33-1.575 1.62-1.793.362-.272.919-.16 1.257 0 .271.128.62-.054.762-.16l4.098-4.526z"
          />
          <path
            fill="url(#LIT__d)"
            d="m7.54 14.679-1.006-.95a181 181 0 0 1 2.036-2.276c.362-.382 1.015-.144 1.493-.155.383-.008.734-.253.862-.373l3.346-3.683.988.968c-.856.91-2.632 2.816-2.88 3.162a.79.79 0 0 1-.777.332 43 43 0 0 1-.678-.159c-.384-.092-.734.154-.861.289z"
          />
          <defs>
            <linearGradient
              id="LIT__a"
              x1="18.128"
              x2="7.267"
              y1="7.24"
              y2="18.138"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".205" stopColor="#00C967" />
              <stop offset=".325" stopColor="#15E882" />
              <stop offset="1" stopColor="#16EA84" />
            </linearGradient>
            <linearGradient
              id="LIT__b"
              x1="17.131"
              x2="6.614"
              y1="8.6"
              y2="18.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".232" stopColor="#00C969" />
              <stop offset=".416" stopColor="#09F183" />
            </linearGradient>
            <linearGradient
              id="LIT__c"
              x1="14.904"
              x2="9.401"
              y1="14.342"
              y2="19.941"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1BC775" />
              <stop offset=".715" stopColor="#0DD976" />
            </linearGradient>
            <linearGradient
              id="LIT__d"
              x1="13.774"
              x2="7.958"
              y1="9.1"
              y2="14.694"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".401" stopColor="#1BD27F" />
              <stop offset=".609" stopColor="#2FE18B" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconLit.displayName = 'Lit'

export default IconLit
