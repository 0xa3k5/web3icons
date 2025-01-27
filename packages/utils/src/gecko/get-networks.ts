// we are calling networks to what coingecko calls asset platforms
// https://www.coingecko.com/en/api/docs/v3#/coins/get_coins_list

import fs from 'fs'
import path from 'path'

const cleanObject = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === '' || obj[key] === null) {
      // Checking for empty strings and null values
      delete obj[key]
    }
  })
  return obj
}

fetch('https://api.coingecko.com/api/v3/asset_platforms')
  .then((res) => res.json())
  .then((assetPlatforms) => {
    const cleanedData = assetPlatforms.map((platform: any) => cleanObject(platform))

    // Write the cleaned networks to a JSON file
    fs.writeFileSync(
      path.join(__dirname, './gecko-networks.json'),
      JSON.stringify(cleanedData, null, 2),
      'utf8',
    )

    console.log('-gecko-networks.json has been updated.')
  })
  .catch((err) => {
    console.error('Error fetching or processing asset platforms from CoinGecko:', err)
  })
