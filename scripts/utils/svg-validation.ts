import * as fs from 'fs'
import * as path from 'path'
import { getTypeAndVariant } from './get-type-and-variant'
import { isKebabCase, isUppercase } from './naming-conventions'
import { ROOT_PROJECT } from '../constants'

export const validateSvg = (filePath: string): boolean => {
  const svgContent = fs.readFileSync(`${ROOT_PROJECT}/${filePath}`, 'utf8')
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

  const isValidFileName = /^[a-zA-Z0-9-]+$/g.test(fileName)
  if (!isValidFileName) {
    console.error(
      `❌ ${fileName}/${variant}: Invalid file name. File name should only include letters, numbers, and dashes.`,
    )
    return false
  }

  const namingConvention = type === 'token' ? isUppercase : isKebabCase
  if (!namingConvention(fileName)) {
    console.error(
      `❌ ${fileName}/${variant}: Invalid file name for ${type}. Expected ${type === 'token' ? 'uppercase' : 'kebab-case'}.`,
    )
    return false
  }
  return true
}
