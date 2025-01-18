import * as path from 'path'
import fs from 'fs'
import { parse as parseSVG } from 'svg-parser'

interface ColorInfo {
  color: string
  area: number
}

function calculatePathArea(d: string): number {
  // Simple approximation: count the number of commands in the path
  // More complex paths will have more commands, roughly correlating with size
  return (d.match(/[MLHVCSQTAZ]/gi) || []).length
}

function extractGradientAndColor(svgContent: string): { color: string; defs: string | null } {
  const ast = parseSVG(svgContent)
  const colorAreas: Record<string, ColorInfo> = {}
  let gradientDefs: string | null = null

  // Extract gradient definition if it exists
  const defsMatch = svgContent.match(/<defs>[\s\S]*?<\/defs>/)
  if (defsMatch) {
    gradientDefs = defsMatch[0]
  }

  function traverse(node: any) {
    if (node?.properties) {
      const { fill, stroke, d } = node.properties
      const pathArea = d ? calculatePathArea(d) : 1

      if (fill && fill !== 'none' && fill !== 'white') {
        if (fill.startsWith('url(#')) {
          if (gradientDefs) return
        } else {
          if (!colorAreas[fill]) {
            colorAreas[fill] = { color: fill, area: pathArea }
          } else {
            colorAreas[fill].area += pathArea
          }
        }
      }
      if (stroke && stroke !== 'none' && stroke !== 'white') {
        if (!colorAreas[stroke]) {
          colorAreas[stroke] = { color: stroke, area: pathArea * 0.5 } // Strokes count for less area
        } else {
          colorAreas[stroke].area += pathArea * 0.5
        }
      }
    }
    if (node?.children) {
      node.children.forEach(traverse)
    }
  }

  traverse(ast)

  const dominantColor =
    Object.values(colorAreas).length > 0
      ? (Object.values(colorAreas).sort((a, b) => b.area - a.area)[0]?.color ?? '#000000')
      : gradientDefs
        ? `url(#${gradientDefs.match(/id="([^"]*)"/)![1]})`
        : '#000000'

  return { color: dominantColor, defs: gradientDefs }
}

function createBackgroundVariant(svg: string, color: string, gradientDefs: string | null): string {
  // Insert gradient defs and background rect
  let result = svg.replace(
    /<svg([^>]*)>/,
    `<svg$1>${gradientDefs || ''}<rect width="24" height="24" fill="${color}"/>`,
  )

  return result
}

export function generateBackgroundVariants(
  brandedDir: string,
  monoDir: string,
  outputDir: string,
): void {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const brandedFiles = fs.readdirSync(brandedDir)

  brandedFiles.forEach((file) => {
    if (!file.endsWith('.svg')) return

    const brandedContent = fs.readFileSync(path.join(brandedDir, file), 'utf-8')
    const monoPath = path.join(monoDir, file)
    const monoContent = fs.existsSync(monoPath) ? fs.readFileSync(monoPath, 'utf-8') : null

    const { color: dominantColor, defs: gradientDefs } = extractGradientAndColor(brandedContent)
    console.log(`Processing ${file}: ${dominantColor}`)

    const backgroundVariant = createBackgroundVariant(
      monoContent ?? brandedContent,
      monoContent ? dominantColor : '#fff',
      gradientDefs,
    )

    fs.writeFileSync(path.join(outputDir, file), backgroundVariant)
  })
}

// generateBackgroundVariants(
//   path.join(SVG_TOKENS_SRC_DIR, 'branded'),
//   path.join(SVG_TOKENS_SRC_DIR, 'mono'),
//   path.join(SVG_TOKENS_SRC_DIR, 'background'),
// )
