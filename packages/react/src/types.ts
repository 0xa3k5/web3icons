export interface IconComponentProps {
  variant: 'mono' | 'branded'
  size?: number | string
  color?: string
  className?: string
}
export interface TokenIconProps {
  symbol?: string
  address?: string
  chain?: string
  size?: number | string
  className?: string
  variant?: 'branded' | 'mono'
}
