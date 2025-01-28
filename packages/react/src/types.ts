import {
  ReactNode,
  SVGProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'
import { TVariant } from '@web3icons/common'

/**
 * BaseIconProps interface extends SVGProps for SVGSVGElement and adds size and fallback properties.
 *
 * @property {string | number} [size] - The size of the icon.
 * @property {(string | ReactNode)} [fallback] - The fallback content to display if the icon fails to load.
 */
export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number
  fallback?: string | ReactNode
}

/**
 * IconComponentProps interface extends SVGProps for SVGSVGElement and adds variant, size, color, className, and fallback properties.
 *
 * @property {'mono' | 'branded' | 'background'} [variant] - The variant of the icon.
 * @property {number | string} [size] - The size of the icon.
 * @property {string} [color] - The color of the icon.
 * @property {string} [className] - Additional CSS classes for the icon.
 * @property {(string | ReactNode)} [fallback] - The fallback content to display if the icon fails to load.
 */
export interface IconComponentProps extends SVGProps<SVGSVGElement> {
  variant?: TVariant
  size?: number | string
  color?: string
  className?: string
  fallback?: string | ReactNode
}

/**
 * TokenIconProps type combines IconComponentProps with either symbol or address and network properties.
 *
 * @property {'mono' | 'branded' | 'background'} [variant] - The variant of the icon.
 * @property {number | string} [size] - The size of the icon.
 * @property {string} [color] - The color of the icon.
 * @property {string} [className] - Additional CSS classes for the icon.
 * @property {(string | ReactNode)} [fallback] - The fallback content to display if the icon fails to load.
 * @property {string} [symbol] - The symbol of the token.
 * @property {string} [address] - The address of the token.
 * @property {string} [network] - The network of the token.
 */
export type TokenIconProps = IconComponentProps &
  (
    | { symbol: string; address?: never; network?: never }
    | { symbol?: never; address: string; network: string }
  )

/**
 * NetworkIconProps type combines IconComponentProps with either network or chainId properties.
 *
 * @property {'mono' | 'branded' | 'background'} [variant] - The variant of the icon.
 * @property {number | string} [size] - The size of the icon.
 * @property {string} [color] - The color of the icon.
 * @property {string} [className] - Additional CSS classes for the icon.
 * @property {(string | ReactNode)} [fallback] - The fallback content to display if the icon fails to load.
 * @property {string} [network] - The network of the icon.
 * @property {(number | string)} [chainId] - The chain ID of the network.
 */
export type NetworkIconProps = IconComponentProps &
  (
    | { network: string; chainId?: never }
    | { chainId: number | string; network?: never }
  )

/**
 * WalletIconProps type combines IconComponentProps with either name or id properties.
 *
 * @property {'mono' | 'branded' | 'background'} [variant] - The variant of the icon.
 * @property {number | string} [size] - The size of the icon.
 * @property {string} [color] - The color of the icon.
 * @property {string} [className] - Additional CSS classes for the icon.
 * @property {(string | ReactNode)} [fallback] - The fallback content to display if the icon fails to load.
 * @property {string} [name] - The name of the wallet.
 * @property {string} [id] - The ID of the wallet.
 */
export type WalletIconProps = IconComponentProps &
  ({ name: string; id?: never } | { id: string; name?: never })

/**
 * ExchangeIconProps type combines IconComponentProps with either name or id properties.
 *
 * @property {'mono' | 'branded' | 'background'} [variant] - The variant of the icon.
 * @property {number | string} [size] - The size of the icon.
 * @property {string} [color] - The color of the icon.
 * @property {string} [className] - Additional CSS classes for the icon.
 * @property {(string | ReactNode)} [fallback] - The fallback content to display if the icon fails to load.
 * @property {string} [name] - The name of the wallet.
 * @property {string} [id] - The ID of the wallet.
 */
export type ExchangeIconProps = IconComponentProps &
  ({ name: string; id?: never } | { id: string; name?: never })

export type IconComponent = ForwardRefExoticComponent<
  IconComponentProps & RefAttributes<SVGSVGElement>
>
