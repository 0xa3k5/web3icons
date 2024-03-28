// we are calling networks to what coingecko calls asset platforms
// https://www.coingecko.com/en/api/docs/v3#/coins/get_coins_list

import fs from 'fs'
import * as path from 'path'

fetch('https://api.coingecko.com/api/v3/asset_platforms')
  .then((res) => res.json())
  .catch((err) => {
    console.log('Error fetching asset platforms from CoinGecko:', err)
  })
  .then((res) => {
    // networks must have a chain_identifier
    // const networks = res.filter((network) => network.chain_identifier !== null)

    // write the networks to a JSON file
    fs.writeFileSync(
      path.join(__dirname, './gecko-networks.json'),
      JSON.stringify(res, null, 2),
    )

    console.log('✅ gecko-networks.json')
  })
  .catch((err) => {
    console.log('Error writing filtered networks to JSON file:', err)
  })
