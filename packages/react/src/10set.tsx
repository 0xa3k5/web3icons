import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const Icon10set = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.572 11.769s.428-.395.428-.673a.47.47 0 0 0-.141-.335l-2.52-2.48a.484.484 0 0 0-.677 0l-2.52 2.48a.46.46 0 0 0-.142.33c0 .283.429.678.429.678v4.324s-.429.39-.429.673c0 .124.052.244.142.33l2.52 2.481a.484.484 0 0 0 .677 0l2.52-2.481a.46.46 0 0 0 .141-.33c0-.283-.428-.673-.428-.673zm-1.715 3.99a.47.47 0 0 1-.141.334l-.716.793-.716-.793a.47.47 0 0 1-.141-.334v-3.656c0-.129.051-.244.141-.334l.716-.793.716.793c.09.085.141.21.141.334z"
          />
          <path
            fill="currentColor"
            d="m17.434 7.427-2.262-2.155a.5.5 0 0 0-.335-.133c-.325 0-.385.068-.625.3a.5.5 0 0 1-.335.128h-3.754a.5.5 0 0 1-.334-.128c-.24-.232-.3-.3-.626-.3a.5.5 0 0 0-.334.128L6.566 7.423a.45.45 0 0 0-.137.317c0 .12.051.232.137.317l.771.806a.484.484 0 0 0 .669 0L9.9 6.986a.5.5 0 0 1 .334-.133h3.532a.48.48 0 0 1 .33.129l1.898 1.885a.484.484 0 0 0 .669 0l.771-.814a.43.43 0 0 0 0-.63z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FD62D5"
            d="M14.572 11.769s.428-.395.428-.673a.47.47 0 0 0-.141-.335l-2.52-2.48a.484.484 0 0 0-.677 0l-2.52 2.48a.46.46 0 0 0-.142.33c0 .283.429.678.429.678v4.324s-.429.39-.429.673c0 .124.052.244.142.33l2.52 2.481a.484.484 0 0 0 .677 0l2.52-2.481a.46.46 0 0 0 .141-.33c0-.283-.428-.673-.428-.673zm-1.715 3.99a.47.47 0 0 1-.141.334l-.716.793-.716-.793a.47.47 0 0 1-.141-.334v-3.656c0-.129.051-.244.141-.334l.716-.793.716.793c.09.085.141.21.141.334z"
          />
          <path
            fill="#FD62D5"
            d="m17.434 7.427-2.262-2.155a.5.5 0 0 0-.335-.133c-.325 0-.385.068-.625.3a.5.5 0 0 1-.335.128h-3.754a.5.5 0 0 1-.334-.128c-.24-.232-.3-.3-.626-.3a.5.5 0 0 0-.334.128L6.566 7.423a.45.45 0 0 0-.137.317c0 .12.051.232.137.317l.771.806a.484.484 0 0 0 .669 0L9.9 6.986a.5.5 0 0 1 .334-.133h3.532a.48.48 0 0 1 .33.129l1.898 1.885a.484.484 0 0 0 .669 0l.771-.814a.43.43 0 0 0 0-.63z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

Icon10set.displayName = '10set'

export default Icon10set
