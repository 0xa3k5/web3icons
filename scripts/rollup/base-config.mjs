import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

/**
 * Create base Rollup plugins for ES compilation
 */
export function createPlugins({ tsconfig = 'tsconfig.json', generateDeclarations = false } = {}) {
  return [
    resolve(),
    commonjs(),
    typescript({
      tsconfig,
      declaration: generateDeclarations, // Generate declarations inline with preserveModules
      declarationMap: generateDeclarations,
      compilerOptions: {
        declarationDir: generateDeclarations ? undefined : undefined,
      },
    }),
  ];
}

/**
 * Create ESM bundle config with preserveModules
 * @param {Object} options
 * @param {string[]} options.input - Entry points
 * @param {string} options.outputDir - Output directory (e.g., 'dist/esm')
 * @param {string[]} options.external - External dependencies
 * @param {string} options.preserveModulesRoot - Root for preserved modules (default: 'src')
 */
export function createESMConfig({
  input,
  outputDir = 'dist/esm',
  external = [],
  preserveModulesRoot = 'src',
  tsconfig = 'tsconfig.json',
  generateDeclarations = true, // Generate .d.ts files alongside .js files
}) {
  return {
    input,
    plugins: createPlugins({ tsconfig, generateDeclarations }),
    external,
    output: {
      dir: outputDir,
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot,
      entryFileNames: '[name].js',
    },
  };
}

/**
 * Create TypeScript declarations config
 * @param {Object} options
 * @param {string} options.input - Entry point for declarations
 * @param {string} options.output - Output file path
 */
export function createDTSConfig({ input, output }) {
  return {
    input,
    output: {
      file: output,
      format: 'esm',
    },
    plugins: [dts()],
  };
}

/**
 * Create complete package config (ESM + declarations)
 * @param {Object} options
 * @param {string[]} options.entry - Entry points
 * @param {string} options.outputDir - Output directory
 * @param {string[]} options.external - External dependencies
 * @param {Object[]} options.dtsEntries - Declaration file entries [{input, output}]
 */
export function createPackageConfig({
  entry,
  outputDir = 'dist/esm',
  external = [],
  dtsEntries = [],
  tsconfig = 'tsconfig.json',
}) {
  const configs = [];

  // ESM build with preserved modules
  configs.push(
    createESMConfig({
      input: entry,
      outputDir,
      external,
      tsconfig,
    })
  );

  // TypeScript declarations
  dtsEntries.forEach(({ input, output }) => {
    configs.push(createDTSConfig({ input, output }));
  });

  return configs;
}
