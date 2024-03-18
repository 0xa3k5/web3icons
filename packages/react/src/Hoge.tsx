import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconHoge = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m14.906 10.972-2.914-4.475c.394.035.771.12.908.159l2.58 4.011a2.2 2.2 0 0 1-.574.3zM6.57 12.754c-.523.828-.3 2.366-.026 3.3.185.489.639.755 1.068 1.012.99.6 3.043 1.517 5.447.428-.866-.27-2.027-2.811-2.88-3.955a3.24 3.24 0 0 0-2.263-1.355c-.527-.042-1.046.099-1.346.57"
      />
      <path
        fill="currentColor"
        d="M6.266 14.494c.364.635 1.221 1.586 2.498 1.586a2.77 2.77 0 0 0 2.272-1.187 16 16 0 0 0-.857-1.354 3.24 3.24 0 0 0-2.263-1.355c-.527-.042-1.046.099-1.346.57-.278.442-.343 1.093-.3 1.74z"
      />
      <path
        fill="currentColor"
        d="M4.714 12.656c.013-2.572 1.406-3.197 2.105-3.184.313 1.037.835 1.255 1.14 1.255.655 0 1.268-.93 1.414-1.371 1.74-.073 2.289.613 2.966 1.084.595.416 1.285.986 2.091.986.643 0 1.093-.257 1.239-.386l.621.343c-.103.626-.33 2.057-.42 2.811-.094.755.129 1.269.245 1.432-.27.557-.952 1.688-2.088 1.714-1.285.026-2.322-2.087-2.451-2.314-.129-.232-.921-1.714-1.774-2.486-.849-.771-1.775-.784-1.77-.771a3.6 3.6 0 0 1-.03-.973c-.266.274-.275.763-.245.973-2.55.115-2.023 3.227-1.444 4.77-.459-.159-1.611-.63-1.599-3.883"
      />
      <path
        fill="currentColor"
        d="m15.523 11.143.622.356-.056.364c-.36 2.43-.527 3.531-1.8 3.531-.913 0-1.839-1.092-2.726-2.147-.506-.6-.998-1.183-1.474-1.551a3.34 3.34 0 0 0-2.1-.716c-.013.253-.013.6.043.789-.005-.013.921 0 1.77.771.788.716 1.525 2.04 1.735 2.413l.039.073.038.073c.236.437 1.218 2.267 2.413 2.237 1.136-.022 1.818-1.149 2.088-1.714a2.15 2.15 0 0 1-.245-1.428c.09-.75.317-2.185.42-2.811l-.621-.343q-.054.045-.146.103m-7.654-.154a1.5 1.5 0 0 0-.112.78c-2.55.115-2.023 3.227-1.444 4.77a1.83 1.83 0 0 1-1.119-1.042c.12.116.309.236.429.142.047-.039.021-.296-.009-.635a10 10 0 0 1-.042-.552c-.043-.69-.052-1.423.231-2.07a2.27 2.27 0 0 1 2.066-1.393m8.85.025V7.783c2.168 2.151 2.567 3.831 2.567 4.389 0 .33-.056.668-.137.985-.21.819-.609 1.929-1.436 2.332-.716.351-1.513.043-1.423-1.145.073-.964.429-2.348.429-3.33"
      />
      <path
        fill="currentColor"
        d="M18.947 10.86c.262.613.339 1.067.339 1.307 0 .33-.056.669-.137.986-.21.819-.609 1.929-1.436 2.331-.716.352-1.513.043-1.423-1.144v-.06c.815-.021 2.053-.66 2.657-3.42m-7.962-5.207a6.5 6.5 0 0 0-1.616.489c1.131.042 3.33-.035 4.843.672a3.15 3.15 0 0 1 1.757 2.242l.291.201.073-1.714c-1.2-1.586-3.441-2.207-5.348-1.89M7.02 9.069c-.051.231.146.673.244.831.018.026.048.03.073.013a.064.064 0 0 0 .026-.077c-.06-.163-.171-.523-.129-.639.06-.154.472-.338 1.8-.3.03 0 .056-.013.069-.043.013-.021 0-.042-.03-.051-.3-.034-1.869-.159-2.053.266"
      />
      <path
        fill="currentColor"
        d="M8.392 6.484c-1.072.228-1.41.45-1.445.528l.853 1.56.416-.018c.304-.012 1.251-.025 1.268.373h.318L8.387 6.484zm2.764 2.756L9.613 6.386h.767l2.057 3.613c-.368-.343-1.007-.647-1.281-.759m1.688 1.059-2.28-3.913h.42l2.52 4.414a7 7 0 0 0-.66-.501"
      />
    </BaseIcon>
  ),
)

IconHoge.displayName = 'Hoge'

export default IconHoge