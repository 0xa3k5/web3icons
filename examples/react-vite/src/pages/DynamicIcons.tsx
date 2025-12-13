import {
  TokenIcon,
  NetworkIcon,
  WalletIcon,
  ExchangeIcon,
} from '@web3icons/react/dynamic'
import { Link } from 'react-router-dom'

export function DynamicIcons() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Dynamic Imports</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Icons loaded at runtime by symbol, address, or chain ID. Includes all
        icon metadata in bundle.
      </p>
      <p style={{ marginBottom: '2rem' }}>
        <Link to="/">← View Static Imports</Link>
      </p>

      <section>
        <h2>Token Icons (by symbol)</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <TokenIcon symbol="BTC" size={48} variant="branded" />
          <TokenIcon symbol="ETH" size={48} variant="branded" />
          <TokenIcon symbol="SOL" size={48} variant="branded" />
          <TokenIcon symbol="USDC" size={48} variant="branded" />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Token Icons (by contract address)</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <TokenIcon
            address="0xdac17f958d2ee523a2206206994597c13d831ec7"
            network="ethereum"
            size={48}
            variant="branded"
          />
          <TokenIcon
            address="0x514910771af9ca656af840dff83e8264ecf986ca"
            network="ethereum"
            size={48}
            variant="branded"
          />
        </div>
        <p style={{ color: '#666', fontSize: '14px', marginTop: '0.5rem' }}>
          USDT and LINK on Ethereum
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Network Icons (by name or chainId)</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <NetworkIcon name="Ethereum" size={48} variant="branded" />
          <NetworkIcon name="Polygon" size={48} variant="branded" />
          <NetworkIcon chainId={56} size={48} variant="branded" />
          <NetworkIcon chainId={42161} size={48} variant="branded" />
        </div>
        <p style={{ color: '#666', fontSize: '14px', marginTop: '0.5rem' }}>
          Ethereum, Polygon, BSC (56), Arbitrum (42161)
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Wallet Icons</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <WalletIcon name="MetaMask" size={48} variant="branded" />
          <WalletIcon name="Rainbow" size={48} variant="branded" />
          <WalletIcon name="Coinbase Wallet" size={48} variant="branded" />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Exchange Icons</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ExchangeIcon name="Uniswap" size={48} variant="branded" />
          <ExchangeIcon name="Binance" size={48} variant="branded" />
          <ExchangeIcon name="Coinbase" size={48} variant="branded" />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>With Fallback</h2>
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
        <p style={{ color: '#666', fontSize: '14px', marginTop: '0.5rem' }}>
          Unknown token with custom fallback
        </p>
      </section>
    </main>
  )
}
