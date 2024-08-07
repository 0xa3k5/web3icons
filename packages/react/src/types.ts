import { SVGProps } from 'react'

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number
}

export interface IconComponentProps extends SVGProps<SVGSVGElement> {
  variant?: 'mono' | 'branded'
  size?: number | string
  color?: string
  className?: string
}

export type TokenIconProps = IconComponentProps &
  (
    | { symbol: string; address?: never; network?: never }
    | { symbol?: never; address: string; network: string }
  )

export type NetworkIconProps = IconComponentProps & { network: string }

export type WalletIconProps = IconComponentProps &
  ({ name: string; id?: never } | { id: string; name?: never })
