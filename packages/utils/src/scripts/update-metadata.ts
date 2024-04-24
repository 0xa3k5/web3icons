import fs from 'fs'
import path from 'path'
import {
  GeckoCoins,
  GeckoNetworks,
  INetworkMetadata,
  ITokenMetadata,
} from '../types'
import geckoNetworks from './gecko/gecko-networks.json'
import geckoCoins from './gecko/gecko-coins.json'
import getCoinByID from './gecko/get-coin-by-id'
import { execSync } from 'child_process'
import prettier from 'prettier'

const normalizeName = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const findNetworkByName = (name: string): GeckoNetworks | undefined => {
  return (geckoNetworks as GeckoNetworks[]).find(
    (network: GeckoNetworks) =>
      (network.id && normalizeName(network.id)) === normalizeName(name) ||
      (network.shortname && normalizeName(network.shortname)) ===
        normalizeName(name) ||
      normalizeName(network.name) === normalizeName(name),
  )
}

const findTokenByName = (name: string): GeckoCoins | undefined => {
  return (geckoCoins as GeckoCoins[]).find(
    (token: GeckoCoins) =>
      (token.id && normalizeName(token.id)) === normalizeName(name) ||
      (token.symbol && normalizeName(token.symbol)) === normalizeName(name),
  )
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
    found.variants = [...found.variants, ...data.variants]
  }

  const formatted = await prettier.format(JSON.stringify(file), {
    parser: 'json',
  })

  fs.writeFileSync(type === 'tokens' ? TOKENS_PATH : NETWORKS_PATH, formatted)
}

const updateMetadata = async (filePath: string) => {
  const type = filePath.includes('/tokens/') ? 'token' : 'network'
  const fileName = path.basename(filePath, '.svg')
  const normalizedFileName = normalizeName(fileName)
  const variant = filePath.includes('/mono/') ? 'mono' : 'branded'

  if (type === 'network') {
    const geckoNetwork = findNetworkByName(normalizedFileName)

    if (geckoNetwork) {
      await appendToJson(
        {
          ...geckoNetwork,
          variants: [variant],
        },
        'networks',
      )
    } else {
      console.log(`No matching network metadata found for "${fileName}"`)
    }
  }

  if (type === 'token') {
    // Simulated function to find token metadata based on file name
    const geckoCoin = findTokenByName(normalizedFileName)

    if (geckoCoin) {
      const tokenMetadata: ITokenMetadata = {
        id: geckoCoin.id,
        symbol: geckoCoin.symbol,
        name: geckoCoin.name,
        variants: [variant],
        marketCapRank: 0, // will be fetched below
        addresses: {}, // will be fetched below
      }

      const data = await getCoinByID(geckoCoin.id)
      tokenMetadata.addresses = data.platforms
      tokenMetadata.marketCapRank = data.market_cap_rank

      appendToJson(tokenMetadata, 'tokens')
    } else {
      console.log(`No matching token metadata found for "${fileName}"`)
    }
  }
}

const getNewIcons = () => {
  try {
    return execSync(
      "git ls-files --others --exclude-standard 'packages/core/src/raw-svgs/'  | tr '\n' ','",
    )
      .toString()
      .trim()
  } catch (error: any) {
    console.error(`Error executing command:`, error.message)
    return ''
  }
}

const main = async () => {
  const files = process.argv.slice(2)

  if (files === undefined || files.length === 0) {
    const newIcons = getNewIcons()
    console.log('New Icons:', newIcons)

    const iconPaths = newIcons.split(',').filter(Boolean)
    console.log('iconPaths:', iconPaths)

    for (const filePath of iconPaths) {
      console.log(filePath)
      await updateMetadata(filePath)
    }
  } else {
    for (const filePath of files[0]?.split(',') ?? []) {
      if (filePath) {
        await updateMetadata(filePath)
      }
    }
  }
}

try {
  await main()
} catch (error) {
  console.error('Failed to update metadata:', error)
  process.exit(1)
}
