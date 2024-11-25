import * as path from 'path'

export const ROOT_PROJECT = path.resolve(__dirname, '../../../')
export const ROOT_UTILS = path.resolve(ROOT_PROJECT, 'packages/utils')
export const ROOT_CORE = path.resolve(ROOT_PROJECT, 'packages/core')
export const ROOT_REACT = path.resolve(ROOT_PROJECT, 'packages/react')
export const ROOT_COMMON = path.resolve(ROOT_PROJECT, 'packages/common')

// raw svgs
export const SVG_SRC_DIR = path.resolve(ROOT_PROJECT, 'raw-svgs')
export const SVG_TOKENS_SRC_DIR = path.resolve(SVG_SRC_DIR, 'tokens')
export const SVG_WALLETS_SRC_DIR = path.resolve(SVG_SRC_DIR, 'wallets')
export const SVG_NETWORKS_SRC_DIR = path.resolve(SVG_SRC_DIR, 'networks')
export const SVG_EXCHANGES_SRC_DIR = path.resolve(SVG_SRC_DIR, 'exchanges')

// optimized svgs, hosted in core package
const SVGS_OUT_BASE = path.resolve(ROOT_CORE, 'src/svgs')
export const SVG_TOKENS_OUT_DIR = path.resolve(SVGS_OUT_BASE, 'tokens')
export const SVG_NETWORKS_OUT_DIR = path.resolve(SVGS_OUT_BASE, 'networks')
export const SVG_WALLETS_OUT_DIR = path.resolve(SVGS_OUT_BASE, 'wallets')
export const SVG_EXCHANGES_OUT_DIR = path.resolve(SVGS_OUT_BASE, 'exchanges')

const JSX_BASE_DIR = path.resolve(ROOT_REACT, 'src/icons')
export const JSX_TOKENS_OUT_DIR = path.resolve(JSX_BASE_DIR, 'tokens')
export const JSX_NETWORKS_OUT_DIR = path.resolve(JSX_BASE_DIR, 'networks')
export const JSX_WALLETS_OUT_DIR = path.resolve(JSX_BASE_DIR, 'wallets')
export const JSX_EXCHANGES_OUT_DIR = path.resolve(JSX_BASE_DIR, 'exchanges')

const METADATA_DIR = path.resolve(ROOT_COMMON, 'src/metadata')
export const TOKENS_METADATA_PATH = path.resolve(METADATA_DIR, 'tokens.json')
export const NETWORKS_METADATA_PATH = path.resolve(METADATA_DIR, 'networks.json')
export const WALLETS_METADATA_PATH = path.resolve(METADATA_DIR, 'wallets.json')
export const EXCHANGES_METADATA_PATH = path.resolve(METADATA_DIR, 'exchanges.json')

export const CUSTOM_TOKENS_METADATA_PATH = path.resolve(
  ROOT_UTILS,
  'src/scripts/gecko/custom-tokens.json',
)
export const CUSTOM_NETWORKS_METADATA_PATH = path.resolve(
  ROOT_UTILS,
  'src/scripts/gecko/custom-networks.json',
)

export const CORE_INDEX_PATH = path.resolve(ROOT_CORE, 'src', 'index.ts')
export const CORE_SVG_MODULE_PATH = path.resolve(ROOT_CORE, 'src/svg-module.ts')
