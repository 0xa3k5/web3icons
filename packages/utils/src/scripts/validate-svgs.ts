import { validateSvg } from '../utils'

const main = () => {
  const files = process.argv.slice(2)

  if (files === undefined || files.length === 0) {
    console.log('No SVG files provided')
    return
  }
  files[0]?.split(',').forEach(async (f) => {
    validateSvg(f)
  })
}

try {
  main()
} catch (error) {
  console.error('SVG validation failed:', error)
  process.exit(1)
}
