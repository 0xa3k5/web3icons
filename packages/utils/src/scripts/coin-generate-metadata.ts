import fs from 'fs'
import path from 'path'
import { SVG_TOKENS_SRC_DIR, TOKENS_METADATA_PATH } from '../constants'
import getCoinByID from '../gecko/get-coin-by-id'
import { ITokenMetadata, TVariant } from '@web3icons/common'
import { appendToMetadataJson } from '../utils'

const PATH_COINS = path.join(__dirname, './gecko/raw-tokens.json')

const svgFiles = {
  branded: new Set<string>(),
  mono: new Set<string>(),
}

Object.keys(svgFiles).forEach((type) => {
  svgFiles[type as keyof typeof svgFiles] = new Set(
    fs
      .readdirSync(path.join(SVG_TOKENS_SRC_DIR, type))
      .map((file) => path.basename(file, '.svg').toLowerCase()),
  )
})

console.log(`branded svgs: ${svgFiles['branded'].size}`, `mono svgs: ${svgFiles['mono'].size}`)

// populate coins with variants
const populateWithVariants = (processedIds = new Set()): ITokenMetadata[] => {
  const coins: ITokenMetadata[] = JSON.parse(fs.readFileSync(PATH_COINS, 'utf-8'))

  return coins
    .filter((coin) => !processedIds.has(coin.id))
    .map((coin): ITokenMetadata | null => {
      const variants: TVariant[] = []

      if (svgFiles.branded.has(coin.symbol.toLowerCase())) {
        variants.push('branded')
      }
      if (svgFiles.mono.has(coin.symbol.toLowerCase())) {
        variants.push('mono')
      }

      return variants.length > 0 ? { ...coin, variants } : null
    })
    .filter((coin): coin is ITokenMetadata => coin !== null)
}

let processedIds = new Set()
if (fs.existsSync(TOKENS_METADATA_PATH)) {
  const savedData = fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8')
  const coinsData: ITokenMetadata[] = JSON.parse(savedData)
  processedIds = new Set(coinsData.map((coin) => coin.id))
}

const coins = populateWithVariants(processedIds)

for (const coin of coins) {
  if (processedIds.has(coin.id)) {
    console.log(`Skipping: ${coin.id}`)
    continue
  }
  try {
    const data = await getCoinByID(coin.id)
    coin.addresses = data.platforms
    coin.marketCapRank = data.market_cap_rank
    appendToMetadataJson(coin)
    console.log(`✓ ${coin.id}`)
  } catch (error) {
    console.error(`Error enriching metadata for coin: ${coin.id}`, error)
    continue
  }

  await new Promise((resolve) => setTimeout(resolve, 5000))
}

fs.writeFileSync(TOKENS_METADATA_PATH, JSON.stringify(coins, null, 2))

console.log('✅ metadata.json')
