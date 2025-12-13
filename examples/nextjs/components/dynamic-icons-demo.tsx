'use client'

import {
  TokenIcon,
  NetworkIcon,
  WalletIcon,
  ExchangeIcon,
} from '@web3icons/react/dynamic'

export function DynamicIconsDemo() {
  return (
    <div>
      <h3>Token Icons (by symbol)</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <TokenIcon symbol="BTC" size={48} variant="branded" />
        <TokenIcon symbol="ETH" size={48} variant="branded" />
        <TokenIcon symbol="SOL" size={48} variant="branded" />
        <TokenIcon symbol="USDC" size={48} variant="branded" />
      </div>

      <h3>Token Icons (by contract address)</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {/* USDT on Ethereum */}
        <TokenIcon
          address="0xdac17f958d2ee523a2206206994597c13d831ec7"
          network="ethereum"
          size={48}
          variant="branded"
        />
        {/* LINK on Ethereum */}
        <TokenIcon
          address="0x514910771af9ca656af840dff83e8264ecf986ca"
          network="ethereum"
          size={48}
          variant="branded"
        />
      </div>

      <h3>Network Icons (by name or chainId)</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <NetworkIcon name="Ethereum" size={48} variant="branded" />
        <NetworkIcon name="Polygon" size={48} variant="branded" />
        <NetworkIcon chainId={56} size={48} variant="branded" /> {/* BSC */}
        <NetworkIcon chainId={42161} size={48} variant="branded" />{' '}
        {/* Arbitrum */}
      </div>

      <h3>Wallet Icons</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <WalletIcon name="MetaMask" size={48} variant="branded" />
        <WalletIcon name="Rainbow" size={48} variant="branded" />
        <WalletIcon name="Coinbase Wallet" size={48} variant="branded" />
      </div>

      <h3>Exchange Icons</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <ExchangeIcon name="Uniswap" size={48} variant="branded" />
        <ExchangeIcon name="Binance" size={48} variant="branded" />
        <ExchangeIcon name="Coinbase" size={48} variant="branded" />
      </div>

      <h3>With Fallback</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <TokenIcon
          symbol="UNKNOWN_TOKEN"
          size={48}
          variant="branded"
          fallback={
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              ?
            </div>
          }
        />
      </div>
    </div>
  )
}
