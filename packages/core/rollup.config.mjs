import { createESMConfig } from '../../scripts/rollup/base-config.mjs';
import { string } from 'rollup-plugin-string';

// Core package needs to handle .svg files as text
const svgPlugin = string({
  include: '**/*.svg',
});

const config = createESMConfig({
  input: 'src/index.ts',
  outputDir: 'dist',
  external: ['@web3icons/common'],
  generateDeclarations: true,
});

// Add SVG loader plugin
config.plugins.push(svgPlugin);

export default config;
