import fs from 'fs'
import { execSync } from 'child_process'
import path from 'path'
import prettier from 'prettier'
import { INetworkMetadata, ITokenMetadata } from '../types'
import getCoinByID from './gecko/get-coin-by-id'

function getNewSVGFiles(): { file: string; type: 'token' | 'network' }[] {
  try {
    const output = execSync(`git diff --name-only HEAD~1 HEAD`)
      .toString()
      .trim()
    return output
      .split('\n')
      .filter((file) => file.endsWith('.svg'))
      .map((file) => ({
        file,
        type: file.includes('/tokens/') ? 'token' : 'network',
      }))
  } catch (error) {
    console.error('Error fetching new SVG files:', error)
    return []
  }
}

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

const appendToNetworksJson = async (network: INetworkMetadata) => {
  const jsonPath = path.resolve(
    process.cwd(),
    'packages/core/src/metadata/networks.json',
  )

  let existingMetadata: INetworkMetadata[] = fs.existsSync(jsonPath)
    ? JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
    : []

  console.log('existingMetadata', existingMetadata)

  const existingNetworkIndex = existingMetadata.findIndex(
    (c) => c.id.toLocaleLowerCase() === network.id.toLocaleLowerCase(),
  )

  if (existingNetworkIndex > -1) {
    network.variants.forEach((variant) => {
      if (!existingMetadata[existingNetworkIndex]?.variants.includes(variant)) {
        existingMetadata[existingNetworkIndex]?.variants.push(variant)
      }
    })
  } else {
    console.log('new', network)
    existingMetadata.push(network)
  }

  const formatted = await prettier.format(JSON.stringify(existingMetadata), {
    parser: 'json',
  })
  console.log('jsonPath', jsonPath)
  fs.writeFileSync(jsonPath, formatted)
}

const appendToTokensJson = async (coin: ITokenMetadata) => {
  const jsonpath = path.resolve(
    process.cwd(),
    'packages/core/src/metadata/tokens.json',
  )

  let existingMetadata: ITokenMetadata[] = fs.existsSync(jsonpath)
    ? JSON.parse(fs.readFileSync(jsonpath, 'utf-8'))
    : []

  const existingCoinIndex = existingMetadata.findIndex((c) => c.id === coin.id)

  if (existingCoinIndex > -1) {
    coin.variants.forEach((variant) => {
      if (!existingMetadata[existingCoinIndex]?.variants.includes(variant)) {
        existingMetadata[existingCoinIndex]?.variants.push(variant)
      }
    })
  } else {
    existingMetadata.push(coin)
  }

  const formatted = await prettier.format(JSON.stringify(existingMetadata), {
    parser: 'json',
  })
  fs.writeFileSync(jsonpath, formatted)
}

async function main() {
  const geckoCoins: any = JSON.parse(
    fs.readFileSync(path.join(__dirname, './gecko/gecko-coins.json'), 'utf8'),
  )
  const geckoNetworks: any = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, './gecko/gecko-networks.json'),
      'utf8',
    ),
  )

  const newSvgFiles = getNewSVGFiles()
  console.log('newSvgFiles', newSvgFiles)

  for (const { file, type } of newSvgFiles) {
    const fileName = path.basename(file, '.svg').toUpperCase()

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
          marketCapRank: 0, // This will be fetched below
          addresses: {}, // This will be fetched below
        }

        const data = await getCoinByID(foundCoin.id)
        tokenIcon.addresses = data.platforms
        tokenIcon.marketCapRank = data.market_cap_rank

        await appendToTokensJson(tokenIcon)
      }
    }
    if (type === 'network') {
      const foundNetwork = geckoNetworks.find(
        (n: any) =>
          n.id.toLocaleUpperCase() === fileName ||
          n.shortname.toLocaleUpperCase() === fileName ||
          n.name.toLocaleUpperCase() === fileName,
      )
      console.log('foundNetwork', foundNetwork)
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

main().catch(console.error)
