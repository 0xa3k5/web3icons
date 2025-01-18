import fs from 'fs'
import path from 'path'
import { ROOT_REACT } from '../../constants'

export function generateMapping() {
  const iconTypes = ['networks', 'tokens', 'wallets', 'exchanges']
  const iconPaths = iconTypes.map((iconType) => {
    const dirPath = path.join(ROOT_REACT, `src/icons/${iconType}`)
    const files = fs.readdirSync(dirPath)
    return files
      .filter((file) => file.endsWith('.tsx'))
      .map((file) => {
        const iconName = path.basename(file, '.tsx')
        return `${iconName}: () => import('../icons/${iconType}/${iconName}')`
      })
      .join(',\n')
  })

  const content = `/* Generated */\n// This file maps dynamically importable icon components.

// Type for a single import function that dynamically imports a module
type IconImportFunction = () => Promise<{ default: React.ComponentType<any> }>

// Type for the map containing all network icon import functions
interface IconImportMap {
  [name: string]: IconImportFunction
}

export const NETWORK_ICON_IMPORT_MAP: IconImportMap = {\n${iconPaths[0]}};\n
export const TOKEN_ICON_IMPORT_MAP: IconImportMap  = {\n${iconPaths[1]}};\n
export const WALLET_ICON_IMPORT_MAP: IconImportMap  = {\n${iconPaths[2]}};\n
export const EXCHANGE_ICON_IMPORT_MAP: IconImportMap = {\n${iconPaths[3]}};\n
`

  const outputPath = path.join(ROOT_REACT, 'src/utils/icon-import-map.ts')
  fs.writeFileSync(outputPath, content)
  console.log('✅ generated: import paths at:', outputPath)
}
