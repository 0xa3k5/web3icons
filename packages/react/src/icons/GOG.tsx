import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconGOG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M17.571 12.223v5.597a.18.18 0 0 1-.104.165.15.15 0 0 1-.153-.01l-.776-.386-.964-.446A5.94 5.94 0 0 1 12.36 18c-3.591 0-6.806-2.554-6.789-6.244 0-.763.146-1.53.425-2.255a5.8 5.8 0 0 1 1.273-1.988 6.3 6.3 0 0 1 2.117-1.406 7.6 7.6 0 0 1 2.97-.536c.93 0 1.855.146 2.742.429a6 6 0 0 1 2.362 1.414.205.205 0 0 1 0 .275l-2.469 2.1c-.051.042-.107.072-.162.068q-.078 0-.13-.103c-.63-1.157-1.778-2.473-3.128-2.468-1.95.008-2.55 2.143-2.571 3.857-.034 2.914 2.237 5.143 5.143 5.143v-4.08l-.416-1.252a.15.15 0 0 1 .017-.154.17.17 0 0 1 .155-.086h3.917a.17.17 0 0 1 .154.086.15.15 0 0 1 .017.154z"
      />
    </BaseIcon>
  ),
)

IconGOG.displayName = 'GOG'
