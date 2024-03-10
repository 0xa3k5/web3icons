import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAstroc = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.026 18.429a6.44 6.44 0 0 0 4.384-1.715h1.187a7.3 7.3 0 0 1-5.571 2.572A7.297 7.297 0 0 1 4.714 12c0-4.024 3.275-7.286 7.312-7.286a7.304 7.304 0 0 1 7.26 6.429h-5.143v3H12.33l-2.357-1.496-1.303 1.496H7.53l1.71-1.959-1.123-.711c-.544-.347-.3-1.187.343-1.187h2.434l.806-1.14A.43.43 0 0 1 12.026 9h1.718c.24 0 .399.193.399.429v.857h4.101a6.45 6.45 0 0 0-6.218-4.714A6.44 6.44 0 0 0 5.572 12c0 3.549 2.888 6.429 6.45 6.429zm-1.882-7.286h-.943l.61.386zm.399.853.741-.853h2.002v2.143h-.707zm2.743-1.71h-1.252l.189-.429h1.063z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#ASTROC__a)">
            <path fill="#3F2365" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M12.026 18.429a6.44 6.44 0 0 0 4.384-1.715h1.187a7.3 7.3 0 0 1-5.571 2.572A7.297 7.297 0 0 1 4.714 12c0-4.024 3.275-7.286 7.312-7.286a7.304 7.304 0 0 1 7.26 6.429h-5.143v3H12.33l-2.357-1.496-1.303 1.496H7.53l1.71-1.959-1.123-.711c-.544-.347-.3-1.187.343-1.187h2.434l.806-1.14A.43.43 0 0 1 12.026 9h1.718c.24 0 .399.193.399.429v.857h4.101a6.45 6.45 0 0 0-6.218-4.714A6.44 6.44 0 0 0 5.572 12c0 3.549 2.888 6.429 6.45 6.429zm-1.882-7.286h-.943l.61.386zm.399.853.741-.853h2.002v2.143h-.707zm2.743-1.71h-1.252l.189-.429h1.063z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="ASTROC__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAstroc.displayName = 'Astroc'

export default IconAstroc
