import * as path from 'path'

export const SVG_SOURCE_DIR = path.join(__dirname, './raw-svgs')
export const SVG_OUTPUT_DIR = path.join(
  __dirname,
  '..',
  'dist',
  'optimized-svgs',
)
export const JSX_OUTPUT_DIR = path.join(__dirname, '../../react/src')
