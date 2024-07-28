import * as fs from 'fs'
import * as path from 'path'
import { getTypeAndVariant } from './get-type-and-variant'
import { isKebabCase, isUppercase } from './naming-conventions'

export const validateSvg = (filePath: string): boolean => {
  const svgContent = fs.readFileSync(filePath, 'utf8')
  const fileName = path.basename(filePath, '.svg')
  const { type, variant } = getTypeAndVariant(filePath)

  const hasCorrectDimensions =
    svgContent.includes('width="24"') && svgContent.includes('height="24"')
  if (!hasCorrectDimensions) {
    console.error(
      `❌ ${fileName}/${variant}: Invalid dimensions. Expected 24x24, got ${svgContent.match(/width="(\d+)"/)?.[1]} x ${svgContent.match(/height="(\d+)"/)?.[1]}`,
    )
    return false
  }

  if (type === 'token' && !isUppercase(fileName)) {
    console.error(
      `❌ ${fileName}/${variant}: Invalid file name for token. Expected uppercase.`,
    )
    return false
  }
  if (type === 'network' && !isKebabCase(fileName)) {
    console.error(
      `❌ ${fileName}/${variant}: Invalid file name for network. Expected kebab-case.`,
    )
    return false
  }
  return true
}
