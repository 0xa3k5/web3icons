import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBelt = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.714 17.799v-4.085h2.572v2.293c0 .154.124.279.274.279h3.171c.699 0 1.269-.823 1.269-1.535 0-.707-.583-1.457-1.286-1.457h-3v-2.58h3.009c.707 0 1.277-.758 1.277-1.47 0-.715-.57-1.53-1.277-1.53H10.56a.28.28 0 0 0-.274.279v2.293H7.714V6.202c0-.348.279-.63.622-.63h5.554c2.036 0 3.681 2.091 3.681 4.144-.03.471-.278 1.577-1.063 2.207.356.373 1.063 1.414 1.063 2.563 0 1.941-1.555 3.943-3.48 3.943H8.336a.627.627 0 0 1-.622-.63m5.666-5.812a.313.313 0 0 1-.626 0c0-.171.142-.317.313-.317s.313.142.313.317m-1.239 0a.311.311 0 1 1-.621 0c0-.171.141-.317.313-.317.171 0 .308.142.308.317m-4.855 1.299v-2.572H6.96c-.63 0-1.389.575-1.389 1.286s.759 1.286 1.389 1.286zm.574-2.572c-.082 0-.146.077-.146.172v2.228c0 .095.064.172.146.172h2.28c.081 0 .146-.077.146-.172v-2.228c0-.095-.065-.172-.146-.172zm.394.429c-.06 0-.111.056-.111.128v1.458c0 .073.051.128.111.128h1.492c.06 0 .111-.055.111-.128v-.45h-.681c-.133 0-.24-.129-.24-.283 0-.159.107-.283.24-.283h.681v-.446c0-.068-.051-.124-.111-.124z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FCB251"
            d="M7.714 17.799v-4.085h2.572v2.293c0 .154.124.279.274.279h3.171c.699 0 1.269-.823 1.269-1.535 0-.707-.583-1.457-1.286-1.457h-3v-2.58h3.009c.707 0 1.277-.758 1.277-1.47 0-.715-.57-1.53-1.277-1.53H10.56a.28.28 0 0 0-.274.279v2.293H7.714V6.202c0-.348.279-.63.622-.63h5.554c2.036 0 3.681 2.091 3.681 4.144-.03.471-.278 1.577-1.063 2.207.356.373 1.063 1.414 1.063 2.563 0 1.941-1.555 3.943-3.48 3.943H8.336a.627.627 0 0 1-.622-.63m5.666-5.812a.313.313 0 0 1-.626 0c0-.171.142-.317.313-.317s.313.142.313.317m-1.239 0a.311.311 0 1 1-.621 0c0-.171.141-.317.313-.317.171 0 .308.142.308.317m-4.855 1.299v-2.572H6.96c-.63 0-1.389.575-1.389 1.286s.759 1.286 1.389 1.286zm.574-2.572c-.082 0-.146.077-.146.172v2.228c0 .095.064.172.146.172h2.28c.081 0 .146-.077.146-.172v-2.228c0-.095-.065-.172-.146-.172zm.394.429c-.06 0-.111.056-.111.128v1.458c0 .073.051.128.111.128h1.492c.06 0 .111-.055.111-.128v-.45h-.681c-.133 0-.24-.129-.24-.283 0-.159.107-.283.24-.283h.681v-.446c0-.068-.051-.124-.111-.124z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBelt.displayName = 'Belt'

export default IconBelt
