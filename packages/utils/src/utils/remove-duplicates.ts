import fs from 'fs'
import prettier from 'prettier'
import { ITokenMetadata } from '@web3icons/common'
import { TOKENS_METADATA_PATH } from '../constants'

const geckoCoins: ITokenMetadata[] = JSON.parse(fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'))

/**
 * removes duplicates from the tokens.json file.
 * finds the duplicated by symbol
 * removes the object with the lowest marketCapRank
 * this assumes if two icons share the same symbol, they should have the same icon
 * also assumes that the marketCapRank is a good data to use to determine duplicates
 */
export const removeDuplicates = async () => {
  const removedIds: string[] = []

  const processedCoins = geckoCoins.reduce((acc: Record<string, ITokenMetadata>, coin) => {
    const existingCoin = acc[coin.symbol]
    if (!existingCoin) {
      acc[coin.symbol] = coin
    } else {
      if (
        coin.marketCapRank &&
        (!existingCoin.marketCapRank || coin.marketCapRank < existingCoin.marketCapRank)
      ) {
        removedIds.push(existingCoin.id)
        acc[coin.symbol] = coin
      } else {
        removedIds.push(coin.id)
      }
    }
    return acc
  }, {})

  // Convert the processed coins back to an array
  // clean the addresses
  const uniqueCoins = Object.values(processedCoins).map((item) => {
    const cleanedAddresses = Object.entries(item.addresses || {})
      // eslint-disable-next-line no-unused-vars
      .filter(([_, value]) => value)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

    return { ...item, addresses: cleanedAddresses }
  })

  // Write the modified data back to the file
  fs.writeFileSync(
    TOKENS_METADATA_PATH,
    await prettier.format(JSON.stringify(uniqueCoins), {
      parser: 'json',
    }),
    'utf-8',
  )

  console.log(`Removed ${removedIds.length} duplicates from tokens.json`)
}

removeDuplicates().catch(console.error)
