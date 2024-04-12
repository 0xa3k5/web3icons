import fs from 'fs'
import path from 'path'

const isUppercase = (filename: string): boolean =>
  filename === filename.toUpperCase()

const isKebabCase = (filename: string): boolean =>
  /^[a-z0-9]+(-[a-z0-9]+)*\.svg$/.test(filename)

// validate SVG file content and name
const validateSvg = (filePath: string, isToken: boolean): void => {
  const svgContent = fs.readFileSync(filePath, 'utf8')

  // check size
  const hasCorrectDimensions =
    svgContent.includes('width="24"') && svgContent.includes('height="24"')
  if (!hasCorrectDimensions) {
    throw new Error(`Invalid dimensions for ${filePath}. Expected 24x24.`)
  }

  const fileName = path.basename(filePath)

  // check filename based on type
  if (isToken && !isUppercase(fileName)) {
    throw new Error(
      `Invalid file name for token ${filePath}. Expected uppercase.`,
    )
  }
  if (!isToken && !isKebabCase(fileName)) {
    throw new Error(
      `Invalid file name for network ${filePath}. Expected kebab-case.`,
    )
  }
}

// validate SVGs based on provided file paths
const main = (filePaths: string[]) => {
  filePaths.forEach((filePath) => {
    const isToken = filePath.includes('/tokens/')
    validateSvg(filePath, isToken)
  })
}

// extract file paths from command-line arguments
const files = process.argv.slice(2)

if (files.length === 0) {
  console.error('No SVG files provided.')
  process.exit(1)
}

try {
  main(files)
  console.log('SVG validation passed.')
} catch (error) {
  console.error('SVG validation failed:', error)
  process.exit(1)
}
