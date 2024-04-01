import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconEQUAL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.643 7.929c-1.372 0-4.144.715-5.357 1.071l2.143-2.357v.643c.214-.142 1.114-.429 3-.429S16.072 8.284 16.714 9h-.428c-.643-.356-2.272-1.071-3.643-1.071m-1.286 8.143c1.372 0 4.145-.716 5.357-1.072l-2.142 2.357v-.643c-.215.142-1.115.429-3 .429S7.929 15.716 7.286 15h.428c.643.356 2.272 1.072 3.643 1.072"
          />
          <path
            fill="currentColor"
            d="M14.572 9h-4.286a.857.857 0 0 0-.857.857v3.857c0 1.029.857 1.286 1.285 1.286h3.858c0-1.028-.858-1.286-1.286-1.286h-.857c-.429 0-1.286 0-1.286-1.714 0-1.371.857-1.714 1.286-1.714h.643c1.2 0 1.5-.857 1.5-1.286"
          />
          <path
            fill="currentColor"
            d="M10.286 13.714c-.514 0-.784-.57-.857-.857v.857c0 1.029.857 1.286 1.285 1.286h3.858c0-1.028-.858-1.286-1.286-1.286zm0-3.428c-.514 0-.643.287-.643.428 0 .686.716.857 1.071.857h2.572c1.028 0 1.286.858 1.286 1.286h-4.286c-.514 0-.784-.57-.857-.857V9.857c0-.685.57-.857.857-.857h4.286c0 1.029-.858 1.286-1.286 1.286z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#EQUAL__a)"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#EQUAL__b)"
            d="M12.642 7.929c-1.371 0-4.144.715-5.357 1.071l2.143-2.357v.643c.214-.142 1.114-.429 3-.429S16.071 8.284 16.714 9h-.429c-.643-.356-2.271-1.071-3.643-1.071"
          />
          <path
            fill="url(#EQUAL__c)"
            d="M11.357 16.072c1.371 0 4.144-.716 5.357-1.072l-2.143 2.357v-.643c-.214.142-1.114.429-3 .429S7.928 15.716 7.285 15h.429c.643.356 2.271 1.072 3.643 1.072"
          />
          <path
            fill="url(#EQUAL__d)"
            d="M14.571 9h-4.286a.857.857 0 0 0-.857.857v3.857c0 1.029.857 1.286 1.286 1.286h3.857c0-1.028-.857-1.286-1.286-1.286h-.857c-.428 0-1.286 0-1.286-1.714 0-1.371.858-1.714 1.286-1.714h.643c1.2 0 1.5-.857 1.5-1.286"
          />
          <path
            fill="url(#EQUAL__e)"
            d="M10.285 13.714c-.514 0-.784-.57-.857-.857v.857c0 1.029.857 1.286 1.286 1.286h3.857c0-1.028-.857-1.286-1.286-1.286z"
          />
          <path
            fill="url(#EQUAL__f)"
            d="M10.285 10.286c-.514 0-.643.287-.643.428 0 .686.716.857 1.072.857h2.571c1.029 0 1.286.858 1.286 1.286h-4.286c-.514 0-.784-.57-.857-.857V9.857c0-.685.57-.857.857-.857h4.286c0 1.029-.857 1.286-1.286 1.286z"
          />
          <defs>
            <linearGradient
              id="EQUAL__a"
              x1="18.857"
              x2="4.714"
              y1="12.643"
              y2="12.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2DFAEE" />
              <stop offset="1" stopColor="#015BD5" />
            </linearGradient>
            <linearGradient
              id="EQUAL__b"
              x1="17.961"
              x2="5.632"
              y1="11.338"
              y2="11.588"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2AF0ED" />
              <stop offset="1" stopColor="#056BD7" />
            </linearGradient>
            <linearGradient
              id="EQUAL__c"
              x1="17.298"
              x2="7.322"
              y1="11.338"
              y2="11.171"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#27E6EB" />
              <stop offset="1" stopColor="#0569D7" />
            </linearGradient>
            <linearGradient
              id="EQUAL__d"
              x1="12.024"
              x2="12.024"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#22D3E8" />
              <stop offset="1" stopColor="#0A7CDA" />
            </linearGradient>
            <linearGradient
              id="EQUAL__e"
              x1="18.678"
              x2="5.321"
              y1="13.457"
              y2="13.457"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#29EEEC" />
              <stop offset="1" stopColor="#035FD5" />
            </linearGradient>
            <linearGradient
              id="EQUAL__f"
              x1="14.357"
              x2="9.429"
              y1="11.571"
              y2="11.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#28EAEC" />
              <stop offset="1" stopColor="#015BD5" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconEQUAL.displayName = 'EQUAL'
