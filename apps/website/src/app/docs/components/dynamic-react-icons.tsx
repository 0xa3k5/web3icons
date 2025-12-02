import {
  ExchangeIcon,
  NetworkIcon,
  TokenIcon,
  WalletIcon,
} from '@web3icons/react/dynamic'
import { LiveExample } from './live-example'

export const DynamicReactIcons = () => {
  return (
    <LiveExample
      tabs={[
        {
          label: 'Tokens',
          preview: (
            <div className="flex flex-wrap gap-4">
              {['BTC', 'ETH', 'USDC', 'SOL', 'AVAX'].map((symbol) => (
                <div key={symbol} className="flex flex-col items-center gap-2">
                  <TokenIcon symbol={symbol} size={48} variant="branded" />
                  <span className="text-xs text-gray-500">{symbol}</span>
                </div>
              ))}
            </div>
          ),
          content: `import { TokenIcon } from "@web3icons/react/dynamic";

function TokenDisplay() {
  return ["BTC", "ETH", "USDC", "SOL", "AVAX"].map((symbol) => (
    <TokenIcon key={symbol} symbol={symbol} size={48} variant="branded" />
  ));
}`,
        },
        {
          label: 'Networks',
          preview: (
            <div className="flex flex-wrap gap-4">
              {['bitcoin', 'ethereum', 'solana', 'polygon'].map((n) => (
                <div key={n} className="flex flex-col items-center gap-2">
                  <NetworkIcon name={n} size={48} variant="branded" />
                  <span className="text-xs text-gray-500">{n}</span>
                </div>
              ))}
            </div>
          ),
          content: `import { NetworkIcon } from "@web3icons/react/dynamic";

function NetworkDisplay() {
  return ["bitcoin", "ethereum", "solana", "polygon"].map((network) => (
    <NetworkIcon key={network} name={network} size={48} variant="branded" />
  ));
}`,
        },
        {
          label: 'Wallets',
          preview: (
            <div className="flex flex-wrap gap-4">
              {['metamask', 'coinbase', 'rainbow', 'trust'].map((n) => (
                <div key={n} className="flex flex-col items-center gap-2">
                  <WalletIcon name={n} size={48} variant="branded" />
                  <span className="text-xs text-gray-500">{n}</span>
                </div>
              ))}
            </div>
          ),
          content: `import { WalletIcon } from "@web3icons/react/dynamic";

function WalletDisplay() {
  return ["metamask", "coinbase", "rainbow", "trust"].map((wallet) => (
    <WalletIcon key={wallet} name={wallet} size={48} variant="branded" />
  ));
}`,
        },
        {
          label: 'Exchanges',
          preview: (
            <div className="flex flex-wrap gap-4">
              {['binance', 'bybit', 'uniswap'].map((e) => (
                <div key={e} className="flex flex-col items-center gap-2">
                  <ExchangeIcon name={e} size={48} variant="branded" />
                  <span className="text-xs text-gray-500">{e}</span>
                </div>
              ))}
            </div>
          ),
          content: `import { ExchangeIcon } from "@web3icons/react/dynamic";

function ExchangeDisplay() {
  return ["binance", "bybit", "uniswap"].map((exchange) => (
    <ExchangeIcon key={exchange} name={exchange} size={48} variant="branded" />
  ));
}`,
        },
      ]}
    />
  )
}
