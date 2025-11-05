import { networks, tokens, wallets, exchanges, TType } from '@web3icons/common'
import { validateAllFilePaths } from '../utils'

console.log('Validating filePath references...\n')

const allErrors: Array<{
  type: string
  id: string
  filePath: string
  error: string
}> = []

const types: Array<{ name: string; data: any[]; type: TType }> = [
  { name: 'tokens', data: tokens, type: 'token' },
  { name: 'networks', data: networks, type: 'network' },
  { name: 'wallets', data: wallets, type: 'wallet' },
  { name: 'exchanges', data: exchanges, type: 'exchange' },
]

for (const { name, data, type } of types) {
  const errors = validateAllFilePaths(data, type)

  if (errors.length > 0) {
    console.log(`❌ ${name}:`)
    errors.forEach(({ id, filePath, error }) => {
      console.log(`  - ${id} (filePath: "${filePath}"): ${error}`)
      allErrors.push({ type: name, id, filePath, error })
    })
    console.log()
  } else {
    console.log(`✅ ${name}: All filePath references are valid`)
  }
}

if (allErrors.length === 0) {
  console.log('\n✅ All filePath references are valid!')
  process.exit(0)
} else {
  console.log(`\n❌ Found ${allErrors.length} error(s) across all types`)
  process.exit(1)
}
