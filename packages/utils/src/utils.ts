import { optimize } from 'svgo'
import fs from 'fs'
import path from 'path'
import * as cheerio from 'cheerio'
import {
  JSX_OUTPUT_DIR,
  SVG_OUTPUT_DIR,
  METADATA_PATH,
  reactRoot,
} from './constants'
import {
  componentBaseScaffold,
  componentScaffold,
  componentTokenIconScaffold,
  componentTypesScaffold,
} from './scaffolds'
import { ITokenMetadata } from './types'

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

const toCamelCase = (str: string) => {
  return str.replace(/[-_]+(.)?/g, (match, chr) =>
    chr ? chr.toUpperCase() : '',
  )
}

const injectCurrentColor = (svgRaw: string) => {
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

const styleStringToObject = (styleString: string) => {
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

const readyForJSX = (svgRaw: string) => {
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

export const appendToMetadataJson = (coin: ITokenMetadata) => {
  let fileContent = fs.existsSync(METADATA_PATH)
    ? fs.readFileSync(METADATA_PATH, 'utf-8')
    : '[]'

  // remove the "]" at the end
  if (fileContent.length > 2) {
    fileContent = fileContent.slice(0, -1)
  }

  // append the new coin data
  const separator = fileContent.length > 2 ? ',' : ''
  fileContent += `${separator}\n${JSON.stringify(coin, null, 2)}]`

  fs.writeFileSync(METADATA_PATH, fileContent)
}

export const generateTypesFile = () => {
  fs.writeFileSync(
    path.join(reactRoot, 'src', 'types.ts'),
    componentTypesScaffold,
  )
}

export const generateBaseIconComponent = () => {
  fs.writeFileSync(
    path.join(reactRoot, 'src', 'BaseIcon.tsx'),
    componentBaseScaffold,
  )
  console.log(`❖ generated BaseIcon component`)
}

export const generateTokenIconComponent = () => {
  fs.writeFileSync(
    path.join(reactRoot, 'src', 'TokenIcon.tsx'),
    componentTokenIconScaffold,
  )
  console.log(`❖ generated TokenIcon component`)
}

export const generateReactComponent = (baseName: string) => {
  const name = `${baseName.replace(/[- ]+/g, '_').toLocaleUpperCase()}`
  let brandedSVG = ''
  let monoSVG = ''
  const hasBrandedVariant = fs.existsSync(
    path.join(SVG_OUTPUT_DIR, 'branded', `${baseName}.svg`),
  )
  const hasMonoVariant = fs.existsSync(
    path.join(SVG_OUTPUT_DIR, 'mono', `${baseName}.svg`),
  )
  const hasBothVariants = hasBrandedVariant && hasMonoVariant

  if (hasBrandedVariant) {
    brandedSVG = fs.readFileSync(
      path.join(SVG_OUTPUT_DIR, 'branded', `${baseName}.svg`),
      'utf-8',
    )
  }

  if (hasMonoVariant) {
    monoSVG = fs.readFileSync(
      path.join(SVG_OUTPUT_DIR, 'mono', `${baseName}.svg`),
      'utf-8',
    )
  }

  const brandedJSX = readyForJSX(brandedSVG)
  const monoJSX = readyForJSX(injectCurrentColor(monoSVG))
  const content = hasBothVariants
    ? componentScaffold.multiVariants
    : componentScaffold.singleVariant

  const scaffold = content
    .replace(/{{componentName}}/g, `Icon${name}`)
    .replace(/{{variantJSX}}/g, hasMonoVariant ? monoJSX : brandedJSX)
    .replace(/{{brandedJSX}}/g, brandedJSX)
    .replace(/{{monoJSX}}/g, monoJSX)
    .replace(/{{displayName}}/g, name)

  fs.writeFileSync(path.join(JSX_OUTPUT_DIR, `${name}.tsx`), scaffold)
}
