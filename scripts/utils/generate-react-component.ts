import fs from 'fs'
import path from 'path'
import { kebabToPascalCase } from './naming-conventions'
import { injectCurrentColor, readyForJSX } from './svg-optimization'
import { TType, TVariant } from '@web3icons/common'
import { generateSVGDataURL } from './generate-dataurl-from-svg'
import { getSVGDirectories } from './get-svg-directories'

/**
 * Generate React Component from an SVG.
 *
 * @param {string} baseName - The base name for the component (usually the entry ID).
 * @param {TType} type - The type of the component (token, network, wallet).
 * @param {string} fileName - The fileName from metadata (may include cross-type reference like "token:SHIB").
 */
export const generateReactComponent = async (
  baseName: string,
  fileName: string,
): Promise<void> => {
  if (!fileName.includes(':') || fileName.split(':').length !== 2) {
    throw new Error(
      `Invalid fileName format: "${fileName}". Expected format: "type:name" (e.g., "network:ethereum")`,
    )
  }

  const [type, name] = fileName.split(':') as [TType, string]

  const componentName = generateComponentName(baseName, type)
  const { svgOutDir, jsxOutDir } = getSVGDirectories(type)

  const variants = getAvailableVariants(svgOutDir, name)
  const variantJSX = variants.reduce(
    (acc, variant) => {
      acc[variant] =
        variant === 'mono'
          ? readyForJSX(injectCurrentColor(loadSVG(svgOutDir, name, variant)))
          : readyForJSX(loadSVG(svgOutDir, name, variant))
      return acc
    },
    {} as Record<TVariant, string>,
  )

  // Generate documentation
  const variantDataURLs = generateVariantDataURLs(variants, svgOutDir, name)
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

  await fs.promises.writeFile(
    path.join(jsxOutDir, `${componentName}.tsx`),
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
