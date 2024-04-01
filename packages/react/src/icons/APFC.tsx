import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconAPFC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.357 5.143 4.072 2.246v4.508l-4.072 2.246-4.071-2.246V7.39zM4.714 7.86v3.784l3.429 1.895V9.557L4.714 7.856zm3.857 1.701v3.978L12 11.644V7.86zm3.185-2.057L8.357 9.193 4.96 7.504l3.398-1.873z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m16.071 5.143 4.072 2.246v4.508l-4.072 2.246L12 11.897V7.39zM12.43 7.86v3.784l3.428 1.895V9.557L12.43 7.856zm3.857 1.701v3.978l3.428-1.895V7.86zm3.184-2.057-3.399 1.689-3.398-1.689 3.398-1.873z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m12.215 11.572 4.07 2.245v4.509l-4.07 2.246-4.072-2.246v-4.509zm-3.643 2.717v3.784L12 19.967v-3.981l-3.428-1.702zm3.857 1.701v3.977l3.428-1.894v-3.784zm3.184-2.057-3.399 1.688-3.398-1.688 3.398-1.873z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#APFC__a)"
            d="m8.358 5.143 4.071 2.246v4.508l-4.071 2.246-4.072-2.246V7.39zm-3.643 6.501 3.428 1.895V9.557L4.715 7.856zm3.857-2.083v3.978L12 11.644V7.86zm3.184-2.057L8.358 9.193 4.959 7.504l3.399-1.873z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#APFC__b)"
            d="m16.072 5.143 4.071 2.246v4.508l-4.071 2.246L12 11.897V7.39zm-3.643 6.501 3.429 1.895V9.557l-3.429-1.701zm3.857-2.083v3.978l3.429-1.895V7.86zm3.184-2.057-3.398 1.689-3.399-1.689 3.399-1.873z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#APFC__c)"
            d="m12.215 11.571 4.071 2.246v4.509l-4.071 2.245-4.072-2.245v-4.509zm-3.643 6.502L12 19.967v-3.981l-3.428-1.702zm3.857-2.083v3.977l3.429-1.894v-3.784zm3.184-2.057-3.398 1.688-3.399-1.688 3.399-1.873z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="APFC__a"
              x1="5.955"
              x2="19.295"
              y1="8.816"
              y2="16.839"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C66329" />
              <stop offset=".42" stopColor="#E08D39" />
              <stop offset="1" stopColor="#D6B087" />
            </linearGradient>
            <linearGradient
              id="APFC__b"
              x1="4.703"
              x2="20.143"
              y1="14.694"
              y2="14.694"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E1B88A" />
              <stop offset=".47" stopColor="#274527" />
              <stop offset="1" stopColor="#3A5959" />
            </linearGradient>
            <linearGradient
              id="APFC__c"
              x1="12.215"
              x2="12.215"
              y1="11.571"
              y2="20.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D3B088" />
              <stop offset=".41" stopColor="#B4B4B4" />
              <stop offset="1" stopColor="#A3A2A4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAPFC.displayName = 'APFC'
