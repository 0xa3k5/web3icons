import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGuild = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 19.286c2.16-1.217 4.298-2.43 6.428-3.643V8.349L12 4.714l-1.286.716v.9c.527-.3.754-.42 1.286-.716 1.86 1.055 3.707 2.13 5.571 3.185v6.407c-1.86 1.054-3.711 2.13-5.571 3.184-1.886-1.063-3.686-2.134-5.572-3.201V7.903c-.282.159-.574.287-.857.446v7.303zm0-1.822c1.581-.891 3.137-1.825 4.714-2.717v-5.49C15.137 8.37 13.586 7.432 12 6.54L9.857 7.75V5.923c-.291.171-.617.446-.857.579v2.725c1.093-.617 1.946-1.187 3-1.783 1.303.733 2.558 1.543 3.857 2.28v4.565c-1.346.758-2.507 1.517-3.857 2.28-1.346-.767-2.499-1.526-3.857-2.293V7.007c-.287.159-.617.3-.857.433v7.303c1.607.909 3.107 1.817 4.714 2.726zm2.143-6.385v-.45c-.802-.455-1.329-.9-2.143-1.363-.737.42-1.414.951-2.143 1.363v2.76c.793.445 1.329.9 2.143 1.363.81-.46 1.337-.913 2.143-1.372v-.454c.257-.146.578-.287.857-.446v1.35c-1.072.609-1.929 1.213-3 1.817-1.02-.574-1.984-1.238-3-1.813v-3.642c.883-.502 1.556-1.008 2.456-1.518l.54-.3c1.071.6 1.928 1.209 3.004 1.813v1.354c-.274-.158-.587-.308-.857-.458zm-.429.012v.73c-.557-.245-1.153-.494-1.714-.73-.172.086-.377.215-.544.3.75.215 1.555.412 2.254.613v.918c-.527.3-1.179.595-1.706.895-.544-.304-1.196-.604-1.718-.9v-.685c.561.17 1.2.398 1.714.685l.557-.313c-.75-.214-1.569-.411-2.267-.608v-.913c.531-.296 1.183-.596 1.714-.896.536.305 1.187.604 1.71.9zm.707.6.082.043.154.086-.111.069-.12.068-.06-.03-.18-.103.154-.085zm.215.523.077-.043-.013-.14-.013-.117-.129.073-.09.052v.06l.013.201.159-.086zm-.493-.025v-.266l.223.111v.262z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00ADB4"
            d="M12 19.286c2.16-1.217 4.298-2.43 6.428-3.643V8.349L12 4.714l-1.286.716v.9c.527-.3.754-.42 1.286-.716 1.86 1.055 3.707 2.13 5.571 3.185v6.407c-1.86 1.054-3.711 2.13-5.571 3.184-1.886-1.063-3.686-2.134-5.572-3.201V7.903c-.282.159-.574.287-.857.446v7.303zm0-1.822c1.581-.891 3.137-1.825 4.714-2.717v-5.49C15.137 8.37 13.586 7.432 12 6.54L9.857 7.75V5.923c-.291.171-.617.446-.857.579v2.725c1.093-.617 1.946-1.187 3-1.783 1.303.733 2.558 1.543 3.857 2.28v4.565c-1.346.758-2.507 1.517-3.857 2.28-1.346-.767-2.499-1.526-3.857-2.293V7.007c-.287.159-.617.3-.857.433v7.303c1.607.909 3.107 1.817 4.714 2.726zm2.143-6.385v-.45c-.802-.455-1.329-.9-2.143-1.363-.737.42-1.414.951-2.143 1.363v2.76c.793.445 1.329.9 2.143 1.363.81-.46 1.337-.913 2.143-1.372v-.454c.257-.146.578-.287.857-.446v1.35c-1.072.609-1.929 1.213-3 1.817-1.02-.574-1.984-1.238-3-1.813v-3.642c.883-.502 1.556-1.008 2.456-1.518l.54-.3c1.071.6 1.928 1.209 3.004 1.813v1.354c-.274-.158-.587-.308-.857-.458zm-.429.012v.73c-.557-.245-1.153-.494-1.714-.73-.172.086-.377.215-.544.3.75.215 1.555.412 2.254.613v.918c-.527.3-1.179.595-1.706.895-.544-.304-1.196-.604-1.718-.9v-.685c.561.17 1.2.398 1.714.685l.557-.313c-.75-.214-1.569-.411-2.267-.608v-.913c.531-.296 1.183-.596 1.714-.896.536.305 1.187.604 1.71.9zm.707.6.082.043.154.086-.111.069-.12.068-.06-.03-.18-.103.154-.085zm.215.523.077-.043-.013-.14-.013-.117-.129.073-.09.052v.06l.013.201.159-.086zm-.493-.025v-.266l.223.111v.262z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGuild.displayName = 'Guild'

export default IconGuild
