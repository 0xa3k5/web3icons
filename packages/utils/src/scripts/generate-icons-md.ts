import * as fs from 'fs'
import * as path from 'path'
import { coreRoot } from '../constants'
import networks from '../../../core/src/metadata/networks.json'
import tokens from '../../../core/src/metadata/tokens.json'

const outputFilePath = path.join(coreRoot, '../../docs/icons.md')

// Read and parse the networks.json file

// Generate the Markdown table content
const generateNetworksTable = (): string => {
  let tableContent = '# Networks\n\n| id | name | branded | mono |\n'
  tableContent += '|----|------|---------|------|\n'

  networks.forEach((network) => {
    const brandedCheck = network.variants.includes('branded') ? '✅' : '❌'
    const monoCheck = network.variants.includes('mono') ? '✅' : '❌'

    tableContent += `| ${network.id} | ${network.name} | ${brandedCheck} | ${monoCheck} |\n`
  })

  return tableContent
}

const generateTokensTable = (): string => {
  let tableContent = '# Tokens\n\n| name | symbol | branded | mono |\n'
  tableContent += '|------|--------|---------|------|\n'

  tokens.forEach((token) => {
    const brandedCheck = token.variants.includes('branded') ? '✅' : '❌'
    const monoCheck = token.variants.includes('mono') ? '✅' : '❌'

    tableContent += `| ${token.name} | ${token.symbol} | ${brandedCheck} | ${monoCheck} |\n`
  })

  return tableContent
}

const iconsMd = generateNetworksTable() + `\n\n` + generateTokensTable()

// Write the content to the Markdown file
fs.writeFileSync(outputFilePath, iconsMd)

console.log('✅ generated icons.md')
