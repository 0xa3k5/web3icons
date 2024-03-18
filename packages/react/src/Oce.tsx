import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconOce = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.07 5.271a4.13 4.13 0 0 0-4.14 0L7.213 6.84a4.14 4.14 0 0 0-2.07 3.587v.142A3.77 3.77 0 0 1 7.03 7.307l2.473-1.431a3.76 3.76 0 0 1 3.762 0l2.478 1.431a3.72 3.72 0 0 1 1.83 3.262v2.862a3.72 3.72 0 0 1-1.83 3.262l-2.478 1.431a3.76 3.76 0 0 1-3.762 0l-2.478-1.431a3.77 3.77 0 0 1-1.88-3.262v.142a4.14 4.14 0 0 0 2.07 3.587l2.716 1.573a4.13 4.13 0 0 0 4.14 0l2.717-1.573a4.14 4.14 0 0 0 2.07-3.587v-3.146a4.14 4.14 0 0 0-2.07-3.587L14.07 5.267zM9.81 6.514a3.22 3.22 0 0 1 3.292 0L15.266 7.8a3.36 3.36 0 0 1 1.53 2.031 3 3 0 0 0-1.341-1.568l-2.006-1.14a3.1 3.1 0 0 0-3.056 0l-2.01 1.14a2.99 2.99 0 0 0-1.526 2.597v2.28c0 1.071.583 2.061 1.526 2.597l2.01 1.14a3.1 3.1 0 0 0 3.056 0l2.005-1.14a3 3 0 0 0 1.342-1.564 3.36 3.36 0 0 1-1.53 2.027l-2.164 1.286a3.22 3.22 0 0 1-3.292 0L7.646 16.2A3.39 3.39 0 0 1 6 13.286v-2.572a3.39 3.39 0 0 1 1.646-2.918L9.81 6.51zm2.863 1.744a2.45 2.45 0 0 0-2.379 0l-1.568.875a2.3 2.3 0 0 0-1.084 1.316 2.66 2.66 0 0 1 1.26-1.77l1.727-1.012a2.6 2.6 0 0 1 2.631 0l1.727 1.011a2.66 2.66 0 0 1 1.299 2.31v2.023a2.66 2.66 0 0 1-1.299 2.31l-1.727 1.012a2.6 2.6 0 0 1-2.631 0L8.902 15.32a2.66 2.66 0 0 1-1.26-1.774c.18.562.567 1.034 1.084 1.32l1.568.874a2.45 2.45 0 0 0 2.38 0l1.563-.874a2.29 2.29 0 0 0 1.192-1.993v-1.748c0-.823-.454-1.586-1.192-1.993z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#OCE__a)"
            d="M14.07 5.271a4.13 4.13 0 0 0-4.14 0L7.213 6.84a4.14 4.14 0 0 0-2.07 3.587v.142a3.77 3.77 0 0 1 1.885-3.262l2.473-1.431a3.76 3.76 0 0 1 3.763 0l2.477 1.431a3.72 3.72 0 0 1 1.83 3.262v2.862a3.72 3.72 0 0 1-1.83 3.262l-2.477 1.431a3.76 3.76 0 0 1-3.763 0l-2.477-1.431a3.77 3.77 0 0 1-1.881-3.262v.142a4.14 4.14 0 0 0 2.07 3.587l2.717 1.573a4.13 4.13 0 0 0 4.14 0l2.717-1.573a4.14 4.14 0 0 0 2.07-3.587v-3.146a4.14 4.14 0 0 0-2.07-3.587L14.07 5.267zM9.81 6.514a3.22 3.22 0 0 1 3.291 0L15.265 7.8a3.36 3.36 0 0 1 1.53 2.031 3 3 0 0 0-1.341-1.568l-2.006-1.14a3.1 3.1 0 0 0-3.055 0l-2.01 1.14a2.99 2.99 0 0 0-1.526 2.597v2.28c0 1.071.583 2.061 1.526 2.597l2.01 1.14a3.1 3.1 0 0 0 3.055 0l2.006-1.14a3 3 0 0 0 1.341-1.564 3.36 3.36 0 0 1-1.53 2.027l-2.164 1.286a3.22 3.22 0 0 1-3.291 0L7.645 16.2A3.39 3.39 0 0 1 6 13.286v-2.572a3.39 3.39 0 0 1 1.645-2.918L9.81 6.51zm2.863 1.744a2.45 2.45 0 0 0-2.379 0l-1.569.875a2.3 2.3 0 0 0-1.084 1.316 2.66 2.66 0 0 1 1.26-1.77l1.727-1.012a2.6 2.6 0 0 1 2.632 0l1.727 1.011a2.66 2.66 0 0 1 1.298 2.31v2.023a2.66 2.66 0 0 1-1.298 2.31l-1.727 1.012a2.6 2.6 0 0 1-2.632 0L8.901 15.32a2.66 2.66 0 0 1-1.26-1.774c.18.562.568 1.034 1.084 1.32l1.569.874a2.45 2.45 0 0 0 2.379 0l1.564-.874a2.29 2.29 0 0 0 1.191-1.993v-1.748c0-.823-.454-1.586-1.191-1.993z"
          />
          <defs>
            <linearGradient
              id="OCE__a"
              x1="17.935"
              x2="6.578"
              y1="6.921"
              y2="18.93"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B06DA7" />
              <stop offset=".51" stopColor="#A5A5D1" />
              <stop offset=".73" stopColor="#92D1F4" />
              <stop offset=".84" stopColor="#4E9DD7" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconOce.displayName = 'Oce'

export default IconOce
