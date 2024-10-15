import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/metadata/index.ts'],
    format: 'esm',
    outDir: 'dist',
    sourcemap: true,
    dts: false,
    target: 'es2022',
    clean: false,
  },
])
