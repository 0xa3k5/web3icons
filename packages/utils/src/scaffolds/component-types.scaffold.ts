export const componentTypesScaffold = `import { SVGProps } from 'react'
export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number
}
export interface IconComponentProps {
  variant: 'mono' | 'branded'
  size?: number | string
  color?: string
  className?: string
}

export type TokenIconProps = IconComponentProps & (
  | { symbol: string; address?: never; chain?: never }
  | { symbol?: never; address: string; chain: string }
);`
