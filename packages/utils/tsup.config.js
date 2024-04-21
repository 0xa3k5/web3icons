export default {
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  entryPoints: {
    index: 'src/index.ts',
  },
  outDir: 'dist',
  dts: true,
}
