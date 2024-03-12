import tokenData from './tokens.json'

export interface ITokenMetadata {
  id: string
  symbol: string
  name: string
  variants: string[]
}

export const tokens: ITokenMetadata[] = tokenData
