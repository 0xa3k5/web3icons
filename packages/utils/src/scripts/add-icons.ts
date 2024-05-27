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

const findNetworkByName = (name: string): INetworkRaw | undefined => {
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

  return geckoNetwork || customNetwork
}

const findTokenByName = (name: string): ITokenRaw | undefined => {
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

  return geckoCoin || customCoin
}

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

const updateMetadata = async (
  filePath: string,
): Promise<ITokenMetadata | INetworkMetadata | undefined> => {
  const type = filePath.includes('/tokens/') ? 'token' : 'network'
  const fileName = path.basename(filePath, '.svg')
  const newVariants = new Set<string>()

  if (filePath.includes('/mono/')) {
    newVariants.add('mono')
  }
  if (filePath.includes('/branded/')) {
    newVariants.add('branded')
  }

  if (type === 'network') {
    const network = findNetworkByName(fileName)

    if (network) {
      const existingMetadata = (customNetworks as INetworkMetadata[]).find(
        (n) => n.name?.toLowerCase() === network.name?.toLowerCase(),
      )

      const combinedVariants = existingMetadata
        ? Array.from(
            new Set([...(existingMetadata.variants ?? []), ...newVariants]),
          )
        : Array.from(new Set(newVariants))

      const metadata: INetworkMetadata = {
        id: network.id,
        name: network.name,
        shortname: network.shortname,
        nativeCoinId: network.native_coin_id,
        variants: combinedVariants,
      }
      return metadata
    } else {
      console.error(
        `❌ ${fileName}: No network metadata, consider manually adding to "packages/utils/scripts/gecko/custom-networks.json"`,
      )
      return
    }
  }

  if (type === 'token') {
    const token = findTokenByName(fileName)

    if (token) {
      const tokenMetadata: ITokenMetadata = {
        id: token.id,
        symbol: token.symbol,
        name: token.name,
        variants: Array.from(newVariants),
        marketCapRank: 0, // will be fetched below
        addresses: {}, // will be fetched below
      }

      const data = await getCoinByID(token.id)

      tokenMetadata.addresses = data?.platforms || {}
      tokenMetadata.marketCapRank = data?.market_cap_rank || null

      const existingMetadata = (customTokens as ITokenMetadata[]).find(
        (t) => t.id?.toLowerCase() === token.id?.toLowerCase(),
      )

      tokenMetadata.variants = existingMetadata
        ? Array.from(
            new Set([...(existingMetadata.variants ?? []), ...newVariants]),
          )
        : Array.from(new Set(newVariants))

      const metadata: ITokenMetadata = {
        addresses: data?.platforms || {},
        id: token.id,
        marketCapRank: data?.market_cap_rank || null,
        name: token.name,
        symbol: token.symbol,
        variants: tokenMetadata.variants,
      }
      return metadata
    } else {
      console.error(
        `❌ ${fileName}: No matching token metadata, consider manually adding to "packages/utils/scripts/gecko/custom-tokens.json"`,
      )
      return
    }
  }
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
  console.log('grouped icons:', groupedPaths)

  const networksMetadata: INetworkMetadata[] = []
  const tokensMetadata: ITokenMetadata[] = []

  await Promise.all(
    Object.values(groupedPaths).map(async (filePaths) => {
      const validPaths = filePaths.filter(validateSvg)
      for (const filePath of validPaths) {
        const metadata = await updateMetadata(filePath)
        if (metadata) {
          if (filePath.includes('networks')) {
            networksMetadata.push(metadata as INetworkMetadata)
          }
          if (filePath.includes('tokens')) {
            tokensMetadata.push(metadata as ITokenMetadata)
          }
        }
      }
    }),
  )

  const TOKENS_PATH = 'packages/core/src/metadata/tokens.json'
  const NETWORKS_PATH = 'packages/core/src/metadata/networks.json'
  console.log('Networks Metadata:', networksMetadata)
  console.log('Tokens Metadata:', tokensMetadata)

  if (networksMetadata.length > 0) {
    const currentNetworksJson = JSON.parse(
      fs.readFileSync(NETWORKS_PATH, 'utf-8'),
    )

    fs.writeFileSync(
      NETWORKS_PATH,
      JSON.stringify([...currentNetworksJson, ...networksMetadata]),
    )
  }

  if (tokensMetadata.length > 0) {
    const currentTokensJson = JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf-8'))
    fs.writeFileSync(
      TOKENS_PATH,
      JSON.stringify([...currentTokensJson, ...tokensMetadata]),
    )
  }
}

await main()
