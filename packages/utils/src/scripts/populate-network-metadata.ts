import fs from 'fs'
import path from 'path'
import { GeckoNetworks, INetworkMetadata } from '../types'
import { SVG_NETWORKS_SRC_DIR, NETWORKS_METADATA_PATH } from '../constants'
import prettier from 'prettier'

const SVG_NETWORKS_DIRS = {
  branded: path.join(SVG_NETWORKS_SRC_DIR, 'branded'),
  mono: path.join(SVG_NETWORKS_SRC_DIR, 'mono'),
}
const GECKO_NETWORKS_PATH = path.join(__dirname, './gecko/gecko-networks.json')

const svgFiles = {
  branded: new Set<string>(),
  mono: new Set<string>(),
}

Object.entries(SVG_NETWORKS_DIRS).forEach(([variant, dirPath]) => {
  fs.readdirSync(dirPath).forEach((file) => {
    const normalizedFileName = normalizeForMatch(path.basename(file, '.svg'))
    svgFiles[variant as keyof typeof svgFiles].add(normalizedFileName)
  })
})

const geckoNetworks: GeckoNetworks[] = JSON.parse(
  fs.readFileSync(GECKO_NETWORKS_PATH, 'utf8'),
)

function normalizeForMatch(input: string) {
  return input
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/gi, '')
    .toLowerCase()
}

const enrichedNetworks: INetworkMetadata[] = geckoNetworks
  .map((network) => {
    const variants = []

    const normalizedNames = [
      normalizeForMatch(network.name),
      network.id ? normalizeForMatch(network.id) : '',
      network.shortname ? normalizeForMatch(network.shortname) : '',
    ]

    const validNormalizedNames = normalizedNames.filter(
      (name) => name.length > 0,
    )

    if (validNormalizedNames.some((name) => svgFiles.branded.has(name))) {
      variants.push('branded')
    }
    if (validNormalizedNames.some((name) => svgFiles.mono.has(name))) {
      variants.push('mono')
    }

    return {
      id: network.id,
      name: network.name,
      shortname: network.shortname,
      nativeCoinId: network.native_coin_id,
      variants,
    }
  })
  .filter((network) => network.variants.length > 0)

const formatted = await prettier.format(JSON.stringify(enrichedNetworks), {
  parser: 'json',
})

fs.writeFileSync(NETWORKS_METADATA_PATH, formatted)

console.log('Network metadata has been enriched and saved.')
