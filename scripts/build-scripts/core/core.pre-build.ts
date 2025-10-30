import { generateIndex } from './core-generate-index'
import { generateSvgModule } from './core-generate-svgs-module'
import { optimizeSVGs } from './core-optimize-svgs'
import { orderMetadata } from '../../utils'

async function preBuild() {
  orderMetadata()
  await optimizeSVGs()
  generateSvgModule()
  generateIndex()
}

preBuild().catch((error) => {
  console.error('Pre-build failed:', error)
  process.exit(1)
})
