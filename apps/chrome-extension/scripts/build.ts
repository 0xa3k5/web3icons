import { build } from 'bun'
import { cpSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = join(import.meta.dir, '..')
const DIST = join(ROOT, 'dist')

// Ensure dist exists
mkdirSync(DIST, { recursive: true })

// Bundle popup.ts
await build({
  entrypoints: [join(ROOT, 'src/popup.ts')],
  outdir: DIST,
  naming: 'popup.js',
  minify: true,
  target: 'browser',
  format: 'esm',
})

// Copy static files
cpSync(join(ROOT, 'popup.html'), join(DIST, 'popup.html'))
cpSync(join(ROOT, 'manifest.json'), join(DIST, 'manifest.json'))

// Copy icons if they exist
const iconsDir = join(ROOT, 'icons')
if (existsSync(iconsDir)) {
  cpSync(iconsDir, join(DIST, 'icons'), { recursive: true })
}

console.log('Build complete: dist/')
