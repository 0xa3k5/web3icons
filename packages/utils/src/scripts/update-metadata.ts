import fs from 'fs'
import path from 'path'
import prettier from 'prettier'
import { INetworkMetadata, ITokenMetadata } from '../types'
import getCoinByID from './gecko/get-coin-by-id'

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
      network.variants.forEach((variant) => {
        if (!currentNetwork.variants.includes(variant)) {
          currentNetwork.variants.push(variant)
        }
      })
    }
  } else {
    existingMetadata.push(network)
  }

  const formatted = await prettier.format(JSON.stringify(existingMetadata), {
    parser: 'json',
  })
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

  fs.writeFileSync(
    jsonPath,
    await prettier.format(JSON.stringify(existingMetadata), { parser: 'json' }),
  )
}

const processSVGFile = async (
  file: string,
  type: 'token' | 'network',
): Promise<void> => {
  const fileName =
    type === 'token'
      ? path.basename(file, '.svg').toUpperCase()
      : path.basename(file, '.svg')
  console.log(fileName)
  const geckoCoins = JSON.parse(
    fs.readFileSync(path.join(__dirname, './gecko/gecko-coins.json'), 'utf8'),
  )
  const geckoNetworks = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, './gecko/gecko-networks.json'),
      'utf8',
    ),
  )

  if (type === 'token') {
    const foundCoin = geckoCoins.find(
      (coin: any) => coin.symbol.toUpperCase() === fileName,
    )
    if (foundCoin) {
      const tokenIcon: ITokenMetadata = {
        id: foundCoin.id,
        symbol: foundCoin.symbol,
        name: foundCoin.name,
        variants: file.includes('/branded/') ? ['branded'] : ['mono'],
        marketCapRank: 0, // Will be fetched below
        addresses: {}, // Will be fetched below
      }
      console.log('hey')
      console.log(file)
      const data = await getCoinByID(foundCoin.id)
      tokenIcon.addresses = data.platforms
      tokenIcon.marketCapRank = data.market_cap_rank
      console.log('tokenIcon', tokenIcon)

      await appendToTokensJson(tokenIcon)
    }
  } else if (type === 'network') {
    const foundNetwork = geckoNetworks.find(
      (network: any) =>
        network.id.toUpperCase() === fileName ||
        network.shortname.toUpperCase() === fileName ||
        network.name.toUpperCase() === fileName,
    )

    if (foundNetwork) {
      const networkIcon: INetworkMetadata = {
        id: foundNetwork.id,
        name: foundNetwork.name,
        shortname: foundNetwork.shortname,
        variants: file.includes('/branded/') ? ['branded'] : ['mono'],
        nativeCoinId: foundNetwork.native_coin_id,
      }
      console.log('networkIcon', networkIcon)

      await appendToNetworksJson(networkIcon)
    }
  }
}

const main = async (): Promise<void> => {
  const newSVGFiles: { file: string; type: 'token' | 'network' }[] =
    process.argv.slice(2).map((file) => ({
      file,
      type: file.includes('/tokens/') ? 'token' : 'network',
    }))

  for (const { file, type } of newSVGFiles) {
    await processSVGFile(file, type)
  }
}

main().catch(console.error)

// use this on development
// function getNewSVGFiles(): { file: string; type: string }[] {
//   try {
//     console.log('Running getNewSVGFiles...')

//     // Add other modified or untracked SVG files throughout the repo
//     const gitOutput =
//       execSync(`git diff --name-only HEAD`).toString().trim() +
//       '\n' +
//       execSync(`git ls-files --others --exclude-standard -- '*.svg'`)
//         .toString()
//         .trim()

//     const newFiles = gitOutput
//       .split('\n')
//       .filter((file) => file.endsWith('.svg'))
//       .map((file) => ({
//         file,
//         type: file.includes('/tokens/') ? 'token' : 'network',
//       }))
//     return newFiles
//   } catch (error) {
//     console.error('Error fetching new SVG files:', error)
//     return []
//   }
// }
