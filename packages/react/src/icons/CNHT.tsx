import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconCNHT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.143 11.586c-2.195.073-3.857.422-3.857.843 0 .473 2.11.857 4.714.857s4.714-.384 4.714-.857c0-.42-1.662-.77-3.857-.843v1.271h-1.714z"
          />
          <path
            fill="currentColor"
            d="M6.613 5.572h10.75l3.209 6.987L12 21l-8.57-8.44zm4.53 8.124v3.875h1.714v-3.875c2.433-.101 4.288-.63 4.288-1.267 0-.638-1.855-1.167-4.288-1.268V9.857h3V8.143H8.143v1.714h3v1.304c-2.432.102-4.284.63-4.284 1.268 0 .636 1.852 1.165 4.284 1.267"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M17.363 5.572H6.613l-3.184 6.987L12 21l8.572-8.44z"
          />
          <path
            fill="#009F74"
            d="M12.002 13.714c2.84 0 5.143-.575 5.143-1.285s-2.303-1.286-5.143-1.286-5.143.576-5.143 1.286 2.303 1.285 5.143 1.285"
          />
          <path
            fill="#fff"
            d="M12 13.286c2.604 0 4.714-.384 4.714-.857 0-.474-2.11-.857-4.714-.857-2.603 0-4.714.383-4.714.857 0 .473 2.11.857 4.714.857"
          />
          <path
            fill="#009F74"
            d="M11.143 17.572v-3.973h1.714v3.973zm4.714-9.429H8.143v1.714h3v3h1.714v-3h3z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCNHT.displayName = 'CNHT'
