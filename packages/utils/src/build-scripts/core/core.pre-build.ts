import { generateIndex } from './core-generate-index'
import { generateSvgModule } from './core-generate-svgs-module'
import { optimizeSVGs } from './core-optimize-svgs'

optimizeSVGs()
generateSvgModule()
generateIndex()
