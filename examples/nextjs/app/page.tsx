import {
  TokenBTC,
  TokenETH,
  TokenUSDT,
  NetworkEthereum,
  NetworkPolygon,
  WalletMetamask,
  WalletRainbow,
} from '@web3icons/react'
import { DynamicIconsDemo } from '@/components/dynamic-icons-demo'

export default function Home() {
  return (
    <main>
      <h1>Web3Icons Next.js Example</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>Static Imports (Server Components)</h2>
        <p>
          These icons are statically imported and work in Server Components.
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
        <h2>Dynamic Imports (Client Components)</h2>
        <p>
          Dynamic components look up icons by symbol, address, chain ID, etc.
          They require the &quot;use client&quot; directive.
        </p>
        <DynamicIconsDemo />
      </section>
    </main>
  )
}
