import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: 'esm',
    outDir: 'dist',
    sourcemap: true,
    dts: true,
    target: 'es2022',
    clean: false,
    outExtension: ({ format }) => ({ js: `.js` }),
  },
])
