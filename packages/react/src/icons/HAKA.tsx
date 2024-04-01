import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconHAKA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.571 7.714H6.428v3H9v2.623L9.857 15V9.857H7.285V8.572h3.43v8.57l.856 1.647zm6 2.143v.857h-2.143v2.55l-.034.018.034.004-2.142 3.857-.858 1.714V7.714h5.143v.857h-4.286v7l1.286-2.392V9.857z"
          />
          <path
            fill="currentColor"
            d="M12.441 19.273A7.286 7.286 0 0 0 18 7.864V9h-.802q.122.211.223.429H18V12a6 6 0 0 1-4.749 5.872zm-.227.009v-1.286a6 6 0 0 1-.428 0v1.286q.213.006.428 0m-.656-.01A7.286 7.286 0 0 1 6 7.865V12a6 6 0 0 0 4.748 5.872zm6-11.986a7.29 7.29 0 0 0-11.113 0h1.843A5.97 5.97 0 0 1 12 6c1.401 0 2.691.48 3.711 1.286z"
          />
          <path
            fill="currentColor"
            d="M13.71 19.084a7.29 7.29 0 0 0 5.528-6.257 20 20 0 0 1-1.354.347 6.01 6.01 0 0 1-4.17 4.578v1.328z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#HAKA__a)"
            d="M11.571 7.714H6.428v3H9v2.623L9.857 15V9.857H7.285V8.572h3.43v8.57l.856 1.647zm6 2.143v.857h-2.143v2.55l-.034.018.034.004-2.142 3.857-.858 1.714V7.714h5.143v.857h-4.286v7l1.286-2.392V9.857z"
          />
          <path
            fill="url(#HAKA__b)"
            d="M12.441 19.273A7.286 7.286 0 0 0 18 7.864V9h-.802q.122.211.223.429H18V12a6 6 0 0 1-4.749 5.872zm-.227.009v-1.286a6 6 0 0 1-.428 0v1.286q.213.006.428 0m-.656-.01A7.286 7.286 0 0 1 6 7.865V12a6 6 0 0 0 4.748 5.872zm6-11.986a7.29 7.29 0 0 0-11.113 0h1.843A5.97 5.97 0 0 1 12 6c1.401 0 2.691.48 3.711 1.286z"
          />
          <path
            fill="url(#HAKA__c)"
            d="M13.71 19.084a7.29 7.29 0 0 0 5.528-6.257 20 20 0 0 1-1.354.347 6.01 6.01 0 0 1-4.17 4.578v1.328z"
          />
          <defs>
            <linearGradient
              id="HAKA__a"
              x1="18.632"
              x2="4.919"
              y1="6.541"
              y2="6.541"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4FB585" />
              <stop offset=".47" stopColor="#D41B81" />
              <stop offset="1" stopColor="#7826F4" />
            </linearGradient>
            <linearGradient
              id="HAKA__b"
              x1="18.857"
              x2="5.657"
              y1="10.616"
              y2="11.194"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17B372" />
              <stop offset=".51" stopColor="#402284" />
              <stop offset="1" stopColor="#1CADDB" />
            </linearGradient>
            <linearGradient
              id="HAKA__c"
              x1="13.44"
              x2="18.814"
              y1="19.084"
              y2="13.234"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3A3781" />
              <stop offset=".46" stopColor="#C03281" />
              <stop offset="1" stopColor="#17B372" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconHAKA.displayName = 'HAKA'
