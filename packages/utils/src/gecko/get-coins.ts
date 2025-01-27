import fs from 'fs'
import * as path from 'path'

fetch('https://api.coingecko.com/api/v3/coins/list')
  .then((res) => res.json())
  .catch((err) => {
    console.log('Error fetching coins from CoinGecko:', err)
  })
  .then((res) => {
    // write the coins to a JSON file
    fs.writeFileSync(path.join(__dirname, './gecko-coins.json'), JSON.stringify(res, null, 2))

    console.log('- gecko-coins.json updated')
  })
  .catch((err) => {
    console.log('Error writing coins to JSON file:', err)
  })
