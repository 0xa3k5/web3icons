import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconDerc = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M8.379 5.67c1.18-.33 2.396-.508 3.621-.527.994 0 2.43.18 3.621.527.596.171 1.158.394 1.586.669.403.265.793.66.793 1.2v8.258c0 .373-.163.733-.459.977a24 24 0 0 1-2.412 1.732 12 12 0 0 1-1.582.835c-.518.215-1.058.373-1.547.373s-1.028-.154-1.547-.373q-.826-.356-1.586-.835a24 24 0 0 1-2.408-1.732A1.25 1.25 0 0 1 6 15.797V7.543c0-.54.386-.934.797-1.2.424-.274.986-.497 1.582-.669zM7.264 7.059c-.338.218-.407.385-.407.48v8.258c0 .129.056.24.142.313a25 25 0 0 0 2.322 1.667q.702.442 1.462.771a3.3 3.3 0 0 0 1.217.31 3.3 3.3 0 0 0 1.217-.31q.76-.33 1.462-.77a24 24 0 0 0 2.323-1.672.4.4 0 0 0 .14-.309V7.543c0-.09-.068-.257-.406-.48a5.2 5.2 0 0 0-1.35-.566A13.4 13.4 0 0 0 12 6c-.917 0-2.271.171-3.386.493-.557.163-1.028.356-1.35.566"
      />
      <path
        fill="currentColor"
        d="m8.379 10.916-1.843 1.988v3.549h1.47c1.521-.364 2.417-1.149 2.674-1.496.373.309 1.093.223 1.406.146h1.05c.467 0 .368.583.193.84-.146.21-.416.523-.566.694h-.412a.15.15 0 0 0-.102.043c-.296.27-.42.656-.459.9-.013.086.056.15.142.15h.518l.733-.557a.4.4 0 0 0 .283.103c.321 0 .343-.549.441-.823.189-.549.395-.84.395-1.307 0-.6-.506-.785-.772-.806-.386-.026-.403-.249-.188-.446.205-.188.544-.471.724-.386.261.13.488.52.6.772.09.201.201.231.244.223v.141c-.146.022-.377.343-.33.549.116.48.36.784.527.784.137 0 .287-.326.347-.493.099-.24.215-.883.159-1.294-.026-.197-.626-.643-.853-.896a2.3 2.3 0 0 1-.236-.3c-.188-.36-.441-.428-.57-.428-.33 0-.523.338-.835.338-.695 0-.656-1.037-.647-1.191.008-.15-.01-.24-.275-.484-.261-.24-.27-.943.116-.943.304 0 .407.471.42.703.03.351 0 1.251.677 1.251.553 0 .703-1.393.759-1.822.055-.428.257-1.07.527-1.07.214 0 .265.385.261.578.617-.973-.497-1.522-.655-1.646-.13-.099-.16-.219-.16-.266V7.68c-.115.103-.398.086-.526.064-.459-.767-1.547-.437-2.233-.347-.291-.386-.54-.274-.63-.171l-.459.647a.38.38 0 0 1-.313.158h-.767c.45.125.703.588.245.772-.369.137-.699-.146-.815-.309-.034.3.086.506.253.733.257.352.159.48.064.502-.617-.052-1.067.54-1.135.557.69-.112.741.428.557.63z"
      />
    </BaseIcon>
  ),
)

IconDerc.displayName = 'Derc'

export default IconDerc
