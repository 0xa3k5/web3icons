import fs from 'fs'
import path from 'path'
import prettier from 'prettier'
import {
  GeckoCoins,
  GeckoNetworks,
  INetworkMetadata,
  ITokenMetadata,
} from '../types'
import getCoinByID from './gecko/get-coin-by-id'

const normalizeName = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const appendToNetworksJson = async (
  network: INetworkMetadata,
): Promise<void> => {
  const jsonPath = path.resolve(
    process.cwd(),
    'packages/core/src/metadata/networks.json',
  )

  let existingMetadata: INetworkMetadata[] = []
  if (fs.existsSync(jsonPath)) {
    const fileContent = fs.readFileSync(jsonPath, 'utf-8')
    existingMetadata = JSON.parse(fileContent) as INetworkMetadata[]
  }

  const existingNetworkIndex = existingMetadata.findIndex(
    (n) => n.id === network.id,
  )

  if (existingNetworkIndex > -1) {
    const currentNetwork = existingMetadata[existingNetworkIndex]
    if (currentNetwork && currentNetwork.variants) {
      network.variants?.forEach((variant) => {
        if (!currentNetwork.variants?.includes(variant)) {
          currentNetwork.variants?.push(variant)
        }
      })
    }
  } else {
    existingMetadata.push(network)
  }

  const formatted = await prettier.format(JSON.stringify(existingMetadata), {
    parser: 'json',
  })
  console.log(`appended ${network.id} to networks.json`)
  fs.writeFileSync(jsonPath, formatted)
}

const appendToTokensJson = async (coin: ITokenMetadata): Promise<void> => {
  const jsonPath = path.resolve(
    process.cwd(),
    'packages/core/src/metadata/tokens.json',
  )
  let existingMetadata: ITokenMetadata[] = []
  if (fs.existsSync(jsonPath)) {
    const fileContent = fs.readFileSync(jsonPath, 'utf-8')
    existingMetadata = JSON.parse(fileContent) as ITokenMetadata[]
  }

  const existingCoinIndex = existingMetadata.findIndex((c) => c.id === coin.id)

  if (existingCoinIndex > -1) {
    const currentCoin = existingMetadata[existingCoinIndex]
    if (currentCoin && currentCoin.variants) {
      coin.variants.forEach((variant) => {
        if (!currentCoin.variants.includes(variant)) {
          currentCoin.variants.push(variant)
        }
      })
    }
  } else {
    existingMetadata.push(coin)
  }

  const formattedContent = await prettier.format(
    JSON.stringify(existingMetadata),
    { parser: 'json' },
  )
  console.log(`appended ${coin.symbol} to tokens.json`)
  fs.writeFileSync(jsonPath, formattedContent)
}

const processSVGFile = async (
  file: string,
  type: 'token' | 'network',
): Promise<void> => {
  const fileName = path.basename(file, '.svg')
  console.log('fileName', fileName)
  const normalizedFileName = normalizeName(fileName)
  console.log('normalizedFileName', normalizedFileName)

  const geckoCoins: GeckoCoins[] = JSON.parse(
    fs.readFileSync(path.join(__dirname, './gecko/gecko-coins.json'), 'utf8'),
  )
  const geckoNetworks: GeckoNetworks[] = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, './gecko/gecko-networks.json'),
      'utf8',
    ),
  )

  if (type === 'token') {
    const foundCoin = geckoCoins.find(
      (coin: GeckoCoins) => normalizeName(coin.symbol) === normalizedFileName,
    )
    if (foundCoin) {
      console.log(`Found match for ${foundCoin.symbol}`)
      const tokenMetadata: ITokenMetadata = {
        id: foundCoin.id,
        symbol: foundCoin.symbol,
        name: foundCoin.name,
        variants: file.includes('/branded/') ? ['branded'] : ['mono'],
        marketCapRank: 0, // will be fetched below
        addresses: {}, // will be fetched below
      }
      const data = await getCoinByID(foundCoin.id)
      tokenMetadata.addresses = data.platforms
      tokenMetadata.marketCapRank = data.market_cap_rank
      await appendToTokensJson(tokenMetadata)
    } else {
      console.log(`Could not find a token match for ${normalizedFileName}`)
    }
  } else if (type === 'network') {
    const foundNetwork = geckoNetworks.find(
      (network: GeckoNetworks) =>
        (network.id && normalizeName(network.id)) === normalizedFileName ||
        (network.shortname && normalizeName(network.shortname)) ===
          normalizedFileName ||
        normalizeName(network.name) === normalizedFileName,
    )
    if (foundNetwork) {
      console.log(`Found match for ${foundNetwork.name}`)
      const networkMetadata: INetworkMetadata = {
        id: foundNetwork.id,
        name: foundNetwork.name,
        shortname: foundNetwork.shortname,
        variants: file.includes('/branded/') ? ['branded'] : ['mono'],
        nativeCoinId: foundNetwork.native_coin_id,
      }
      await appendToNetworksJson(networkMetadata)
    } else {
      console.log(`Could not find a network match for ${normalizedFileName}`)
    }
  }
}

const main = async () => {
  const files = process.argv.slice(2)

  if (files === undefined || files.length === 0) {
    console.log('No SVG files provided')

    const newIcons = require('child_process')
      .execSync(
        "git ls-files --others --modified --deleted --exclude-standard -- '*.svg' | grep 'packages/core/src/raw-svgs/' | tr '\n' ','",
      )
      .toString()
      .trim()
    console.log(newIcons)

    if (newIcons === undefined) {
      console.log('No new icons found')
      return
    }
    newIcons.split(',').map(async (filePath: string) => {
      console.log('filePath', filePath)
      const type = filePath.includes('/tokens/') ? 'token' : 'network'
      console.log('type', type)
      await processSVGFile(filePath, type)
    })
  }

  files[0]?.split(',').map(async (filePath) => {
    const type = filePath.includes('/tokens/') ? 'token' : 'network'
    await processSVGFile(filePath, type)
  })
}

try {
  await main()
} catch (error) {
  console.error('Failed to update metadata:', error)
  process.exit(1)
}
