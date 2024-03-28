import fs from 'fs'
import path from 'path'
import { SVG_SOURCE_DIR } from '../src/constants'

interface Network {
  id: string
  chain_identifier: number | null
  name: string
  shortname: string
  native_coin_id: string
}

interface Coin {
  id: string
  symbol: string
  name: string
  variants?: string[]
}

const PATH_NETWORKS = path.join(__dirname, './gecko/gecko-networks.json')
const PATH_COINS = path.join(__dirname, './gecko/gecko-coins.json')
const PATH_METADATA = path.join(__dirname, '../src/metadata/tokens.json')

const svgFiles = {
  branded: new Set<string>(),
  mono: new Set<string>(),
}

Object.keys(svgFiles).forEach((type) => {
  svgFiles[type as keyof typeof svgFiles] = new Set(
    fs
      .readdirSync(path.join(SVG_SOURCE_DIR, type))
      .map((file) => path.basename(file, '.svg').toLowerCase()),
  )
})

console.log(
  `branded svgs: ${svgFiles['branded'].size}`,
  `mono svgs: ${svgFiles['mono'].size}`,
)

// populate coins with variants
const populateWithVariants = (coins: Coin[]): Coin[] => {
  return coins
    .map((coin): Coin | null => {
      const variants: string[] = []

      if (svgFiles.branded.has(coin.symbol.toLowerCase())) {
        variants.push('branded')
      }
      if (svgFiles.mono.has(coin.symbol.toLowerCase())) {
        variants.push('mono')
      }

      return variants.length > 0 ? { ...coin, variants } : null
    })
    .filter((coin): coin is Coin => coin !== null)
}

const networks: Network[] = JSON.parse(fs.readFileSync(PATH_NETWORKS, 'utf-8'))
const coins: Coin[] = JSON.parse(fs.readFileSync(PATH_COINS, 'utf-8'))

// process networks to find matching coins
const matchingNetworks: Coin[] = networks
  .map((network) => coins.find((coin) => coin.id === network.native_coin_id))
  .filter((coin): coin is Coin => !!coin)

const populated = [
  ...populateWithVariants(matchingNetworks),
  ...populateWithVariants(coins),
]

// combine and deduplicate coins
const uniqueCoins = new Map<string, Coin>()
populated.forEach((coin) => {
  uniqueCoins.set(coin.id, coin)
})

fs.writeFileSync(
  PATH_METADATA,
  JSON.stringify(Array.from(uniqueCoins.values()), null, 2),
)

console.log('✅ metadata.json')
