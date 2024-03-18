import { EventHandler } from '@create-figma-plugin/utilities'

export interface ResizeWindowHandler extends EventHandler {
  name: 'RESIZE_WINDOW'
  handler: (windowSize: { width: number; height: number }) => void
}

export interface InsertSvgsHandler extends EventHandler {
  name: 'INSERT_SVGS'
  handler: (svgs: SvgIcon[]) => void
}

export interface SvgIcon {
  name: string
  svg: string
}
