import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    dynamic: 'src/dynamic/index.ts',
    createWeb3Icon: 'src/createWeb3Icon.ts',
    BaseIcon: 'src/BaseIcon.ts',
  },
  format: ['esm'],
  dts: true,
  splitting: true,
  clean: false,
  external: ['react', 'react-dom'],
  treeshake: true,
})
