import { generateComponents } from './react-generate-components'
import { generateIndex } from './react-generate-index'
import { generateDynamicImports } from './react-generate-dynamic-imports'

async function preBuild() {
  await generateComponents()
  generateIndex()
  generateDynamicImports()
}

preBuild().catch((error) => {
  console.error('Pre-build failed:', error)
  process.exit(1)
})
