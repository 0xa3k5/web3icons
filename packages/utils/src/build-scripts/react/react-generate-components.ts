import fs from 'fs'
import path from 'path'
import {
  JSX_TOKENS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  ROOT_REACT,
  JSX_WALLETS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
  JSX_EXCHANGES_OUT_DIR,
} from '../../constants'
import { generateReactComponent, ensureDirectoryExists } from '../../utils'
import { TType } from '@web3icons/common'

const processSVGs = (svgOutDir: string, type: TType): void => {
  ;['branded', 'mono'].forEach((variant) => {
    const dir = path.join(svgOutDir, variant)
    if (!fs.existsSync(dir)) {
      throw new Error(`No ${type} SVGs found in ${dir}`)
    }

    const svgFiles = fs.readdirSync(dir)
    svgFiles.forEach((svg) => {
      if (path.extname(svg) === '.svg') {
        generateReactComponent(path.basename(svg, '.svg'), type)
      }
    })
  })
}

export function generateComponents() {
  ensureDirectoryExists(path.join(ROOT_REACT, 'src'))
  ensureDirectoryExists(path.join(ROOT_REACT, 'src', 'icons'))
  ensureDirectoryExists(SVG_TOKENS_OUT_DIR)
  ensureDirectoryExists(SVG_NETWORKS_OUT_DIR)
  ensureDirectoryExists(SVG_WALLETS_OUT_DIR)
  ensureDirectoryExists(SVG_EXCHANGES_OUT_DIR)
  ensureDirectoryExists(JSX_TOKENS_OUT_DIR)
  ensureDirectoryExists(JSX_NETWORKS_OUT_DIR)
  ensureDirectoryExists(JSX_WALLETS_OUT_DIR)
  ensureDirectoryExists(JSX_EXCHANGES_OUT_DIR)

  processSVGs(SVG_TOKENS_OUT_DIR, 'token')
  processSVGs(SVG_NETWORKS_OUT_DIR, 'network')
  processSVGs(SVG_WALLETS_OUT_DIR, 'wallet')
  processSVGs(SVG_EXCHANGES_OUT_DIR, 'exchange')
}
