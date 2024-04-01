import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconLORDS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m5.555 17.143-.412-2.593h.304a2.85 2.85 0 0 0 1.457 1.95h2.173c.459 0 .832-.283.832-.745v-.815c-1.886-.86-2.207-2.94-2.195-3.87 0-2.074 1.136-3.244 1.77-3.565l-1.11-.438v-.21H9.43V5.143h.578v.844c0 .485.386.87.87.87.48 0 .87-.385.87-.87v-.844h.506v.844c0 .485.386.879.87.879.48 0 .87-.394.87-.879v-.844h.579v1.714h1.054v.21l-1.11.438c.634.32 1.77 1.49 1.77 3.565.013.93-.304 3.009-2.194 3.866v.814c0 .467.372.75.831.75h2.173a2.84 2.84 0 0 0 1.457-1.95h.304l-.411 2.593h-5.16V7.714h-2.572v9.43zm4.302-3.236V8.23c-.428.278-1.285 1.238-1.285 2.828 0 1.595.857 2.563 1.285 2.85m4.286 0V8.23c.429.278 1.286 1.238 1.286 2.828 0 1.595-.857 2.563-1.286 2.85"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconLORDS.displayName = 'LORDS'
