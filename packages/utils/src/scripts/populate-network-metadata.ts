import fs from 'fs'
import path from 'path'
import { INetworkMetadata } from '../types'
import { SVG_NETWORKS_SRC_DIR, NETWORKS_METADATA_PATH } from '../constants'
import prettier from 'prettier'

type GeckoNetworks = {
  id: string
  chain_identifier: string | null
  name: string
  shortname: string | null
  native_coin_id: string
}

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
    svgFiles[variant as keyof typeof svgFiles].add(
      path.basename(file, '.svg').toLowerCase(),
    )
  })
})

const geckoNetworks: GeckoNetworks[] = JSON.parse(
  fs.readFileSync(GECKO_NETWORKS_PATH, 'utf8'),
)
const enrichedNetworks: INetworkMetadata[] = geckoNetworks
  .map((network) => {
    const variants = []
    const lowerCaseId = network.id.toLowerCase()
    const lowerCaseName = network.name.toLowerCase()

    if (
      svgFiles.branded.has(lowerCaseId) ||
      svgFiles.branded.has(lowerCaseName)
    ) {
      variants.push('branded')
    }

    if (svgFiles.mono.has(lowerCaseId) || svgFiles.mono.has(lowerCaseName)) {
      variants.push('mono')
    }

    return {
      id: network.id,
      name: network.name,
      shortname: network.shortname || '',
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
