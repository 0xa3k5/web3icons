import { createESMConfig } from '../../scripts/rollup/base-config.mjs';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import dts from 'rollup-plugin-dts';

const external = ['react', 'react-dom', '@web3icons/common'];

// Shared preserve directives plugin
const preserveDirectivesPlugin = preserveDirectives({
  suppressPreserveModulesWarning: true,
});

// Suppress Rollup's "use client" directive warnings (the plugin handles them correctly)
const onwarn = (warning, warn) => {
  if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
    return; // Ignore - preserveDirectives plugin handles these
  }
  warn(warning);
};

// Main entry point configuration - generates .d.ts files alongside .js files
const mainEntry = createESMConfig({
  input: 'src/index.ts',
  outputDir: 'dist',
  external,
  generateDeclarations: true, // Generate declarations inline
});

// Add preserve directives plugin for 'use client' support
mainEntry.plugins.push(preserveDirectivesPlugin);
mainEntry.onwarn = onwarn;

// Dynamic components entry point
// Mark dynamicIconImports as external to avoid bundling all icons
const dynamicEntry = createESMConfig({
  input: 'src/dynamic/index.ts',
  outputDir: 'dist',
  external: [...external, '@web3icons/react/dynamicIconImports'],
  generateDeclarations: false,
});

dynamicEntry.plugins.push(preserveDirectivesPlugin);
dynamicEntry.onwarn = onwarn;

export default [mainEntry];
