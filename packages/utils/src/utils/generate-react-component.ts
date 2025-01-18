import fs from 'fs'
import path from 'path'
import {
  JSX_TOKENS_OUT_DIR,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  JSX_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
  JSX_EXCHANGES_OUT_DIR,
} from '../constants'
import { kebabToPascalCase } from './naming-conventions'
import { injectCurrentColor, readyForJSX } from './svg-optimization'
import { TType, TVariant } from '@web3icons/common'
import { generateSVGDataURL } from './generate-dataurl-from-svg'

/**
 * Generate React Component from an SVG.
 *
 * @param {string} baseName - The base name of the SVG file.
 * @param {TType} type - The type of the component (token, network, wallet).
 */
export const generateReactComponent = (baseName: string, type: TType) => {
  const componentName = generateComponentName(baseName, type)
  const { svgOutDir, jsxOutDir } = getDirectories(type)

  // Get available variants and prepare their JSX
  const variants = getAvailableVariants(svgOutDir, baseName)
  const variantJSX = variants.reduce(
    (acc, variant) => {
      acc[variant] =
        variant === 'mono'
          ? readyForJSX(injectCurrentColor(loadSVG(svgOutDir, baseName, variant)))
          : readyForJSX(loadSVG(svgOutDir, baseName, variant))
      return acc
    },
    {} as Record<TVariant, string>,
  )

  // Generate documentation
  const variantDataURLs = generateVariantDataURLs(variants, svgOutDir, baseName)
  const jsDocComment = generateJSDoc(componentName, variants, variantDataURLs)

  // Generate component content based on available variants
  const defaultVariant = variants[0]
  const componentContent = `
import { forwardRef } from 'react';
import { IconComponentProps } from "../../types";
import { BaseIcon } from '../../BaseIcon';

${jsDocComment}
const ${componentName} = forwardRef<SVGSVGElement, IconComponentProps>(({ ${variants.length > 1 ? `variant = '${defaultVariant}',` : ''} fallback, ...props }, ref) => (
    <BaseIcon fallback={fallback} {...props} ref={ref}>
      ${
        variants.length === 1
          ? variantJSX[variants[0]!]
          : `{${variants
              .map(
                (v) =>
                  `variant === '${v}' && (
              <>
                ${variantJSX[v]}
              </>
            )`,
              )
              .join(' || ')}}`
      }
    </BaseIcon>
));

${componentName}.displayName = '${componentName}';

export default ${componentName};
`

  fs.writeFile(path.join(jsxOutDir, `${componentName}.tsx`), componentContent, (err) => {
    if (err) throw err
  })
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
    case 'exchange':
      return { svgOutDir: SVG_EXCHANGES_OUT_DIR, jsxOutDir: JSX_EXCHANGES_OUT_DIR }
    default:
      throw new Error('Invalid type')
  }
}

/**
 * Get available variants ('branded', 'mono', 'background') for the given SVG file.
 */
const getAvailableVariants = (svgOutDir: string, baseName: string): TVariant[] => {
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
