import * as path from 'path'

export const utilRoot = process.cwd()
export const coreRoot = path.resolve(utilRoot, '..', 'core')
export const reactRoot = path.resolve(utilRoot, '..', 'react')

export const SVG_BASE_DIR = path.resolve(
  utilRoot,
  '../../packages/core/src/raw-svgs',
)

export const JSX_BASE_DIR = path.resolve(
  utilRoot,
  '../../packages/react/src/icons',
)

export const SVG_TOKENS_SRC_DIR = path.resolve(SVG_BASE_DIR, 'tokens')
export const SVG_TOKENS_OUT_DIR = path.resolve(
  utilRoot,
  '../../packages/core/dist/svgs/tokens',
)
export const SVG_NETWORKS_SRC_DIR = path.resolve(SVG_BASE_DIR, 'networks')
export const SVG_NETWORKS_OUT_DIR = path.resolve(
  utilRoot,
  '../../packages/core/dist/svgs/networks',
)

export const JSX_TOKENS_OUT_DIR = path.resolve(JSX_BASE_DIR, 'tokens')
export const JSX_NETWORKS_OUT_DIR = path.resolve(JSX_BASE_DIR, 'networks')

export const TOKENS_METADATA_PATH = path.resolve(
  utilRoot,
  '../../packages/core/src/metadata/tokens.json',
)
export const NETWORKS_METADATA_PATH = path.resolve(
  utilRoot,
  '../../packages/core/src/metadata/networks.json',
)
export const CORE_INDEX_PATH = path.resolve(coreRoot, 'src', 'index.ts')
export const CORE_SVG_MODULE_PATH = path.resolve(
  coreRoot,
  'src',
  'svg-module.ts',
)
