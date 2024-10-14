import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/metadata/index.ts'],
    format: 'esm',
    outDir: 'dist',
    sourcemap: true,
    dts: true,
    external: ['**/*.svg'],
    target: 'es2022',
    clean: false,
  },
])
