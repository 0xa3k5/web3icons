import {
  TokenBTC,
  TokenETH,
  TokenUSDT,
  NetworkEthereum,
  NetworkPolygon,
  WalletMetamask,
  WalletRainbow,
} from '@web3icons/react'
import {
  TokenIcon,
  NetworkIcon,
  WalletIcon,
  ExchangeIcon,
} from '@web3icons/react/dynamic'

function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Web3Icons React + Vite Example</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>Static Imports</h2>
        <p>
          Icons imported directly by component name for optimal tree-shaking.
        </p>

        <h3>Token Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <TokenBTC size={48} variant="branded" />
          <TokenETH size={48} variant="branded" />
          <TokenUSDT size={48} variant="branded" />
          <TokenBTC size={48} variant="mono" />
          <TokenETH size={48} variant="mono" />
        </div>

        <h3>Network Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <NetworkEthereum size={48} variant="branded" />
          <NetworkPolygon size={48} variant="branded" />
          <NetworkEthereum size={48} variant="mono" />
          <NetworkPolygon size={48} variant="mono" />
        </div>

        <h3>Wallet Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <WalletMetamask size={48} variant="branded" />
          <WalletRainbow size={48} variant="branded" />
          <WalletMetamask size={48} variant="mono" />
          <WalletRainbow size={48} variant="mono" />
        </div>

        <h3>Different Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <TokenBTC size={16} variant="branded" />
          <TokenBTC size={24} variant="branded" />
          <TokenBTC size={32} variant="branded" />
          <TokenBTC size={48} variant="branded" />
          <TokenBTC size={64} variant="branded" />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Dynamic Imports</h2>
        <p>Components that look up icons by symbol, address, chain ID, etc.</p>

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
      </section>
    </main>
  )
}

export default App
