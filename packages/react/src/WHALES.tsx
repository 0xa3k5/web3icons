import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconWHALES = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m11.773 6.313-.107.214a.17.17 0 0 1-.15.098.5.5 0 0 1-.172-.017q-.101-.024-.055-.12a2.4 2.4 0 0 0 .137-.33q.084-.238.15-.355.155-.296.278-.66a.83.83 0 0 1 .253-.386.14.14 0 0 1 .15-.034c.06.012.099.051.116.107l.068.214q.13.406.227.6.115.226.159.484c.017.086.06.193.129.335l.043.085q.05.103-.065.103h-.214c-.073-.004-.116-.043-.129-.107a.6.6 0 0 0-.098-.227.09.09 0 0 0-.073-.039l-.557-.017a.09.09 0 0 0-.086.052zm.643-.412q-.021-.07-.082-.206a2 2 0 0 1-.098-.27q-.062-.231-.125 0a1.3 1.3 0 0 1-.205.42q-.083.119.06.12l.402.005q.072 0 .052-.069zm-1.86-.57c.124.412.214.84.283 1.286.008.073-.022.111-.086.128l-.137.04q-.124.031-.137-.095a8 8 0 0 0-.296-1.307c-.005-.026-.026-.035-.052-.03l-.317.055c-.073.013-.12-.021-.128-.094l-.022-.111c-.017-.095.026-.146.12-.159a5.3 5.3 0 0 0 1.05-.223q.063-.018.086.034l.103.21c.021.03.008.056-.026.07l-.416.145q-.038.012-.025.051M13.74 6.42c-.03.103.004.171.107.193l.557.145q.127.033.086.155l-.026.072c-.03.086-.085.12-.175.103a4.4 4.4 0 0 1-1.012-.377q-.051-.026-.026-.077a2.3 2.3 0 0 0 .215-.54c.03-.12.085-.291.18-.514.094-.236.154-.412.18-.536.008-.034.03-.051.064-.043l.146.022q.206.032.128.227a11 11 0 0 0-.428 1.17zm-4.269.364a1.1 1.1 0 0 1-.493.287q-.084.027-.085.112c0 .094.021.18.051.265.013.022.004.043-.017.056l-.274.184c-.03.017-.043.013-.052-.021q-.155-.9-.24-1.809l.005-.09a.18.18 0 0 1 .128-.128.26.26 0 0 1 .202.017c.141.068.261.171.36.296q.039.046.085.06.181.064.266.231a.16.16 0 0 0 .081.077l.15.069q.046.02.073.064a.6.6 0 0 0 .305.253c.107.038.128.103.055.193a.32.32 0 0 1-.265.12.08.08 0 0 1-.073-.039.65.65 0 0 0-.197-.206c-.022-.012-.043-.012-.065.01m-.681-.03q.005.04.043.021l.42-.17q.046-.016.008-.048l-.488-.446c-.043-.034-.056-.026-.052.026zm7.089-.724-.862 1.393c-.03.042-.069.055-.116.03l-.171-.086q-.082-.045-.03-.129l.9-1.44c.043-.064.086-.068.141-.013l.129.138q.046.047.009.107m.612 1.075a.04.04 0 0 0-.03.013q-.405.418-.84.806c-.03.026-.055.021-.085-.009l-.142-.175q-.037-.051.009-.095l1.234-1.178c.026-.022.052-.026.081 0a.38.38 0 0 1 .172.257c.021.214-.039.574-.189 1.084l-.043.146c-.064.231-.012.257.155.094l.626-.625q.081-.084.17 0l.104.107c.051.043.051.094 0 .141-.305.3-.622.6-.943.909a4 4 0 0 1-.304.248.064.064 0 0 1-.078 0 .325.325 0 0 1-.167-.36c.073-.407.176-.84.317-1.294q.02-.063-.042-.069zm-9.463.048q-.346.441-.102.792a.6.6 0 0 0 .557.28q.101-.006.287-.125l.137-.082a.1.1 0 0 0 .056-.068l.064-.257c.009-.043.034-.056.073-.052l.206.03q.062.005.06.069-.001.528-.613.78a.9.9 0 0 1-.716-.017.92.92 0 0 1-.536-.605.84.84 0 0 1 .022-.608c.193-.416.437-.617.741-.6.03 0 .043.017.056.043a.8.8 0 0 1 .026.257c0 .025-.018.043-.043.047l-.03.004q-.186.027-.249.112zm.249 4.148c.043.116.06.116.06-.013.009-.394.189-.595.531-.591h1.488a.08.08 0 0 0 .064-.034c.068-.09.154-.236.253-.429.206-.434.517-.811.904-1.097a3.72 3.72 0 0 1 2.842-.6 7 7 0 0 1 1.015.257 4.8 4.8 0 0 1 1.612.9c.477.393.843.905 1.063 1.483q.09.244.102.493a.26.26 0 0 1-.081.214.24.24 0 0 1-.223.064 3.2 3.2 0 0 0-1.496.005l-.822.214q-.176.047-.493.197c-.168.077-.3.129-.386.163q-.096.025-.257.129a1.5 1.5 0 0 1-.236.12 3.2 3.2 0 0 1-1.341.17 2.5 2.5 0 0 1-1.269-.42 1 1 0 0 1-.278-.29.14.14 0 0 0-.163-.07c-.03.01-.043.044-.043.112q-.001.035.017.056.384.47 1.187.746.066.024.004.056a1.18 1.18 0 0 0-.608.668q-.178.482-.292 1.067-.063.339-.334.742a1.4 1.4 0 0 1-.497.445 1.32 1.32 0 0 1-.977.12q-.072-.017-.022-.068c.27-.274.49-.593.647-.943.073-.154.108-.339.116-.557q.007-.47.034-.9.02-.361-.132-.035a2.1 2.1 0 0 0-.198.815q-.02.43-.342.634-.038.02-.069-.004-.472-.374-.853-.84a1.1 1.1 0 0 1-.158-.257 1 1 0 0 0-.12-.168.7.7 0 0 1-.129-.197 6 6 0 0 0-.146-.36 3.3 3.3 0 0 1-.223-.638 9 9 0 0 1-.158-1.882q0-.153-.154-.171c-.609-.051-.982-.159-1.123-.313a1 1 0 0 0-.103-.099.6.6 0 0 1-.176-.214 2.6 2.6 0 0 1-.128-.81c0-.03.012-.043.042-.026a3.1 3.1 0 0 0 1.123.215c.18 0 .356.034.523.094a.1.1 0 0 1 .06.064l.09.352q.024.09.112.06c.094-.043.171-.15.218-.33l.022-.077a.1.1 0 0 1 .055-.06q.211-.105.442-.172c.308-.086.613-.171.908-.274q.053-.018.06.034c.086.613-.03 1.012-.338 1.2a1.02 1.02 0 0 1-.643.155c-.553-.043-.832.094-.84.42q-.002.129.086.034a.3.3 0 0 1 .15-.086q.064-.011.034.047a.62.62 0 0 0-.013.48m4.586-2.263.214.043c.034.009.047 0 .043-.038q-.013-.098-.116-.09a.4.4 0 0 0-.146.03q-.091.037.005.055m-.343.442a1.77 1.77 0 0 1 .956-.189c.034 0 .042-.008.021-.038l-.021-.035a.06.06 0 0 0-.039-.03.92.92 0 0 0-.934.266c-.043.043-.039.056.021.026zm.411.428q-.564.637-.415 1.209l.008.008q.018.02.043 0l.009-.009.004-.012c.021-.446.167-.771.428-.968.086-.065.159-.133.228-.215q.089-.11.21-.086.127.027.03.116a.6.6 0 0 1-.258.154.11.11 0 0 0-.072.06 1.3 1.3 0 0 1-.185.28.67.67 0 0 0-.128.638q.204.669 1.187.921c.146.043.141.064-.009.077q-.449.04-.84-.184-.146-.085-.03.043c.112.124.343.201.699.24l.086.008q.1.012.017.069a.6.6 0 0 0-.099.081q-.082.091.035.048.345-.13.71-.253a.6.6 0 0 0 .3-.215c.052-.077.12-.094.198-.06a.07.07 0 0 0 .064.005q.411-.116.467-.643c0-.039.026-.06.065-.065.3-.034.523-.167.651-.398.043-.077.026-.099-.056-.056l-.094.069q-.397.361-.84.163a1.3 1.3 0 0 1-.523-.386.4.4 0 0 0-.128-.107.8.8 0 0 1-.172-.163.8.8 0 0 0-.193-.171 2 2 0 0 1-.175-.13.8.8 0 0 0-.236-.158 2.3 2.3 0 0 0-.819-.167q-.09.001-.27.047-.111.036-.227.056.09.013.103.064c.013.03 0 .06-.03.086a.5.5 0 0 0-.085.081c-.073.172-.043.185.085.056q.106-.098.223-.184h.021q.039.02.013.051m2.658.21.248.279h.009q.108-.097-.013-.232l-.009-.012c-.085-.095-.158-.107-.231-.043v.008zm2.51-.698-.27-.022a.21.21 0 0 1-.188-.128L16.6 9.17c-.03-.068-.01-.107.064-.107l1.581-.026q.689-.011.202.472l-1.119 1.123q-.037.037-.069-.009-.204-.339.099-.536c.021-.012.03-.034.013-.06a2 2 0 0 1-.193-.535q-.012-.066-.077-.073m.472.3c.009.064.043.085.103.073a.26.26 0 0 0 .172-.12q.102-.155.257-.27.11-.084-.026-.065-.256.044-.557.043-.07 0-.039.069a.8.8 0 0 1 .09.274z"
      />
      <path
        fill="currentColor"
        d="M13.491 11.314c0 .197.056.296.159.3.047 0 .056.013.017.043-.128.12-.317.176-.557.171a.93.93 0 0 1-.57-.171 2 2 0 0 0-.137-.094.8.8 0 0 1-.274-.258.79.79 0 0 1 .03-.844c.115-.18.26-.3.45-.373q.32-.12.53.112c.1.103.202.193.318.27a.1.1 0 0 1 .043.085 14 14 0 0 0-.009.76m.318.172v-.635q-.002-.055.042-.021l.322.248q.018.018.004.035l-.128.227-.01.008-.188.159c-.025.026-.043.017-.043-.021m-7.86.072q.321-.1.54-.265.076-.052.077.038l.012.283c0 .056-.021.09-.072.111l-.455.185a.1.1 0 0 0-.051.056.6.6 0 0 0-.017.24q.01.064.073.06l.454-.018q.085-.007.086.082l.012.214c0 .047-.021.073-.072.073H4.778q-.064 0-.06-.069V12.3q-.017-.476.099-.669a.59.59 0 0 1 .591-.317.86.86 0 0 1 .472.232.07.07 0 0 0 .068.012m-.853.69.497.022c.03 0 .043-.013.047-.043l.008-.232q.013-.3-.27-.312h-.021q-.283-.015-.296.287l-.008.231q-.001.043.043.047m9.09-.595c-.056.068-.095.128-.086.141.013.009.064-.043.12-.111.056-.073.094-.133.086-.142-.013-.008-.065.043-.12.112m3.668 1.208q.097-.025.013-.081l-.476-.3a.155.155 0 0 1-.077-.172.154.154 0 0 1 .129-.137c.287-.068.57-.15.848-.236a5 5 0 0 1 .515-.115c.188-.034.325-.065.42-.09q.05-.013.055.038c.009.09 0 .185-.017.287a.07.07 0 0 1-.064.056 8.5 8.5 0 0 0-1.174.236q-.204.065-.005.129l.069.025a.5.5 0 0 1 .159.073q.27.204.668.364c.129.052.184.146.176.283l-.009.12q-.007.162-.137.06c-.3-.236-.536-.33-.72-.283l-.184.043-.189.043q-.064.02-.013.064c.133.112.279.193.438.257.072.026.17.086.3.168.132.085.24.145.32.171q.09.032.082.129l-.021.201c0 .047-.03.069-.077.056a.6.6 0 0 1-.193-.077 7 7 0 0 0-.454-.266 7 7 0 0 1-.45-.266 2 2 0 0 0-.437-.214q-.11-.039-.086-.154a.5.5 0 0 1 .197-.305.6.6 0 0 1 .266-.085 1 1 0 0 0 .128-.022m-1.813-.591c.078-.005.137-.043.133-.073 0-.034-.064-.056-.141-.043-.077 0-.137.034-.133.069 0 .034.069.055.141.047m-.398.017c.055-.004.098-.039.094-.073 0-.034-.047-.06-.103-.056-.051.009-.094.039-.09.073 0 .034.047.06.103.056zm.788.013c.056 0 .107-.022.112-.06.008-.039-.034-.073-.095-.086-.055-.004-.107.021-.111.06s.039.073.094.086m.377.064a.092.092 0 1 0 0-.184.092.092 0 0 0 0 .184m-1.491-.15-.626.172-.008.003-.006.006-.003.008v.008l.009.034c.004.013.017.018.03.018l.626-.172c.012 0 .02-.013.017-.026l-.009-.034-.003-.01a.02.02 0 0 0-.027-.007m-.21 1.453-.343.493a4.73 4.73 0 0 1-1.714 1.646 1.63 1.63 0 0 1-.866.154q-.062-.006-.008-.043a5 5 0 0 0 1.585-1.556q.09-.14.159-.3c.056-.124.043-.128-.043-.021a5.8 5.8 0 0 1-2.036 1.778c-.324.152-.69.196-1.041.125q-.05-.01-.056-.056c-.056-.412-.013-.964.137-1.667.06-.3.185-.545.365-.733a.9.9 0 0 1 .728-.3c.407.034.816-.018 1.2-.154a8 8 0 0 1 .896-.245l.531-.128c.566-.159 1.192-.197 1.886-.116.189.021.403.086.634.18q.045.02.026.064a4.03 4.03 0 0 1-1.714 2.147q-.072.044-.022-.02.458-.637.703-1.338c.06-.171.043-.184-.047-.021l-.278.484c-.18.317-.455.651-.82.994a2.7 2.7 0 0 1-1.268.673c-.034.004-.038 0-.013-.022a4.5 4.5 0 0 0 1.213-1.55q.143-.284.228-.425a.03.03 0 0 0 0-.026l-.013-.021h-.009zm-9.339.54c.082-.022.103-.064.065-.137a2 2 0 0 1-.172-.497q-.021-.084.06-.116l.146-.052c.06-.02.099 0 .107.06q.063.301.214.61c0 .008.013.012.026.008l.364-.142q.02-.008.013-.021l-.265-.737q-.044-.136.085-.189l.099-.038c.068-.026.111 0 .128.068q.131.462.352 1.02.058.143-.094.189l-1.565.492c-.03.01-.047 0-.06-.025a4.3 4.3 0 0 1-.355-1.093q-.018-.104.085-.124l.12-.022c.069-.008.112.017.129.086l.137.617c.017.086.073.12.159.099zm11.559.664-.493-.347c-.03-.021-.038-.051-.021-.081l.085-.168q.046-.096.138-.038l1.452.921c.026.018.03.035.009.06l-.15.215q-.02.032-.047.012l-.57-.334q-.062-.04-.086.03a1.5 1.5 0 0 1-.355.54q-.143.13.042.202.268.101.51.3c.026.021.03.051.009.081l-.142.21c-.017.026-.042.03-.064.009a1.5 1.5 0 0 0-.385-.245 2 2 0 0 1-.266-.167 2 2 0 0 0-.21-.133 6 6 0 0 1-.532-.343q-.136-.107-.034-.248l.017-.026c.073-.103.154-.107.244-.025q.187.172.373.27c.078.042.142.02.185-.056l.313-.549q.03-.052-.022-.085zM6.441 15.874h-.527a.17.17 0 0 1-.158-.086l-.108-.162q-.056-.09.048-.09l.9-.026a.04.04 0 0 0 .042-.026q.182-.385.369-.9.063-.16.184-.043l.06.064q.124.122.047.275l-.244.505c-.038.086-.013.12.077.112q.277-.018.515-.017.18-.001.308.133a.2.2 0 0 1 .043.064c.043.103.013.159-.103.163l-.84.021c-.103 0-.171.047-.214.142a4.5 4.5 0 0 0-.249.707c-.03.12-.085.128-.154.03l-.073-.095a.31.31 0 0 1-.043-.317l.155-.398c.017-.039 0-.056-.039-.056zm8.79.84a.5.5 0 0 1 .146-.086.6.6 0 0 0 .184-.128.6.6 0 0 1 .215-.18q.039-.027.021-.073l-.099-.223c-.021-.043-.008-.073.03-.099a.54.54 0 0 0 .185-.17q.052-.077.085.008c.108.257.185.531.236.814.026.137.086.338.189.6l.09.253c.051.15 0 .261-.167.33a.08.08 0 0 1-.069 0 4.3 4.3 0 0 1-.737-.412c-.026-.021-.077-.043-.146-.077a1 1 0 0 1-.188-.098 2.3 2.3 0 0 0-.566-.317q-.084-.033-.022-.1.278-.287.549-.042.032.025.064 0m.669-.021q-.026-.065-.077-.026l-.266.206c-.034.03-.034.055 0 .085l.476.335q.032.025.064 0 .025-.024.013-.06l-.214-.54zm-7.573-.24-.96 1.071q-.038.044-.077.004l-.172-.158q-.043-.032-.008-.077L8 16.264c.017-.021.043-.026.065-.013l.244.116q.066.03.017.086m1.461 1.663c.15-.202.296-.45.429-.75q.065-.14.219-.112l.133.03q.129.025.06.142L9.733 18.9q-.027.038-.073.026-.303-.099-.296-.28l.077-1.075c.005-.043-.013-.051-.043-.03q-.207.128-.317.287a1 1 0 0 1-.18.189.9.9 0 0 0-.201.227c-.056.103-.142.133-.253.099l-.171-.06q-.167-.059-.082-.206.091-.155.176-.497c.047-.18.086-.313.128-.399q.128-.29.21-.591c.009-.043.035-.056.073-.052l.189.026q.12.02.086.129a4.5 4.5 0 0 1-.313.801c-.017.034-.022.064-.017.099q.007.038.047.051c.025.004.047 0 .064-.021q.23-.278.429-.459.077-.076.15-.184a.13.13 0 0 1 .072-.052.35.35 0 0 1 .288.06c.025.022.038.043.034.078l-.073 1.028q-.006.098.051.021m4.398-.72q-.026-.129-.146-.078l-.621.287c-.04.018-.065.005-.082-.03l-.094-.205c-.017-.035-.009-.056.025-.073q.483-.239.99-.394.173-.06.198.12.064.398.257.771.065.11.128.347.064.233.12.343c.043.086.018.137-.072.163l-.125.034q-.155.04-.188-.12a3.4 3.4 0 0 0-.339-.938.6.6 0 0 1-.043-.155zm-1.672.29-.797.052c-.051 0-.077-.021-.081-.072l-.005-.18q0-.071.069-.078l1.144-.085q.076-.001.082.068l.133 1.727q.007.076-.07.086l-1.148.081c-.047 0-.077-.02-.077-.068l-.013-.184q0-.077.069-.082l.784-.056c.047 0 .073-.03.069-.08l-.022-.28q-.007-.073-.085-.072l-.618.043q-.076.007-.081-.07l-.004-.17q-.001-.077.068-.082l.605-.043c.051-.004.072-.03.072-.081l-.017-.3c0-.056-.03-.077-.077-.073"
      />
    </BaseIcon>
  ),
)

IconWHALES.displayName = 'WHALES'