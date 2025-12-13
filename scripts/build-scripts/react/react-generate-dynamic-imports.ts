import fs from 'fs'
import path from 'path'
import { TType } from '@web3icons/common'
import {
  JSX_TOKENS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  JSX_WALLETS_OUT_DIR,
  JSX_EXCHANGES_OUT_DIR,
  ROOT_REACT,
} from '../../constants'

const DYNAMIC_IMPORTS_JS_PATH = path.resolve(
  ROOT_REACT,
  'dynamicIconImports.js',
)
const DYNAMIC_IMPORTS_DTS_PATH = path.resolve(
  ROOT_REACT,
  'dynamicIconImports.d.ts',
)

const iconDirs: { dir: string; type: TType }[] = [
  { dir: JSX_TOKENS_OUT_DIR, type: 'token' },
  { dir: JSX_NETWORKS_OUT_DIR, type: 'network' },
  { dir: JSX_WALLETS_OUT_DIR, type: 'wallet' },
  { dir: JSX_EXCHANGES_OUT_DIR, type: 'exchange' },
]

interface IconEntry {
  key: string
  importPath: string
}

function getIconEntries(dir: string, type: TType): IconEntry[] {
  if (!fs.existsSync(dir)) {
    return []
  }

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  return files.map((file) => {
    const key = file.replace('.ts', '')
    return {
      key,
      importPath: `./dist/icons/${type}s/${key}.js`,
    }
  })
}

export function generateDynamicImports(): void {
  console.log('Generating dynamicIconImports.js...')

  const allEntries: IconEntry[] = []

  for (const { dir, type } of iconDirs) {
    const entries = getIconEntries(dir, type)
    allEntries.push(...entries)
  }

  // Sort entries alphabetically by key
  allEntries.sort((a, b) => a.key.localeCompare(b.key))

  // Generate the JavaScript file directly (no TypeScript compilation needed)
  const jsLines: string[] = [
    '// This file is auto-generated. Do not edit manually.',
    '',
    'const dynamicIconImports = {',
  ]

  for (const entry of allEntries) {
    jsLines.push(`  '${entry.key}': () => import('${entry.importPath}'),`)
  }

  jsLines.push('};')
  jsLines.push('')
  jsLines.push('export default dynamicIconImports;')
  jsLines.push('')

  fs.writeFileSync(DYNAMIC_IMPORTS_JS_PATH, jsLines.join('\n'))

  // Generate TypeScript declaration file
  const dtsLines: string[] = [
    '// This file is auto-generated. Do not edit manually.',
    '',
    'type DynamicImportFn = () => Promise<{ default: React.ComponentType<any> }>;',
    '',
    'declare const dynamicIconImports: Record<string, DynamicImportFn>;',
    '',
    'export default dynamicIconImports;',
    '',
  ]

  fs.writeFileSync(DYNAMIC_IMPORTS_DTS_PATH, dtsLines.join('\n'))

  console.log(
    `✓ Generated dynamicIconImports.js with ${allEntries.length} entries`,
  )
}

if (require.main === module) {
  generateDynamicImports()
}
