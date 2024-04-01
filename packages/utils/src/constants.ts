import * as path from 'path'

export const utilRoot = process.cwd()
export const coreRoot = path.resolve(utilRoot, '..', 'core')
export const reactRoot = path.resolve(utilRoot, '..', 'react')

export const SVG_SOURCE_DIR = path.resolve(coreRoot, 'src', 'raw-svgs')
export const SVG_OUTPUT_DIR = path.resolve(coreRoot, 'dist', 'optimized-svgs')
export const JSX_OUTPUT_DIR = path.resolve(reactRoot, 'src', 'icons')
export const METADATA_PATH = path.resolve(
  coreRoot,
  'src',
  'metadata',
  'tokens.json',
)
export const CORE_INDEX_PATH = path.resolve(coreRoot, 'src', 'index.ts')
export const CORE_SVG_MODULE_PATH = path.resolve(
  coreRoot,
  'src',
  'svg-module.ts',
)
