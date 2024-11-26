import { generateComponents } from './react-generate-components'
import { generateIndex } from './react-generate-index'
import { generateMapping } from './react-generate-mapping'

function preBuild() {
  generateComponents()
  generateMapping()
  generateIndex()
}

preBuild()
