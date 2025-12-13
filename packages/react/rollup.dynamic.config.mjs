import { createESMConfig } from '../../scripts/rollup/base-config.mjs'
import preserveDirectives from 'rollup-plugin-preserve-directives'

const external = ['react', 'react-dom', '@web3icons/common']

const preserveDirectivesPlugin = preserveDirectives({
  suppressPreserveModulesWarning: true,
})

const onwarn = (warning, warn) => {
  if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
    return
  }
  warn(warning)
}

const dynamicEntry = createESMConfig({
  input: 'src/dynamic/index.ts',
  outputDir: 'dist',
  external: [...external, '@web3icons/react/dynamicIconImports'],
  generateDeclarations: true,
})

dynamicEntry.plugins.push(preserveDirectivesPlugin)
dynamicEntry.onwarn = onwarn

export default [dynamicEntry]
