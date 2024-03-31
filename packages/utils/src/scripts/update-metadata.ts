import fs from 'fs'
import { execSync } from 'child_process'
import path from 'path'
import prettier from 'prettier'
import { ITokenMetadata } from '../types'
import getCoinByID from './gecko/get-coin-by-id'

function getNewSVGFiles(): string[] {
  try {
    const output = execSync(`git diff --name-only HEAD~1 HEAD`)
      .toString()
      .trim()
    return output.split('\n').filter((file) => file.endsWith('.svg'))
  } catch (error) {
    console.error('Error fetching new SVG files:', error)
    return []
  }
}

const appendToMetadataJson = async (coin: ITokenMetadata) => {
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
  const newSvgFiles = getNewSVGFiles()

  for (const file of newSvgFiles) {
    const symbol = path.basename(file, '.svg').toUpperCase()
    const foundCoin = geckoCoins.find(
      (coin: any) => coin.symbol.toUpperCase() === symbol,
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

      await appendToMetadataJson(tokenIcon)
    }
  }
}

main().catch(console.error)
