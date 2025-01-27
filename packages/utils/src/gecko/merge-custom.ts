import fs from 'fs'
import path from 'path'
import customTokens from './custom-tokens.json'
import geckoCoins from './gecko-coins.json'
import getCoinByID from './get-coin-by-id'
import { ITokenMetadata, TVariant } from '@web3icons/common'
import { SVG_TOKENS_SRC_DIR, TOKENS_METADATA_PATH } from '../../constants'
import prettier from 'prettier'

const mergedCoins = [...customTokens, ...geckoCoins]

// write the merged coins to a JSON file
fs.writeFileSync(path.join(__dirname, './raw-tokens.json'), JSON.stringify(mergedCoins, null, 2))

const SVG_TOKENS_DIRS = {
  branded: path.join(SVG_TOKENS_SRC_DIR, 'branded'),
  mono: path.join(SVG_TOKENS_SRC_DIR, 'mono'),
}

const svgFiles = {
  branded: new Set<string>(),
  mono: new Set<string>(),
}

Object.entries(SVG_TOKENS_DIRS).forEach(([variant, dirPath]) => {
  fs.readdirSync(dirPath).forEach((file) => {
    svgFiles[variant as keyof typeof svgFiles].add(path.basename(file, '.svg').toLowerCase())
  })
})

const enrichCustomTokens = () => {
  return Promise.all(
    customTokens
      .map(async (custom) => {
        const variants: TVariant[] = []
        const lowerCaseId = custom.id.toLowerCase()
        const lowerCaseName = custom.name.toLowerCase()
        const lowerCaseSymbol = custom.symbol.toLowerCase()

        if (
          svgFiles.branded.has(lowerCaseId) ||
          svgFiles.branded.has(lowerCaseName) ||
          svgFiles.branded.has(lowerCaseSymbol)
        ) {
          variants.push('branded')
        }

        if (
          svgFiles.mono.has(lowerCaseId) ||
          svgFiles.mono.has(lowerCaseName) ||
          svgFiles.mono.has(lowerCaseSymbol)
        ) {
          variants.push('mono')
        }

        const data = await getCoinByID(custom.id)
        const obj: ITokenMetadata = {
          id: custom.id,
          name: custom.name,
          symbol: custom.symbol,
          marketCapRank: data?.market_cap_rank ?? null,
          variants,
          addresses: data?.platforms ?? data?.addresses ?? {},
        }
        console.log(obj)
        return obj
      })
      .filter((coin) => coin.then((c) => c.variants.length > 0)),
  )
}

const currentCoins = JSON.parse(fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'))

const enrichedCoins = await enrichCustomTokens()

const formatted = await prettier.format(JSON.stringify([...currentCoins, ...enrichedCoins]), {
  parser: 'json',
})

fs.writeFileSync(TOKENS_METADATA_PATH, formatted)

console.log('✅ merged custom tokens and gecko coins')
