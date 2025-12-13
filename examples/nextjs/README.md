# Web3Icons Next.js Example

This example demonstrates how to use `@web3icons/react` with Next.js (App Router).

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the example.

## Usage

### Static Imports (Server Components)

Static imports work in both Server and Client Components:

```tsx
import { TokenBTC, NetworkEthereum, WalletMetamask } from '@web3icons/react'

export default function Page() {
  return (
    <div>
      <TokenBTC size={32} variant="branded" />
      <NetworkEthereum size={32} variant="mono" />
      <WalletMetamask size={32} variant="branded" />
    </div>
  )
}
```

### Dynamic Imports (Client Components Only)

Dynamic components must be used in Client Components (`'use client'`):

```tsx
'use client'

import { TokenIcon, NetworkIcon } from '@web3icons/react/dynamic'

export function IconDemo() {
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
    </div>
  )
}
```
