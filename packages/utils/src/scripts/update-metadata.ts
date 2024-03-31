import fs from 'fs'
import { execSync } from 'child_process'
import * as path from 'path'
import getCoinByID from './gecko/get-coin-by-id'
import { ITokenMetadata } from '../types'

function getNewSVGFiles(): string[] {
  try {
    // Get a list of all .svg files that were changed between the last commit and the one before
    const output = execSync(`git diff --name-only HEAD~1 HEAD`)
      .toString()
      .trim()

    // Filter the output to only include .svg files
    const svgFiles = output.split('\n').filter((file) => file.endsWith('.svg'))

    console.log('New SVG files found:', svgFiles)

    return svgFiles
  } catch (error) {
    console.error('Error fetching new SVG files:', error)
    return []
  }
}

const appendToMetadataJson = (coin: ITokenMetadata) => {
  const jsonpath = path.resolve(
    process.cwd(),
    'packages/core/src/metadata/tokens.json',
  )
  let fileContent = fs.existsSync(jsonpath)
    ? fs.readFileSync(jsonpath, 'utf-8')
    : '[]'

  // remove the "]" and the eol break
  if (fileContent.length > 2) {
    fileContent = fileContent.slice(0, -2)
  }

  // append the new coin data
  const separator = fileContent.length > 2 ? ',' : ''
  fileContent += `${separator}\n${JSON.stringify(coin, null, 2)}]`

  fs.writeFileSync(jsonpath, fileContent)
}

async function main() {
  const geckoCoins: any = JSON.parse(
    fs.readFileSync(path.join(__dirname, './gecko/gecko-coins.json'), 'utf8'),
  )
  const newSvgFiles = getNewSVGFiles()
  console.log('New SVG files:', newSvgFiles)
  for (const file of newSvgFiles) {
    const symbol = path.basename(file, '.svg').toLowerCase()
    const foundCoin = geckoCoins.find(
      (coin: { symbol: string }) =>
        coin.symbol.toLocaleLowerCase() === symbol.toLocaleLowerCase(),
    )

    if (foundCoin) {
      const tokenIcon: ITokenMetadata = {
        id: foundCoin.id,
        symbol: foundCoin.symbol,
        name: foundCoin.name,
        variants: [''],
        marketCapRank: 0,
        addresses: {},
      }

      if (file.includes('/branded/')) {
        tokenIcon.variants.push('branded')
      }
      if (file.includes('/mono/')) {
        tokenIcon.variants.push('mono')
      }
      const data = await getCoinByID(tokenIcon.id)
      tokenIcon.addresses = data.platforms
      tokenIcon.marketCapRank = data.market_cap_rank
      console.log('added:', tokenIcon)
      appendToMetadataJson(tokenIcon)
    }
  }
}

main().catch(console.error)
