![Web3 Icons](https://raw.githubusercontent.com/0xa3k5/web3icons/main/apps/figma-plugin/src/assets/cover.png)

# Web3 Icons

![Tokens](https://img.shields.io/badge/dynamic/json?style=flat&color=FF3D00&label=tokens&query=length&url=https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/common/src/metadata/tokens.json) ![Networks](https://img.shields.io/badge/dynamic/json?style=flat&color=FF3D00&label=networks&query=length&url=https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/common/src/metadata/networks.json) ![Wallets](https://img.shields.io/badge/dynamic/json?style=flat&color=FF3D00&label=wallets&query=length&url=https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/common/src/metadata/wallets.json) ![Exchanges](https://img.shields.io/badge/dynamic/json?style=flat&color=FF3D00&label=exchanges&query=length&url=https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/common/src/metadata/exchanges.json) ![NPM Version](https://img.shields.io/npm/v/%40web3icons%2Freact?style=flat&label=%40web3icons%2Freact) ![NPM Version](https://img.shields.io/npm/v/%40web3icons%2Fcore?style=flat&label=%40web3icons%2Fcore)

_(previously named token-icons)_

Web3 Icons is the most comprehensive and up-to-date source for tokens, coins, networks and wallet logos as icon format. More than 2,500 icons are ready as optimized SVGs as well as React components.

- All of the icons are carefully curated by hand.
- `type` refers to `wallet`, `token`, `network` and `exchange`
- `variant` refers to `mono` and `branded` (not every icon comes with both variants, but vast majority does.)

> Find the data table of all supported icons [here](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md)

---

### Website

The Web3 Icons website ([https://tokenicons.io](https://tokenicons.io/)) provides a searchable collection of all available icons. You can browse, search, and download icons directly from the website.

### Contributing

We welcome contributions to `web3icons`! If you'd like to contribute, please refer to our [Contributing Guide](https://github.com/0xa3k5/web3icons/blob/main/CONTRIBUTING.md).

### Monorepo structure

- [`@web3icons/core`](https://github.com/0xa3k5/web3icons/tree/main/packages/core): npm package that serves optimized svgs as svg files
- [`@web3icons/react`](https://github.com/0xa3k5/web3icons/tree/main/packages/react): React components for web3 icons
- [`@web3icons/utils`](https://github.com/0xa3k5/web3icons/tree/main/packages/utils): Private utility and build scripts for the monorepo
- [`apps/website`](https://github.com/0xa3k5/web3icons/tree/main/apps/website): Next.js app for https://tokenicons.io
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

`@web3icons/react` is designed to be tree-shaken, meaning that it only includes the Icon Components that are actually used in your project. This can help reduce the size of your bundle and improve performance.

> All of the dynamic components (`<TokenIcon />, <NetworkIcon />`, `<WalletIcon />`) also only imports the icons that are used.

## Usage

There are two main ways to use any icon your project needs in a React environment. You can individually import the components or you can import the dynamic component for each `type` of the icons.

1. [Using Individual React Components](#using-individual-components)
2. [Using Dynamic Components](#using-dynamic-components)
   1. `<TokenIcon />`
   2. `<NetworkIcon />`
   3. `<WalletIcon />`

### Using Individual Components

All the icons from the React library is prefixed with `Token`, `Network` or `Wallet`

### Props Overview

All of the components extend the [`SVGSVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement) and accepts a `size` prop as number or string.

- **`variant?`**: Determines the style of the icon. It can be either `'mono'` (monochromatic) or `'branded'` (brand-specific). Default is `'mono'`.
- **`size?`**: Specifies the size of the icon. It can be a string or a number.
- **`color?`**: Specifies the color of the icon. Accepts any valid CSS color value.
- **`className?`**: Adds a custom CSS class to the icon for additional styling.
- **`fallback?`**: Renders the fallback when the component can't find a match. (can be passed a string (url) or a ReactNode)

### Tokens

[List of all the available tokens](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md#tokens)

Cryptocurrency coins and tokens, the react components are prefixed with `Token`, followed by uppercase symbol. `TokenETH`, `TokenBTC`, `TokenGRT`

### Networks

[List of all the available networks](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md#networks)

Networks and chains, react components are prefixed with `Network` followed by the PascalCase name of the network. `NetworkBinanceSmartChain`, `NetworkEthereum`, `NetworkAvalanche`

### exchanges

[List of all the available wallets](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md#networks)

Crypto wallets, react components are prefixed with `Wallet` followed by the PascalCase name of the wallet. `WalletRainbow`, `WalletMetamask`, `WalletCoinbase`

### Exchanges

[List of all the available exchanges](https://github.com/0xa3k5/web3icons/blob/main/docs/icons.md#exchanges)

Crypto exchanges, react components are prefixed with `Exchange` followed by the PascalCase name of the wallet. `ExchangeBybit`, `ExchangePancakeSwap`, `ExchangeBalancer`

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

All of the Dynamic Components are designed to provide ease of use, they accept a various custom props which allows the component to correctly import the desired icon.

> [!IMPORTANT]
> Dynamic components are client side components, so they are not compatible with server side rendering.

### Shared Props Overview

- **`variant?`**: Determines the style of the icon (`'mono'` or `'branded'`). Defaults to `'mono'`.
- **`size?`**: Specifies the size of the icon. It can be a string or a number.
- **`color?`**: Specifies the color of the icon. Accepts any valid CSS color value.
- **`className?`**: Adds a custom CSS class to the icon for additional styling.

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

`<NetworkIcon />` tries to find a match comparing the passed `network` value with the `id` or `name` or `shortName` from the [`networks.json`](https://github.com/0xa3k5/web3icons/blob/main/packages/core/src/metadata/networks.json)

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
// "variants": ["branded", "mono"]
// }

<NetworkIcon network="bsc" size={32} variant="branded" /> // matches the shortname
<NetworkIcon network="binance-smart-chain" size={32} variant="branded" /> // matches the id
<NetworkIcon network="bnb smart chain" size={32} variant="branded" /> // matches the name
```

## `<WalletIcon />`

`<WalletIcon />` tries to find a match comparing the passed `name` value with the `id` or `name` from the [`wallets.json`](https://github.com/0xa3k5/web3icons/blob/main/packages/core/src/metadata/wallets.json)

```jsx
import { WalletIcon } from '@web3icons/react'

// from wallets.json:
// {
// "id": "wallet-connect",
// "name": "Wallet Connect",
// "variants": ["branded", "mono"]
// }

<WalletIcon name="wallet-connect" size={32} variant="branded" /> // matches the id
<WalletIcon name="wallet connect" size={32} variant="branded" /> // matches the name

```

## `<ExchangeIcon />`

`<ExchangeIcon />` tries to find a match comparing the passed `name` value with the `id` or `name` from the [`exchanges.json`](https://github.com/0xa3k5/web3icons/blob/main/packages/core/src/metadata/exchanges.json)

```jsx
import { ExchangeIcon } from '@web3icons/react'

// from exchanges.json:
// {
//   "id": "coinbase",
//   "name": "Coinbase",
//   "variants": ["branded", "mono"],
//   "type": "dex"
// },
;<ExchangeCoinbase name="coinbase" size={32} variant="branded" /> // matches the name
```

---

# `@web3icons/core`

For projects that don’t use React, icons are also available as `*.svg` files in the `dist/svgs` folder. Which contains folders for types (`tokens`, `networks`, `wallets`) and variants (`branded` and `mono`) svg icons.

- Token names are always ticker in uppercase. `ETH`, `BTC`, `GRT`
- Network names are always kebab-case. `ethereum`, `binance-smart-chain`, `bitcoin`
- Wallet names are always kebab-case. `metamask`, `coinbase-wallet`, `rabby`

### Example file paths:

- `svgs/tokens/branded/BTC.svg`
- `svgs/networks/mono/ethereum.svg`
- `svgs/wallets/branded/metamask.svg`
- `svgs/excahnges/mono/bybit.svg`

### Importing the individual SVGs

If you need to directly import the SVGs, here is the naming convention that you can use: `{type} {variant} {symbol}`

- **`Tokens`**: prefixed with `token` followed by `variant` and the uppercase ticker. `tokenBrandedBTC`, `tokenMonoGRT`
- **`Networks`**: prefixed with `network` followed by `variant` and the PascalCase network name. `networkMonoMetis`, `networkBrandedBinanceSmartChain`
- **`Wallets`**: prefixed with `wallet` followed by `variant` and the PascalCase wallet name. `walletBrandedRainbow`, `walletBrandedImtoken`, `walletBrandedWalletConnect`
- **`Exchanges`**: prefixed with `exchange` followed by `variant` and the PascalCase exchange name `exchangeCoinbase`, `exchangePancakeSwap`, `exchangeBybit`

## Metadata

The `@web3icons/core` package also provides comprehensive metadata for each cryptocurrency token in a convenient JSON format, which you can import directly into your project.

If you need the json file, you can import it directly:

```js
import { tokens, networks, wallets, exchanges } from '@web3icons/core/metadata'
```

### Importing the `svgs` object

`svgs` object contains objects for each type

> [!NOTE]
> This would import thousands of svgs into your project and would increase the bundle size, it is not recommended for general use.

```jsx
import { svgs } from '@web3icons/core'

const IconDisplay = () => {
  return (
    <div>
      <img src={svgs.tokens.brandedETH} alt="Ethereum Branded Token Icon" />
      <img
        src={svgs.networks.brandedEthereum}
        alt="Ethereum Branded Network Icon"
      />
    </div>
  )
}
```

### Dynamic import

```js
const type = 'tokens'
const variant = 'branded'
const iconName = 'BTC'

const svgModule = await import(
  `@web3icons/core/svgs/${type}/${variant}/${iconName}.svg`
)
const response = await fetch(svgModule.default.src)
const svgContent = await response.text()

console.log(svgContent)
```

---

## License

[MIT](https://github.com/0xa3k5/web3icons/blob/main/LICENSE)

## Give a Star ⭐️

If you like this project, please give it a star ⭐️ on GitHub. This helps me to maintain the project and make it better for everyone.
