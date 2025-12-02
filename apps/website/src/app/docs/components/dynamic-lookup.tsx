import {
  ExchangeIcon,
  NetworkIcon,
  TokenIcon,
  WalletIcon,
} from '@web3icons/react/dynamic'
import { LiveExample } from './live-example'

export const DynamicTokenLookup = () => {
  return (
    <LiveExample
      tabs={[
        {
          label: 'Symbol',
          preview: (
            <div className="flex flex-wrap gap-4">
              {['BTC', 'ETH', 'USDC', 'SOL', 'AVAX', 'MATIC'].map((symbol) => (
                <div key={symbol} className="flex flex-col items-center gap-2">
                  <TokenIcon symbol={symbol} size={40} variant="branded" />
                  <span className="text-xs text-white/60">{symbol}</span>
                </div>
              ))}
            </div>
          ),
          content: `import { TokenIcon } from "@web3icons/react/dynamic";

const tokens = ["BTC", "ETH", "USDC", "SOL", "AVAX", "MATIC"];

function BySymbol() {
  return (
    <div className="grid grid-cols-6 gap-4">
      {tokens.map((symbol) => (
        <TokenIcon key={symbol} symbol={symbol} size={40} variant="branded" />
      ))}
    </div>
  );
}`,
        },
        {
          label: 'Contract Address',
          preview: (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <TokenIcon
                  address="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                  network="ethereum"
                  size={32}
                  variant="branded"
                />
                <div>
                  <div>USDC</div>
                  <div className="font-mono text-xs text-white/60">
                    0xa0b8...eb48
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TokenIcon
                  address="0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
                  network="ethereum"
                  size={32}
                  variant="branded"
                />
                <div>
                  <div>WBTC</div>
                  <div className="font-mono text-xs text-white/60">
                    0x2260...c599
                  </div>
                </div>
              </div>
            </div>
          ),
          content: `import { TokenIcon } from "@web3icons/react/dynamic";

function ByContractAddy() {
  return (
    <>
      {/* Look up USDC by its Ethereum contract address */}
      <TokenIcon
        address="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
        network="ethereum"
        size={32}
        variant="branded"
      />
      {/* Look up WBTC by its Ethereum contract address */}
      <TokenIcon
        address="0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
        network="ethereum"
        size={32}
        variant="branded"
      />
    </>
  );
}`,
        },
        {
          label: 'With Fallback',
          preview: (
            <div className="flex items-center gap-4">
              <TokenIcon
                symbol="UNKNOWN"
                key="unknown"
                fallback={<div className="size-8 rounded-full bg-gray-200" />}
                size={48}
              />
              <span className="text-sm text-white/60">Unknown</span>
            </div>
          ),
          content: `import { TokenIcon } from '@web3icons/react/dynamic'
export function WithFallback() {
  return (
    <>
      {* String fallback *}
      <TokenIcon symbol="UNKNOWN" fallback="/fallback.png" />
      {* Component fallback *}
      <TokenIcon symbol="UNKNOWN" fallback={<div className="size-8 rounded-full bg-gray-200" />} />
    </>
  ) 
}`,
        },
      ]}
    />
  )
}

export const DynamicNetworkLookup = () => {
  return (
    <LiveExample
      tabs={[
        {
          label: 'By Name',
          preview: (
            <div className="flex flex-wrap gap-4">
              {[
                'ethereum',
                'polygon',
                'arbitrum',
                'optimism',
                'base',
                'avalanche',
              ].map((network) => (
                <div key={network} className="flex flex-col items-center gap-2">
                  <NetworkIcon name={network} size={40} variant="branded" />
                  <span className="text-xs text-white/60">{network}</span>
                </div>
              ))}
            </div>
          ),
          content: `import { NetworkIcon } from "@web3icons/react/dynamic";

function NetworkGrid() {
  return (
    <div className="grid grid-cols-6 gap-4">
      {["ethereum", "polygon", "arbitrum", "optimism", "base", "avalanche"].map(
        (network) => (
          <NetworkIcon
            key={network}
            name={network}
            size={40}
            variant="branded"
          />
        ),
      )}
    </div>
  );
}`,
        },
        {
          label: 'By Chain ID',
          preview: (
            <div className="flex flex-wrap gap-4">
              {[
                { chainId: 1, name: 'Ethereum' },
                { chainId: 137, name: 'Polygon' },
                { chainId: 42161, name: 'Arbitrum' },
                { chainId: 10, name: 'Optimism' },
              ].map(({ chainId, name }) => (
                <div key={chainId} className="flex flex-col items-center gap-2">
                  <NetworkIcon chainId={chainId} size={40} variant="branded" />
                  <span className="text-xs text-white/60">{name}</span>
                  <span className="text-xs text-white/40">{chainId}</span>
                </div>
              ))}
            </div>
          ),
          content: `import { NetworkIcon } from "@web3icons/react/dynamic";

function ByChainId() {
  return (
    <div className="grid grid-cols-6 gap-4">
      {[
        { chainId: 1, name: "Ethereum" },
        { chainId: 137, name: "Polygon" },
        { chainId: 42161, name: "Arbitrum" },
        { chainId: 10, name: "Optimism" },
        { chainId: 8453, name: "Base" },
        { chainId: 43114, name: "Avalanche" },
      ].map(({ chainId, name }) => (
        <div key={chainId} className="flex flex-col items-center gap-2">
          <NetworkIcon chainId={chainId} size={40} variant="branded" />
          <span className="text-xs text-white/60">{name}</span>
          <span className="text-xs text-white/40">{chainId}</span>
        </div>
      ))}
    </div>
  );
}`,
        },
        {
          label: 'With Fallback',
          preview: (
            <div className="flex items-center gap-4">
              <NetworkIcon
                name="UNKNOWN"
                key="unknown"
                fallback={<div className="size-8 rounded-full bg-gray-200" />}
                size={48}
              />
              <span className="text-sm text-white/60">Unknown</span>
            </div>
          ),
          content: `import { NetworkIcon } from '@web3icons/react/dynamic'
export function WithFallback() {
  return (
    <>
      {* String fallback *}
      <NetworkIcon name="UNKNOWN" fallback="/fallback.png" />
      {* Component fallback *}
      <NetworkIcon name="UNKNOWN" fallback={<div className="size-8 rounded-full bg-gray-200" />} />
    </>
  ) 
}`,
        },
      ]}
    />
  )
}

export const DynamicWalletLookup = () => {
  return (
    <LiveExample
      tabs={[
        {
          label: 'Example',
          preview: (
            <div className="space-y-2">
              {[
                { id: 'metamask', name: 'MetaMask' },
                { id: 'coinbase', name: 'Coinbase Wallet' },
                { id: 'rainbow', name: 'Rainbow' },
                { id: 'trust', name: 'Trust Wallet' },
              ].map((wallet) => (
                <button
                  key={wallet.name}
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg border border-gray-200/20 p-3 transition-colors hover:bg-gray-50/10"
                >
                  <WalletIcon
                    id={wallet.id}
                    size={32}
                    variant="branded"
                    fallback={
                      <span className="size-8 rounded-full bg-white/5" />
                    }
                  />
                  <span>{wallet.name}</span>
                </button>
              ))}
            </div>
          ),
          content: `import { WalletIcon } from "@web3icons/react/dynamic";

const wallets = [
  { id: "metamask", name: "MetaMask" },
  { id: "coinbase", name: "Coinbase Wallet" },
  { id: "rainbow", name: "Rainbow" },
  { id: "trust", name: "Trust Wallet" },
];

function WalletSelector({ onSelect }) {
  return (
    <div className="space-y-2">
      {wallets.map((wallet) => (
        <button
          type="button"
          key={wallet.id}
          onClick={() => onSelect(wallet)}
          className="flex w-full items-center gap-3 rounded-lg border p-3 hover:bg-gray-50/10"
        >
          <WalletIcon name={wallet.name} size={32} variant="branded" />
          <span>{wallet.name}</span>
        </button>
      ))}
    </div>
  );
}`,
        },
        {
          label: 'With Fallback',
          preview: (
            <div className="flex items-center gap-4">
              <WalletIcon
                name="UNKNOWN"
                key="unknown"
                fallback={<div className="size-8 rounded-full bg-gray-200" />}
                size={48}
              />
              <span className="text-sm text-white/60">Unknown</span>
            </div>
          ),
          content: `import { NetworkIcon } from '@web3icons/react/dynamic'
export function WithFallback() {
  return (
    <>
      {* String fallback *}
      <WalletIcon name="UNKNOWN" fallback="/fallback.png" />
      {* Component fallback *}
      <WalletIcon name="UNKNOWN" fallback={<div className="size-8 rounded-full bg-gray-200" />} />
    </>
  ) 
}`,
        },
      ]}
    />
  )
}

export const DynamicExchangeLookup = () => {
  return (
    <LiveExample
      tabs={[
        {
          label: 'Example',
          preview: (
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'binance', name: 'Binance', type: 'cex' },
                { id: 'coinbase', name: 'Coinbase', type: 'cex' },
                { id: 'uniswap', name: 'Uniswap', type: 'dex' },
                { id: 'sushiswap', name: 'SushiSwap', type: 'dex' },
              ].map((exchange) => (
                <div
                  key={exchange.id}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700"
                >
                  <ExchangeIcon id={exchange.id} size={28} variant="branded" />
                  <div className="flex flex-col">
                    {exchange.name}
                    <span className="text-xs uppercase text-gray-500">
                      {exchange.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ),
          content: `import { ExchangeIcon } from "@web3icons/react/dynamic";

function ExchangeList() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { id: "binance", name: "Binance", type: "cex" },
        { id: "coinbase", name: "Coinbase", type: "cex" },
        { id: "uniswap", name: "Uniswap", type: "dex" },
        { id: "sushiswap", name: "SushiSwap", type: "dex" },
      ].map((exchange) => (
        <div
          key={exchange.id}
          className="flex items-center gap-3 rounded-lg border p-3"
        >
          <ExchangeIcon name={exchange.id} size={28} variant="branded" />
          <div>
            {exchange.name}
            <div className="text-xs uppercase text-gray-500">
              {exchange.type}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}`,
        },
        {
          label: 'With Fallback',
          preview: (
            <div className="flex items-center gap-4">
              <NetworkIcon
                name="UNKNOWN"
                key="unknown"
                fallback={<div className="size-8 rounded-full bg-gray-200" />}
                size={48}
              />
              <span className="text-sm text-white/60">Unknown</span>
            </div>
          ),
          content: `import { NetworkIcon } from '@web3icons/react/dynamic'
export function WithFallback() {
  return (
    <>
      {* String fallback *}
      <NetworkIcon name="UNKNOWN" fallback="/fallback.png" />
      {* Component fallback *}
      <NetworkIcon name="UNKNOWN" fallback={<div className="size-8 rounded-full bg-gray-200" />} />
    </>
  ) 
}`,
        },
      ]}
    />
  )
}
