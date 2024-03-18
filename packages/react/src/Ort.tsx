import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconOrt = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m11.533 9.99.716-.214.214.72-.72.21z" />
          <path
            fill="currentColor"
            d="m11.717 10.089.429-.129.128.429-.428.128zm1.222.334.42-.124.124.42-.42.124z"
          />
          <path
            fill="currentColor"
            d="m13.093 10.509.184-.056.056.184-.184.056z"
          />
          <path
            fill="currentColor"
            d="m12.137 12.746-.42.12.129.42.415-.124zm-.081.15-.184.055.055.185.184-.056zm-.664-1.877-.918.27.27.917.918-.27zm-.13.244-.543.159.158.54.54-.16-.158-.54zm-.453 1.513-.695.206.206.694.694-.206zm-.103.184-.407.124.12.408.407-.12z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m12.459 11.816.531-.155.154.528-.531.158z"
          />
          <path
            fill="currentColor"
            d="m12.652 11.923.23-.069.07.232-.232.068z"
          />
          <path
            fill="currentColor"
            d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.857a6.429 6.429 0 1 0-3.746-1.205.163.163 0 0 1 .078-.244l.11-1.101 2.045-1.415.065.086-2.002 1.39-.107 1.041a.163.163 0 1 1-.094.313A6.4 6.4 0 0 0 12 18.429m3.334-11.657c-.15.29-.81.887-2.228.964l-1.384 1.56.132.128L13.06 8.01c.244.249.651.643 1.071 1.024l-.454.523.128.116.45-.531c.365.32.729.612.995.762l-1.415 1.869.138.081 1.452-1.868c.013-.043.026-.21-.034-.514-.077-.386-.12-1.428.609-2.118-.073-.445-.472-.574-.665-.583m-5.61 5.442.095.06-1.282 1.963v.776a.163.163 0 1 1-.107 0v-.81zm-1.242 3.009a.06.06 0 0 0 .048-.01.056.056 0 1 0-.048.01m-.04 1.911a.056.056 0 1 1-.106.031.056.056 0 0 1 .107-.03m3.875-3.218-1.44 1.705-1.397.862v.026a.163.163 0 1 1-.051-.12l1.375-.853 1.432-1.693zm-3 2.648a.056.056 0 0 0 .065-.078.056.056 0 1 0-.065.078"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path fill="#590577" d="m11.532 9.99.716-.214.214.72-.72.21z" />
          <path fill="#8D5F90" d="m11.717 10.089.428-.129.129.429-.429.128z" />
          <path fill="#590577" d="m12.938 10.423.42-.124.124.42-.42.124z" />
          <path fill="#8D5F90" d="m13.092 10.509.185-.056.055.184-.184.056z" />
          <path
            fill="#590577"
            d="m12.137 12.746-.42.12.128.42.416-.124zm-.082.15-.184.055.056.185.184-.056zm-.664-1.877-.917.27.27.917.917-.27zm-.129.244-.544.159.159.54.54-.16-.159-.54zm-.454 1.513-.694.206.206.694.694-.206zm-.103.184-.407.124.12.408.407-.12z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="#590577" d="m12.458 11.816.532-.155.154.528-.532.158z" />
          <path fill="#8D5F90" d="m12.651 11.923.231-.069.069.232-.231.068z" />
          <path
            fill="#590080"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.857a6.429 6.429 0 1 0-3.746-1.205.163.163 0 0 1 .077-.244l.111-1.101 2.045-1.415.064.086-2.001 1.39-.108 1.041a.163.163 0 1 1-.094.313A6.4 6.4 0 0 0 12 18.429m3.334-11.657c-.15.29-.81.887-2.229.964l-1.384 1.56.133.128 1.204-1.414c.244.249.652.643 1.072 1.024l-.455.523.129.116.45-.531c.364.32.728.612.994.762l-1.414 1.869.137.081 1.453-1.868c.013-.043.026-.21-.034-.514-.078-.386-.12-1.428.608-2.118-.073-.445-.471-.574-.664-.583m-5.61 5.442.094.06-1.281 1.963v.776a.163.163 0 1 1-.107 0v-.81zm-1.244 3.01a.06.06 0 0 0 .049-.01.056.056 0 0 0 0-.088.056.056 0 0 0-.078.01.056.056 0 0 0 .029.088m-.039 1.911a.056.056 0 1 1-.106.031.056.056 0 0 1 .106-.03m3.875-3.218-1.44 1.705-1.397.862v.026a.163.163 0 1 1-.052-.12l1.376-.853 1.431-1.693zm-3 2.648a.056.056 0 1 0 .025-.108.06.06 0 0 0-.054.021.056.056 0 0 0 .029.087"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconOrt.displayName = 'Ort'

export default IconOrt
