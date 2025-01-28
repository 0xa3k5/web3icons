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
  // prettier-ignore
  (| { symbol: string; address?: never; network?: never; id?: never; name?: never }
    // prettier-ignore
    | { symbol?: never; address: string; network: string; id?: never; name?: never }
    // prettier-ignore
    | { symbol?: never; address?: never; network?: never; id: string; name?: never }
    // prettier-ignore
    | { symbol?: never; address?: never; network?: never; id?: never; name: string }
  )

/**
 * NetworkIconProps type combines IconComponentProps with network identifier properties.
 *
 * @property {'mono' | 'branded' | 'background'} [variant] - The variant of the icon.
 * @property {number | string} [size] - The size of the icon.
 * @property {string} [color] - The color of the icon.
 * @property {string} [className] - Additional CSS classes for the icon.
 * @property {string} [name] - The name of the network.
 * @property {(number | string)} [chainId] - The chain ID of the network.
 * @property {string} [caip2id] - The CAIP-2 ID of the network.
 * @property {string} [id] - The ID of the network.
 * @property {(string | ReactNode)} [fallback] - Fallback content to display if the icon fails to load.
 */
export type NetworkIconProps = IconComponentProps &
  (
    | { name: string; chainId?: never; caip2id?: never; id?: never }
    | { name?: never; chainId: number | string; caip2id?: never; id?: never }
    | { name?: never; chainId?: never; caip2id: string; id?: never }
    | { name?: never; chainId?: never; caip2id?: never; id: string }
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
  ({ name: string; id?: never } | { name?: never; id: string })

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
  ({ name: string; id?: never } | { name?: never; id: string })

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

export type IconComponent = ForwardRefExoticComponent<
  IconComponentProps & RefAttributes<SVGSVGElement>
>
