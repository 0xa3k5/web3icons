import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/icons/index.ts'],
    format: 'esm',
    outDir: 'dist/icons',
    sourcemap: true,
    dts: true,
    target: 'es2022',
    clean: false,
    outExtension: ({ format }) => ({ js: `.js` }),
  },
])
