import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
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
import {
  NETWORKS_METADATA_PATH,
  SVG_SRC_DIR,
  TOKENS_METADATA_PATH,
} from '../constants'
import {
  findTokenByFileName,
  findNetworkByFileName,
  validateSvg,
} from '../utils'
import {
  addManualMetadata,
  confirmTheMetadata,
  getUserInputSlug,
  selectAMetadata,
} from './cli/cli-icon-add'

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
  const tokensJson: ITokenMetadata[] = JSON.parse(
    fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'),
  )
  const networksJson: INetworkMetadata[] = JSON.parse(
    fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'),
  )

  const existingMetadata =
    type === 'tokens'
      ? findTokenByFileName(id, tokensJson)
      : findNetworkByFileName(id, networksJson)

  return existingMetadata?.filter((m) => m !== undefined)[0]
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
): INetworkRaw[] | ITokenRaw[] | undefined => {
  if (type === 'tokens') {
    const geckoCoin = findTokenByFileName(name, geckoCoins)
    const customCoin = findTokenByFileName(name, customTokens)

    return customCoin ?? geckoCoin
  } else if (type === 'networks') {
    const geckoNetwork = findNetworkByFileName(name, geckoNetworks)
    const customNetwork = findNetworkByFileName(name, customNetworks)

    return customNetwork ?? geckoNetwork
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

const getWithUserInput = async (
  fileName: string,
  fileVariant: string,
  type: 'tokens' | 'networks',
): Promise<ITokenMetadata | INetworkMetadata | undefined> => {
  const geckoApiID = await getUserInputSlug(fileName)

  if (geckoApiID === undefined) {
    console.log('No input provided, skipping')
    return
  }
  const existingMetadata = findExistingMetadata(geckoApiID, type)

  if (!existingMetadata) {
    console.info(
      `👀 ${fileName}: No matching token metadata, consider manually adding to "packages/utils/scripts/gecko/custom-tokens.json"`,
    )
    return
  }

  if (!existingMetadata.variants.includes(fileVariant)) {
    existingMetadata.variants.push(fileVariant)
  }

  console.log('existing metadata', existingMetadata)
  return existingMetadata
}

/**
 * creates metadata object for a given svg file
 * if matched, appends to existing metadata object
 * if not matched, creates new metadata object
 * @returns ITokenMetadata | INetworkMetadata | undefined
 */
const createMetadataObj = async (
  fileName: string,
  fileVariant: string,
  type: 'tokens' | 'networks',
): Promise<ITokenMetadata | INetworkMetadata | undefined> => {
  const rawData = findRawData(fileName, type)
  if (!rawData || rawData[0] === undefined) {
    console.info(
      `👀 ${fileName}: No ${type.slice(0, -1)} metadata, consider manually adding to "packages/utils/scripts/gecko/custom-${type}.json"`,
    )

    const manualData = await addManualMetadata()
    return { ...manualData, variants: [fileVariant] }
  }

  if (rawData.length > 1) {
    const userChoice = await selectAMetadata(rawData)
    if (!userChoice) {
      return getWithUserInput(fileName, fileVariant, type)
    }
    return { ...userChoice, variants: [fileVariant] }
  }

  const existingMetadata = findExistingMetadata(rawData[0].id, type)
  if (existingMetadata) {
    if (!existingMetadata.variants.includes(fileVariant)) {
      existingMetadata.variants.push(fileVariant)
    }
    return existingMetadata
  }

  const metadata: ITokenMetadata | INetworkMetadata = {
    ...rawData[0],
    variants: [fileVariant],
  }

  if (type === 'tokens') {
    const data = await getCoinByID(rawData[0].id)

    ;(metadata as ITokenMetadata)['addresses'] = data?.platforms || {}
    ;(metadata as ITokenMetadata)['marketCapRank'] =
      data?.market_cap_rank || null
  }

  return metadata
}

const main = async () => {
  const modifiedIcons = getModifiedIcons()
  const passedFiles = process.argv.slice(2)

  if (
    (modifiedIcons === '' || !modifiedIcons.includes('/raw-svgs/')) &&
    (passedFiles === undefined || passedFiles.length === 0)
  ) {
    console.error(`No new icons found`)
    process.exit(1)
  }

  // we assume the passed file paths are partial paths
  // so we need to append the SVG_SRC_DIR to them
  // example of an expected passed file path: tokens/bitcoin or networks/ethereum
  // when appended: packages/core/src/raw-svgs/tokens/bitcoin or packages/core/src/raw-svgs/networks/ethereum

  const iconPaths = modifiedIcons
    .concat(passedFiles.map((f) => `${SVG_SRC_DIR}/${f}`).join(',')) // append the SVG_SRC_DIR
    .split(',')
    .filter(Boolean)

  const groupedIcons: {
    [key: string]: { type: 'tokens' | 'networks'; variants: string[] }
  } = {}

  iconPaths.forEach((filePath) => {
    const fileName = path.basename(filePath, '.svg')
    const fileVariant = filePath.includes('/mono/') ? 'mono' : 'branded'
    const type = filePath.includes('/tokens/') ? 'tokens' : 'networks'

    if (!groupedIcons[fileName]) {
      groupedIcons[fileName] = { type, variants: [] }
    }

    if (!groupedIcons[fileName].variants.includes(fileVariant)) {
      groupedIcons[fileName].variants.push(fileVariant)
    }
  })

  const addedNetworks: INetworkMetadata[] = []
  const addedTokens: ITokenMetadata[] = []

  for (const [fileName, { type, variants }] of Object.entries(groupedIcons)) {
    const metadata = await createMetadataObj(fileName, variants[0]!, type)
    if (!metadata) continue

    metadata.variants = variants

    const confirmed = await confirmTheMetadata(metadata)
    if (!confirmed) continue

    if (type === 'tokens') {
      addedTokens.push(metadata as ITokenMetadata)
    } else {
      addedNetworks.push(metadata as INetworkMetadata)
    }
  }

  // await Promise.all(
  //   Object.entries(groupedIcons).map(async ([fileName, { type, variants }]) => {
  //     const metadata = await createMetadataObj(fileName, variants[0]!, type)
  //     if (!metadata) return

  //     metadata.variants = variants

  //     const confirmed = await confirmTheMetadata(metadata)
  //     if (!confirmed) return

  //     if (type === 'tokens') {
  //       addedTokens.push(metadata as ITokenMetadata)
  //     } else {
  //       addedNetworks.push(metadata as INetworkMetadata)
  //     }
  //   }),
  // )

  if (addedNetworks.length > 0) {
    const networksJson: INetworkMetadata[] = JSON.parse(
      fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'),
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

    fs.writeFileSync(NETWORKS_METADATA_PATH, JSONFILE)
    console.info(
      `✔ added networks: ${addedNetworks.map((n) => n.id).join(', ')}`,
    )
  }

  if (addedTokens.length > 0) {
    const tokensJson: ITokenMetadata[] = JSON.parse(
      fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'),
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

    fs.writeFileSync(TOKENS_METADATA_PATH, JSONFILE)
    console.info(`✔ added tokens: ${addedTokens.map((t) => t.id).join(', ')}`)
  }
}

await main()
