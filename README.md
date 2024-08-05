![Web3 Icons](https://raw.githubusercontent.com/0xa3k5/token-icons/main/apps/figma-plugin/src/assets/cover.png)

# Web3 Icons

Web3 Icons is the most comprehensive and up-to-date source for cryptocurrency & network logos as icon format. More than 2,500 icons are ready as optimized SVGs as well as React components.

## Supported Tokens & Networks

Find the data table of supported tokens and networks [here](https://github.com/0xa3k5/token-icons/blob/main/docs/icons.md).

## What's New

v3.0.1:

Token Icons has been renamed to Web3 Icons to better align with the future plans of this project. web3icons will inlcude more than tokens and networks in the near future. please update to @web3icons/react and @web3icons/core

Network Icons: Use `<NetworkIcon network={"network-name"} />` to access Network Icons.
Enhanced Naming Conventions: Our icons follow a standardized naming convention for effortless identification and use:

- Tokens: Prefixed with Token, followed by the uppercase symbol (e.g., TokenETH, TokenBTC).
- Networks: Prefixed with Network, followed by the CamelCase name (e.g., NetworkBinanceSmartChain, NetworkEthereum).

### Monorepo structure

- [`@web3icons/core`](https://github.com/0xa3k5/token-icons/tree/main/packages/core): npm package that serves optimized svgs as svg files
- [`@web3icons/react`](https://github.com/0xa3k5/token-icons/tree/main/packages/react): React components for web3 icons
- [`@web3icons/utils`](https://github.com/0xa3k5/token-icons/tree/main/packages/utils): Private utility and build scripts for the monorepo
- [`apps/website`](https://github.com/0xa3k5/token-icons/tree/main/apps/website): Next.js app for https://tokenicons.io
- [`apps/figma-plugin`](https://github.com/0xa3k5/token-icons/tree/main/apps/figma-plugin): Figma plugin for web3 icons

## Installation

To use Web3 Icons in your project, you can install the necessary packages from npm:

```

npm i @web3icons/core @web3icons/react
# or
yarn add @web3icons/core @web3icons/react
# or
#bun i @web3icons/core @web3icons/react

```

This will install the `@web3icons/core` package, which serves optimized SVGs as SVG files, and the `@web3icons/react` package, which serves React components for web3 icons.

> You can install either of the packages based on your project's needs.

## Usage

### Using Individual React Components from `@web3icons/react`

All the icons from the React library is prefixed with "Token" or "Network".
Token Icons: Prefixed uppercase symbol with "Token" e.g. TokenETH, TokenBTC, TokenGRT
Network Icons: Prefixed PascalCase network name with "Network" e.g. NetworkBinanceSmartChain, NetworkEthereum, NetworkAvalanche.

```jsx
import {
  TokenBTC,
  TokenETH,
  TokenGRT,
  NetworkBinanceSmartChain,
  NetworkEthereum,
  NetworkAvalanche,
} from '@web3icons/react'

const App = () => {
  return (
    <>
      <div className="my-class-name">
        <h1>Web3 Icons</h1>
        <TokenBTC size={64} variant="branded" className="my-custom-class" />
        <TokenETH size={64} variant="branded" className="my-custom-class" />
        <TokenGRT size={64} variant="branded" className="my-custom-class" />
      </div>
      <div className="my-class-name">
        <h1>Network Icons</h1>
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
    </>
  )
}

export default App
```

### Using `<TokenIcon />` from `@web3icons/react`

`<TokenIcon />` is designed to accept different props to allow for ease of use.

#### Props

- `symbol?`: the ticker symbol of the token. e.g. "ETH", "BTC", "GRT"
- `address?`: the contract address of the token.
- `chain?`: the blockchain network of the token.
- `variant?` = "mono": can be "mono" or "branded" to choose the icon style.
- `size?`: size of the icon (number or string).
- `color?`: color of the icon (CSS color value).
- `className?`: additional CSS class for custom styling.

> You need to pass either symbol or address _and_ chain.

`<TokenIcon />` accepts a union of types for `symbol`, `address`, and `chain`. This allows for flexibility in using the component.

#### Using Symbols:

You can pass ticker or symbol of the desired icon. refer to [metadata](https://github.com/0xa3k5/token-icons/blob/main/packages/core/src/metadata/tokens.json) for full list of symbols.

```jsx
import { TokenIcon } from '@web3icons/react'

const App = () => {
  const symbols = ['ETH', 'GRT', 'BTC']
  const variant = 'mono' // can be "mono" or "branded"
  const size = 48 // can be number or string

  return (
    <div>
      {symbols.map((s) => (
        <TokenIcon
          key={s}
          symbol={s}
          size={size}
          variant={variant}
          className="my-custom-class"
        />
      ))}
    </div>
  )
}

export default App
```

#### Chain Specific

You can pass in **both** chain and an address to render a specific token icon. refer to [metadata](https://github.com/0xa3k5/token-icons/blob/main/packages/core/src/metadata/tokens.json) for full list of symbols, addresses and chains.

```jsx
import { TokenIcon } from '@web3icons/react'
;<TokenIcon
  chain="ethereum"
  address="0xc944e90c64b2c07662a292be6244bdf05cda44a7"
  size={32}
  variant={'branded'}
  className="my-custom-class"
/>
```

### Using `<NetworkIcon />` from `@web3icons/react`

`<NetworkIcon />` is designed to render blockchain network icons.

#### Props

- `network`: The blockchain network's identifier. References the Coin Gecko's asset platform fields. Check the [networks.json](https://github.com/0xa3k5/token-icons/blob/main/packages/core/src/metadata/networks.json) file for a list of available networks.
- `variant?` = "mono": can be "mono" or "branded" to choose the icon style.
- `size?`: size of the icon (number or string).
- `color?`: color of the icon (CSS color value).
- `className?`: additional CSS class for custom styling.

```jsx
import { NetworkIcon } from '@web3icons/react'
;<NetworkIcon
  network="ethereum"
  size={32}
  variant={'branded'}
  className="my-custom-class"
/>
```

---

### Using SVGs from `@web3icons/core`

For projects that don’t use React, icons are also available as `*.svg` files in the `dist/svgs` folder. Which contains folders for types (`tokens` or `networks`) and variants (`branded` and `mono`) svg icons.

Example file paths:

- `svgs/tokens/branded/BTC.svg`
- `svgs/networks/mono/ethereum.svg`

If you need to directly import the SVGs, here is the naming convention that you can use:

- `{type} {variant} {symbol}` (It has to be camelCase)
- `tokensBrandedBTC` (Token icons are prefixed with "Token" and the symbol is in uppercase)
- `networksMonoEthereum` (Network icons are prefixed with "Network" and the network name is in PamelCase)

```jsx
import { tokensBrandedBTC, networksMonoEthereum } from '@web3icons/core'
```

or you can use the `svgs` object which contains objects for each type.

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

or with a dynamic import

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

> not all of the icons have both `branded` & `mono` variants

---

### Website

The Web3 Icons website ([https://tokenicons.io](https://tokenicons.io/)) provides a searchable collection of all available icons. You can browse, search, and download icons directly from the website.

### Contributing

We welcome contributions to `token-icons`! If you'd like to contribute, please refer to our [Contributing Guide](https://github.com/0xa3k5/token-icons/blob/main/CONTRIBUTING.md).

#### Adding a new icon is super easy.

1. Fork the repo, create a branch `git checkout -b branch-name`
2. Add or update icons to the related folders of `core/src/raw-svgs/`
3. Push your changes and create a pull request.
4. Github Actions will make sure to update the metadata, create React components and update the packages as necessary.

### License

[MIT](https://github.com/0xa3k5/token-icons/blob/main/LICENSE)

### Give a Star ⭐️

If you like this project, please give it a star ⭐️ on GitHub. This helps us to maintain the project and make it better for everyone.
