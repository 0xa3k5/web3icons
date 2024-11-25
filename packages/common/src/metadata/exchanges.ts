import { IExchangeMetadata } from '../types'

export const exchanges: IExchangeMetadata[] = [
  {
    id: 'bybit',
    name: 'Bybit',
    variants: ['branded', 'mono'],
    type: 'cex',
  },
  {
    id: 'kucoin',
    name: 'Kucoin',
    variants: ['branded', 'mono'],
    type: 'cex',
  },
]
