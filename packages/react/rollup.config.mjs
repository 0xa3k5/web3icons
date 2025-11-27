import { createESMConfig } from '../../scripts/rollup/base-config.mjs';
import preserveDirectives from 'rollup-plugin-preserve-directives';

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
const dynamicEntry = createESMConfig({
  input: 'src/dynamic/index.ts',
  outputDir: 'dist',
  external,
  generateDeclarations: true, // Generate declarations inline
});

dynamicEntry.plugins.push(preserveDirectivesPlugin);
dynamicEntry.onwarn = onwarn;

export default [mainEntry, dynamicEntry];
