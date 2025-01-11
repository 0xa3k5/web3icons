import { generateIndex } from './core-generate-index'
import { generateSvgModule } from './core-generate-svgs-module'
import { optimizeSVGs } from './core-optimize-svgs'

function preBuild() {
  optimizeSVGs()
  generateSvgModule()
  generateIndex()
}

preBuild()
