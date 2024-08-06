import fs from 'fs'
import path from 'path'
import {
  JSX_TOKENS_OUT_DIR,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  JSX_WALLETS_OUT_DIR,
} from '../constants'
import { componentScaffold } from '../scaffolds'
import { kebabToPascalCase } from './naming-conventions'
import { injectCurrentColor, readyForJSX } from './svg-optimization'
import prettier from 'prettier'
import { TType } from '../types'

/**
 * Generate React Component from an SVG.
 *
 * @param {string} baseName - The base name of the SVG file.
 * @param {string} jsxOutDir - The output directory for the JSX file.
 */
export const generateReactComponent = async (baseName: string, type: TType) => {
  let componentName: string
  switch (type) {
    case 'token':
      componentName = `Token${baseName.replace(/[- ]+/g, '_').toUpperCase()}`
      break
    case 'network':
      componentName = kebabToPascalCase(`${type}-${baseName}`)
      break
    case 'wallet':
      componentName = kebabToPascalCase(`${type}-${baseName}`)
      break
    default:
      throw new Error('Invalid type')
  }

  let svgOutDir: string
  let jsxOutDir: string
  switch (type) {
    case 'token':
      svgOutDir = SVG_TOKENS_OUT_DIR
      jsxOutDir = JSX_TOKENS_OUT_DIR
      break
    case 'network':
      svgOutDir = SVG_NETWORKS_OUT_DIR
      jsxOutDir = JSX_NETWORKS_OUT_DIR
      break
    case 'wallet':
      svgOutDir = SVG_WALLETS_OUT_DIR
      jsxOutDir = JSX_WALLETS_OUT_DIR
      break
    default:
      throw new Error('Invalid type')
  }

  const hasBrandedVariant = fs.existsSync(
    path.join(svgOutDir, 'branded', `${baseName}.svg`),
  )
  const hasMonoVariant = fs.existsSync(
    path.join(svgOutDir, 'mono', `${baseName}.svg`),
  )

  const brandedJSX = hasBrandedVariant
    ? readyForJSX(
        fs.readFileSync(
          path.join(svgOutDir, 'branded', `${baseName}.svg`),
          'utf-8',
        ),
      )
    : ''
  const monoJSX = hasMonoVariant
    ? readyForJSX(
        injectCurrentColor(
          fs.readFileSync(
            path.join(svgOutDir, 'mono', `${baseName}.svg`),
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
