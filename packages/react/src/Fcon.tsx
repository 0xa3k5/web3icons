import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconFcon = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.143 6.163 12 4.286 9.857 6.163v5.648l1.153 1.08.583-.625-.879-.823V6.549L12 5.426l1.286 1.122v4.895L9 15.467v-4.753l-.728.729a.43.43 0 0 0-.129.304v5.7l6-5.636zm1.586 5.284a.43.43 0 0 1 .128.3v5.687l-3.377-3.103.583-.634L15 15.48v-4.766l.729.729zM12 14.743l-.428.398v4.175l.428.394.429-.394V15.14L12 14.747zM9.857 16.8l.857-.784v2.683l-.685-.63a.5.5 0 0 1-.172-.382zm4.286-.034-.857-.84v2.828l.694-.634a.53.53 0 0 0 .163-.386z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#FCON__a)"
            d="M14.143 6.163 12 4.286 9.857 6.163v5.648l1.153 1.08.583-.625-.879-.823V6.549L12 5.426l1.285 1.122v4.895L9 15.467v-4.753l-.729.729a.43.43 0 0 0-.128.304v5.7l6-5.636zm1.585 5.284c.081.08.127.187.129.3v5.687l-3.377-3.103.583-.634L15 15.48v-4.766l.728.729zM12 14.743l-.429.398v4.175l.429.394.428-.394V15.14L12 14.747zM9.857 16.8l.857-.784v2.683l-.686-.63a.5.5 0 0 1-.171-.382zm4.286-.034-.858-.84v2.828l.695-.634a.53.53 0 0 0 .163-.386z"
          />
          <defs>
            <linearGradient
              id="FCON__a"
              x1="11.177"
              x2="11.245"
              y1="4.286"
              y2="19.461"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6167FB" />
              <stop offset=".54" stopColor="#26BAF8" />
              <stop offset=".8" stopColor="#46F7B0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconFcon.displayName = 'Fcon'

export default IconFcon
