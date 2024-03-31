import { SVG_SOURCE_DIR } from '../constants'
import fs from 'fs'
import { execSync } from 'child_process'
import * as path from 'path'
import getCoinByID from './gecko/get-coin-by-id'
import { appendToMetadataJson } from '../utils'

function getNewSVGFiles(): string[] {
  const output = execSync(
    `git diff --name-only HEAD HEAD~1 ${SVG_SOURCE_DIR}`,
  ).toString()
  return output.split('\n').filter((file) => file.endsWith('.svg'))
}

async function main() {
  const geckoCoins: any = JSON.parse(
    fs.readFileSync(path.join(__dirname, './gecko/gecko-coins.json'), 'utf8'),
  )
  const newSvgFiles = getNewSVGFiles()

  for (const file of newSvgFiles) {
    const symbol = path.basename(file, '.svg').toLowerCase()
    const foundCoin = geckoCoins.find(
      (coin: { symbol: string }) =>
        coin.symbol.toLocaleLowerCase() === symbol.toLocaleLowerCase(),
    )

    if (foundCoin) {
      if (file.includes('/branded/')) {
        foundCoin.variants.push('branded')
      }
      if (file.includes('/mono/')) {
        foundCoin.variants.push('mono')
      }
      const data = await getCoinByID(foundCoin.id)
      foundCoin.addresses = data.platforms
      foundCoin.marketCapRank = data.market_cap_rank
      appendToMetadataJson(foundCoin)
    }
  }
}

main().catch(console.error)
