import { on, showUI } from '@create-figma-plugin/utilities'
import { InsertSvgsHandler, ResizeWindowHandler, SvgIcon } from './types'

const FRAME_SIZE = 24
const SPACING = 10
const ICONS_PER_ROW = 10

function createAndArrangeIcons(svgs: SvgIcon[]) {
  const centerX = figma.viewport.center.x
  const centerY = figma.viewport.center.y
  const totalWidth = ICONS_PER_ROW * (FRAME_SIZE + SPACING) - SPACING
  let startX = centerX - totalWidth / 2
  let startY = centerY - FRAME_SIZE / 2

  let nodes: FrameNode[] = []

  svgs.forEach((svg, index) => {
    const frame = figma.createNodeFromSvg(cleanSvgString(svg.svg))
    frame.name = svg.name
    frame.resize(FRAME_SIZE, FRAME_SIZE)
    frame.x = startX + (index % ICONS_PER_ROW) * (FRAME_SIZE + SPACING)
    frame.y =
      startY + Math.floor(index / ICONS_PER_ROW) * (FRAME_SIZE + SPACING)

    // check if we need to move to the next row
    if ((index + 1) % ICONS_PER_ROW === 0) {
      startX = centerX - totalWidth / 2
      startY += FRAME_SIZE + SPACING
    }

    nodes.push(frame)
  })

  figma.currentPage.selection = nodes
  figma.viewport.scrollAndZoomIntoView(nodes)
}

export default function () {
  on<InsertSvgsHandler>('INSERT_SVGS', (svgs: SvgIcon[]): void => {
    createAndArrangeIcons(svgs)
  })

  showUI({
    themeColors: false,
    width: 420,
    height: 640,
  })

  on<ResizeWindowHandler>(
    'RESIZE_WINDOW',
    (windowSize: { width: number; height: number }): void => {
      const { width, height } = windowSize
      figma.ui.resize(width, height)
    },
  )
}

function cleanSvgString(svgString: string) {
  let decodedString = decodeURIComponent(svgString)
  decodedString = decodedString.replace(/\s+/g, ' ').trim()
  return decodedString
}
