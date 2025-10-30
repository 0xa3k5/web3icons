import { generateComponents } from './react-generate-components'
import { generateIndex } from './react-generate-index'

async function preBuild() {
  await generateComponents()
  generateIndex()
}

preBuild().catch((error) => {
  console.error('Pre-build failed:', error)
  process.exit(1)
})
