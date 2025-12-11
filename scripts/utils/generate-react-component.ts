import fs from 'fs'
import path from 'path'
import { kebabToPascalCase } from './naming-conventions'
import { injectCurrentColor, readyForJSX } from './svg-optimization'
import { TType, TVariant, TIconVariants } from '@web3icons/common'
import { generateSVGDataURL } from './generate-dataurl-from-svg'
import { svgToIconNode } from './svg-to-iconnode'
import {
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
  JSX_TOKENS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  JSX_WALLETS_OUT_DIR,
  JSX_EXCHANGES_OUT_DIR,
} from '../constants'

/**
 * Get SVG and JSX output directories for a given type.
 */
const getSVGDirectories = (type: TType) => {
  switch (type) {
    case 'token':
      return { svgOutDir: SVG_TOKENS_OUT_DIR, jsxOutDir: JSX_TOKENS_OUT_DIR }
    case 'network':
      return {
        svgOutDir: SVG_NETWORKS_OUT_DIR,
        jsxOutDir: JSX_NETWORKS_OUT_DIR,
      }
    case 'wallet':
      return { svgOutDir: SVG_WALLETS_OUT_DIR, jsxOutDir: JSX_WALLETS_OUT_DIR }
    case 'exchange':
      return {
        svgOutDir: SVG_EXCHANGES_OUT_DIR,
        jsxOutDir: JSX_EXCHANGES_OUT_DIR,
      }
    default:
      throw new Error(`Invalid type: ${type}`)
  }
}

/**
 * Generate React Component from an SVG.
 *
 * @param {string} baseName - The base name for the component (symbol for tokens, name for networks, wallets, exchanges).
 * @param {TType} metadataSourceType - The type where this entry is defined (determines component name and output directory).
 * @param {TType} svgSourceType - The type where the SVG file lives (determines SVG import path).
 * @param {string} svgFileName - The SVG file name (without .svg extension).
 */
export const generateReactComponent = async (
  baseName: string,
  metadataSourceType: TType,
  svgSourceType: TType,
  svgFileName: string,
): Promise<void> => {
  const componentName = generateComponentName(baseName, metadataSourceType)
  const { jsxOutDir } = getSVGDirectories(metadataSourceType)
  const { svgOutDir } = getSVGDirectories(svgSourceType)

  const variants = getAvailableVariants(svgOutDir, svgFileName)

  // Convert each variant SVG to IconNode data structure
  const variantData: TIconVariants = {}
  for (const variant of variants) {
    const svgContent = loadSVG(svgOutDir, svgFileName, variant)
    const processed =
      variant === 'mono' ? injectCurrentColor(svgContent) : svgContent
    const jsxReady = readyForJSX(processed)
    variantData[variant] = svgToIconNode(jsxReady)
  }

  const variantDataURLs = generateVariantDataURLs(
    variants,
    svgOutDir,
    svgFileName,
  )

  // Generate component using factory pattern
  const componentContent = `import { createWeb3Icon } from '../../createWeb3Icon.js'
import type { TIconVariants } from '@web3icons/common'

export const __iconNode: TIconVariants = ${JSON.stringify(variantData, null, 2)}

/**
 * @component @name ${componentName}
 * @description Web3Icon for ${componentName}
 *
 * @preview (${variants.map((variant) => `${variant}`).join(', ')})
 * @preview ${variants.map((variant) => `![${variant}](${variantDataURLs[variant]})`).join(' ')}
 * @see https://web3icons.io/${metadataSourceType}s/${metadataSourceType === 'token' ? baseName.toUpperCase() : baseName}
 * @param props - Web3Icon component props
 * @returns {JSX.Element} JSX Element
 * 
 */
const ${componentName} = createWeb3Icon('${componentName}', __iconNode)

export default ${componentName}
`

  await fs.promises.writeFile(
    path.join(jsxOutDir, `${componentName}.ts`),
    componentContent,
  )
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
    case 'exchange':
      return kebabToPascalCase(`${type}-${baseName}`)
    default:
      throw new Error('Invalid type')
  }
}

/**
 * Get available variants ('branded', 'mono', 'background') for the given SVG file.
 */
const getAvailableVariants = (
  svgOutDir: string,
  baseName: string,
): TVariant[] => {
  const variants: TVariant[] = []
  if (fs.existsSync(path.join(svgOutDir, 'branded', `${baseName}.svg`))) {
    variants.push('branded')
  }
  if (fs.existsSync(path.join(svgOutDir, 'mono', `${baseName}.svg`))) {
    variants.push('mono')
  }
  if (fs.existsSync(path.join(svgOutDir, 'background', `${baseName}.svg`))) {
    variants.push('background')
  }
  return variants
}

/**
 * Load the SVG content from the file system.
 */
const loadSVG = (
  svgOutDir: string,
  baseName: string,
  variant: TVariant,
): string =>
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
