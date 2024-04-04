import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenALPHA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 4.714v5.13l.943 2.315-.943-.785v2.465l.03.03a18.4 18.4 0 0 0 5.542 4.56zm0 0v5.13l-.943 2.315.943-.785v2.465l-.03.03a18.4 18.4 0 0 1-5.541 4.56z"
          />
          <path
            fill="currentColor"
            d="M12 17.143a1.285 1.285 0 1 0 0-2.571 1.285 1.285 0 0 0 0 2.57"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ALPHA__a)"
            d="M12 4.714v5.13l.943 2.315-.943-.785v2.465l.03.03a18.4 18.4 0 0 0 5.542 4.56z"
          />
          <path
            fill="url(#ALPHA__b)"
            d="M12 4.714v5.13l-.943 2.315.943-.785v2.465l-.03.03a18.4 18.4 0 0 1-5.541 4.56z"
          />
          <path
            fill="#F5CC02"
            d="M12 17.143a1.285 1.285 0 1 0 0-2.571 1.285 1.285 0 0 0 0 2.57"
          />
          <defs>
            <linearGradient
              id="ALPHA__a"
              x1="12"
              x2="12"
              y1="4.714"
              y2="18.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F6F8" />
              <stop offset=".73" stopColor="#B6B8CB" />
            </linearGradient>
            <linearGradient
              id="ALPHA__b"
              x1="7.749"
              x2="10.527"
              y1="17.486"
              y2="5.727"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F8F8FA" />
              <stop offset="1" stopColor="#A6A8BF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenALPHA.displayName = 'ALPHA'
