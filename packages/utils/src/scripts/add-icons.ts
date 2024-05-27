import { execSync } from 'child_process'
import fs from 'fs'
import * as path from 'path'
import {
  ITokenRaw,
  INetworkRaw,
  INetworkMetadata,
  ITokenMetadata,
} from '../types'
import geckoNetworks from './gecko/gecko-networks.json'
import geckoCoins from './gecko/gecko-coins.json'
import customTokens from './gecko/custom-tokens.json'
import customNetworks from './gecko/custom-networks.json'
import getCoinByID from './gecko/get-coin-by-id'

const validateSvg = (filePath: string): boolean => {
  const svgContent = fs.readFileSync(filePath, 'utf8')
  const type = filePath.includes('/tokens/') ? 'token' : 'network'
  const fileName = path.basename(filePath, '.svg')

  const hasCorrectDimensions =
    svgContent.includes('width="24"') && svgContent.includes('height="24"')
  if (!hasCorrectDimensions) {
    console.error(`❌ ${fileName}: Invalid dimensions. Expected 24x24.`)
    return false
  }

  if (type === 'token' && !isUppercase(fileName)) {
    console.error(
      `❌ ${fileName}: Invalid file name for token. Expected uppercase.`,
    )
    return false
  }
  if (type === 'network' && !isKebabCase(fileName)) {
    console.error(
      `❌ ${fileName}: Invalid file name for network. Expected kebab-case.`,
    )
    return false
  }
  return true
}

const isUppercase = (filename: string): boolean =>
  filename === filename.toUpperCase()

const isKebabCase = (filename: string): boolean => {
  return /^([a-z0-9]+(-[a-z0-9]+)*)/.test(filename)
}

const getModifiedIcons = () => {
  return execSync(
    "git ls-files --others -m --exclude-standard -- '*.svg' | tr '\n' ','",
  )
    .toString()
    .trim()
}

/**
 * Finds the metadata for a given id and type (tokens or networks)
 * @param id ID of the metadata to find
 * @param type Type of the metadata to find (tokens or networks)
 * @returns Metadata for the given id and type
 */
const findExistingMetadata = (
  id: string,
  type: 'tokens' | 'networks',
): ITokenMetadata | INetworkMetadata | undefined => {
  const TOKENS_PATH = 'packages/core/src/metadata/tokens.json'
  const NETWORKS_PATH = 'packages/core/src/metadata/networks.json'
  const tokensJson: ITokenMetadata[] = JSON.parse(
    fs.readFileSync(TOKENS_PATH, 'utf-8'),
  )
  const networksJson: INetworkMetadata[] = JSON.parse(
    fs.readFileSync(NETWORKS_PATH, 'utf-8'),
  )

  const existingMetadata =
    type === 'tokens'
      ? tokensJson.find((t) => t.id?.toLowerCase() === id.toLowerCase())
      : networksJson.find((n) => n.id?.toLowerCase() === id.toLowerCase())

  return existingMetadata
}

/**
 * Finds the raw data for a given name and type (tokens or networks)
 * @param name Name of the data to find
 * @param type Type of the data to find (tokens or networks)
 * @returns Raw data for the given name and type
 */
const findRawData = (
  name: string,
  type: 'tokens' | 'networks',
): INetworkRaw | ITokenRaw | undefined => {
  if (type === 'tokens') {
    const geckoCoin = (geckoCoins as ITokenRaw[]).find(
      (token) =>
        token.id.toLowerCase() === name.toLowerCase() ||
        token.name.toLowerCase() === name.toLowerCase() ||
        token.symbol.toLowerCase() === name.toLowerCase(),
    )
    const customCoin = (customTokens as ITokenRaw[]).find(
      (token) =>
        token.id.toLowerCase() === name.toLowerCase() ||
        token.symbol.toLowerCase() === name.toLowerCase() ||
        token.name.toLowerCase() === name.toLowerCase(),
    )
    return geckoCoin ?? customCoin
  } else if (type === 'networks') {
    const geckoNetwork = (geckoNetworks as INetworkRaw[]).find(
      (network) =>
        network.id?.toLowerCase() === name ||
        network.shortname?.toLowerCase() === name ||
        network.name?.toLowerCase() === name,
    )

    const customNetwork = (customNetworks as INetworkRaw[]).find(
      (network) =>
        network.id?.toLowerCase() === name ||
        network.shortname?.toLowerCase() === name ||
        network.name?.toLowerCase() === name,
    )
    return geckoNetwork ?? customNetwork
  }
}

/**
 * Merges the variants of the given array of networks or tokens
 * @param arr Array of networks or tokens
 * @returns Array of merged networks or tokens
 */
const mergeVariants = (
  arr: INetworkMetadata[] | ITokenMetadata[],
): INetworkMetadata[] | ITokenMetadata[] => {
  const map: Map<string, INetworkMetadata | ITokenMetadata> = new Map()

  arr.forEach((n) => {
    const key = `${n.id}|${n.name}`
    if (map.has(key)) {
      // Merge the variants array
      const existing = map.get(key)
      if (existing) {
        existing.variants = [...new Set([...existing.variants, ...n.variants])]
      }
    } else {
      map.set(key, { ...n })
    }
  })

  return Array.from(map.values())
}

/**
 * creates metadata object for a given svg file
 * if matched, appends to existing metadata object
 * if not matched, creates new metadata object
 * @returns ITokenMetadata | INetworkMetadata | undefined
 */
const createMetadataObj = async (
  filePath: string,
): Promise<ITokenMetadata | INetworkMetadata | undefined> => {
  const type = filePath.includes('/tokens/') ? 'token' : 'network'
  const fileName = path.basename(filePath, '.svg')
  const fileVariant = filePath.includes('/mono/') ? 'mono' : 'branded'

  if (type === 'network') {
    // this is the raw metadata from either gecko-networks.json or custom-networks.json
    const rawData = findRawData(fileName, 'networks')

    if (rawData) {
      const existingNetworksMetadata = findExistingMetadata(
        rawData.id,
        'networks',
      )

      if (existingNetworksMetadata) {
        if (!existingNetworksMetadata.variants.includes(fileVariant)) {
          console.log(
            `existing metadata for: ${fileName}, existing variant: ${existingNetworksMetadata.variants} new variant: ${fileVariant}`,
          )
          existingNetworksMetadata.variants.push(fileVariant)
        }
        return existingNetworksMetadata
      } else {
        const metadata: INetworkMetadata = {
          ...rawData,
          variants: [fileVariant],
        }
        return metadata
      }
    } else {
      console.info(
        `👀 ${fileName}: No network metadata, consider manually adding to "packages/utils/scripts/gecko/custom-networks.json"`,
      )
      return undefined
    }
  }

  if (type === 'token') {
    const rawData = findRawData(fileName, 'tokens')

    if (rawData) {
      const existingTokenMetadata = findExistingMetadata(rawData.id, 'tokens')

      if (existingTokenMetadata) {
        if (!existingTokenMetadata.variants.includes(fileVariant)) {
          existingTokenMetadata.variants.push(fileVariant)
        }
        return existingTokenMetadata
      } else {
        const metadata = {
          ...rawData,
          addresses: {}, // will be fetched below
          marketCapRank: 0, // will be fetched below
          variants: [fileVariant],
        }

        const data = await getCoinByID(rawData.id)
        metadata.addresses = data?.platforms || {}
        metadata.marketCapRank = data?.market_cap_rank || null

        return metadata
      }
    } else {
      console.info(
        `👀 ${fileName}: No matching token metadata, consider manually adding to "packages/utils/scripts/gecko/custom-tokens.json"`,
      )
      return
    }
  }
}
const main = async () => {
  const modifiedIcons = getModifiedIcons()
  const passedFiles = process.argv.slice(2)
  const SVG_NETWORKS_SRC_DIR = 'packages/core/src/raw-svgs/networks'
  const SVG_TOKENS_SRC_DIR = 'packages/core/src/raw-svgs/tokens'

  if (
    (modifiedIcons === '' || !modifiedIcons.includes('/raw-svgs/')) &&
    (passedFiles === undefined || passedFiles.length === 0)
  ) {
    console.error(`No new icons found`)
    process.exit(1)
  }

  const iconPaths = modifiedIcons
    .concat(passedFiles.join(','))
    .split(',')
    .filter(Boolean)

  const groupedPaths = iconPaths.reduce(
    (acc: { [key: string]: string[] }, filePath) => {
      const fileName = path.basename(filePath, '.svg')
      if (!acc[fileName]) {
        acc[fileName] = []
      }
      acc[fileName].push(filePath)
      return acc
    },
    {},
  )

  const addedNetworks: INetworkMetadata[] = []
  const addedTokens: ITokenMetadata[] = []

  await Promise.all(
    Object.values(groupedPaths).map(async (filePaths) => {
      const validPaths = filePaths.filter(validateSvg)
      for (const filePath of validPaths) {
        const metadata = await createMetadataObj(filePath)
        if (!metadata) {
          continue
        }
        filePath.includes('/tokens/')
          ? addedTokens.push(metadata as ITokenMetadata)
          : addedNetworks.push(metadata as INetworkMetadata)
      }
    }),
  )

  const TOKENS_PATH = 'packages/core/src/metadata/tokens.json'
  const NETWORKS_PATH = 'packages/core/src/metadata/networks.json'

  if (addedNetworks.length > 0) {
    const networksJson: INetworkMetadata[] = JSON.parse(
      fs.readFileSync(NETWORKS_PATH, 'utf-8'),
    )

    const JSONFILE = JSON.stringify(
      Array.from(
        new Map(
          [...networksJson, ...mergeVariants(addedNetworks)].map((item) => [
            item['id'],
            item,
          ]),
        ).values(),
      ),
    )

    fs.writeFileSync(NETWORKS_PATH, JSONFILE)
  }

  if (addedTokens.length > 0) {
    const tokensJson: ITokenMetadata[] = JSON.parse(
      fs.readFileSync(TOKENS_PATH, 'utf-8'),
    )

    const JSONFILE = JSON.stringify(
      Array.from(
        new Map(
          [...tokensJson, ...mergeVariants(addedTokens)].map((item) => [
            item['id'],
            item,
          ]),
        ).values(),
      ),
    )

    fs.writeFileSync(TOKENS_PATH, JSONFILE)
  }
}

await main()
