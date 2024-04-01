import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSHA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#SHA__a)"
        d="M12.187 4.748a.5.5 0 0 0-.364 0Q9.29 5.66 6.76 6.579c-.206.079-.33.251-.33.369v4.718c0 2.94.782 4.379 1.673 5.443 1.738 1.863 3.56 2.455 3.724 2.563.121.08.297.034.37 0 1.59-.698 3.015-1.77 3.692-2.563 1.339-1.57 1.684-2.976 1.684-5.443v-4.76c0-.191-.188-.298-.282-.327z"
      />
      <path
        fill="url(#SHA__b)"
        d="M12.173 5.175a.45.45 0 0 0-.336 0q-2.34.86-4.675 1.726c-.19.074-.305.237-.305.347v4.449c0 2.77.722 4.127 1.545 5.131 1.604 1.756 3.286 2.315 3.437 2.416.112.075.275.032.342 0 1.467-.658 2.783-1.667 3.408-2.416 1.236-1.48 1.554-2.805 1.554-5.131V7.209c0-.18-.174-.28-.26-.308z"
      />
      <path
        fill="url(#SHA__c)"
        d="M12.159 5.602a.4.4 0 0 0-.308 0 1498 1498 0 0 0-4.286 1.621c-.174.07-.28.222-.28.326v4.18c0 2.602.663 3.877 1.417 4.82 1.47 1.65 3.012 2.174 3.15 2.27.104.07.252.029.314 0 1.345-.62 2.55-1.567 3.124-2.27 1.133-1.391 1.424-2.636 1.424-4.82V7.512c0-.17-.158-.263-.238-.29z"
      />
      <path
        fill="url(#SHA__d)"
        d="M12.626 11.41a1.286 1.286 0 1 0-1.262-.006l-.65 2.74h2.572z"
      />
      <defs>
        <linearGradient
          id="SHA__a"
          x1="12"
          x2="12"
          y1="4.715"
          y2="19.716"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#132368" />
          <stop offset="1" stopColor="#B02CBC" />
        </linearGradient>
        <linearGradient
          id="SHA__b"
          x1="12"
          x2="12"
          y1="4.714"
          y2="19.716"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F9FB" />
          <stop offset="1" stopColor="#AF2CBB" />
        </linearGradient>
        <linearGradient
          id="SHA__c"
          x1="12"
          x2="12"
          y1="4.714"
          y2="19.716"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1B246C" />
          <stop offset=".496" stopColor="#A27DC3" />
          <stop offset="1" stopColor="#FAEFFD" />
        </linearGradient>
        <linearGradient
          id="SHA__d"
          x1="12.007"
          x2="12.007"
          y1="9.062"
          y2="14.218"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#31237B" />
          <stop offset="1" stopColor="#72259E" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconSHA.displayName = 'SHA'
