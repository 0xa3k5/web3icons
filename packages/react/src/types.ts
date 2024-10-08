import { ReactNode, SVGProps } from 'react'

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number
  fallback?: string | ReactNode
}

export interface IconComponentProps extends SVGProps<SVGSVGElement> {
  variant?: 'mono' | 'branded'
  size?: number | string
  color?: string
  className?: string
  fallback?: string | ReactNode
}

export type TokenIconProps = IconComponentProps &
  (
    | { symbol: string; address?: never; network?: never }
    | { symbol?: never; address: string; network: string }
  )

export type NetworkIconProps = IconComponentProps &
  (
    | { network: string; chainId?: never }
    | { chainId: number | string; network?: never }
  )

export type WalletIconProps = IconComponentProps &
  ({ name: string; id?: never } | { id: string; name?: never })
