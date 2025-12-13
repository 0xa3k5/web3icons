import {
  TokenBTC,
  TokenETH,
  TokenUSDT,
  NetworkEthereum,
  NetworkPolygon,
  WalletMetamask,
  WalletRainbow,
} from '@web3icons/react'
import { Link } from 'react-router-dom'

export function StaticIcons() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Static Imports</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        Only these 7 icons are bundled. Run <code>bun run build:analyze</code>{' '}
        to verify tree-shaking.
      </p>
      <p style={{ marginBottom: '2rem' }}>
        <Link to="/dynamic">View Dynamic Imports →</Link>
      </p>

      <section>
        <h2>Token Icons</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <TokenBTC size={48} variant="branded" />
          <TokenETH size={48} variant="branded" />
          <TokenUSDT size={48} variant="branded" />
          <TokenBTC size={48} variant="mono" />
          <TokenETH size={48} variant="mono" />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Network Icons</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <NetworkEthereum size={48} variant="branded" />
          <NetworkPolygon size={48} variant="branded" />
          <NetworkEthereum size={48} variant="mono" />
          <NetworkPolygon size={48} variant="mono" />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Wallet Icons</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <WalletMetamask size={48} variant="branded" />
          <WalletRainbow size={48} variant="branded" />
          <WalletMetamask size={48} variant="background" />
          <WalletRainbow size={48} variant="mono" />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Different Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <TokenBTC size={16} variant="branded" />
          <TokenBTC size={24} variant="branded" />
          <TokenBTC size={32} variant="branded" />
          <TokenBTC size={48} variant="branded" />
          <TokenBTC size={64} variant="branded" />
        </div>
      </section>
    </main>
  )
}
