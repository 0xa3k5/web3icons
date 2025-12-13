# Web3Icons React + Vite Example

This example demonstrates how to use `@web3icons/react` with React and Vite.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the example.

## Usage

### Static Imports

Import icons directly by component name for optimal tree-shaking:

```tsx
import { TokenBTC, NetworkEthereum, WalletMetamask } from '@web3icons/react'

function App() {
  return (
    <div>
      <TokenBTC size={32} variant="branded" />
      <NetworkEthereum size={32} variant="mono" />
      <WalletMetamask size={32} variant="branded" />
    </div>
  )
}
```

### Dynamic Imports

Use dynamic components to look up icons by symbol, address, chain ID, etc.:

```tsx
import { TokenIcon, NetworkIcon, WalletIcon } from '@web3icons/react/dynamic'

function App() {
  return (
    <div>
      {/* By symbol */}
      <TokenIcon symbol="ETH" size={32} variant="branded" />

      {/* By contract address */}
      <TokenIcon
        address="0xdac17f958d2ee523a2206206994597c13d831ec7"
        network="ethereum"
        size={32}
      />

      {/* By chain ID */}
      <NetworkIcon chainId={1} size={32} variant="branded" />

      {/* With fallback for unknown icons */}
      <TokenIcon symbol="UNKNOWN" fallback={<span>?</span>} />
    </div>
  )
}
```

## Available Props

All icon components accept:

- `size` - Icon size in pixels (default: 24)
- `variant` - `"branded"` (color) or `"mono"` (monochrome)
- `className` - CSS class name
- `style` - Inline styles
- All standard SVG attributes
