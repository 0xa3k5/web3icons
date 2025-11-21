![Web3 Icons](https://web3icons.io/og-image.png)

# Web3 Icons

![Tokens](https://img.shields.io/badge/dynamic/json?style=flat&color=FF3D00&label=tokens&query=length&url=https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/common/src/metadata/tokens.json) ![Networks](https://img.shields.io/badge/dynamic/json?style=flat&color=FF3D00&label=networks&query=length&url=https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/common/src/metadata/networks.json) ![Wallets](https://img.shields.io/badge/dynamic/json?style=flat&color=FF3D00&label=wallets&query=length&url=https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/common/src/metadata/wallets.json) ![Exchanges](https://img.shields.io/badge/dynamic/json?style=flat&color=FF3D00&label=exchanges&query=length&url=https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/common/src/metadata/exchanges.json) ![NPM Version](https://img.shields.io/npm/v/%40web3icons%2Freact?style=flat&label=%40web3icons%2Freact) ![NPM Version](https://img.shields.io/npm/v/%40web3icons%2Fcore?style=flat&label=%40web3icons%2Fcore)

Web3 Icons is the most comprehensive and up-to-date source for tokens, coins, networks and wallet logos as icon format. More than 2,500 icons are ready as optimized SVGs as well as React components.

- All of the icons are carefully curated by hand.
- `type` refers to `wallet`, `token`, `network` and `exchange`
- `variant` refers to `mono`, `branded`, and `background` (not every icon comes with all variants, but the vast majority have at least `mono` or `branded` and all icons have `background` variants)

> Find the data table of all supported icons [here](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md)

---

### Website

The Web3 Icons website ([https://web3icons.io](https://web3icons.io/)) provides a searchable collection of all available icons. You can browse, search, and download icons directly from the website.

### Contributing

We welcome contributions to `web3icons`! If you'd like to contribute, please refer to our [Contributing Guide](https://github.com/0xa3k5/web3icons/blob/main/CONTRIBUTING.md).

### Monorepo structure

- [`@web3icons/core`](https://github.com/0xa3k5/web3icons/tree/main/packages/core): npm package that serves optimized svgs as svg files
- [`@web3icons/react`](https://github.com/0xa3k5/web3icons/tree/main/packages/react): React components for web3 icons
- [`@web3icons/common`](https://github.com/0xa3k5/web3icons/tree/main/packages/common): Shared metadata and types
- [`scripts/`](https://github.com/0xa3k5/web3icons/tree/main/scripts): Build scripts, CLI tools, and maintenance utilities
- [`apps/website`](https://github.com/0xa3k5/web3icons/tree/main/apps/website): Next.js app for https://web3icons.io
- [`apps/figma-plugin`](https://github.com/0xa3k5/web3icons/tree/main/apps/figma-plugin): Figma plugin for web3 icons

---

## Installation

To use Web3 Icons in your project, you can install the necessary packages from npm:

```
npm i @web3icons/core @web3icons/react
```

```
yarn add @web3icons/core @web3icons/react
```

```
bun i @web3icons/core @web3icons/react
```

> [!NOTE]
> You can install either of the packages based on your project's needs.

# `@web3icons/react`

### Tree-shaking

Individual icon components from `@web3icons/react` are tree-shakable, meaning that only the icons you explicitly import will be included in your bundle. This helps reduce bundle size and improve performance.

> **Note:** Dynamic components (`<TokenIcon />`, `<NetworkIcon />`, `<WalletIcon />`, `<ExchangeIcon />`) are **NOT tree-shakable**. They load icons on-demand at runtime using dynamic imports. For optimal bundle size, use individual icon components instead.

## Usage

There are two main ways to use any icon your project needs in a React environment. You can individually import the components or you can import the dynamic component for each `type` of the icons.

1. [Using Individual React Components](#using-individual-components)
2. [Using Dynamic Components](#using-dynamic-components)
   1. `<TokenIcon />`
   2. `<NetworkIcon />`
   3. `<WalletIcon />`
   4. `<ExchangeIcon />`

### Using Individual Components

All the icons from the React library are prefixed with `Token`, `Network`, `Wallet`, or `Exchange`

### Props Overview

All of the components extend the [`SVGSVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement) and accepts a `size` prop as number or string.

- **`variant?`**: Determines the style of the icon. Options: `'mono'`, `'branded'`, or `'background'`. Default is `'mono'`.
- **`size?`**: Specifies the size of the icon. It can be a string or a number.
- **`color?`**: Specifies the color of the icon. Accepts any valid CSS color value.
- **`className?`**: Adds a custom CSS class to the icon for additional styling.

### Tokens

[List of all the available tokens](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md#tokens)

Cryptocurrency coins and tokens, the react components are prefixed with `Token`, followed by uppercase symbol. `TokenETH`, `TokenBTC`, `TokenGRT`

### Networks

[List of all the available networks](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md#networks)

Networks and chains, react components are prefixed with `Network` followed by the PascalCase name of the network. `NetworkBinanceSmartChain`, `NetworkEthereum`, `NetworkAvalanche`

### Wallets

[List of all the available wallets](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md#wallets)

Crypto wallets, react components are prefixed with `Wallet` followed by the PascalCase name of the wallet. `WalletRainbow`, `WalletMetamask`, `WalletCoinbase`

### Exchanges

[List of all the available exchanges](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md#exchanges)

Crypto exchanges, react components are prefixed with `Exchange` followed by the PascalCase name of the exchange. `ExchangeBybit`, `ExchangePancakeSwap`, `ExchangeBalancer`

```jsx
import {
  TokenBTC,
  TokenETH,
  TokenGRT,
  NetworkBinanceSmartChain,
  NetworkEthereum,
  NetworkAvalanche,
  WalletLedger,
  WalletMetamask,
  WalletSafe,
  ExchangeBybit,
  ExchangePancakeSwap,
  ExchangeBalancer,
} from '@web3icons/react'

const App = () => {
  return (
    <>
      <div>
        {/* Token Icons */}
        <TokenBTC size={64} variant="branded" className="my-custom-class" />
        <TokenETH size={64} variant="branded" className="my-custom-class" />
        <TokenGRT size={64} variant="branded" className="my-custom-class" />
      </div>
      <div>
        {/* Network Icons */}
        <NetworkEthereum
          size={64}
          variant="branded"
          className="my-custom-class"
        />
        <NetworkAvalanche
          size={64}
          variant="branded"
          className="my-custom-class"
        />
        <NetworkBinanceSmartChain
          size={64}
          variant="branded"
          className="my-custom-class"
        />
      </div>
      <div>
        {/* Wallet Icons */}
        <WalletLedger size={64} variant="branded" className="my-custom-class" />
        <WalletMetamask
          size={64}
          variant="branded"
          className="my-custom-class"
        />
        <WalletSafe size={64} variant="branded" className="my-custom-class" />
      </div>
      <div>
        {/* Exchange Icons */}
        <ExchangeBybit
          size={64}
          variant="branded"
          className="my-custom-class"
        />
        <ExchangeBalancer
          size={64}
          variant="branded"
          className="my-custom-class"
        />
        <ExchangePancakeSwap
          size={64}
          variant="branded"
          className="my-custom-class"
        />
      </div>
    </>
  )
}

export default App
```

## Using Dynamic Components

All of the Dynamic Components are designed to provide ease of use, they accept various custom props which allow the component to correctly import the desired icon.

> [!IMPORTANT]
> Dynamic components are **client-side only** and are **not tree-shakable**. They use dynamic imports to load icons at runtime, which means all icon code is included in your bundle (split into chunks). For better bundle optimization, use individual icon components instead.

### Shared Props Overview

- **`variant?`**: Determines the style of the icon. Options: `'mono'`, `'branded'`, or `'background'`. Defaults to `'mono'`.
- **`size?`**: Specifies the size of the icon. It can be a string or a number.
- **`color?`**: Specifies the color of the icon. Accepts any valid CSS color value.
- **`className?`**: Adds a custom CSS class to the icon for additional styling.
- **`fallback?`**: Fallback content to display if the icon cannot be found. Can be a string (URL) or a ReactNode.

## `<TokenIcon />`

### Props

These properties are used specifically for token icons. You must provide either the `symbol` prop or both `address` and `network` props together.

- **`symbol`**: The ticker symbol of the token (e.g., `'ETH'`, `'BTC'`). _If `symbol` is provided, `address` and `network` should not be provided._
- **`address`**: The contract address of the token. _Must be used with the `network` prop._
- **`network`**: The blockchain network where the token is deployed (e.g., `'ethereum'`, `'bsc'`). _Must be used with the `address` prop._

### Example Usage

```jsx
import { TokenIcon } from '@web3icons/react'

// Renders Ethereum icon in mono variant
<TokenIcon symbol="eth" size={32} color="#000" />

// Renders GRT icon in branded variant
<TokenIcon address="0xc944e90c64b2c07662a292be6244bdf05cda44a7" network="ethereum" size="2rem" />
```

## `<NetworkIcon />`

`<NetworkIcon />` tries to find a match comparing the passed `network` value with the `id` or `name` or `shortName` from the [`networks.json`](https://github.com/0xa3k5/web3icons/blob/main/packages/common/src/metadata/networks.json)

### Props

- **`network`**: The blockchain network (e.g., `'ethereum'`, `'bsc'`).

### Example Usage

```jsx
import { NetworkIcon } from '@web3icons/react'

// from networks.json:
// {
// "id": "binance-smart-chain",
// "name": "BNB Smart Chain",
// "shortname": "BSC",
// "nativeCoinId": "binancecoin",
// "variants": ["branded", "mono", "background"]
// }

<NetworkIcon network="bsc" size={32} variant="branded" /> // matches the shortname
<NetworkIcon network="binance-smart-chain" size={32} variant="branded" /> // matches the id
<NetworkIcon network="bnb smart chain" size={32} variant="branded" /> // matches the name
```

## `<WalletIcon />`

`<WalletIcon />` tries to find a match comparing the passed `name` value with the `id` or `name` from the [`wallets.json`](https://github.com/0xa3k5/web3icons/blob/main/packages/common/src/metadata/wallets.json)

```jsx
import { WalletIcon } from '@web3icons/react'

// from wallets.json:
// {
// "id": "wallet-connect",
// "name": "Wallet Connect",
// "variants": ["branded", "mono", "background"]
// }

<WalletIcon name="wallet-connect" size={32} variant="branded" /> // matches the id
<WalletIcon name="wallet connect" size={32} variant="branded" /> // matches the name

```

## `<ExchangeIcon />`

`<ExchangeIcon />` tries to find a match comparing the passed `name` value with the `id` or `name` from the [`exchanges.json`](https://github.com/0xa3k5/web3icons/blob/main/packages/common/src/metadata/exchanges.json)

```jsx
import { ExchangeIcon } from '@web3icons/react'

// from exchanges.json:
// {
//   "id": "coinbase",
//   "name": "Coinbase",
//   "variants": ["branded", "mono", "background"],
//   "type": "cex"
// }

<ExchangeIcon name="coinbase" size={32} variant="branded" /> // matches the name
<ExchangeIcon name="coinbase" size={32} variant="mono" /> // matches the name
```

---

# `@web3icons/core`

For projects that don't use React, icons are available as optimized `*.svg` files.

**[View full @web3icons/core documentation →](packages/core/README.md)**

---

## License

[MIT](https://github.com/0xa3k5/web3icons/blob/main/LICENSE)

## Give a Star ⭐️

If you like this project, please give it a star ⭐️ on GitHub. This helps me to maintain the project and make it better for everyone.
