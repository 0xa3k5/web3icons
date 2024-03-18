import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconOrb = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#6E6E6E"
        d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
      />
      <path
        fill="#EC9835"
        d="m8.053 6.395-.15.107c.317.411.664.921.574 1.045l-.043.06c-.15.223-.386.57-1.337.506a3.5 3.5 0 0 0-.763.026 6.8 6.8 0 0 0-.883 1.826c.377-.193.857-.37 1.324-.37.986 0 1.41.43 1.256.67s-.797.492-1.256.505c-.394.017-1.2.549-1.628 1.393 0 .266.026.527.06.789.098-.51.343-1.166.874-1.462.887-.501 1.993-.373 2.396 0 .403.369.874.892.806 1.5a1.52 1.52 0 0 1-.695 1.166c-.321.201-.685 1.226-.604 1.971.043.442.094 1.063.129 1.522q.39.27.814.484a4.65 4.65 0 0 1-.45-2.156c.111-1.251.788-2.065 1.046-1.941.064.03.167.129.3.257.394.394 1.071 1.067 1.988 1.102q.34.01.617.008c.802 0 1.213 0 1.535.767q.438 1.037.891 2.066a8 8 0 0 0 .514-.262c-.18-.587-.471-1.5-.617-1.804a4 4 0 0 0-.137-.257c-.133-.248-.206-.373-.056-.668a1.38 1.38 0 0 1 1.256-.733c.621 0 1.029.012 1.53.313.236.137.424.41.557.668a6.8 6.8 0 0 0 .934-2.974 1.1 1.1 0 0 0-.201-.236c-.3-.253-.163-.536.21-.728l-.009-.116a3.2 3.2 0 0 1-.587-.33 5 5 0 0 0-.377-.232c-.411-.24-.814-.471-.72-.822.112-.438.236-.755 1.093-.888a7 7 0 0 0-.197-.407c-.154.056-.386.086-.703.017-.536-.12-1.166-.784-1.414-1.101q-.51-.397-1.055-.742c-.257-.145-.51-.87-.557-1.392l-.24-.077c.039.6.013 1.4-.3 1.47a2.06 2.06 0 0 1-1.56-.176c-.351-.193-.857-.317-1.264-.416a2.6 2.6 0 0 1-.639-.21c-.175-.128-.441-.317-.355-.681a6 6 0 0 0-.399.137c-.008.227-.116.484-.446.694-.728.454-.861.317-1.058.111zm3.87 1.032c-.099.288-.66.36-1.252.159-.6-.202-.998-.596-.9-.883.094-.287.656-.36 1.247-.159.6.202.999.596.9.883zM7.028 8.79c0 .133-.163.24-.364.24S6.3 8.923 6.3 8.79c0-.128.163-.24.364-.24s.364.107.364.24m1.603.6c.172.172.429.197.579.056.141-.146.12-.407-.056-.579-.171-.175-.429-.201-.579-.055-.141.145-.12.402.056.578m8.824 2.006a.287.287 0 0 1-.402-.004.285.285 0 0 1-.07-.313.3.3 0 0 1 .061-.095.29.29 0 0 1 .314-.059.3.3 0 0 1 .093.064c.112.115.116.3 0 .407zm-8.228-.892.171-.244a.6.6 0 0 1 .656-.236.585.585 0 0 1 .437.536l.022.352a1.2 1.2 0 0 1-.502 1.02.5.5 0 0 1-.343.085h-.013a.5.5 0 0 1-.334-.227l-.124-.193a.99.99 0 0 1 .03-1.092m4.084-3.107c-.411.065-.87.703-1.05 1.016 0 .42.18.784.849.784.664 0 1.011-.257 1.058-.6.043-.334-.343-1.281-.857-1.2m1.149.6c-.005.245.038.806.253 1.037.265.296 1.127.43 1.388.146.257-.287.184-.608-.214-.973l-.167-.154c-.347-.326-.699-.656-.93-.489a.9.9 0 0 0-.33.43zm-3.116 2.473c-.099-.266.189-.531.347-.634.082.06.287.24.472.484.231.3-.142.497-.309.515-.171.017-.386-.035-.51-.365m4.779-.634c-.172.103-.485.368-.378.634.138.33.369.386.553.364.18-.017.587-.214.339-.514a3 3 0 0 0-.514-.484m-1.642-.193c.279.043.364.429.373.617-.09.043-.351.129-.651.172-.382.043-.365-.377-.292-.532.069-.154.223-.313.57-.257m.159 2.366c.111-.06.403-.159.668-.043.417.24.783.561 1.076.943.107.197-.24 1.054-.836 1.114-.6.064-.865-.197-1.071-.6-.202-.399-.506-1.011.163-1.414m3.223.964c-.193-.159-.502-.009-.63.086-.086.098-.232.343-.163.574.09.283.343.587.793.887.351.236.398-.103.445-.424.013-.09.026-.184.043-.257.09-.343-.248-.669-.488-.866m-5.786-1.299q.444.139.844.378c.279.197 1.042.96 1.042 1.847 0 .891-.399 1.05-1.235 1.05-.84 0-2.087-1.003-2.25-1.359a1 1 0 0 1 .292-1.191c.081-.069.154-.133.223-.202.3-.278.557-.522 1.084-.522"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#FFED68"
        d="M14.113 7.483c-.108-.009-.305-.064-.202-.231l.06-.099c.112-.18.214-.356.343-.317.154.047.411.446-.201.647m-1.5-.309a1.7 1.7 0 0 0-.408-.094c-.085.112-.021.313.103.51.112.172.257.026.377-.09l.052-.051c.128-.116.021-.215-.129-.275zm-3.056.485a1.5 1.5 0 0 0-.532-.069c-.154.399.133.664.343.857.06.056.112.099.146.142.171.205.36.463.36.848 0 .215.099.24.236.279a.7.7 0 0 1 .385.236c.296.351.472.48.635.137.12-.245.377-.399.578-.519.077-.047.15-.09.202-.128.18-.15-.009-.356-.18-.515-.172-.162-.06-.3.077-.471.137-.172-.403-.437-.973-.369-.399.043-.707-.128-.96-.274a1.7 1.7 0 0 0-.317-.154m-1.616.625a1.23 1.23 0 0 1-.746.176c-.325.24.566.677.935.694.201.01.231-.145.261-.3.026-.124.052-.248.167-.29.257-.095.33-.494.159-.614-.133-.094-.313.026-.566.193l-.214.141zm.343 1.08c.056.13.223.395.484.45.33.073.36.18.206.31-.154.128-.771.02-.801-.232v-.043c-.03-.249-.065-.592.115-.485zm.099 1.12c-.155 0-.236.17-.258.256 0 .065.022.214.116.33.112.146.472.15.536.073.034-.039.013-.064-.022-.103a.36.36 0 0 1-.09-.167c-.042-.171-.09-.386-.282-.386zM9.86 12.24c-.086-.017-.287-.026-.364.073-.099.129.086 1.131.287 1.2.15.052.227-.291.279-.514l.042-.172c.022-.043.06-.077.099-.115.069-.065.137-.133.103-.223-.06-.137-.214-.249-.446-.249m1.273-1.526c-.129-.06-.309.275-.27.318a1.5 1.5 0 0 1-.18.437c-.116.167.111.356.309.274.128-.047.42-.141.668-.214l.326-.107c.214-.069-.094-.39-.287-.39-.137 0-.292-.12-.42-.215-.056-.043-.107-.085-.146-.103m1.264-1.144c.095-.056.339-.171.523-.171.232 0 .686.368.673.527-.013.154-.004.523.163.643.171.115.857.283 1.041.141.069-.056.129-.146.189-.227.094-.133.18-.257.278-.223.065.022.086.12.108.24.03.176.072.403.3.497l.437.193c.274.129.553.257.707.292.098.025.257.03.428.034.258.008.523.013.622.094.107.086.193.257.274.425.043.085.086.17.129.24.133.214.214.282.394.428.184.154.137.484 0 .596-.133.111-.257 0-.523-.249l-.004-.008c-.27-.249-.527-.485-.973-.412l-.026.004c-.428.073-.441.073-.638-.102l-.073-.069c-.266-.253-.913-.866-1.466-.78-.416.064-.668.407-.844.634-.086.112-.146.197-.197.215l-.077.03c-.116.043-.189.077-.3-.206l-.005-.017c-.128-.322-.128-.335-.471-.532h-.004c-.352-.201-.665-.381-.618-.634.022-.103.086-.137.146-.171.099-.06.193-.116.116-.399a1 1 0 0 0-.21-.394c-.129-.172-.232-.309-.099-.643zm2.979-.03c-.167-.008-.506-.128-.643-.18l-.064-.021c-.249-.086.137.36.313.523.171.158.488.098.66 0 .171-.099-.06-.313-.266-.322m1.418.463c-.072-.021-.244-.129-.351-.39-.129-.334-.086-.737.086-.746.18-.004.445.142.57.309.124.171-.155 1.149-.3.827zm-2.665 4.432a3.6 3.6 0 0 0 .025-.708c0-.06.03-.18.159-.171.099.009.176.176.266.356.051.111.103.222.171.313.15.214-.056.308-.257.398l-.051.026c-.215.098-.36.038-.313-.214m1.963-.472c.042.03.18.026.377-.197.253-.279.313-.227.373-.137l.042.068c.099.142.283.403.318.51.038.129-.3.129-.652.099l-.133-.009c-.3-.021-.535-.034-.325-.33z"
      />
      <path
        fill="url(#ORB__a)"
        d="M12.565 5.383c1.355-.343 3.155.677 4.239 1.65.943.986 2.417 3.193 1.354 3.9-1.161.771-5.743-1.963-6.077-3.561-.274-1.277.21-1.856.484-1.989"
      />
      <defs>
        <linearGradient
          id="ORB__a"
          x1="17.601"
          x2="15.617"
          y1="8.181"
          y2="9.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity=".7" />
          <stop offset="1" stopColor="#A3A397" stopOpacity="0" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconOrb.displayName = 'Orb'

export default IconOrb
