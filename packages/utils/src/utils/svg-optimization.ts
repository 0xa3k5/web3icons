import { optimize } from 'svgo'
import * as cheerio from 'cheerio'
import { toCamelCase } from './naming-conventions'
/**
 * Optimize SVG and return as string.
 *
 * @param {string} svg - The SVG content to be optimized.
 * @param {string} name - The name to be used as a prefix for IDs within the SVG.
 * @returns {string} The optimized SVG data.
 */
export const optimizeSvg = (svg: string, name: string) => {
  return optimize(svg, {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      { name: 'prefixIds', params: { prefix: name } },
    ],
    multipass: true,
    js2svg: { pretty: true },
  }).data
}

export const injectCurrentColor = (svgRaw: string) => {
  const $ = cheerio.load(svgRaw, { xmlMode: true })
  $('*').each((_, el) => {
    if (el.type !== 'tag') return
    Object.keys(el.attribs).forEach((attrKey) => {
      if (['fill', 'stroke'].includes(attrKey)) {
        const val = $(el).attr(attrKey)
        if (val !== 'none') {
          $(el).attr(attrKey, 'currentColor')
        }
      }
    })
  })
  return $.xml()
}

export const styleStringToObject = (styleString: string) => {
  const styleObject: Record<string, string> = {}
  styleString.split(';').forEach((style) => {
    let [key, value] = style.split(':')
    if (key && value) {
      key = toCamelCase(key.trim())
      styleObject[key] = value.trim()
    }
  })
  return styleObject
}

export const readyForJSX = (svgRaw: string) => {
  const $ = cheerio.load(svgRaw, { xmlMode: true })

  $('*').each((_, el) => {
    if (el.type !== 'tag') return

    const element = $(el)
    Object.entries(el.attribs).forEach(([attrKey, attrValue]) => {
      const newKey = attrKey.includes('-') ? toCamelCase(attrKey) : attrKey

      if (newKey === 'class') {
        element.attr('className', attrValue).removeAttr(attrKey)
      } else if (newKey === 'style') {
        const styleObject = styleStringToObject(attrValue)
        element.attr('style', JSON.stringify(styleObject)).removeAttr('style')
      } else {
        element.attr(newKey, attrValue)
        if (newKey !== attrKey) {
          element.removeAttr(attrKey)
        }
      }
    })
  })
  return $('svg').html() || ''
}
