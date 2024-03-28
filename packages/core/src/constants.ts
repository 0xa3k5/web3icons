import * as path from 'path'

const coreRoot = process.cwd()

export const SVG_SOURCE_DIR = path.resolve(coreRoot, 'src', 'raw-svgs')
export const SVG_OUTPUT_DIR = path.resolve(coreRoot, 'dist', 'optimized-svgs')
export const JSX_OUTPUT_DIR = path.resolve(coreRoot, '..', 'react', 'src')
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
