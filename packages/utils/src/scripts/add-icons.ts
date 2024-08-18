import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import {
  ITokenRaw,
  INetworkRaw,
  INetworkMetadata,
  ITokenMetadata,
  TType,
  TVariant,
  IWalletMetadata,
} from '../types'
import _geckoNetworks from './gecko/gecko-networks.json'
import _geckoCoins from './gecko/gecko-coins.json'
import _customTokens from './gecko/custom-tokens.json'
import _customNetworks from './gecko/custom-networks.json'
import getCoinByID from './gecko/get-coin-by-id'
import {
  CUSTOM_NETWORKS_METADATA_PATH,
  CUSTOM_TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  SVG_SRC_DIR,
  TOKENS_METADATA_PATH,
  WALLETS_METADATA_PATH,
} from '../constants'
import {
  // findTokenByFileName,
  // findNetworkByFileName,
  validateSvg,
  getTypeAndVariant,
  findByFileName,
  mapRawNetworkToINetwork,
  mapRawWalletToIWallet,
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
 * Finds the metadata for a given id and type (tokens, networks, or wallets)
 * @param id ID of the metadata to find
 * @param type Type of the metadata to find (tokens, networks, or wallets)
 * @returns Metadata for the given id and type
 */
const findExistingMetadata = (
  id: string,
  type: TType,
): ITokenMetadata[] | INetworkMetadata[] | IWalletMetadata[] | undefined => {
  let jsonPath
  switch (type) {
    case 'token':
      jsonPath = TOKENS_METADATA_PATH
      break
    case 'network':
      jsonPath = NETWORKS_METADATA_PATH
      break
    case 'wallet':
      jsonPath = WALLETS_METADATA_PATH
      break
    default:
      throw new Error('Invalid type')
  }

  const jsonFile = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

  const existingMetadata = findByFileName(type, id, jsonFile)

  return existingMetadata as
    | ITokenMetadata[]
    | INetworkMetadata[]
    | IWalletMetadata[]
    | undefined
}

/**
 * Finds the raw data for a given name and type (tokens or networks)
 * @param name Name of the data to find
 * @param type Type of the data to find (tokens, networks, or wallets)
 * @returns Raw data for the given name and type
 */
const findRawData = (
  name: string,
  type: TType,
): INetworkRaw[] | ITokenRaw[] | undefined => {
  if (type === 'token') {
    const geckoCoin = findByFileName(type, name, _geckoCoins)
    const customCoin = findByFileName(type, name, _customTokens)
    return customCoin ?? geckoCoin
  } else if (type === 'network') {
    const geckoNetworks = findByFileName(type, name, _geckoNetworks)
    const customNetworks = findByFileName(type, name, _customNetworks)

    if (geckoNetworks) {
      return geckoNetworks?.map((n) => mapRawNetworkToINetwork(n))
    } else if (customNetworks) {
      return customNetworks.map((n) => mapRawNetworkToINetwork(n))
    }
  } else if (type === 'wallet') {
    // prettier-ignore
    const walletsMetadata = JSON.parse(fs.readFileSync(WALLETS_METADATA_PATH, 'utf-8'))
    const customWallets = findByFileName(type, name, walletsMetadata)

    return customWallets?.map((w) => mapRawWalletToIWallet(w))
  }
}

/**
 * Merges the variants of the given array of networks, tokens, or wallets
 * @param arr Array of networks, tokens, or wallets
 * @returns Array of merged networks, tokens, or wallets
 */
const mergeVariants = (
  arr: INetworkMetadata[] | ITokenMetadata[] | IWalletMetadata[],
): INetworkMetadata[] | ITokenMetadata[] | IWalletMetadata[] => {
  const map: Map<string, INetworkMetadata | ITokenMetadata | IWalletMetadata> =
    new Map()

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
  fileVariant: TVariant,
  type: TType,
): Promise<ITokenMetadata | INetworkMetadata | IWalletMetadata | undefined> => {
  const geckoApiID = await getUserInputSlug(fileName)

  if (geckoApiID === undefined) {
    console.log('No input provided, skipping')
    return
  }
  let existingMetadata = findExistingMetadata(geckoApiID, type)

  if (!existingMetadata || existingMetadata.length === 0) {
    const foundCoin = await getCoinByID(geckoApiID)

    return {
      id: geckoApiID,
      name: foundCoin.name,
      symbol: foundCoin.symbol,
      variants: [fileVariant],
      addresses: foundCoin.platforms || {},
      marketCapRank: foundCoin.market_cap_rank || null,
    } as ITokenMetadata | IWalletMetadata | INetworkMetadata
  }

  if (existingMetadata.length > 1) {
    const selectedMetadata = (await selectAMetadata(existingMetadata, type)) as
      | INetworkMetadata
      | ITokenMetadata
      | IWalletMetadata

    existingMetadata = selectedMetadata ? [selectedMetadata] : []
  }

  if (!existingMetadata[0]) {
    return undefined
  }

  if (!existingMetadata[0].variants.includes(fileVariant)) {
    existingMetadata[0].variants.push(fileVariant)
  }

  return existingMetadata[0]
}

/**
 * creates metadata object for a given svg file
 * if matched, appends to existing metadata object
 * if not matched, creates new metadata object
 * @returns ITokenMetadata | INetworkMetadata | IWalletMetadata | undefined
 */
const createMetadataObj = async (
  fileName: string,
  fileVariant: TVariant,
  type: TType,
): Promise<ITokenMetadata | INetworkMetadata | IWalletMetadata | undefined> => {
  const rawData = findRawData(fileName, type)
  // no metadata
  if (!rawData || rawData[0] === undefined) {
    console.info(
      `👀 ${fileName}: No ${type} metadata, consider manually adding metadata"`,
    )

    const manualData = await addManualMetadata(type)

    await updateCustomJson([manualData], type)

    return { ...manualData, variants: [fileVariant] } as
      | ITokenMetadata
      | INetworkMetadata
      | IWalletMetadata
  }

  // multiple metadata
  if (rawData.length > 1) {
    const userChoice = await selectAMetadata(rawData, type)
    if (!userChoice) {
      return getWithUserInput(fileName, fileVariant, type)
    }

    return {
      ...userChoice,
      variants: [fileVariant],
      addresses: type === 'token' ? {} : undefined,
      marketCapRank: type === 'token' ? null : undefined,
    } as ITokenMetadata | INetworkMetadata | IWalletMetadata
  }

  if (rawData.length === 1) {
    let existingMetadata = findExistingMetadata(rawData[0].id, type) as
      | ITokenMetadata[]
      | INetworkMetadata[]
      | IWalletMetadata[]

    if (existingMetadata) {
      if (!existingMetadata[0]) return undefined
      if (!existingMetadata[0].variants.includes(fileVariant)) {
        existingMetadata[0].variants.push(fileVariant)
      }
      return existingMetadata[0]
    }

    const metadata: ITokenMetadata | INetworkMetadata | IWalletMetadata = {
      ...rawData[0],
      variants: [fileVariant],
    } as ITokenMetadata | INetworkMetadata | IWalletMetadata

    if (type === 'token') {
      const data = await getCoinByID(rawData[0].id)

      ;(metadata as ITokenMetadata)['addresses'] = data.platforms || {}
      ;(metadata as ITokenMetadata)['marketCapRank'] =
        data.market_cap_rank || null
    }

    return metadata
  }
}

const updateMetadataJson = async (
  metadata: INetworkMetadata[] | ITokenMetadata[] | IWalletMetadata[],
  type: TType,
) => {
  let jsonPath
  switch (type) {
    case 'token':
      jsonPath = TOKENS_METADATA_PATH
      break
    case 'network':
      jsonPath = NETWORKS_METADATA_PATH
      break
    case 'wallet':
      jsonPath = WALLETS_METADATA_PATH
      break
    default:
      throw new Error('Invalid type')
  }

  const current = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

  const JSONFILE = JSON.stringify(
    Array.from(
      new Map(
        [...current, ...mergeVariants(metadata)].map((item) => [
          item['id'],
          item,
        ]),
      ).values(),
    ),
  )

  fs.writeFileSync(jsonPath, JSONFILE)

  console.info(`✔ added ${type}: ${metadata.map((t) => t.id).join(', ')}`)
}

const updateCustomJson = async (
  metadata: INetworkRaw[] | ITokenRaw[],
  type: TType,
) => {
  const customJson = JSON.parse(
    fs.readFileSync(
      type === 'token'
        ? CUSTOM_TOKENS_METADATA_PATH
        : CUSTOM_NETWORKS_METADATA_PATH,
      'utf-8',
    ),
  )

  const JSONFILE = JSON.stringify(
    Array.from(
      new Map(
        [...customJson, ...metadata].map((item) => [item.id, item]),
      ).values(),
    ),
  )

  fs.writeFileSync(
    type === 'token'
      ? CUSTOM_TOKENS_METADATA_PATH
      : CUSTOM_NETWORKS_METADATA_PATH,
    JSONFILE,
  )
  console.info(
    `✔ custom ${type} added: ${metadata.map((t) => t.id).join(', ')}`,
  )
}

const main = async () => {
  const modifiedIcons = getModifiedIcons()
  const passedFiles = process.argv.slice(2)

  if (
    (modifiedIcons === '' || !modifiedIcons.includes('/svgs/')) &&
    (passedFiles === undefined || passedFiles.length === 0)
  ) {
    console.error(`No new icons found`)
    process.exit(1)
  }

  // we assume the passed file paths are partial paths
  // so we need to append the SVG_SRC_DIR to them
  // example of an expected passed file path: tokens/bitcoin or networks/ethereum
  // when appended: packages/core/src/svgs/tokens/bitcoin or packages/core/src/svgs/networks/ethereum

  const iconPaths = modifiedIcons
    .concat(passedFiles.map((f) => `${SVG_SRC_DIR}/${f}`).join(',')) // append the SVG_SRC_DIR
    .split(',')
    .filter(Boolean)
    .filter((filePath) => validateSvg(filePath))

  const groupedIcons: {
    [key: string]: { type: TType; variants: TVariant[] }
  } = {}

  iconPaths.forEach((filePath) => {
    const fileName = path.basename(filePath, '.svg')
    const { type, variant } = getTypeAndVariant(filePath)

    if (!groupedIcons[fileName]) {
      groupedIcons[fileName] = { type, variants: [] }
    }

    if (!groupedIcons[fileName].variants.includes(variant)) {
      groupedIcons[fileName].variants.push(variant)
    }
  })

  const addedNetworks: INetworkMetadata[] = []
  const addedTokens: ITokenMetadata[] = []
  const addedWallets: IWalletMetadata[] = []

  for (const [fileName, { type, variants }] of Object.entries(groupedIcons)) {
    const metadata = await createMetadataObj(fileName, variants[0]!, type)
    if (!metadata) continue

    metadata.variants = variants

    const confirmed = await confirmTheMetadata(metadata)
    if (!confirmed) continue

    if (type === 'token') {
      addedTokens.push(metadata as ITokenMetadata)
    } else if (type === 'network') {
      addedNetworks.push(metadata as INetworkMetadata)
    } else if (type === 'wallet') {
      addedWallets.push(metadata as IWalletMetadata)
    }
  }

  if (addedNetworks.length > 0)
    await updateMetadataJson(addedNetworks, 'network')
  if (addedTokens.length > 0) await updateMetadataJson(addedTokens, 'token')
  if (addedWallets.length > 0) await updateMetadataJson(addedWallets, 'wallet')
}

await main()
