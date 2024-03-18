import { optimize } from 'svgo'
import fs from 'fs'
import path from 'path'
import * as cheerio from 'cheerio'
import { JSX_OUTPUT_DIR } from './constants'
import {
  componentBaseScaffold,
  componentScaffold,
  componentTypesScaffold,
} from './scaffolds'

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

export const normalizeComponentName = (filename: string): string => {
  // handle 0x prefix
  const has0xPrefix = filename.startsWith('0x')
  const nameWithoutPrefix = has0xPrefix ? filename.slice(2) : filename

  // replace hyphens and spaces with underscores, make all letters lowercase
  const name = nameWithoutPrefix.replace(/[- ]+/g, '_').toLowerCase()

  // convert to PascalCase
  const pascalCaseName = toPasCalCase(name)

  return has0xPrefix ? `0x${pascalCaseName}` : pascalCaseName
}

const toCamelCase = (str: string) => {
  return str.replace(/[-_]+(.)?/g, (match, chr) =>
    chr ? chr.toUpperCase() : '',
  )
}

const toPasCalCase = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toUpperCase() : word.toLowerCase(),
    )
    .replace(/\s+/g, '')
    .replace(/_/g, '')
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

export const generateTypesFile = () => {
  fs.writeFileSync(
    path.join(JSX_OUTPUT_DIR, 'types.ts'),
    componentTypesScaffold,
  )
}

export const generateBaseIconComponent = () => {
  console.log(`❖ generated BaseIcon component`)
  fs.writeFileSync(
    path.join(JSX_OUTPUT_DIR, 'BaseIcon.tsx'),
    componentBaseScaffold,
  )
}

export const generateReactComponent = async (baseName: string) => {
  const name = normalizeComponentName(baseName)
  let brandedSVG = ''
  let monoSVG = ''
  const hasBrandedVariant = fs.existsSync(
    path.join(__dirname, './optimized-svgs/branded', `${baseName}.svg`),
  )
  const hasMonoVariant = fs.existsSync(
    path.join(__dirname, './optimized-svgs/mono', `${baseName}.svg`),
  )
  const hasBothVariants = hasBrandedVariant && hasMonoVariant

  if (hasBrandedVariant) {
    brandedSVG = fs.readFileSync(
      path.join(__dirname, './optimized-svgs/branded', `${baseName}.svg`),
      'utf-8',
    )
  }

  if (hasMonoVariant) {
    monoSVG = fs.readFileSync(
      path.join(__dirname, './optimized-svgs/mono', `${baseName}.svg`),
      'utf-8',
    )
  }

  const brandedJSX = readyForJSX(brandedSVG)
  const monoJSX = readyForJSX(injectCurrentColor(monoSVG))
  const scaffold = hasBothVariants
    ? componentScaffold.multiVariants
    : componentScaffold.singleVariant
  const variantJSX = hasMonoVariant ? monoJSX : brandedJSX

  if (hasMonoVariant && !hasBrandedVariant) {
    console.log(
      `❖ no branded variant found for ${baseName}, using mono variant`,
    )
  }

  const iconComponentContent = scaffold
    .replace(/{{componentName}}/g, `Icon${name}`)
    .replace(/{{variantJSX}}/g, variantJSX)
    .replace(/{{brandedJSX}}/g, brandedJSX)
    .replace(/{{monoJSX}}/g, monoJSX)
    .replace(/{{displayName}}/g, name)

  console.log(`❖ generated ${name} component`)
  fs.writeFileSync(
    path.join(JSX_OUTPUT_DIR, `${name}.tsx`),
    iconComponentContent,
  )
}
