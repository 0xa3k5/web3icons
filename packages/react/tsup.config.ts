import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    dynamic: 'src/dynamic/index.ts',
    'icons/tokens': 'src/icons/tokens/index.ts',
    'icons/networks': 'src/icons/networks/index.ts',
    'icons/wallets': 'src/icons/wallets/index.ts',
    'icons/exchanges': 'src/icons/exchanges/index.ts',
  },
  format: ['esm'],
  dts: true,
  splitting: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
})
