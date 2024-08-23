import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/metadata/index.ts'],
    format: 'cjs',
    outDir: 'dist/cjs',
    sourcemap: true,
    dts: true,
    target: 'es2022',
    clean: false,
  },
  {
    entry: ['src/index.ts', 'src/metadata/index.ts'],
    format: 'esm',
    outDir: 'dist/esm',
    sourcemap: true,
    dts: true,
    target: 'es2022',
    clean: false,
  },
])
