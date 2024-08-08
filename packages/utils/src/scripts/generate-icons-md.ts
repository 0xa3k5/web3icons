import * as fs from 'fs'
import * as path from 'path'
import {
  NETWORKS_METADATA_PATH,
  ROOT_PROJECT,
  TOKENS_METADATA_PATH,
  WALLETS_METADATA_PATH,
} from '../constants'
import { INetworkMetadata, ITokenMetadata, IWalletMetadata } from '../types'

const outputFilePath = path.join(ROOT_PROJECT, 'docs/icons.md')

let totalWallets = 0
let totalNetworks = 0
let totalTokens = 0

// Generate the Markdown table content
const generateWalletsTable = (): string => {
  const wallets: IWalletMetadata[] = JSON.parse(
    fs.readFileSync(WALLETS_METADATA_PATH, 'utf8'),
  )

  let tableContent = '### Wallets\n\n| id | name | branded | mono |\n'
  tableContent += '|----|------|---------|------|\n'

  wallets.forEach((wallet) => {
    const brandedCheck = wallet.variants.includes('branded') ? '✅' : '❌'
    const monoCheck = wallet.variants.includes('mono') ? '✅' : '❌'

    tableContent += `| ${wallet.id} | ${wallet.name} | ${brandedCheck} | ${monoCheck} |\n`
  })

  console.log('wallets', wallets.length)
  totalWallets = wallets.length
  return tableContent
}

const generateNetworksTable = (): string => {
  const networks: INetworkMetadata[] = JSON.parse(
    fs.readFileSync(NETWORKS_METADATA_PATH, 'utf8'),
  )
  let tableContent = '### Networks\n\n| id | name | branded | mono |\n'
  tableContent += '|----|------|---------|------|\n'

  networks.forEach((network) => {
    const brandedCheck = network.variants.includes('branded') ? '✅' : '❌'
    const monoCheck = network.variants.includes('mono') ? '✅' : '❌'

    tableContent += `| ${network.id} | ${network.name} | ${brandedCheck} | ${monoCheck} |\n`
  })

  console.log('networks', networks.length)
  totalNetworks = networks.length
  return tableContent
}

const generateTokensTable = (): string => {
  const tokens: ITokenMetadata[] = JSON.parse(
    fs.readFileSync(TOKENS_METADATA_PATH, 'utf8'),
  )
  let tableContent = '### Tokens\n\n| name | symbol | branded | mono |\n'
  tableContent += '|------|--------|---------|------|\n'

  tokens.forEach((token) => {
    const brandedCheck = token.variants.includes('branded') ? '✅' : '❌'
    const monoCheck = token.variants.includes('mono') ? '✅' : '❌'

    tableContent += `| ${token.name} | ${token.symbol} | ${brandedCheck} | ${monoCheck} |\n`
  })

  console.log('tokens', tokens.length)
  totalTokens = tokens.length
  return tableContent
}

const walletsTable = generateWalletsTable()
const networksTable = generateNetworksTable()
const tokensTable = generateTokensTable()

const iconsMd =
  `jump to section:\n
  - [wallets (${totalWallets})](#wallets)
  - [networks (${totalNetworks})](#networks)
  - [tokens (${totalTokens})](#tokens)\n\n` +
  `${walletsTable}\n\n` +
  `${networksTable}\n\n` +
  `${tokensTable}`

fs.writeFileSync(outputFilePath, iconsMd)
console.log(
  `✅ generated icons.md\n
  total wallets: ${totalWallets}\n
  total networks: ${totalNetworks}\n
  total tokens: ${totalTokens}`,
)
