import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/icons/**/*.ts'],
  format: ['esm'],
  outDir: 'dist/icons',
  dts: true,
  splitting: false,
  external: ['react', '../../createWeb3Icon', '@web3icons/common'],
  treeshake: true,
  silent: true,
  outExtension: () => ({ js: '.js' }),
})
