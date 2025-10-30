import { TType } from '@web3icons/common'
import {
  SVG_TOKENS_OUT_DIR,
  JSX_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  JSX_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
  JSX_EXCHANGES_OUT_DIR,
} from '../constants'

/**
 * Get the appropriate directories for SVG and JSX output based on the type.
 */
export const getSVGDirectories = (
  type: TType,
): { svgOutDir: string; jsxOutDir: string } => {
  switch (type) {
    case 'token':
      return { svgOutDir: SVG_TOKENS_OUT_DIR, jsxOutDir: JSX_TOKENS_OUT_DIR }
    case 'network':
      return {
        svgOutDir: SVG_NETWORKS_OUT_DIR,
        jsxOutDir: JSX_NETWORKS_OUT_DIR,
      }
    case 'wallet':
      return { svgOutDir: SVG_WALLETS_OUT_DIR, jsxOutDir: JSX_WALLETS_OUT_DIR }
    case 'exchange':
      return {
        svgOutDir: SVG_EXCHANGES_OUT_DIR,
        jsxOutDir: JSX_EXCHANGES_OUT_DIR,
      }
    default:
      throw new Error('Invalid type')
  }
}
