import fs from 'fs'
import path from 'path'
import { ensureDirectoryExists, generateReactComponent } from '../../utils'
import { TType } from '@web3icons/common'
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

const processSVGs = (svgOutDir: string, type: TType): void => {
  const variants = ['branded', 'mono', 'background']
  variants.forEach((variant) => {
    const dir = path.join(svgOutDir, variant)
    if (!fs.existsSync(dir)) throw new Error(`No ${type} SVGs found in ${dir}`)
    fs.readdirSync(dir).forEach((svg) => {
      if (path.extname(svg) === '.svg') generateReactComponent(path.basename(svg, '.svg'), type)
    })
  })
}

export function generateComponents() {
  const dirsToEnsure = [
    path.join(ROOT_REACT, 'src'),
    path.join(ROOT_REACT, 'src', 'icons'),
    SVG_TOKENS_OUT_DIR,
    SVG_NETWORKS_OUT_DIR,
    SVG_WALLETS_OUT_DIR,
    SVG_EXCHANGES_OUT_DIR,
    JSX_TOKENS_OUT_DIR,
    JSX_NETWORKS_OUT_DIR,
    JSX_WALLETS_OUT_DIR,
    JSX_EXCHANGES_OUT_DIR,
  ]
  dirsToEnsure.forEach(ensureDirectoryExists)

  const svgDirs = [
    { dir: SVG_TOKENS_OUT_DIR, type: 'token' },
    { dir: SVG_NETWORKS_OUT_DIR, type: 'network' },
    { dir: SVG_WALLETS_OUT_DIR, type: 'wallet' },
    { dir: SVG_EXCHANGES_OUT_DIR, type: 'exchange' },
  ]
  svgDirs.forEach(({ dir, type }) => processSVGs(dir, type as TType))
}
