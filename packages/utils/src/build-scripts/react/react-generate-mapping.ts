import fs from 'fs'
import path from 'path'
import { ROOT_REACT } from '../../constants'

export function generateMapping() {
  // prettier-ignore
  const networkIcons = fs.readdirSync(path.join(ROOT_REACT, 'src/icons/networks'))
  const tokenIcons = fs.readdirSync(path.join(ROOT_REACT, 'src/icons/tokens'))
  const walletIcons = fs.readdirSync(path.join(ROOT_REACT, 'src/icons/wallets'))
  const exchangeIcons = fs.readdirSync(path.join(ROOT_REACT, 'src/icons/exchanges'))

  const networkPaths = networkIcons
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => {
      const iconName = path.basename(file, '.tsx')
      return `${iconName}: () => import('../icons/networks/${iconName}'),\n`
    })
    .join('')

  const tokenPaths = tokenIcons
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => {
      const iconName = path.basename(file, '.tsx')
      return `${iconName}: () => import('../icons/tokens/${iconName}'),\n`
    })
    .join('')

  const walletPaths = walletIcons
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => {
      const iconName = path.basename(file, '.tsx')
      return `${iconName}: () => import('../icons/wallets/${iconName}'),\n`
    })
    .join('')

  const exchangePaths = exchangeIcons
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => {
      const iconName = path.basename(file, '.tsx')
      return `${iconName}: () => import('../icons/exchanges/${iconName}')`
    })

  const content = `/* Generated */\n// This file maps dynamically importable icon components.

// Type for a single import function that dynamically imports a module
type IconImportFunction = () => Promise<{ default: React.ComponentType<any> }>

// Type for the map containing all network icon import functions
interface IconImportMap {
  [name: string]: IconImportFunction
}

export const NETWORK_ICON_IMPORT_MAP: IconImportMap = {\n${networkPaths}};\n
export const TOKEN_ICON_IMPORT_MAP: IconImportMap  = {\n${tokenPaths}};\n
export const WALLET_ICON_IMPORT_MAP: IconImportMap  = {\n${walletPaths}};\n
export const EXCHANGE_ICON_IMPORT_MAP: IconImportMap = {\n${exchangePaths}};\n
`

  const outputPath = path.join(ROOT_REACT, 'src/utils/icon-import-map.ts')
  fs.writeFileSync(outputPath, content)
  console.log('✅ generated: import paths at:', outputPath)
}
