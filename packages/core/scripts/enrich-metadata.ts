import fs from 'fs'
import path from 'path'
import { SVG_OUTPUT_DIR } from '../src/constants'
import { ITokenMetadata } from '../src/metadata'

const svgFiles = {
  branded: new Set(
    fs
      .readdirSync(path.join(SVG_OUTPUT_DIR, 'branded'))
      .map((file) => path.basename(file, '.svg').toLocaleLowerCase()),
  ),
  mono: new Set(
    fs
      .readdirSync(path.join(SVG_OUTPUT_DIR, 'mono'))
      .map((file) => path.basename(file, '.svg').toLocaleLowerCase()),
  ),
}

const jsonFilePath = path.join(__dirname, '../src/metadata/tokens.json')

const tokens: ITokenMetadata[] = JSON.parse(
  fs.readFileSync(jsonFilePath, 'utf-8'),
)

const updatedTokens = tokens.map((token) => {
  const variants: string[] = []
  const symbol = token.symbol.toLocaleLowerCase()

  if (svgFiles.branded.has(symbol)) {
    console.log(symbol, 'has branded')
    variants.push('branded')
  }
  if (svgFiles.mono.has(symbol)) {
    console.log(symbol, 'has mono')
    variants.push('mono')
  }
  return { ...token, variants }
})

// Write the updated JSON back to the file
fs.writeFileSync(jsonFilePath, JSON.stringify(updatedTokens, null, 2))

console.log('JSON file updated with variant information.')
