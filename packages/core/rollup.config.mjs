import { createESMConfig } from '../../scripts/rollup/base-config.mjs';
import { string } from 'rollup-plugin-string';

// Core package needs to handle .svg files as text
const svgPlugin = string({
  include: '**/*.svg',
});

// Emit a declaration file next to every .svg.js chunk so TypeScript
// consumers can deep-import raw SVG strings without implicit-any errors,
// e.g. `import btc from '@web3icons/core/svgs/tokens/branded/BTC.svg.js'`
const svgDtsPlugin = {
  name: 'svg-dts',
  generateBundle(_, bundle) {
    for (const fileName of Object.keys(bundle)) {
      if (fileName.endsWith('.svg.js')) {
        this.emitFile({
          type: 'asset',
          fileName: fileName.replace(/\.js$/, '.d.ts'),
          source: 'declare const svg: string\nexport default svg\n',
        });
      }
    }
  },
};

const config = createESMConfig({
  input: 'src/index.ts',
  outputDir: 'dist',
  external: ['@web3icons/common'],
  generateDeclarations: true,
});

// Add SVG loader plugin
config.plugins.push(svgPlugin, svgDtsPlugin);

export default config;
