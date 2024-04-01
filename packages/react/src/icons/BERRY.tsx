import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconBERRY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.087 17.998c-1.934-.098-3.457-1.606-3.457-3.416a.4.4 0 0 1 .178-.309c.662-.38 1.095-1.044 1.095-1.827 0-1.188-1.019-2.16-2.292-2.16h-2.215c-.534 0-.967.403-.967.925V18h-2.42a1.866 1.866 0 0 1-1.866-1.864V9.482c0-.63.315-1.21.824-1.548l4.992-3.34a1.91 1.91 0 0 1 2.084 0l4.991 3.34a1.86 1.86 0 0 1 .823 1.548v6.63a1.87 1.87 0 0 1-1.77 1.886"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#BERRY__a)"
            d="M17.087 17.998c-1.934-.098-3.458-1.606-3.458-3.416a.4.4 0 0 1 .178-.309c.662-.38 1.095-1.044 1.095-1.827 0-1.188-1.018-2.16-2.291-2.16h-2.215c-.535 0-.968.403-.968.925V18h-2.42a1.866 1.866 0 0 1-1.865-1.864V9.482c0-.63.315-1.21.823-1.548l4.992-3.34a1.91 1.91 0 0 1 2.084 0l4.992 3.34a1.86 1.86 0 0 1 .823 1.548v6.63c0 1.01-.774 1.836-1.77 1.886"
          />
          <defs>
            <linearGradient
              id="BERRY__a"
              x1="9.399"
              x2="14.2"
              y1="4.767"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#28D0FA" />
              <stop offset="1" stopColor="#635BD7" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBERRY.displayName = 'BERRY'
