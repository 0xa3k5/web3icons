import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconPaper = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.923 14.692a4.6 4.6 0 0 1-.484.942q-.271.37-.613.763a5 5 0 0 0-.244.322c-.163.244-.326.351-.575.471a1.4 1.4 0 0 0-.3.197 5.77 5.77 0 0 1-3.445 1.432c-1.059.081-2.066.064-2.992-.395a2.6 2.6 0 0 0-.544-.18 4 4 0 0 1-.369-.107A3.46 3.46 0 0 1 6.84 16.92l-.913-1.22a1.7 1.7 0 0 1-.261-.54c-.163-.566-.249-1.14-.334-1.71l-.048-.3a4 4 0 0 1-.047-.485q-.014-.181-.043-.368a2.3 2.3 0 0 1-.042-.566c.017-.227.102-.433.184-.643.068-.171.137-.338.171-.514l.129-.6a.6.6 0 0 1 .146-.292 4 4 0 0 0 .57-.887 6 6 0 0 1 .377-.643 6 6 0 0 1 1.551-1.5c.429-.287.827-.57 1.192-.835.184-.137.372-.172.57-.202.107-.017.214-.034.33-.068.921-.3 1.937-.493 2.901-.36a9 9 0 0 1 2.914.904c.163.086.326.214.493.399q.631.69 1.226 1.414c.321.388.538.85.63 1.346l.257 1.037c.064.257.082.574.043.866q-.064.577-.051 1.212c-.003.227-.054.45-.15.656-.27.609-.51 1.166-.712 1.672M7.56 9.968c.112-.232.236-.442.382-.626a8.7 8.7 0 0 1 1.971-1.847c.418-.28.9-.448 1.402-.489.184-.017.385-.068.608-.163.18-.073.377-.107.587-.09 1.149.078 2.173.408 3.022 1.166 1.178 1.05 1.834 2.524 1.62 4.093-.215 1.577-.883 3.069-2.216 3.986-.729.497-1.496 1.011-2.383 1.045a2.3 2.3 0 0 0-.617.142l-.171.055a1.1 1.1 0 0 1-.45.03 6.9 6.9 0 0 1-2.79-1.135 3.26 3.26 0 0 1-.965-1.264 13 13 0 0 0-.6-1.12.24.24 0 0 1-.017-.218c.171-.415.103-.84.03-1.277l-.004-.013c-.129-.78.197-1.457.527-2.142zm3.862 1.367c.154-.296.33-.682.295-1.003a2 2 0 0 1-.004-.266c0-.141 0-.283-.043-.428-.137-.386-.476-.575-.788-.206a1.76 1.76 0 0 0-.215 1.791.55.55 0 0 0 .18.24c.159.116.472.06.575-.128m2.271-1.5c.703.368.103 1.504-.214 1.928a.27.27 0 0 1-.303.111.3.3 0 0 1-.1-.055c-.219-.184-.236-.428-.257-.686a2 2 0 0 0-.03-.274c-.056-.304.124-.574.291-.827l.056-.082c.124-.188.369-.214.557-.115m.729 2.871c-.06.223-.129.42-.215.6-.3.656-.913.999-1.607 1.166a2.3 2.3 0 0 1-2.485-1.076 10 10 0 0 1-.472-.87c-.206-.428-.257-.72.227-.99.365-.206.189-.771-.231-.69-.322.056-.587.026-.802-.103a.5.5 0 0 0-.257-.068c-.193 0-.33.193-.287.377q.03.142.094.278c.035.078.086.142.129.21.086.12.171.24.171.403 0 .87.42 1.655 1.003 2.306a3.63 3.63 0 0 0 2.066 1.123c.141.026.291.026.446-.009q.322-.066.6-.03c.379.028.754-.093 1.045-.338a6.7 6.7 0 0 0 .853-.78c.077-.086.172-.232.223-.339q.172-.394.382-.771.148-.264.445-.45c.086-.052.163-.12.176-.219.043-.291-.137-.673-.506-.6l-.098.026c-.197.047-.48.116-.617-.013q-.106-.102-.236-.017c-.184.124-.279.274-.274.45 0 .086.06.141.12.201.068.065.132.129.107.223"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#F00A19"
            d="M17.923 14.692a4.6 4.6 0 0 1-.485.942q-.27.37-.613.763c-.085.107-.171.215-.244.322-.163.244-.326.351-.574.471a1.4 1.4 0 0 0-.3.197 5.77 5.77 0 0 1-3.446 1.432c-1.058.081-2.066.064-2.991-.395a2.6 2.6 0 0 0-.545-.18 4 4 0 0 1-.368-.107A3.46 3.46 0 0 1 6.84 16.92l-.913-1.22a1.7 1.7 0 0 1-.262-.54c-.162-.566-.248-1.14-.334-1.71l-.047-.3a4 4 0 0 1-.047-.485q-.016-.181-.043-.368a2.3 2.3 0 0 1-.043-.566c.017-.227.103-.433.184-.643.069-.171.138-.338.172-.514l.128-.6a.6.6 0 0 1 .146-.292 4 4 0 0 0 .57-.887c.116-.218.232-.437.377-.643a6 6 0 0 1 1.552-1.5c.428-.287.827-.57 1.191-.835.184-.137.373-.172.57-.202.107-.017.214-.034.33-.068.922-.3 1.937-.493 2.902-.36a9 9 0 0 1 2.914.904c.163.086.326.214.493.399q.631.69 1.225 1.414c.322.388.538.85.63 1.346l.258 1.037c.064.257.081.574.042.866q-.064.577-.051 1.212c-.002.227-.054.45-.15.656-.27.609-.51 1.166-.711 1.672M7.56 9.968c.111-.232.235-.442.381-.626a8.7 8.7 0 0 1 1.972-1.847c.418-.28.9-.448 1.401-.489.184-.017.386-.068.609-.163.18-.073.377-.107.587-.09 1.148.078 2.173.408 3.021 1.166 1.179 1.05 1.834 2.524 1.62 4.093-.214 1.577-.883 3.069-2.216 3.986-.728.497-1.495 1.011-2.382 1.045a2.3 2.3 0 0 0-.618.142l-.171.055a1.1 1.1 0 0 1-.45.03 6.9 6.9 0 0 1-2.79-1.135 3.26 3.26 0 0 1-.964-1.264 13 13 0 0 0-.6-1.12.24.24 0 0 1-.017-.218c.171-.415.102-.84.03-1.277l-.005-.013c-.128-.78.197-1.457.527-2.142zm3.861 1.367c.154-.296.33-.682.296-1.003a2 2 0 0 1-.004-.266c0-.141 0-.283-.043-.428-.137-.386-.476-.575-.789-.206a1.76 1.76 0 0 0-.214 1.791.55.55 0 0 0 .18.24c.158.116.471.06.574-.128m2.272-1.5c.702.368.102 1.504-.215 1.928a.27.27 0 0 1-.403.056c-.218-.184-.235-.428-.257-.686a2 2 0 0 0-.03-.274c-.055-.304.125-.574.292-.827l.055-.082c.125-.188.369-.214.558-.115m.728 2.871c-.06.223-.128.42-.214.6-.3.656-.913.999-1.607 1.166a2.3 2.3 0 0 1-2.486-1.076 10 10 0 0 1-.471-.87c-.206-.428-.258-.72.227-.99.364-.206.188-.771-.232-.69-.321.056-.587.026-.801-.103a.5.5 0 0 0-.257-.068c-.193 0-.33.193-.287.377q.03.142.094.278c.034.078.086.142.128.21.086.12.172.24.172.403 0 .87.42 1.655 1.003 2.306a3.63 3.63 0 0 0 2.065 1.123c.142.026.292.026.446-.009q.323-.066.6-.03c.38.028.755-.093 1.046-.338a6.7 6.7 0 0 0 .853-.78c.077-.086.171-.232.223-.339a9 9 0 0 1 .381-.771q.15-.264.446-.45c.085-.052.163-.12.175-.219.043-.291-.137-.673-.505-.6l-.099.026c-.197.047-.48.116-.617-.013q-.105-.102-.236-.017c-.184.124-.278.274-.274.45 0 .086.06.141.12.201.069.065.133.129.107.223"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPaper.displayName = 'Paper'

export default IconPaper
