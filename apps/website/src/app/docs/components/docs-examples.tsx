'use client'

import { WalletIcon, ExchangeIcon } from '@web3icons/react/dynamic'

export const WalletSelector = () => {
  const wallets = [
    { id: 'metamask', name: 'MetaMask' },
    { id: 'coinbase-wallet', name: 'Coinbase Wallet' },
    { id: 'rainbow', name: 'Rainbow' },
    { id: 'trust-wallet', name: 'Trust Wallet' },
  ]

  return (
    <div className="space-y-2">
      {wallets.map((wallet) => (
        <button
          key={wallet.name}
          className="flex w-full items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <WalletIcon
            name={wallet.name}
            size={32}
            variant="branded"
            fallback={<span className="size-8 rounded-full bg-white/5" />}
          />
          <span>{wallet.name}</span>
        </button>
      ))}
    </div>
  )
}

export const ExchangeList = () => {
  const exchanges = [
    { id: 'binance', name: 'Binance', type: 'cex' },
    { id: 'coinbase', name: 'Coinbase', type: 'cex' },
    { id: 'uniswap', name: 'Uniswap', type: 'dex' },
    { id: 'sushiswap', name: 'SushiSwap', type: 'dex' },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {exchanges.map((exchange) => (
        <div
          key={exchange.id}
          className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700"
        >
          <ExchangeIcon id={exchange.id} size={28} variant="branded" />
          <div className="flex flex-col">
            <span className="font-medium">{exchange.name}</span>
            <span className="text-xs uppercase text-gray-500">
              {exchange.type}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
