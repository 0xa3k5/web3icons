import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAa = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.276 10.714 6.377 9l.15.3.223-.3 3.107 6H7.672c-.073.009-.25-.03-.326-.274-.06-.189-.857-1.779-1.505-3.047a.7.7 0 0 0-.287-.292.6.6 0 0 0-.454.236l-.77 1.097h.981c.686 0 1.286.467 1.286 1.14S5.996 15 5.31 15H2.242l1.43-2.143h-.788c-.643 0-1.17-.428-1.17-1.071s.523-1.072 1.17-1.072zm.223 4.089c.45-.112.93-.463.93-.943s-.48-.831-.93-.943a1.136 1.136 0 0 1 0 1.886M3.857 12.72h.21l.9-1.191a.8.8 0 0 1 .27-.223.69.69 0 0 0-.566.27l-.458.604zm5.426 2.117h.313l-2.872-5.52-.111.154zm1.86-3.454v1.234h2.314a.705.705 0 0 1 .493.669c0 .373-.317.668-.711.668h-2.953V15h3.317c1.037 0 1.826-.643 1.826-1.629 0-.677-.45-1.054-.763-1.371.313-.317.763-.6.763-1.311 0-.986-.789-1.689-1.826-1.689h-3.317v1.046h2.953c.394 0 .711.364.711.737 0 .304-.206.514-.497.6zm3.249.617c.385.394.84.771.84 1.371 0 .9-.785 1.44-1.63 1.44h-3.12v-.668h2.757c.505 0 .912-.377.912-.857 0-.403-.222-.857-.664-.857h-2.13v-.858h2.13c.442 0 .665-.385.665-.788a.943.943 0 0 0-.913-.926h-2.756V9.19h3.12c.934 0 1.629.625 1.629 1.5 0 .6-.46.925-.84 1.311m1.894-1.217c0-.986.848-1.783 1.894-1.783h3.677v1.071H18.72c-.398 0-.72.27-.72.643 0 .3.214.557.502.643h1.89a1.903 1.903 0 0 1 1.894 1.86c0 .986-.849 1.783-1.895 1.783h-3.677V13.93h3.138c.398 0 .72-.27.72-.643 0-.3-.215-.557-.502-.643h-1.89a1.903 1.903 0 0 1-1.894-1.86"
          />
        </>
      ) : (
        <>
          <path
            fill="#7AEEAD"
            d="M5.275 10.714 6.377 9l.15.3.223-.3 3.107 6H7.67c-.073.009-.249-.03-.326-.274-.06-.189-.857-1.779-1.504-3.047a.7.7 0 0 0-.287-.292.6.6 0 0 0-.454.236l-.772 1.097h.982c.685 0 1.285.467 1.285 1.14S5.995 15 5.31 15H2.24l1.431-2.143h-.788c-.643 0-1.17-.428-1.17-1.071s.523-1.072 1.17-1.072zm.223 4.089c.45-.112.93-.463.93-.943s-.48-.831-.93-.943a1.136 1.136 0 0 1 0 1.886M3.857 12.72h.21l.9-1.191a.8.8 0 0 1 .27-.223.69.69 0 0 0-.566.27l-.459.604zm5.425 2.117h.313l-2.871-5.52-.112.154zm1.86-3.454v1.234h2.315a.705.705 0 0 1 .493.669c0 .373-.318.668-.712.668h-2.953V15h3.317c1.038 0 1.826-.643 1.826-1.629 0-.677-.45-1.054-.763-1.371.313-.317.763-.6.763-1.311 0-.986-.788-1.689-1.826-1.689h-3.317v1.046h2.953c.394 0 .712.364.712.737 0 .304-.206.514-.498.6zm3.249.617c.386.394.84.771.84 1.371 0 .9-.784 1.44-1.629 1.44h-3.12v-.668h2.756c.506 0 .913-.377.913-.857 0-.403-.223-.857-.664-.857h-2.13v-.858h2.13c.441 0 .664-.385.664-.788a.943.943 0 0 0-.913-.926h-2.756V9.19h3.12c.935 0 1.629.625 1.629 1.5 0 .6-.459.925-.84 1.311m1.894-1.217c0-.986.849-1.783 1.895-1.783h3.677v1.071H18.72c-.399 0-.72.27-.72.643 0 .3.214.557.501.643h1.89a1.903 1.903 0 0 1 1.894 1.86c0 .986-.848 1.783-1.894 1.783h-3.677V13.93h3.137c.399 0 .72-.27.72-.643 0-.3-.214-.557-.501-.643h-1.89a1.903 1.903 0 0 1-1.895-1.86"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAa.displayName = 'Aa'

export default IconAa
