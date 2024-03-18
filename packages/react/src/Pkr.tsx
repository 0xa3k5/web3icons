import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconPkr = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#PKR__a)"
        d="M12.008 18.57c3.645 0 6.6-2.95 6.6-6.591a6.596 6.596 0 0 0-6.6-6.592 6.596 6.596 0 0 0-6.6 6.592 6.596 6.596 0 0 0 6.6 6.591"
      />
      <path
        fill="url(#PKR__b)"
        d="m15.745 6.506.112-.18a6.9 6.9 0 0 1 2.186 2.413l-.189.094a6.7 6.7 0 0 0-2.109-2.327m2.898 5.889h.214a6.8 6.8 0 0 1-1.016 3.214l-.218-.047a6.6 6.6 0 0 0 1.02-3.172zm-3.686 5.558.098.193a6.84 6.84 0 0 1-3.034.711v-.214a6.64 6.64 0 0 0 2.94-.686zm-6.454-.304-.12.175a6.9 6.9 0 0 1-2.216-2.22l.171-.128a6.7 6.7 0 0 0 2.165 2.173m-3.146-5.735h-.214a6.84 6.84 0 0 1 .788-3.11l.202.076a6.6 6.6 0 0 0-.776 3.034M12 5.145h.047v.213h-.043c-1.174 0-2.271.3-3.227.828l-.086-.193a6.84 6.84 0 0 1 3.313-.849zM18.437 12a6.433 6.433 0 1 1-12.866.004 6.433 6.433 0 0 1 12.866-.008zm.214 0a6.64 6.64 0 0 1-4.105 6.14 6.647 6.647 0 0 1-9.19-6.144 6.647 6.647 0 0 1 13.295 0z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="url(#PKR__c)"
        d="M12.141 6.322c-.004.394-.278 1.354-1.367 2.34L9.66 9.682c-.707.651-1.329 1.221-1.629 1.461h1.886l.068.009c.3.03.806.085.806.467V12H7.345l-.055.086c-.15.231-.433.673-.433 1.144 0 .677.814 2.199 2.451 2.199 1.307 0 2.336-.699 2.683-.965.467.343 1.693.965 2.902.965 1.512 0 2.25-.874 2.25-1.903a2.24 2.24 0 0 0-.54-1.492c.017.163-.095.566-.686.888l.248 1.221H15l-.176-1.084-.296 1.084h-1.14l.412-1.933h1.825V12h-1.778l.18-.857h1.98s-2.049-1.736-2.619-2.374c-.565-.63-1.238-1.5-1.251-2.443zm-1.131 4.821-.176.857h1.183l.137-.857zm-.622 3h1.136l.283-1.041.347 1.041h1.191l-.462-1.581.27-.36h-2.409zM12.128 12l.703-.857h1.144l-.664.857zm-2.55 4.715c.755-.086 2.173-.63 2.422-2.143a2.56 2.56 0 0 0 2.421 2.143zm-2.027-2.572h1.157l.206-1.054h.561c.292-.026.9-.172 1.02-.562l.086-.3H7.907z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="PKR__a"
          x1="8.184"
          x2="15.764"
          y1="7.368"
          y2="15.976"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFCF8" />
          <stop offset="1" stopColor="#575757" />
        </linearGradient>
        <linearGradient
          id="PKR__b"
          x1="8.348"
          x2="16.928"
          y1="6.982"
          y2="16.663"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB18AD" />
          <stop offset=".47" stopColor="#E20C7B" />
          <stop offset="1" stopColor="#1D010D" />
        </linearGradient>
        <linearGradient
          id="PKR__c"
          x1="8.94"
          x2="14.782"
          y1="9.523"
          y2="14.571"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF14A4" />
          <stop offset="1" stopColor="#1C000C" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconPkr.displayName = 'Pkr'

export default IconPkr
