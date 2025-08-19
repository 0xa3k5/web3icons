import { generateIndex } from './core-generate-index'
import { generateSvgModule } from './core-generate-svgs-module'
import { optimizeSVGs } from './core-optimize-svgs'
import { orderMetadata } from '../../utils'

orderMetadata()
optimizeSVGs()
generateSvgModule()
generateIndex()
