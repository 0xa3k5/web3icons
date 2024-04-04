import { optimize } from 'svgo'
import fs from 'fs'
import path from 'path'
import * as cheerio from 'cheerio'
import {
  JSX_TOKENS_OUT_DIR,
  SVG_TOKENS_OUT_DIR,
  METADATA_PATH,
  SVG_NETWORKS_OUT_DIR,
} from './constants'
import { componentScaffold } from './scaffolds'
import { ITokenMetadata } from './types'
import prettier from 'prettier'

/**
 * Creates a directory if it doesn't exist.
 *
 * @param {string} dirPath - The path to the directory to be created.
 */
export const ensureDirectoryExists = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }
}

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

export const toCamelCase = (str: string) => {
  return str.replace(/[-_]+(.)?/g, (match, chr) =>
    chr ? chr.toUpperCase() : '',
  )
}
/**
 *
 * @param str: kebab-case
 * @returns kebab-case to camelCase
 */
export const kebabToCamel = (str: string) => {
  return str
    .split('-')
    .map((part, index) => {
      if (index === 0) {
        return part
      }
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join('')
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

/**
 * Generate React Component from an SVG.
 *
 * @param {string} baseName - The base name of the SVG file.
 * @param {string} jsxOutDir - The output directory for the JSX file.
 */
export const generateReactComponent = async (
  baseName: string,
  jsxOutDir: string,
) => {
  const prefix = jsxOutDir === JSX_TOKENS_OUT_DIR ? 'Token' : 'Network'
  const componentName =
    jsxOutDir === JSX_TOKENS_OUT_DIR
      ? `${prefix}${baseName.replace(/[- ]+/g, '_').toLocaleUpperCase()}`
      : kebabToCamel(`${prefix}-${baseName}`)
  const svgDirs =
    jsxOutDir === JSX_TOKENS_OUT_DIR ? SVG_TOKENS_OUT_DIR : SVG_NETWORKS_OUT_DIR

  const hasBrandedVariant = fs.existsSync(
    path.join(svgDirs, 'branded', `${baseName}.svg`),
  )
  const hasMonoVariant = fs.existsSync(
    path.join(svgDirs, 'mono', `${baseName}.svg`),
  )

  const brandedJSX = hasBrandedVariant
    ? readyForJSX(
        fs.readFileSync(
          path.join(svgDirs, 'branded', `${baseName}.svg`),
          'utf-8',
        ),
      )
    : ''
  const monoJSX = hasMonoVariant
    ? readyForJSX(
        injectCurrentColor(
          fs.readFileSync(
            path.join(svgDirs, 'mono', `${baseName}.svg`),
            'utf-8',
          ),
        ),
      )
    : ''

  const scaffoldTemplate =
    hasBrandedVariant && hasMonoVariant
      ? componentScaffold.multiVariants
      : componentScaffold.singleVariant

  const componentContent = scaffoldTemplate
    .replace(/{{componentName}}/g, componentName)
    .replace(/{{brandedJSX}}/g, brandedJSX)
    .replace(/{{monoJSX}}/g, monoJSX)
    .replace(/{{variantJSX}}/g, hasMonoVariant ? monoJSX : brandedJSX)
    .replace(/{{displayName}}/g, baseName)

  const formatted = await prettier.format(componentContent, {
    parser: 'typescript',
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
  })

  fs.writeFileSync(path.join(jsxOutDir, `${componentName}.tsx`), formatted)
}
