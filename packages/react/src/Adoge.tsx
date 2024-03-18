import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAdoge = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#1B90DD"
        d="M12 19.162a7.161 7.161 0 1 0 0-14.323 7.161 7.161 0 0 0 0 14.323"
      />
      <path
        fill="#7D97EB"
        d="m7.238 16.599-.54.043a7.27 7.27 0 0 0 7.333 2.142l-.107-.102-.883-.832-1.071-.467 1.007-.429c.283-.085 1.285-.638 1.358-.6l.013.009c.09.043.446.21.574.171.588-.162 1.119-1.011 1.342-1.555.043-.095.068-.172.141-.253-.021-.026-.09-.022-.09-.022l-.985.33-1.749.052-.326-.48.052-.112h.043c.295.056.771.142.934-.235a.2.2 0 0 1 .03-.056c-.943-.621-.887-.729-.729-1.063.099-.201.236-.484.219-1.016l-.12-.128-.189-.356c-.45.446-.514.617-.621.643-.129.03-.317-.167-1.354-.334l-.99-.96-2.126.162-.416 2.328.802 2.927.244.806c-.463-.193-1.8-.613-1.8-.613z"
      />
      <path
        fill="#809DF9"
        d="M10.787 16.594s.257.125.694.09c.129-.171 1.016-.253 1.016-.253s.111-.034.304.048c.197.085.386.073.557.115.176.043.347-.184.484-.231.133-.056.309-.176.309-.176l.373-.038.754-.322 1.192-1.217.325.514.099.647-.36.763-.973.9-1.89.493-1.127-.338-1.402-.605-.355-.385z"
      />
      <path
        fill="#ABB7FC"
        d="m17.207 11.434-.215-.364-.925-.077.278.827.772 1.406-.317 1.251c.162-.073.128.236.111.463-.03.407.42.454.236.823l.008.021a5.06 5.06 0 0 0 .485-3.33 2.7 2.7 0 0 0-.433-1.02"
      />
      <path
        fill="#3766D8"
        d="M11.365 8.46a.13.13 0 0 0-.077.056c-.068.077-.107.214.043.364-.06.021-.086.026-.137.021.056.065.171.19.176.31.004.085-.048.115-.048.115s.086.103.086.274l-.128-.128a3 3 0 0 0-.339-.232c0 .021 0 .043-.009.073 0 0-.171-.15-.312-.086-.073.03-.043.129-.043.129s-.086-.034-.15.03c-.065.064-.155.231-.206.296-.017.03-.069.085-.129.18a3 3 0 0 0-.175.394c-.005-.069-.022-.18-.227-.112-.198.073-.42.227-.618.515-.188.3-.231.634-.33.762-.094.125-.197.33-.205.416-.009.086.03.36-.172 1.106a15 15 0 0 1-.141-.746l-.043-.454-.056-1.41L9.561 9.12l1.127-.84.729.073-.043.107z"
      />
      <path
        fill="#3766D8"
        d="M8.348 11.473c-.051.18-.077.368-.064.548v.005l-.214.484-.013.574.613 2.049s-.309 1.856-.232 2.001c.069.133.249.386.279.429a1.4 1.4 0 0 1-.33-.18A1.3 1.3 0 0 0 8 17.182c-.3-.07-.861-.583-1.183-.43a.26.26 0 0 0-.12.112c-.107-.428-.244-.364-.394-.994l.064-.66.814-2.841c.232-1.029.369-1.972.759-2.957l.15.115s.257.009.33.317c.086.296.231.382.27.403.043.03.069.043.03.257-.086.18-.283.686-.373.969"
      />
      <path
        fill="#2455B2"
        d="M7.577 16.637c-.065-.193-.129-.36-.137-.441.09.073.548.45.784.707l.737.609.261.124c.129.056.279.103.386.15a.6.6 0 0 0-.141-.227c-.797-.797.673-.785-.416-1.53 1.273.257.326-.129-.193-1.32-.326-.733-.441-.922-.514-1.316-.034-.193-.026-.48-.034-.742-.009-.252-.043-.48-.018-.634-.085.103-.402.407-.411 1.076a4.2 4.2 0 0 0 .63 2.061c-.081.022-.287.052-.506-.325-.295-.523-.565-.798-.75-1.406-.15.99 0 1.157-.167 1.989-.63-.056.159.634.489 1.225"
      />
      <path
        fill="#678BEC"
        d="m14.07 10.929.36.201.3.051.848.515.429.171.06.086s.115 0 .137.008c.021.018-.064.043-.124.06l-.03.01a.4.4 0 0 0-.163.158c-.026.055-.845.394-.845.394l-.12-.004.15.643.129.634-.257.63-.514.205h-.566l-.133-.68c-.561-.73-.009-1.424-.039-2.16l.073-.528z"
      />
      <path
        fill="#6081EC"
        d="m15.265 8.872-.013-.13-.21-.333-.214-.588v-.8l.022-.472-.035-.3-.03-.099-.025-.034-.172.09-.244.338-.022.643.236 1.02.664.746.043-.077z"
      />
      <path
        fill="#2B55AB"
        d="M14.734 6.082s.107 0 .133.454l.043.921c.021.227.055.36.077.497.021.129.03.313.085.42.035.052.095.215.223.33.15.133.373.223.407.236.06.013.36.043.485.112.043.02.115.05.197.128.171.15.386.42.54.75.24.48.484 1.851.484 1.851l-.056-.094s-.008-.12-.128-.334-.086-.463-.244-.874c-.069-.159-.146-.36-.245-.536a2 2 0 0 0-.527-.66 1.65 1.65 0 0 0-.643-.266l-.364-.24s-.064-.128-.15-.27c-.116-.205-.27-.428-.296-.758-.055-.485.069-.802.065-1.089-.009-.287-.009-.493-.069-.548s-.017-.03-.017-.03"
      />
      <path
        fill="#2E61CF"
        d="M14.734 8.25s-.159-.407-.236-.767c-.013-.064-.043-.137-.043-.197a1.8 1.8 0 0 1 0-.664c.03-.138.159-.258.227-.356.069-.099.099-.137.086-.159a.15.15 0 0 0-.116-.043.4.4 0 0 0-.287.129c-.103.129-.188.544-.188.544l-.086.549-.223.694z"
      />
      <path
        fill="#285EC0"
        d="M13.23 7.826s.025.017.081 0a.13.13 0 0 0 .051.115c.06-.02.588.026.588.026s.252-.043.33-.381c.051-.223-.043-.523-.009-.729.043-.296.111-.356.12-.45.004-.085.013-.111.013-.171.026-.009.043-.017.077-.017.004-.026-.009-.048.021-.099-.017.004-.128.021-.257.146-.107.103-.107.137-.128.158-.013.026-.176.172-.249.309-.073.146-.206.6-.24.673a.4.4 0 0 1-.077.128c-.077.103-.197.266-.321.292"
      />
      <path
        fill="#215DBD"
        d="M14.1 6.437q-.117.198-.215.416c-.081.18-.128.334-.227.458.052-.158.146-.475.206-.582q.097-.162.24-.292z"
      />
      <path
        fill="#627FE3"
        d="M15.034 8.782a.85.85 0 0 1 .184.402l.017.073c.035.086.125.184.206.279.06.064.116.128.15.184a.34.34 0 0 1 .06.27.3.3 0 0 1-.086-.043l-.733-.025-.99.188-.248-.6-.322-1.286.643-.257.039.017a.2.2 0 0 1 .026-.038s.235-.043.36-.03c.21.021.398.291.488.428l.077.129c.073.116.155.248.24.33 0-.009 0-.022.009-.03 0 0 0 .013.008.021.013.013.013.022.009.026l-.026.026z"
      />
      <path
        fill="#2B55AB"
        d="M9.047 6.716s.163.133.227.218l.051.073v-.013l.095.116.158.163c.086.086.172.171.253.266q.083.095.184.184c.065.064.137.128.215.214a.8.8 0 0 0 .274.043.3.3 0 0 0 .133-.021c.043-.018.085-.039.218-.039.202 0 .677.064 1.106.129.36.043.686.09.789.085.145 0-.498.065-.498.065l-1.645.03-.142-.013.193.223c.043.06.077.158.077.214l.043-.043-.034.069-.112.141a.5.5 0 0 0-.072.159h-.005c-.025 0-.128.008-.248-.193a6 6 0 0 0-.3-.459L9.74 7.92l-.17-.35-.215-.39-.008-.035-.189-.171-.107-.197v-.06z"
      />
      <path
        fill="#2A5CCC"
        d="M9.094 17.7s0-.116-.056-.18c-.064-.069-.223-.171-.386-.54a4 4 0 0 1-.171-.463s.283.249.454.309l-.081-.193c.021-.017.116-.043.128-.056-.055-.051-.085-.188-.197-.278-.133-.112-.394-.3-.591-.472a4 4 0 0 1-.643-.664l-.039.073s.198.261.3.428c.09.146.086.223.086.223l-.188-.081s-.052.206.188.514c-.103-.043-.146-.013-.206-.047a.9.9 0 0 1 .365.394c.128.283.334.527.595.703.283.189.446.33.446.33z"
      />
      <path
        fill="#2455B2"
        d="M6.304 15.866s.056-.155.073-.287c.017-.138-.026-.168.025-.322.03-.098.086-.085.099-.098a.8.8 0 0 0 .017-.232c0-.085 0-.18.017-.227.017-.017.03-.03.065-.133a.8.8 0 0 1 .064-.18c.017-.034.064-.06.064-.09 0-.064-.051-.09-.051-.111 0-.034.043-.009.051-.017.013-.018-.034-.116-.017-.129.009-.008.056.047.069.034.012-.017.025-.18.051-.291.026-.103.043-.18.043-.214l.236-.695q.057-.17.09-.343c.017-.06.025-.192.034-.175 0 .008 0 .077.013.077.008 0 .043-.24.055-.279.009-.038.065-.162.082-.257l.06-.497.03-.27c0-.103 0-.206.017-.304q.039-.259.129-.51c.085-.232.33-.823.368-.973 0-.043-.043-.017-.043-.017l-.201.531c-.09.227-.172.437-.189.455-.017.02-.141.248-.201.62-.052.374-.077.72-.107.944-.017.116-.03.227-.065.347l-.171.45a4 4 0 0 0-.133.428c-.034.155-.034.27-.043.348l-.103.385a8 8 0 0 1-.197.583 3.5 3.5 0 0 0-.18.686c-.008.133-.064.617-.043.758h-.008z"
      />
      <path
        fill="#2B55AB"
        d="M8.121 9.806s.154-.163.223-.712c.06-.553.043-1.367.043-1.367l.128-.317s.026-.21.095-.291l.257-.275c.06-.068.128-.154.167-.167-.017-.034-.107-.227-.454-.231-.352 0-.455.193-.498.27-.03.064-.197.377-.257.973q-.06.418-.047.84c.004.111.043.373.103.651.06.24.12.506.24.626"
      />
      <path
        fill="#2455B2"
        d="M8.614 10.282a.3.3 0 0 1-.15-.04c-.052 0-.232.018-.373-.162-.047.249-.21.922-.026 1.17.069.086.176.06.176.06v-.06c0-.039.013-.073.004-.098a.5.5 0 0 0 .146-.103c.116-.112.27-.305.279-.45a.18.18 0 0 0-.129-.193.2.2 0 0 0 .03-.035c.009-.025.013-.064.043-.09"
      />
      <path
        fill="#3E69D9"
        d="m8.978 6.664-.351.253-.185.42s-.042.142.035.184l-.073.086-.193.84-.073 1.226.562.887v-.004s.017-.137.36-.369c.171-.115.317-.171.458-.227l-.566.506-.338.986a.5.5 0 0 1 .193-.043c.043 0 .115 0 .201.008.142.013.3.022.369.017l.068-.008c.373-.034 2.34 1.328 3.24 1.247.09.056.305 0 .365.086-.086-.793 1.277-.686.917-1.53.218-.009.098-.077.18-.163l.013.013c.21.154.535.3.797.471a.15.15 0 0 1 .051.086c.069.188.317.278.506.257h.013c.043 0 .068-.043.068-.09.086 0 .309.137.416.137h-.004.013s.055.013.072 0c.502-.201-.711-.668-.745-.694l-.056-.12c-.227-.24-1.35-2.092-1.444-1.277a1.6 1.6 0 0 0-.052-.262c-.055-.197-.197-.471-.24-.668-.025-.086-.068-.446.099-.656.167-.214.643-.099.686-.099-.669-.475-.913-.3-1.016-.227l-.022.017c-.274.013-.505.056-.728.095a4.7 4.7 0 0 1-1.042.077c-1.457-.03-.985.261-2.014-.699-.021-.025-.527-.758-.54-.763"
      />
      <path
        fill="#3D4973"
        d="M12.934 11.7s-.129.163-.63.163a1.3 1.3 0 0 1-.377-.034c-.052-.013-.257-.095-.459-.343-.184-.223-.141-.313-.141-.313l.107-.017.343.043 1.028.454.129.043z"
      />
      <path
        fill="#9BA6ED"
        d="M12.424 10.942c-.189-.108-.27-.026-.27-.026h-.004l-.005.737-.085.107a1 1 0 0 0 .338.026c.236 0 .39-.137.382-.317a.7.7 0 0 0-.356-.527"
      />
      <path
        fill="#252211"
        d="M12.291 11.627a.37.37 0 0 1-.257.103c-.142.009-.253-.133-.356-.27a1 1 0 0 0-.163-.18c-.124-.098-.193-.103-.193-.103s.12-.137.45-.317c.322-.171.686-.197.888.077h-.009c.069.056.343.343.343.622s-.442.18-.442.18l-.257-.112z"
      />
      <path
        fill="#96ABFA"
        d="M15.377 9.643c-.245-.206-.489-.377-.703-.622-.129-.154-.287-.33-.429-.312-.18.017-.197.394-.201.505-.009.107-.03.343-.069.476-.043.137.849 1.14 1.046 1.222a.4.4 0 0 0-.026-.086l-.013-.013.035.021.193-.317.214-.27.296.189.025.021v.017l.009.043-.043.232-.416.527.669.454h.043l.034.214-.107-.081-.313.36.553.356.077 1.868-.094.652s.158-.446.248-.369c.416.36.386 1.376.073 1.817l.124.06.163-.073.305-.334.064-.386.506-1.727-.052-.257c-.026.064-.047.163-.073.27-.055.232-.321.78-.484.334-.12-.3.3-1.02.206-1.414-.716-3.086.133-1.268.163-1.063l-.009-.056c-.051-.565-.283-1.14-.429-1.688-.411-.771-.578-.896-1.311-1.221l-.24-.112c-.784-.429-.36.287-.034.763"
      />
      <path
        fill="#3D4973"
        d="m15.758 10.517-.013-.021-.034-.056-.206-.128h-.171l.133.248s.004.116.043.154l-.322.275-.09-.048a1 1 0 0 1-.18-.094l-.116-.09.018.026a.2.2 0 0 0 .042.069l.043.05.03.027c.022.017.039.043.056.064l.06.073c.077.085.236.214.36.214a.4.4 0 0 0 .223-.077l.008.004-.004-.004h-.004a.4.4 0 0 0 .154-.159l.009-.013a.57.57 0 0 0 .06-.342c-.03-.133-.086-.168-.086-.168h-.013z"
      />
      <path
        fill="#252211"
        d="M15.797 10.573s-.137-.18-.257-.227c-.125-.043-.172-.013-.172-.013l.069.18.098.12-.004.056s.013.154-.086.257c-.098.107-.171.103-.214.103-.047 0-.171-.035-.231-.189-.06-.146-.108-.33.008-.514a.41.41 0 0 1 .343-.193c.043 0 .334.017.446.42"
      />
      <path
        fill="#F7F7E7"
        d="M12.364 11.186c.043-.026 0-.172-.043-.21-.056-.043-.12-.099-.227-.103-.043 0-.082.026-.077.051.013.052.085.129.145.172.09.077.146.115.202.094z"
      />
      <path
        fill="#F8F6DE"
        d="M15.068 10.402c-.038 0-.086.03-.09.072-.017.043.017.129.086.129.06 0 .094-.073.094-.086l-.021-.051a.076.076 0 0 0-.069-.064"
      />
      <path
        fill="#9BA6ED"
        d="m15.6 10.44-.026-.013h.004l-.081-.06c-.022-.021-.112-.064-.142-.038-.025.025-.021.064-.017.09v.004c-.034 0-.098.03-.09.073 0 .03.034.043.064.043l.06-.013c.026 0 .052.03.078.06l.021.021a.2.2 0 0 0 .043.035c.03.085.03.214.03.244 0 .038.047.103.073.103.021 0 .051-.018.077-.048a.5.5 0 0 0 .06-.154.37.37 0 0 0-.026-.214.33.33 0 0 0-.128-.129z"
      />
      <path
        fill="#6E8AEB"
        d="m15.522 15.459-.038.03c-.133.085-.399.158-.54.098-.073-.025-.172-.064-.249-.064-.03.026-.133.137-.565-.03-.403-.163-.493-.18-.562-.154-.008-.018-.013-.048-.12-.043 0-.043.086-.197.086-.197l.48-.172h.257l.776.15.437.257.034.125z"
      />
      <path
        fill="#2D5BCB"
        d="M15.784 15.176s-.013.077-.12.154a.8.8 0 0 0-.137.129c-.129-.176-.296-.137-.45-.137-.18 0-.21-.155-.437-.142-.078 0-.21 0-.236.09-.086-.026-.18-.201-.223-.283-.043 0-.107-.013-.18.06.064.043 0 .159-.073.172-.501.145-.896-.005-.986-.489a.167.167 0 0 1 .142-.201l.831.261 1.007-.047.858.433z"
      />
      <path
        fill="#3D4973"
        d="M16.568 12.857a.3.3 0 0 0-.043-.12l-1.543-.274s-.265-.034-.312.15c-.043.184.098.381.098.381s-.008.056.043.12a.92.92 0 0 1 .223.883c-.086.369-.283.51-.283.51s-.009.047-.197.12a.6.6 0 0 1-.403.03l-.043-.004c-.064-.013-.146-.043-.24-.073a2.2 2.2 0 0 0-.6-.141c-.244 0-.3.064-.343.111-.008 0-.013.009-.017.013.064.077.172.12.3.15l.047.009c.06.012.116.02.185.042l.257.086c.111.043.227.086.33.111q.14.044.3.043.23-.017.445-.094a.8.8 0 0 1 .292.017h.008c.056.013.116.026.172.056q.07.041.12.094l.086.069c.094.055.205.09.282.081.12-.017.219-.137.296-.231l.039-.047c.021-.026.06-.052.098-.086.06-.043.125-.086.172-.141a.3.3 0 0 0 .073-.116c.012-.052.012-.095.012-.142 0-.043 0-.085.018-.137a.14.14 0 0 1 .017-.06l.013-.03a1 1 0 0 1 .102-.167c.048-.069.099-.141.138-.257.055-.171-.069-.643-.108-.789l-.034-.171z"
      />
      <path
        fill="#111425"
        d="m16.487 12.463-.03-.026c.025.043.154.253.051.575-.098.32-.351.557-.66.574-.313.008-.471-.146-.656-.382-.077-.085-.158-.205-.235-.287-.107-.12-.197-.158-.197-.274 0-.244.244-.352.6-.463a1.33 1.33 0 0 1 .848-.017c.172.081.236.167.279.3m.03 1.723h-.035c-.017 0-.227-.082-.45-.065a2.7 2.7 0 0 0-.484.086c-.566.146-1.05.553-1.641.42-.159-.034-.42-.051-.656-.086a2 2 0 0 1-.219-.047s.185.18.626.253c.609.103 1.174-.18 1.766-.287a5.4 5.4 0 0 0 1.093-.27z"
      />
      <path
        fill="#8BA6F5"
        d="M11.378 16.697c-.283-.18-.484-.527-.788-.66a1.5 1.5 0 0 1-.309-.561c.009-.18.043-.45.193-.609-.146-.026-.42-.043-.592-.09a.9.9 0 0 1-.287-.128s.116-.197-.073-.395c-.18-.197-.33-.312-.437-.54a1.45 1.45 0 0 1 1.149.33c.248.215 1.363 1.093 1.59 1.119-.737.784.343.471.604.827.09.116.129.313.12.45.043.021.09.06.073.146-.12.441-.729.034-.969.257a1.3 1.3 0 0 1-.27-.146z"
      />
      <path
        fill="#3D4973"
        d="M9.685 9.587v.133c-.184-.064-.994.917-1.033.33.446 0-.587-1.851-.527-2.1a.85.85 0 0 1 .395-.544c-.009.09.03.197.064.206.12.18.694.51.87.608l.068.051c.069.056.163.232.09.073.026.026-1.114 1.243.069 1.243z"
      />
      <path
        fill="#4562CD"
        d="M14.202 18.733a4 4 0 0 1-.398.107c-.257-.004-.377-.201-.489-.39-.373-.634-1.735-.857-2.391-1.44a1 1 0 0 0-.129-.107c-.227-.176-.355-.257-.355-.257.342.017.085-.03.004-.27l-.004-.017c.128.03.248.111.385.201 1.269.866 3.815.969 5.199.184 1.144-.728.428.686 0 .952-.274.171-.489.274-.917.643.068 0-.879.343-.9.394z"
      />
      <path
        fill="#6F90E6"
        d="M17.374 16.787a7.3 7.3 0 0 1-2.4 1.667l.008-.128.429-.472.677-.471.823-1.14.09-.116.137-.394.017-.004c-.004.78.275.977.275.977z"
      />
      <path
        fill="#304093"
        d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.429a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M8.228 7.714h2.396l1.093 6.429H12v1.714H9.428v-1.714h.386l-.107-.857H8.82l-.108.857H9v1.714H6.857v-1.714h.283l1.092-6.429zM9.548 12l-.283-2.258L8.982 12z"
        fillOpacity=".9"
      />
      <path
        fill="#fff"
        d="M15.321 7.714h-2.893V9.43h.429v4.714h-.429v1.714h2.893c.75-.051 2.25-.943 2.25-4.071 0-3.129-1.5-4.02-2.25-4.072m-.75 6.429h.309c.3 0 .548-.253.548-.566V9.994a.557.557 0 0 0-.548-.565h-.309z"
        fillOpacity=".9"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconAdoge.displayName = 'Adoge'

export default IconAdoge
