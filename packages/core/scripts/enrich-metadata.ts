import fs from 'fs'
import path from 'path'
import { SVG_OUTPUT_DIR } from '../src/constants'
import { ITokenMetadata } from '../src/metadata'

const svgFiles = {
  branded: new Set(
    fs
      .readdirSync(path.join(SVG_OUTPUT_DIR, 'branded'))
      .map((file) =>
        path.basename(file, path.extname(file)).toLocaleLowerCase(),
      ),
  ),
  mono: new Set(
    fs
      .readdirSync(path.join(SVG_OUTPUT_DIR, 'mono'))
      .map((file) =>
        path.basename(file, path.extname(file)).toLocaleLowerCase(),
      ),
  ),
}

const jsonFilePath = path.join(__dirname, '../src/metadata/tokens.json')

const tokens: ITokenMetadata[] = JSON.parse(
  fs.readFileSync(jsonFilePath, 'utf-8'),
)

const updatedTokens = tokens.map((token) => {
  const variants: string[] = []
  if (svgFiles.branded.has(token.id)) {
    console.log(token.id, 'has branded')
    variants.push('branded')
  }
  if (svgFiles.mono.has(token.id)) {
    console.log(token.id, 'has mono')
    variants.push('mono')
  }
  variants.push('')
  return { ...token, variants }
})

// Write the updated JSON back to the file
fs.writeFileSync(jsonFilePath, JSON.stringify(updatedTokens, null, 2))

console.log('JSON file updated with variant information.')
