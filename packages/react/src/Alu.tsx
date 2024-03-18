import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAlu = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.004 5.143a1.83 1.83 0 0 1 1.47.823l2.52 4.32 1.239-2.117a.88.88 0 0 1 1.191-.322.85.85 0 0 1 .317 1.17l-1.744 2.987 1.744 2.983a.85.85 0 0 1-.317 1.174.884.884 0 0 1-1.191-.325l-1.239-2.117-2.52 4.32-.064.098a1.84 1.84 0 0 1-1.414.72 1.73 1.73 0 0 1-1.316-.626 1 1 0 0 1-.15-.193l-.034-.06a3 3 0 0 1-.099-.167l-.643-1.097-.403-.685-1.341-2.315-1.234 2.117a.883.883 0 0 1-1.192.326.85.85 0 0 1-.317-1.174L7.011 12 5.267 9.013a.85.85 0 0 1 .317-1.17.883.883 0 0 1 1.192.321l1.23 2.122 1.928-3.3.459-.789q.052-.101.124-.21l.013-.021a.8.8 0 0 1 .129-.167 1.74 1.74 0 0 1 1.345-.656m2.327 5.73.66 1.131L12 17.126l-2.991-5.122.715-1.226 2.315 4.17 2.292-4.07zm-.981-1.68L12 6.879l-1.273 2.185 1.312 2.357z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M14.991 10.243c-.317 0-.561.441-.655.63L15.013 12l.746-.72c-.099-.557-.369-1.05-.768-1.046zm-5.974-.009c.317.005.613.364.707.549l-.715 1.221-.759-.728c.099-.557.369-1.046.767-1.042m2.34-3.797c.322.013.557.304.643.442l-.634 1.08-1.076-.618c.334-.6.66-.917 1.063-.9zm-.017 11.126c.326-.013.574-.3.66-.437l-.951-1.62-1.063.6c.06.115.415.771.48.865.27.399.548.605.874.592"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ALU__a)"
            d="M12.004 5.143a1.83 1.83 0 0 1 1.47.823l2.52 4.32 1.239-2.117a.88.88 0 0 1 1.191-.322.85.85 0 0 1 .317 1.17l-1.744 2.987 1.744 2.983a.85.85 0 0 1-.317 1.174.884.884 0 0 1-1.191-.325l-1.239-2.117-2.52 4.32-.064.098a1.84 1.84 0 0 1-1.414.72 1.73 1.73 0 0 1-1.316-.626 1 1 0 0 1-.15-.193l-.034-.06a3 3 0 0 1-.099-.167l-.643-1.097-.403-.685-1.341-2.315-1.234 2.117a.883.883 0 0 1-1.192.326.85.85 0 0 1-.317-1.174L7.011 12 5.267 9.013a.85.85 0 0 1 .317-1.17.883.883 0 0 1 1.192.321l1.23 2.122 1.928-3.3.459-.789q.052-.101.124-.21l.013-.021a.8.8 0 0 1 .129-.167 1.74 1.74 0 0 1 1.345-.656m2.327 5.73.66 1.131L12 17.126l-2.991-5.122.715-1.226 2.315 4.17 2.292-4.07zm-.981-1.68L12 6.879l-1.273 2.185 1.312 2.357z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#ALU__b)"
            d="M14.991 10.243c-.317 0-.561.441-.655.63L15.013 12l.746-.72c-.099-.557-.369-1.05-.768-1.046z"
          />
          <path
            fill="url(#ALU__c)"
            d="M9.017 10.234c.317.005.613.364.707.549l-.715 1.221-.759-.728c.099-.557.369-1.046.767-1.042"
          />
          <path
            fill="url(#ALU__d)"
            d="M11.357 6.437c.322.013.557.304.643.442l-.634 1.08-1.076-.618c.334-.6.66-.917 1.063-.9z"
          />
          <path
            fill="url(#ALU__e)"
            d="M11.34 17.563c.326-.013.574-.3.66-.437l-.951-1.62-1.063.6c.06.115.415.771.48.865.27.399.548.605.874.592"
          />
          <defs>
            <linearGradient
              id="ALU__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D1FF" />
              <stop offset="1" stopColor="#EC1EFF" />
            </linearGradient>
            <linearGradient
              id="ALU__b"
              x1="7.131"
              x2="12.537"
              y1="7.174"
              y2="17.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4B7DDF" />
              <stop offset="1" stopColor="#717BFF" />
            </linearGradient>
            <linearGradient
              id="ALU__c"
              x1="16.467"
              x2="9.948"
              y1="7.135"
              y2="16.774"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4B7DDF" />
              <stop offset="1" stopColor="#6F7CFF" />
            </linearGradient>
            <linearGradient
              id="ALU__d"
              x1="15.903"
              x2="8.557"
              y1="5.143"
              y2="15.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#08A9D8" />
              <stop offset="1" stopColor="#2BB0FF" />
            </linearGradient>
            <linearGradient
              id="ALU__e"
              x1="11.567"
              x2="10.59"
              y1="17.481"
              y2="15.733"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A526CA" />
              <stop offset="1" stopColor="#B746FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAlu.displayName = 'Alu'

export default IconAlu
