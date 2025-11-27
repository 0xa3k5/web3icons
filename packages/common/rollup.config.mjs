import { createESMConfig } from '../../scripts/rollup/base-config.mjs';

export default createESMConfig({
  input: ['src/index.ts', 'src/metadata/index.ts'],
  outputDir: 'dist',
  external: [],
  generateDeclarations: true,
});
