import fs from 'fs'
import path from 'path'
import {
  JSX_TOKENS_OUT_DIR,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
} from '../constants'
import { componentScaffold } from '../scaffolds'
import { kebabToCamel } from './naming-conventions'
import { injectCurrentColor, readyForJSX } from './svg-optimization'
import prettier from 'prettier'

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
