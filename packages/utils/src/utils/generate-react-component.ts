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
import { TType, TVariant } from '@web3icons/common'
import { generateSVGDataURL } from './generate-dataurl-from-svg'

/**
 * Generate React Component from an SVG.
 *
 * @param {string} baseName - The base name of the SVG file.
 * @param {TType} type - The type of the component (token, network, wallet).
 */
export const generateReactComponent = async (baseName: string, type: TType) => {
  const componentName = generateComponentName(baseName, type)
  const { svgOutDir, jsxOutDir } = getDirectories(type)

  // Determine available variants
  const variants = getAvailableVariants(svgOutDir, baseName)

  const brandedJSX = variants.includes('branded')
    ? readyForJSX(loadSVG(svgOutDir, baseName, 'branded'))
    : ''
  const monoJSX = variants.includes('mono')
    ? readyForJSX(injectCurrentColor(loadSVG(svgOutDir, baseName, 'mono')))
    : ''

  const variantDataURLs = generateVariantDataURLs(variants, svgOutDir, baseName)

  const jsDocComment = generateJSDoc(componentName, variants, variantDataURLs)

  const scaffoldTemplate = selectScaffold(variants)

  const componentContent = scaffoldTemplate
    .replace(/{{componentName}}/g, componentName)
    .replace(/{{brandedJSX}}/g, brandedJSX)
    .replace(/{{monoJSX}}/g, monoJSX)
    .replace(/{{variantJSX}}/g, variants.includes('mono') ? monoJSX : brandedJSX)
    .replace(/{{displayName}}/g, generateComponentName(baseName, type))
    .replace(/{{jsDocComment}}/g, jsDocComment)

  const formatted = await prettier.format(componentContent, {
    parser: 'typescript',
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
  })

  fs.writeFileSync(path.join(jsxOutDir, `${componentName}.tsx`), formatted)
}

/**
 * Generate the component name based on the type.
 */
const generateComponentName = (baseName: string, type: TType): string => {
  switch (type) {
    case 'token':
      return `Token${baseName.replace(/[- ]+/g, '_').toUpperCase()}`
    case 'network':
    case 'wallet':
      return kebabToPascalCase(`${type}-${baseName}`)
    default:
      throw new Error('Invalid type')
  }
}

/**
 * Get the appropriate directories for SVG and JSX output based on the type.
 */
const getDirectories = (type: TType): { svgOutDir: string; jsxOutDir: string } => {
  switch (type) {
    case 'token':
      return { svgOutDir: SVG_TOKENS_OUT_DIR, jsxOutDir: JSX_TOKENS_OUT_DIR }
    case 'network':
      return { svgOutDir: SVG_NETWORKS_OUT_DIR, jsxOutDir: JSX_NETWORKS_OUT_DIR }
    case 'wallet':
      return { svgOutDir: SVG_WALLETS_OUT_DIR, jsxOutDir: JSX_WALLETS_OUT_DIR }
    default:
      throw new Error('Invalid type')
  }
}

/**
 * Get available variants ('branded', 'mono') for the given SVG file.
 */
const getAvailableVariants = (svgOutDir: string, baseName: string): TVariant[] => {
  const variants: TVariant[] = []
  if (fs.existsSync(path.join(svgOutDir, 'branded', `${baseName}.svg`))) {
    variants.push('branded')
  }
  if (fs.existsSync(path.join(svgOutDir, 'mono', `${baseName}.svg`))) {
    variants.push('mono')
  }
  return variants
}

/**
 * Load the SVG content from the file system.
 */
const loadSVG = (svgOutDir: string, baseName: string, variant: TVariant): string =>
  fs.readFileSync(path.join(svgOutDir, variant, `${baseName}.svg`), 'utf-8')

/**
 * Generate Data URL for each available variant.
 */
const generateVariantDataURLs = (
  variants: TVariant[],
  svgOutDir: string,
  baseName: string,
): Record<string, string> => {
  const variantDataURLs: Record<string, string> = {}

  variants.forEach((variant) => {
    const svgContent = loadSVG(svgOutDir, baseName, variant)
    variantDataURLs[variant] = generateSVGDataURL(svgContent)
  })

  return variantDataURLs
}

/**
 * Generate a JSDoc comment including the preview of the SVG as a Data URL for all available variants.
 */
const generateJSDoc = (
  componentName: string,
  variants: string[],
  variantDataURLs: Record<string, string>,
): string => {
  return `
  /**
   * @component @name ${componentName}
   * 
   * ${variants.map((variant) => `@example <${componentName} variant='${variant}' size={32} />\n   * @preview (${variant}) ![${variant}](${variantDataURLs[variant]})`).join('\n   * ')}
   *
   * @param {IconComponentProps} props - IconComponentProps
   * @returns {JSX.Element} JSX Element
   */
  `
}

/**
 * Select the appropriate scaffold template based on the available variants.
 */
const selectScaffold = (variants: string[]): string =>
  variants.includes('branded') && variants.includes('mono')
    ? componentScaffold.multiVariants
    : componentScaffold.singleVariant
