import * as cheerio from 'cheerio'
import type { IconNode, IconNodeElement } from '@web3icons/common'

/**
 * Convert SVG string to IconNode data structure.
 * This transforms SVG markup into a JSON-serializable format
 * that can be used with the createWeb3Icon factory.
 *
 * @param svgContent - SVG markup string (already processed/optimized)
 * @returns IconNode array representing the SVG structure
 *
 */
export function svgToIconNode(svgContent: string): IconNode {
  const wrappedContent = svgContent.trim().startsWith('<svg')
    ? svgContent
    : `<svg>${svgContent}</svg>`

  const $ = cheerio.load(wrappedContent, {
    xmlMode: true,
  })

  const nodes: IconNode = []

  $('svg')
    .children()
    .each((_, elem) => {
      const node = parseElement($, elem)
      if (node) {
        nodes.push(node)
      }
    })

  return nodes
}

/**
 * Recursively parse a DOM element into IconNode format
 */
function parseElement(
  $: cheerio.CheerioAPI,
  elem: any,
): IconNodeElement | null {
  // Skip text nodes and comments
  if (elem.type === 'text' || elem.type === 'comment') {
    return null
  }

  const $elem = $(elem)
  const tagName = elem.name
  const attributes: Record<string, any> = {}

  // Extract all attributes
  const attribs = elem.attribs || {}
  for (const [key, value] of Object.entries(attribs)) {
    // Convert attribute names to camelCase for React
    const reactKey = convertAttributeName(key)
    attributes[reactKey] = value
  }

  // Parse children recursively
  const children: IconNode = []
  $elem.children().each((_, child) => {
    const childNode = parseElement($, child)
    if (childNode) {
      children.push(childNode)
    }
  })

  // Return element with children if present
  if (children.length > 0) {
    return [tagName, attributes, children]
  }

  return [tagName, attributes]
}

/**
 * Convert SVG/HTML attribute names to React-compatible names
 */
function convertAttributeName(name: string): string {
  const conversions: Record<string, string> = {
    class: 'className',
    'clip-path': 'clipPath',
    'clip-rule': 'clipRule',
    'fill-opacity': 'fillOpacity',
    'fill-rule': 'fillRule',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity',
    'stroke-width': 'strokeWidth',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    gradientunits: 'gradientUnits',
    gradienttransform: 'gradientTransform',
    patternunits: 'patternUnits',
    patterntransform: 'patternTransform',
    viewbox: 'viewBox',
  }

  return conversions[name.toLowerCase()] || name
}
