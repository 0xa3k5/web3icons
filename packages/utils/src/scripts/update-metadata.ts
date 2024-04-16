import fs from 'fs/promises'
import path from 'path'
import prettier from 'prettier'
import {
  GeckoCoins,
  GeckoNetworks,
  INetworkMetadata,
  ITokenMetadata,
} from '../types'
import getCoinByID from './gecko/get-coin-by-id'
import geckoCoins from './gecko/gecko-coins.json'
import geckoNetworks from './gecko/gecko-networks.json'

const normalizeName = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const appendToNetworksJson = async (network: INetworkMetadata) => {
  const jsonPath = path.resolve(
    process.cwd(),
    'packages/core/src/metadata/networks.json',
  )
  let existingMetadata: INetworkMetadata[] = []

  try {
    const fileContent = await fs.readFile(jsonPath, 'utf-8') // Async read
    existingMetadata = JSON.parse(fileContent)
  } catch (error) {
    console.error('Failed to read networks.json:', error)
    return
  }

  const index = existingMetadata.findIndex((n) => n.id === network.id)
  if (index > -1) {
    const existingNetwork = existingMetadata[index]
    if (existingNetwork) {
      network.variants.forEach((variant) => {
        if (!existingNetwork.variants.includes(variant)) {
          existingNetwork.variants.push(variant)
        }
      })
    }
  } else {
    existingMetadata.push(network)
  }

  try {
    const formatted = await prettier.format(JSON.stringify(existingMetadata), {
      parser: 'json',
    })
    await fs.writeFile(jsonPath, formatted) // Async write
    console.log(`Appended ${network.id} to networks.json`)
  } catch (error) {
    console.error('Failed to write to networks.json:', error)
  }
}

// const appendToNetworksJson = async (network: INetworkMetadata) => {
//   const jsonPath = path.resolve(
//     process.cwd(),
//     'packages/core/src/metadata/networks.json',
//   )

//   let existingMetadata: INetworkMetadata[] = []
//   if (fs.existsSync(jsonPath)) {
//     const fileContent = fs.readFileSync(jsonPath, 'utf-8')
//     existingMetadata = JSON.parse(fileContent) as INetworkMetadata[]
//   }

//   const existingNetworkIndex = existingMetadata.findIndex(
//     (n) => n.id === network.id,
//   )

//   if (existingNetworkIndex > -1) {
//     const currentNetwork = existingMetadata[existingNetworkIndex]
//     if (currentNetwork && currentNetwork.variants) {
//       network.variants?.forEach((variant) => {
//         if (!currentNetwork.variants?.includes(variant)) {
//           currentNetwork.variants?.push(variant)
//         }
//       })
//     }
//   } else {
//     existingMetadata.push(network)
//   }

//   const formatted = await prettier.format(JSON.stringify(existingMetadata), {
//     parser: 'json',
//   })
//   fs.writeFileSync(jsonPath, formatted)
//   console.log(`appended ${network.id} to networks.json`)
// }

const appendToTokensJson = async (coin: ITokenMetadata) => {
  const jsonPath = path.resolve(
    process.cwd(),
    'packages/core/src/metadata/tokens.json',
  )
  let existingMetadata: ITokenMetadata[] = []

  try {
    const fileContent = await fs.readFile(jsonPath, 'utf-8') // Read asynchronously
    existingMetadata = JSON.parse(fileContent)
  } catch (error) {
    console.error('Failed to read tokens.json:', error)
    return // Early exit on read failure
  }

  const index = existingMetadata.findIndex((c) => c.id === coin.id)
  if (index > -1) {
    const existingCoin = existingMetadata[index]
    if (existingCoin) {
      coin.variants.forEach((variant) => {
        if (!existingCoin.variants.includes(variant)) {
          existingCoin.variants.push(variant)
        }
      })
    }
  } else {
    existingMetadata.push(coin)
  }

  try {
    const formattedContent = await prettier.format(
      JSON.stringify(existingMetadata),
      { parser: 'json' },
    )
    await fs.writeFile(jsonPath, formattedContent) // Write changes back asynchronously
    console.log(`Appended ${coin.symbol} to tokens.json`)
  } catch (error) {
    console.error('Failed to write to tokens.json:', error)
  }
}

const processSVGFile = async (file: string, type: 'token' | 'network') => {
  const fileName = path.basename(file, '.svg')
  const normalizedFileName = normalizeName(fileName)

  if (type === 'token') {
    const foundCoin = (geckoCoins as GeckoCoins[]).find(
      (coin: GeckoCoins) => normalizeName(coin.symbol) === normalizedFileName,
    )
    if (foundCoin) {
      console.log(`Found match for ${foundCoin.symbol}`)
      const tokenMetadata: ITokenMetadata = {
        id: foundCoin.id,
        symbol: foundCoin.symbol,
        name: foundCoin.name,
        variants: file.includes('/mono/') ? ['mono'] : ['branded'],
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
    const foundNetwork = (geckoNetworks as GeckoNetworks[]).find(
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
        variants: file.includes('/mono/') ? ['mono'] : ['branded'],
        nativeCoinId: foundNetwork.native_coin_id,
      }

      appendToNetworksJson(networkMetadata)
    } else {
      console.log(`Could not find a network match for ${normalizedFileName}`)
    }
  }
}

const main = async () => {
  const files: string[] = process.argv.slice(2) ?? []

  if (!files || files.length === 0) {
    console.log(
      'No SVG files provided as arguments, looking at local changes...',
    )

    const newIcons = require('child_process')
      .execSync(
        "git ls-files --others --modified --deleted --exclude-standard -- '*.svg' | grep 'packages/core/src/raw-svgs/' | tr '\n' ','",
      )
      .toString()
      .trim()

    if (!newIcons) {
      console.log('No new icons found')
      return
    }

    const iconPaths = newIcons.split(',').filter(Boolean)

    for (const filePath of iconPaths) {
      console.log('Processing file:', filePath)
      const type = filePath.includes('/tokens/') ? 'token' : 'network'
      await processSVGFile(filePath, type)
    }
  } else {
    for (const filePath of files[0]?.split(',') ?? []) {
      if (filePath) {
        const type = filePath.includes('/tokens/') ? 'token' : 'network'
        await processSVGFile(filePath, type)
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

// const main = async () => {
//   const files = process.argv.slice(2)

//   if (files === undefined || files.length === 0) {
//     console.log(
//       'No SVG files provided as arguments, looking at local changes...',
//     )

//     const newIcons: string = require('child_process')
//       .execSync(
//         "git ls-files --others --modified --deleted --exclude-standard -- '*.svg' | grep 'packages/core/src/raw-svgs/' | tr '\n' ','",
//       )
//       .toString()
//       .trim()
//     console.log('newIcons', newIcons)

//     if (newIcons === undefined) {
//       console.log('No new icons found')
//       return
//     }

//     newIcons.split(',').forEach(async (filePath: string) => {
//       console.log('filePath', filePath)
//       const type = filePath.includes('/tokens/') ? 'token' : 'network'
//       await processSVGFile(filePath, type)
//     })
//   }

//   files[0]?.split(',').forEach(async (filePath) => {
//     const type = filePath.includes('/tokens/') ? 'token' : 'network'
//     await processSVGFile(filePath, type)
//   })
// }

// try {
//   await main()
// } catch (error) {
//   console.error('Failed to update metadata:', error)
//   process.exit(1)
// }
