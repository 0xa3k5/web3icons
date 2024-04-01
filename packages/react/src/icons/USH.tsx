import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconUSH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.944 4.714 5.571 8.357 12 12l6.428-3.643z"
          />
          <path
            fill="currentColor"
            d="M5.571 15.763V8.357L12 12v7.286zm12.857 0V8.357L12 12v7.286z"
          />
          <path
            fill="currentColor"
            d="m12 8.542 3 1.714v3.428L12 15.4l-3-1.715v-3.428z"
          />
          <path
            fill="currentColor"
            d="M9 10.299 12 12v3.4l-3-1.715zm6 0v-.043L12 8.54l-3 1.715v.043L12 12z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#USH__a)"
            d="M11.944 4.714 5.571 8.357 12 12l6.428-3.643z"
          />
          <path fill="url(#USH__b)" d="M5.571 15.763V8.357L12 12v7.286z" />
          <path fill="url(#USH__c)" d="M18.428 15.763V8.357L12 12v7.286z" />
          <path
            fill="url(#USH__d)"
            d="m12 8.542 3 1.714v3.428L12 15.4l-3-1.715v-3.428z"
          />
          <path fill="url(#USH__e)" d="M9 10.299 12 12v3.4l-3-1.715z" />
          <path
            fill="url(#USH__f)"
            d="M15 10.299v-.043L12 8.54l-3 1.715v.043L12 12z"
          />
          <defs>
            <linearGradient
              id="USH__a"
              x1="14.31"
              x2="7.344"
              y1="7.671"
              y2="11.39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#006ACA" />
              <stop offset=".66" stopColor="#00DFFA" />
            </linearGradient>
            <linearGradient
              id="USH__b"
              x1="6.034"
              x2="11.646"
              y1="6.114"
              y2="21.159"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0059CB" />
              <stop offset=".4" stopColor="#00C3E4" />
            </linearGradient>
            <linearGradient
              id="USH__c"
              x1="17.571"
              x2="10.483"
              y1="6.343"
              y2="13.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0062C8" />
              <stop offset="1" stopColor="#00E7EF" />
            </linearGradient>
            <linearGradient
              id="USH__d"
              x1="14.636"
              x2="12.128"
              y1="13.375"
              y2="19.337"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E0FF" />
              <stop offset="1" stopColor="#00C9FF" />
            </linearGradient>
            <linearGradient
              id="USH__e"
              x1="7.867"
              x2="11.424"
              y1="7.286"
              y2="13.395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00C3FF" />
              <stop offset="1" stopColor="#00F1FF" />
            </linearGradient>
            <linearGradient
              id="USH__f"
              x1="10.624"
              x2="11.409"
              y1="9.467"
              y2="10.414"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00C9FF" />
              <stop offset="1" stopColor="#00E8FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconUSH.displayName = 'USH'
