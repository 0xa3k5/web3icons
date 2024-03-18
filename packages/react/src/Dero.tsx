import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconDero = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.358 8.27 6.637-3.737L18.63 8.27v7.464l-6.636 3.736-6.637-3.736z"
          />
          <path
            fill="currentColor"
            d="m7.929 9.76 4.07-2.218 4.073 2.291v4.482l-4.081 2.147-4.062-2.146z"
          />
          <path
            fill="currentColor"
            d="M9.214 10.503 12 8.91l2.786 1.593v3.042l-2.784 1.667-2.788-1.667zm2.42-5.054v.726L6.93 8.766l-.687-.341zm.722 0v.737l4.701 2.592.69-.353zm-.016 13.067v-.705l4.684-2.627.727.39zm-.706.018v-.707l-4.676-2.614-.708.351z"
          />
          <path
            fill="currentColor"
            d="m11.997 4.549-.356.904-5.398 2.981v-.683l5.752-3.206v-.003l.002.002.003-.002-.001.003 5.749 3.162-.01.717-5.379-2.97zm.005 14.888-.368-.92-5.382-2.962v.72l5.749 3.164-.001.003.003-.002 5.744-3.164v-.707l-5.407 2.94z"
          />
          <path
            fill="currentColor"
            d="m11.626 5.464.372-.921.359.903v.72l-.346-.187-.385.2zm0 13.044.375.933.34-.932-.001-.692-.367.2-.347-.2zM5.328 8.28l.923-.534v.676zm13.322-.012-.904-.56-.012.713zm.02 7.447-.923.533v-.664zm-13.35-.01.943.58v-.714z"
          />
          <path
            fill="currentColor"
            d="m5.861 8.597-.53-.319.92.14zm12.253-.007.53-.32-.913.137z"
          />
          <path
            fill="currentColor"
            d="m5.653 8.687-.325-.408.541.31zm12.663-.003.334-.416-.536.315z"
          />
          <path
            fill="currentColor"
            d="m6.233 8.416.71.349-.36.207-.155.396L6 9.018v5.985l-.673.711v-7.43l.331.396zm11.506-.006-.711.35.36.207v.387L18 8.967v6.04l.67.71-.026-7.438-.331.396z"
          />
          <path
            fill="currentColor"
            d="M6.429 9.362 6 8.997v6.006l-.666.699 1.095-.558zm11.143-.14L18 8.95v6.032l.668.735-1.096-.623z"
          />
          <path
            fill="currentColor"
            d="m7.286 9.343-.857-.48v6.299l.857-.51zm9.428-.013.858-.455v6.242l-.858-.47zm-9 .28-.428-.264v5.315l.428-.255z"
          />
          <path
            fill="currentColor"
            d="m16.286 9.713.428-.374v5.316l-.428-.25zM6.94 9.156l-.354-.206L12 5.969l5.406 2.994-.338.228L12 6.304z"
          />
          <path
            fill="currentColor"
            d="m7.715 9.636-.79-.49L12 6.283l5.065 2.908-.779.523L12 7.302zm-.003 4.759-1.088.64 5.352 2.989 5.413-3.033-1.108-.596-4.284 2.294z"
          />
          <path
            fill="currentColor"
            d="m9 10.403-.894-.559L12 7.714l3.865 2.14-.864.55L12 8.68zm-.003 3.246-.854.583 3.83 2.034 3.88-2.036-.853-.581-3.027 1.806z"
          />
          <path
            fill="currentColor"
            d="m8.143 9.857.857.546v3.262l-.857.57zm7.714 0-.856.547-.001 3.26.857.572zM12 9.134l-2.571 1.432.954.534L12 10.227l1.608.873.963-.534z"
          />
          <path
            fill="currentColor"
            d="M9.429 13.433v-2.881l.966.563h3.21l.966-.563v2.881l-1.553.921h-2.02z"
          />
          <path
            fill="currentColor"
            d="m10.286 11.094 1.723-.948 1.705.948v1.88l-.757.435.338 2.401-1.286.714-1.304-.714.374-2.401-.793-.435zm6.741 4.096.365-.203 1.277.73-.92-.123zm-10.063.029-.334-.19-1.302.673.922-.12z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="m5.358 8.27 6.637-3.737L18.63 8.27v7.464l-6.636 3.736-6.637-3.736z"
          />
          <path
            fill="#000"
            d="m7.929 9.76 4.07-2.218 4.073 2.291v4.482l-4.081 2.147-4.062-2.146z"
          />
          <path
            fill="#000"
            d="M9.214 10.503 12 8.91l2.786 1.593v3.042l-2.784 1.667-2.788-1.667z"
          />
          <path
            fill="url(#DERO__a)"
            d="M11.634 5.449v.726L6.93 8.766l-.687-.341zm.722 0v.737l4.701 2.592.69-.353z"
          />
          <path
            fill="url(#DERO__b)"
            d="M12.34 18.516v-.705l4.684-2.627.727.39zm-.706.018v-.707l-4.676-2.614-.708.351z"
          />
          <path
            fill="url(#DERO__c)"
            d="m11.997 4.549-.356.904-5.398 2.981v-.683l5.752-3.206v-.003l.002.002.003-.002-.001.003 5.749 3.162-.01.717-5.379-2.97z"
          />
          <path
            fill="url(#DERO__d)"
            d="m12.002 19.437-.368-.92-5.382-2.962v.72l5.749 3.164-.001.003.003-.002 5.744-3.164v-.707l-5.407 2.94z"
          />
          <path
            fill="#998968"
            d="m11.626 5.464.372-.921.359.903v.72l-.346-.187-.385.2z"
          />
          <path
            fill="#84E2F0"
            d="m11.626 18.508.375.933.34-.932-.001-.692-.367.2-.347-.2z"
          />
          <path fill="#69456B" d="m5.328 8.28.923-.534v.676z" />
          <path fill="#684872" d="m18.65 8.268-.904-.56-.012.713z" />
          <path fill="#617ED5" d="m18.67 15.715-.923.533v-.664z" />
          <path fill="#627ED5" d="m5.32 15.705.943.58v-.714z" />
          <path fill="#6A7384" d="m5.861 8.597-.53-.319.92.14z" />
          <path fill="#916790" d="m18.114 8.59.53-.32-.913.137z" />
          <path fill="#89618B" d="m5.653 8.687-.325-.408.541.31z" />
          <path fill="#554766" d="m18.316 8.684.334-.416-.536.315z" />
          <path
            fill="#484669"
            d="m6.233 8.416.71.349-.36.207-.155.396L6 9.018v5.985l-.673.711v-7.43l.331.396z"
          />
          <path
            fill="#4D4868"
            d="m17.739 8.41-.711.35.36.207v.387L18 8.967v6.04l.67.71-.026-7.438-.331.396z"
          />
          <path
            fill="#373752"
            d="M6.429 9.362 6 8.997v6.006l-.666.699 1.095-.558z"
          />
          <path
            fill="#3C374D"
            d="M17.572 9.222 18 8.95v6.032l.668.735-1.096-.623z"
          />
          <path
            fill="url(#DERO__e)"
            d="m7.286 9.343-.857-.48v6.299l.857-.51z"
          />
          <path
            fill="url(#DERO__f)"
            d="m16.714 9.33.858-.455v6.242l-.858-.47z"
          />
          <path fill="#7474D5" d="m7.714 9.61-.428-.264v5.315l.428-.255z" />
          <path
            fill="url(#DERO__g)"
            d="m16.286 9.713.428-.374v5.316l-.428-.25z"
          />
          <path
            fill="#F1B8C7"
            d="m6.94 9.156-.354-.206L12 5.969l5.406 2.994-.338.228L12 6.304z"
          />
          <path
            fill="#EC68F2"
            d="m7.715 9.636-.79-.49L12 6.283l5.065 2.908-.779.523L12 7.302z"
          />
          <path
            fill="url(#DERO__h)"
            d="m7.712 14.395-1.088.64 5.352 2.989 5.413-3.033-1.108-.596-4.284 2.294z"
          />
          <path
            fill="url(#DERO__i)"
            d="m9 10.403-.894-.559L12 7.714l3.865 2.14-.864.55L12 8.68z"
          />
          <path
            fill="url(#DERO__j)"
            d="m8.997 13.649-.854.583 3.83 2.034 3.88-2.036-.853-.581-3.027 1.806z"
          />
          <path
            fill="url(#DERO__k)"
            d="m8.143 9.857.857.546v3.262l-.857.57zm7.714 0-.856.547-.001 3.26.857.572z"
          />
          <path
            fill="#B3BED9"
            d="m12 9.134-2.571 1.432.954.534L12 10.227l1.608.873.963-.534z"
          />
          <path
            fill="#5D6675"
            d="M9.429 13.433v-2.881l.966.563h3.21l.966-.563v2.881l-1.553.921h-2.02z"
          />
          <path
            fill="#000"
            d="m10.286 11.094 1.723-.948 1.705.948v1.88l-.757.435.338 2.401-1.286.714-1.304-.714.374-2.401-.793-.435z"
          />
          <path fill="#5C75B4" d="m17.027 15.19.365-.203 1.277.73-.92-.123z" />
          <path fill="#5673B4" d="m6.964 15.219-.334-.19-1.302.673.922-.12z" />
          <defs>
            <linearGradient
              id="DERO__a"
              x1="18.395"
              x2="5.778"
              y1="17.815"
              y2="17.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#56375D" />
              <stop offset=".5" stopColor="#887562" />
              <stop offset="1" stopColor="#56375D" />
            </linearGradient>
            <linearGradient
              id="DERO__b"
              x1="5.573"
              x2="18.54"
              y1="5.81"
              y2="5.81"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5169A6" />
              <stop offset=".493" stopColor="#6DBAC2" />
              <stop offset="1" stopColor="#5169A6" />
            </linearGradient>
            <linearGradient
              id="DERO__c"
              x1="18.67"
              x2="5.482"
              y1="16.846"
              y2="16.864"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#67496B" />
              <stop offset=".513" stopColor="#9F8B6C" />
              <stop offset="1" stopColor="#67496B" />
            </linearGradient>
            <linearGradient
              id="DERO__d"
              x1="5.32"
              x2="18.67"
              y1="6.258"
              y2="6.281"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#617BD5" />
              <stop offset=".494" stopColor="#7FE0E1" />
              <stop offset="1" stopColor="#617BD5" />
            </linearGradient>
            <linearGradient
              id="DERO__e"
              x1="11.995"
              x2="11.995"
              y1="4.792"
              y2="19.129"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9466BC" />
              <stop offset=".466" stopColor="#6564C1" />
              <stop offset="1" stopColor="#6B81D3" />
            </linearGradient>
            <linearGradient
              id="DERO__f"
              x1="11.995"
              x2="11.995"
              y1="4.749"
              y2="19.218"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7337A4" />
              <stop offset=".471" stopColor="#3B39B8" />
              <stop offset="1" stopColor="#375FB2" />
            </linearGradient>
            <linearGradient
              id="DERO__g"
              x1="11.995"
              x2="11.995"
              y1="4.533"
              y2="19.469"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6A37A7" />
              <stop offset=".504" stopColor="#3A3BB7" />
              <stop offset="1" stopColor="#375AB2" />
            </linearGradient>
            <linearGradient
              id="DERO__h"
              x1="18.183"
              x2="5.936"
              y1="6.031"
              y2="6.047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#887AF6" />
              <stop offset=".509" stopColor="#96A7D5" />
              <stop offset="1" stopColor="#887AF6" />
            </linearGradient>
            <linearGradient
              id="DERO__i"
              x1="5.968"
              x2="18.273"
              y1="17.222"
              y2="17.222"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2B313A" />
              <stop offset=".491" stopColor="#4B505E" />
              <stop offset="1" stopColor="#2B313A" />
            </linearGradient>
            <linearGradient
              id="DERO__j"
              x1="12.01"
              x2="12.01"
              y1="19.982"
              y2="4.639"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5A6271" />
              <stop offset="1" stopColor="#798194" />
            </linearGradient>
            <linearGradient
              id="DERO__k"
              x1="5.257"
              x2="18.754"
              y1="12.002"
              y2="12.002"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset=".127" stopColor="#282E36" />
              <stop offset=".872" stopColor="#282E36" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDero.displayName = 'Dero'

export default IconDero
