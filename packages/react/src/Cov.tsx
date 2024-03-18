import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCov = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.428 7.714c-2.494 0-4.285 1.783-4.285 4.286 0 2.52 1.783 4.299 4.285 4.286 2.486 0 4.295-1.8 4.286-4.286 0-2.529-1.834-4.286-4.286-4.286m0 8.143A3.836 3.836 0 0 1 8.571 12a3.857 3.857 0 1 1 7.715 0c0 2.169-1.65 3.857-3.858 3.857"
          />
          <path
            fill="currentColor"
            d="M6.973 11.614c.175.022.257-.171.283-.347a5.03 5.03 0 0 1 1.868-3.356 5.1 5.1 0 0 1 2.392-1.05c.184-.03.42-.158.39-.343-.022-.145-.15-.21-.33-.18a5.8 5.8 0 0 0-3.802 2.34 5.7 5.7 0 0 0-1.028 2.658c-.022.154.047.257.227.282zm9.343-3.913a5.8 5.8 0 0 0-3.15-1.397c-.189 0-.309.043-.318.214-.012.176.176.236.352.253a5.1 5.1 0 0 1 3.231 1.676c.125.137.296.257.437.129.138-.116.086-.232-.042-.369a5 5 0 0 0-.51-.506M8.66 16.3a5.7 5.7 0 0 0 2.88 1.354c.125.034.322-.03.347-.21.03-.18-.162-.283-.411-.326a5.14 5.14 0 0 1-4.221-4.209c-.043-.214-.18-.424-.356-.342-.133.06-.146.197-.124.342a5.7 5.7 0 0 0 1.885 3.386zm7.637-.66a5.14 5.14 0 0 1-3.128 1.568c-.189.017-.394.107-.373.291.021.18.189.223.373.198a5.8 5.8 0 0 0 3.544-1.779c.124-.133.21-.313.077-.441-.137-.116-.368.025-.497.162z"
          />
          <path
            fill="currentColor"
            d="M16.204 17.194a6.26 6.26 0 0 1-3.557 1.235 6.25 6.25 0 0 1-4.089-1.325c-.171-.15-.372-.223-.484-.03-.043.133 0 .206.112.296a6.9 6.9 0 0 0 4.542 1.483 6.93 6.93 0 0 0 3.935-1.38c.115-.086.137-.214.025-.36-.111-.142-.342-.026-.484.085zM6 12a6.17 6.17 0 0 1 1.264-3.73c.112-.145.223-.368.077-.475-.154-.099-.287-.043-.373.072a6.84 6.84 0 0 0-1.397 4.128c0 1.543.536 3.064 1.5 4.264.09.111.245.184.386.068.146-.111.017-.342-.099-.484A6.17 6.17 0 0 1 6 12m2.434-5.006a6.23 6.23 0 0 1 4.222-1.423c1.328.043 2.665.45 3.715 1.277.146.116.395.292.515.146.111-.141.042-.257-.086-.36a6.986 6.986 0 0 0-8.743.103c-.073.06-.193.201-.073.343.12.146.309.034.454-.086zM10.928 12c-.158-.004-.214.124-.214.3v1.114c0 .184.086.3.223.3.141 0 .206-.12.206-.3V12.3c0-.171-.056-.296-.215-.3m1.286-.857c-.171 0-.214.154-.214.334v1.912c0 .18.021.325.214.325s.214-.15.214-.325v-1.912c0-.176-.042-.334-.214-.334m1.282-1.286c-.18 0-.21.159-.21.334v3.189c0 .18.047.334.21.334.158 0 .214-.158.214-.334l.004-3.189c0-.175-.043-.334-.218-.334"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M12.428 7.714c-2.494 0-4.285 1.783-4.285 4.286 0 2.52 1.783 4.299 4.285 4.286 2.486 0 4.295-1.8 4.286-4.286 0-2.529-1.834-4.286-4.286-4.286m0 8.143A3.836 3.836 0 0 1 8.571 12a3.857 3.857 0 1 1 7.715 0c0 2.169-1.65 3.857-3.858 3.857"
          />
          <path
            fill="#fff"
            d="M6.973 11.614c.175.022.257-.171.283-.347a5.03 5.03 0 0 1 1.868-3.356 5.1 5.1 0 0 1 2.392-1.05c.184-.03.42-.158.39-.343-.022-.145-.15-.21-.33-.18a5.8 5.8 0 0 0-3.802 2.34 5.7 5.7 0 0 0-1.028 2.658c-.022.154.047.257.227.282zm9.343-3.913a5.8 5.8 0 0 0-3.15-1.397c-.189 0-.309.043-.318.214-.012.176.176.236.352.253a5.1 5.1 0 0 1 3.231 1.676c.125.137.296.257.437.129.138-.116.086-.232-.042-.369a5 5 0 0 0-.51-.506M8.66 16.3a5.7 5.7 0 0 0 2.88 1.354c.125.034.322-.03.347-.21.03-.18-.162-.283-.411-.326a5.14 5.14 0 0 1-4.221-4.209c-.043-.214-.18-.424-.356-.342-.133.06-.146.197-.124.342a5.7 5.7 0 0 0 1.885 3.386zm7.637-.66a5.14 5.14 0 0 1-3.128 1.568c-.189.017-.394.107-.373.291.021.18.189.223.373.198a5.8 5.8 0 0 0 3.544-1.779c.124-.133.21-.313.077-.441-.137-.116-.368.025-.497.162z"
          />
          <path
            fill="#fff"
            d="M16.204 17.194a6.26 6.26 0 0 1-3.557 1.235 6.25 6.25 0 0 1-4.089-1.325c-.171-.15-.372-.223-.484-.03-.043.133 0 .206.112.296a6.9 6.9 0 0 0 4.542 1.483 6.93 6.93 0 0 0 3.935-1.38c.115-.086.137-.214.025-.36-.111-.142-.342-.026-.484.085zM6 12a6.17 6.17 0 0 1 1.264-3.73c.112-.145.223-.368.077-.475-.154-.099-.287-.043-.373.072a6.84 6.84 0 0 0-1.397 4.128c0 1.543.536 3.064 1.5 4.264.09.111.245.184.386.068.146-.111.017-.342-.099-.484A6.17 6.17 0 0 1 6 12m2.434-5.006a6.23 6.23 0 0 1 4.222-1.423c1.328.043 2.665.45 3.715 1.277.146.116.395.292.515.146.111-.141.042-.257-.086-.36a6.986 6.986 0 0 0-8.743.103c-.073.06-.193.201-.073.343.12.146.309.034.454-.086zM10.928 12c-.158-.004-.214.124-.214.3v1.114c0 .184.086.3.223.3.141 0 .206-.12.206-.3V12.3c0-.171-.056-.296-.215-.3m1.286-.857c-.171 0-.214.154-.214.334v1.912c0 .18.021.325.214.325s.214-.15.214-.325v-1.912c0-.176-.042-.334-.214-.334m1.282-1.286c-.18 0-.21.159-.21.334v3.189c0 .18.047.334.21.334.158 0 .214-.158.214-.334l.004-3.189c0-.175-.043-.334-.218-.334"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCov.displayName = 'Cov'

export default IconCov
