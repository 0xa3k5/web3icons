import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconPhonon = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m16.003 9.682.711 3.107 1.102-2.25-.673-2.765zM6.21 13.384l.647 3.258 1.084-2.499-.655-2.94-1.076 2.186zm3.218 4.128.755-.065.531-2.322V8.631l-1.286 2.85zm3.858-1.715.754-.557.531-2.314V6.489l-1.285 2.785z"
          />
          <path
            fill="currentColor"
            d="M9.429 17.512c.985.244 2.005-.292 2.27-1.2l2.872-9.823c-.985-.245-2.005.291-2.271 1.2zM8.9 15.463a1.67 1.67 0 0 1-2.044 1.191L8.67 9.823a1.67 1.67 0 0 1 2.044-1.191zm6.429-.857a1.67 1.67 0 0 1-2.044 1.191l1.813-6.831a1.67 1.67 0 0 1 2.044-1.192zm3.514-2.957c-.244.87-1.2 1.384-2.13 1.153l.866-3.022c.248-.87 1.204-1.384 2.134-1.153l-.865 3.022zM4.286 15.373c.93.231 1.885-.283 2.134-1.153l.866-3.021c-.93-.232-1.886.283-2.135 1.153z"
          />
        </>
      ) : (
        <>
          <path
            fill="#4D4D4D"
            d="m16.003 9.682.712 3.107 1.101-2.25-.673-2.765zM6.21 13.384l.648 3.258 1.084-2.499-.656-2.94-1.076 2.186zm3.219 4.128.754-.065.532-2.322V8.631l-1.286 2.85zm3.857-1.715.754-.557.532-2.314V6.489l-1.286 2.785z"
          />
          <path
            fill="url(#PHONON__a)"
            d="M9.429 17.512c.986.244 2.006-.292 2.271-1.2l2.872-9.823c-.986-.245-2.006.291-2.272 1.2zm-.527-2.049a1.67 1.67 0 0 1-2.044 1.191L8.67 9.823a1.67 1.67 0 0 1 2.045-1.191zm6.428-.857a1.67 1.67 0 0 1-2.044 1.191L15.1 8.966a1.67 1.67 0 0 1 2.044-1.192zm3.515-2.957c-.245.87-1.2 1.384-2.13 1.153l.865-3.022c.249-.87 1.205-1.384 2.135-1.153l-.866 3.022zM4.286 15.373c.93.231 1.886-.283 2.134-1.153l.866-3.021c-.93-.232-1.886.283-2.134 1.153z"
          />
          <defs>
            <linearGradient
              id="PHONON__a"
              x1="4.278"
              x2="19.715"
              y1="8.734"
              y2="8.734"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F8A8FD" />
              <stop offset="1" stopColor="#00E2B0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPhonon.displayName = 'Phonon'

export default IconPhonon