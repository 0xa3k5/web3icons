import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconNcdt = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M2.143 11.572h.429V12h-.43zm-.429-.43h.429v.43h-.429zm.429-.428h.429v.429h-.43zm.429.429H3v.428h-.429zm0-.857H3v.428h-.429zM3 9.857h.429v.429H3zm.857 0h.429v.429h-.429zm.429-.428h.428v.428h-.428zM4.714 9h.429v.429h-.429zm14.083 4.714a.916.916 0 0 1-.921-.917v-1.011h.428v1.05a.49.49 0 0 0 .982 0v-1.05h.428v1.011a.92.92 0 0 1-.917.917"
          />
          <path
            fill="currentColor"
            d="M16.8 13.714a.97.97 0 0 0 .973-.964.97.97 0 0 0-.977-.964.97.97 0 0 0-.973.964.97.97 0 0 0 .973.964zm0-.433a.533.533 0 1 0-.004-1.067c-.3 0-.54.236-.54.532 0 .295.244.54.544.54z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M15.094 13.299a.969.969 0 0 1-1.757-.549.964.964 0 0 1 1.766-.54l-.33.317a.527.527 0 1 0-.88.564.527.527 0 0 0 .88-.097zm-2.442-.545c0 .3-.245.536-.54.536-.3 0-.54-.24-.54-.536 0-.291.244-.531.54-.531.3 0 .54.24.54.531"
          />
          <path
            fill="currentColor"
            d="M5.327 15c-1.47-.296-1.77-1.341-1.915-1.714h1.302v-.429h-1.02v-.428H4V12h.428v-.428h-.57V12H3.43v-.857H3v-.429h1.286v-.428h.428v-.429h.429V9.43h.429v.428h.857v-.596H6.21v-.24a3.146 3.146 0 0 1 4.029.648c2.018-.335 2.382 1.063 2.314 1.804.703.3.921 1.08.943 1.431q-.002.219-.043.412a.23.23 0 0 0-.236-.232.234.234 0 0 0-.236.232.236.236 0 0 0 .446.107c-.21.994-1.123 1.577-1.5 1.577zm.245-4.714h.857v.428h-.857zm-.643 2.464a.964.964 0 0 1 1.928 0v.964H6.43v-1.003a.536.536 0 1 0-1.072 0v1.003H4.93zm3.107.964a.963.963 0 0 1-.964-.964v-.964H7.5v1.003a.536.536 0 1 0 1.072 0v-1.003H9v.964a.963.963 0 0 1-.964.964m5.053-.964a.97.97 0 0 1-.978.964.97.97 0 0 1-.977-.964.97.97 0 0 1 .977-.964c.54 0 .978.428.978.964m-2.207.549a.978.978 0 0 1-1.775-.549.977.977 0 0 1 1.783-.54l-.334.321a.527.527 0 0 0-1.003.223c0 .292.236.523.527.523a.53.53 0 0 0 .472-.287z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M3.429 12v.429h-.857V12zm11.82-.857h.428v2.571h-.428zm6.608 0h-.428v.643h-.549a.97.97 0 0 0-.973.964.97.97 0 0 0 .973.964.97.97 0 0 0 .973-.9h.004zm-.428 1.628c0 .3-.24.545-.549.545a.554.554 0 0 1-.557-.549c0-.3.253-.544.557-.544h.549z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0C7BFE"
            d="M2.142 11.572h.429V12h-.429zm-.428-.43h.428v.43h-.428zm.428-.428h.429v.429h-.429zm.429.429H3v.428h-.43zm0-.857H3v.428h-.43zM3 9.857h.428v.429H3zm.857 0h.428v.429h-.428zm.428-.428h.429v.428h-.429zM4.714 9h.428v.429h-.428zm14.083 4.714a.916.916 0 0 1-.922-.917v-1.011h.429v1.05a.49.49 0 0 0 .981 0v-1.05h.429v1.011a.92.92 0 0 1-.917.917"
          />
          <path
            fill="#0C7BFE"
            d="M16.8 13.714a.97.97 0 0 0 .972-.964.97.97 0 0 0-.977-.964.97.97 0 0 0-.973.964.97.97 0 0 0 .973.964zm0-.433a.533.533 0 1 0-.004-1.067c-.3 0-.54.236-.54.532 0 .295.244.54.544.54z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#0C7BFE"
            d="M15.094 13.299a.969.969 0 0 1-1.757-.549.964.964 0 0 1 1.765-.54l-.33.317a.526.526 0 1 0-.88.564.527.527 0 0 0 .88-.097zm-2.443-.545c0 .3-.244.536-.54.536-.3 0-.54-.24-.54-.536 0-.291.244-.531.54-.531.3 0 .54.24.54.531"
          />
          <path
            fill="#0C7BFE"
            d="M5.327 15c-1.47-.296-1.77-1.341-1.916-1.714h1.303v-.429h-1.02v-.428h.304V12h.429v-.428h-.57V12h-.429v-.857H3v-.429h1.285v-.428h.429v-.429h.428V9.43h.429v.428h.857v-.596H6.21v-.24a3.146 3.146 0 0 1 4.028.648c2.019-.335 2.383 1.063 2.314 1.804.703.3.922 1.08.943 1.431 0 .146-.017.283-.043.412a.23.23 0 0 0-.235-.232.234.234 0 0 0-.236.232.236.236 0 0 0 .446.107c-.21.994-1.123 1.577-1.5 1.577zm.244-4.714h.857v.428h-.857zm-.643 2.464a.964.964 0 0 1 1.929 0v.964h-.429v-1.003a.536.536 0 1 0-1.071 0v1.003h-.429zm3.107.964a.963.963 0 0 1-.964-.964v-.964H7.5v1.003a.536.536 0 1 0 1.071 0v-1.003H9v.964a.963.963 0 0 1-.965.964m5.053-.964a.97.97 0 0 1-.977.964.97.97 0 0 1-.977-.964.97.97 0 0 1 .977-.964c.54 0 .977.428.977.964m-2.207.549a.978.978 0 0 1-1.774-.549.977.977 0 0 1 1.783-.54l-.335.321a.527.527 0 0 0-1.003.223c0 .292.236.523.528.523a.53.53 0 0 0 .471-.287z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#0C7BFE"
            d="M3.428 12v.429h-.857V12zm11.82-.857h.429v2.571h-.429zm6.609 0h-.429v.643h-.548a.97.97 0 0 0-.973.964.97.97 0 0 0 .973.964.97.97 0 0 0 .972-.9h.005zm-.429 1.628c0 .3-.24.545-.548.545a.554.554 0 0 1-.558-.549c0-.3.253-.544.558-.544h.548z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNcdt.displayName = 'Ncdt'

export default IconNcdt
