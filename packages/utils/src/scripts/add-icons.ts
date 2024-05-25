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
import prettier from 'prettier'
import getCoinByID from './gecko/get-coin-by-id'

const isUppercase = (filename: string): boolean =>
  filename === filename.toUpperCase()

const isKebabCase = (filename: string): boolean =>
  /^[a-z0-9]+(-[a-z0-9]+)*\.svg$/.test(filename)

const getModifiedIcons = () => {
  // modified or new added icons
  return execSync(
    "git ls-files --others -m --exclude-standard -- '*.svg' | tr '\n' ','",
  )
    .toString()
    .trim()
}

// TODO: both findNetworkByName and findTokenByName are flawed
// they find the first network or token with the file name
const findNetworkByName = (name: string): INetworkRaw | undefined => {
  const geckoNetwork = (geckoNetworks as INetworkRaw[]).find(
    (network) =>
      network.id === name ||
      network.shortname === name ||
      network.name === name,
  )

  const customNetwork = (customNetworks as INetworkRaw[]).find(
    (network) =>
      network.id === name ||
      network.shortname === name ||
      network.name === name,
  )

  return geckoNetwork || customNetwork
}

const findTokenByName = (name: string): ITokenRaw | undefined => {
  const geckoCoin = (geckoCoins as ITokenRaw[]).find(
    (token) =>
      token.id === name || token.name === name || token.symbol === name,
  )
  const customCoin = (customTokens as ITokenRaw[]).find(
    (token) =>
      token.id === name || token.symbol === name || token.name === name,
  )

  return geckoCoin || customCoin
}

const appendToJson = async (
  data: ITokenMetadata | INetworkMetadata,
  type: 'tokens' | 'networks',
) => {
  const TOKENS_PATH = 'packages/core/src/metadata/tokens.json'
  const NETWORKS_PATH = 'packages/core/src/metadata/networks.json'

  const tokensJson = JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf-8'))
  const networksJson = JSON.parse(fs.readFileSync(NETWORKS_PATH, 'utf-8'))

  let file: (ITokenMetadata | INetworkMetadata)[] =
    type === 'tokens' ? tokensJson : networksJson

  const found =
    type === 'tokens'
      ? file.find((t) => t.id?.toLowerCase() === data.id?.toLowerCase())
      : file.find((n) => n.name?.toLowerCase() === data.name?.toLowerCase())

  if (!found) {
    file.push(data)
  } else {
    found.variants = Array.from(new Set([...found.variants, ...data.variants]))
    console.log(
      `✅ ${data.name}: updated ${type === 'tokens' ? 'tokens' : 'networks'}`,
    )
  }

  const formatted = await prettier.format(JSON.stringify(file), {
    parser: 'json',
  })

  fs.writeFileSync(type === 'tokens' ? TOKENS_PATH : NETWORKS_PATH, formatted)
}

// simple validation of SVGs
const validateSvg = (filePath: string): boolean => {
  const svgContent = fs.readFileSync(filePath, 'utf8')
  const type = filePath.includes('/tokens/') ? 'token' : 'network'
  const fileName = path.basename(filePath, '.svg')

  // check size
  const hasCorrectDimensions =
    svgContent.includes('width="24"') && svgContent.includes('height="24"')
  if (!hasCorrectDimensions) {
    console.error(`❌ ${fileName}: Invalid dimensions. Expected 24x24.`)
    return false
  }

  // check filename based on type
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

// updateMetadata
const updateMetadata = async (filePath: string): Promise<void> => {
  const type = filePath.includes('/tokens/') ? 'token' : 'network'
  const fileName = path.basename(filePath, '.svg')

  const variant = filePath.includes('/mono/') ? 'mono' : 'branded'

  if (type === 'network') {
    const network = findNetworkByName(fileName)

    if (network) {
      await appendToJson(
        {
          ...network,
          variants: [variant],
        },
        'networks',
      )
    } else {
      console.error(
        `❌ ${fileName}: No network metadata, consider manually adding to "packages/utils/scripts/gecko/custom-networks.json"`,
      )
      process.exit(1)
    }
  }

  if (type === 'token') {
    // find token metadata based on file name
    const token = findTokenByName(fileName)

    if (token) {
      const tokenMetadata: ITokenMetadata = {
        id: token.id,
        symbol: token.symbol,
        name: token.name,
        variants: [variant],
        marketCapRank: 0, // will be fetched below
        addresses: {}, // will be fetched below
      }

      console.log({ token })

      const data = await getCoinByID(token.id)
      console.log({ data })

      tokenMetadata.addresses = data?.platforms || {}
      tokenMetadata.marketCapRank = data?.market_cap_rank || null

      appendToJson(tokenMetadata, 'tokens')
    } else {
      console.error(
        `❌ ${fileName}: No matching token metadata, consider manually adding to "packages/utils/scripts/gecko/custom-tokens.json"`,
      )
      process.exit(1)
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
  console.log('modified icons:', iconPaths)

  iconPaths.forEach(async (iconPath) => {
    if (validateSvg(iconPath)) {
      await updateMetadata(iconPath)
    }
  })
}

await main()
