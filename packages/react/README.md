# @token-icons/react

The `@token-icons/react` package provides React components for each cryptocurrency icon, allowing for easy integration and customization within your React applications.

## Features

- Over 2,500 optimized SVG icons.
- Optimized for various use cases.
- Supports branded and mono variants.
- Compatible with various project types.
- Supports tree-shaking.

---

## Installation

Install the package via npm or yarn:

```bash
npm install @token-icons/react
# or
yarn add @token-icons/react
# or
bun add @token-icons/react
```
## Usage

### Using Individual React Components from `@token-icons/react`

All the icons from the React library is prefixed with "Token" or "Network".
Token Icons: Prefixed uppercase symbol with "Token" e.g. TokenETH, TokenBTC, TokenGRT
Network Icons: Prefixed CamelCase network name with "Network" e.g. NetworkBinanceSmartChain, NetworkEthereum, NetworkAvalanche.

```jsx
import { TokenBTC, TokenETH, TokenGRT, NetworkBinanceSmartChain, NetworkEthereum, NetworkAvalanche } from '@token-icons/react'

const App = () => {
  return (
    <>
      <div className="my-class-name">
        <h1>Token Icons</h1>
        <TokenBTC size={64} variant="branded" className="my-custom-class" />
        <TokenETH size={64} variant="branded" className="my-custom-class" />
        <TokenGRT size={64} variant="branded" className="my-custom-class" />
      </div>
      <div className="my-class-name">
        <h1>Network Icons</h1>
        <NetworkEthereum size={64} variant="branded" className="my-custom-class" />
        <NetworkAvalanche size={64} variant="branded" className="my-custom-class" />
        <NetworkBinanceSmartChain size={64} variant="branded" className="my-custom-class" />
      </div>
    </>
  )
}

export default App
```

### Using `<TokenIcon />` from `@token-icons/react`

`<TokenIcon />` is designed to accept different props to allow for ease of use.

#### Props

- `symbol?`: the ticker symbol of the token. e.g. "ETH", "BTC", "GRT"
- `address?`: the contract address of the token.
- `chain?`: the blockchain network of the token.
- `variant?` = "mono": can be "mono" or "branded" to choose the icon style.
- `size?`: size of the icon (number or string).
- `color?`: color of the icon (CSS color value).
- `className?`: additional CSS class for custom styling.

> You need to pass either symbol or address *and* chain.


`<TokenIcon />` accepts a union of types for `symbol`, `address`, and `chain`. This allows for flexibility in using the component.

#### Using Symbols:

You can pass ticker or symbol of the desired icon. refer to [metadata](https://github.com/0xa3k5/token-icons/blob/main/packages/core/src/metadata/tokens.json) for full list of symbols.

```jsx
import { TokenIcon } from '@token-icons/react'

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
import { TokenIcon } from '@token-icons/react'

<TokenIcon
  chain="ethereum"
  address="0xc944e90c64b2c07662a292be6244bdf05cda44a7"
  size={32}
  variant={"branded"}
  className="my-custom-class"
/>
```


### Using `<NetworkIcon />` from `@token-icons/react`

`<NetworkIcon />` is designed to render blockchain network icons.

#### Props

- `network`: The blockchain network's identifier. References the Coin Gecko's asset platform fields. Check the (networks.json)[https://github.com/0xa3k5/token-icons/blob/main/packages/core/src/metadata/networks.json] file for a list of available networks.
- `variant?` = "mono": can be "mono" or "branded" to choose the icon style.
- `size?`: size of the icon (number or string).
- `color?`: color of the icon (CSS color value).
- `className?`: additional CSS class for custom styling.


```jsx
import { NetworkIcon } from '@token-icons/react'

<NetworkIcon
  network="ethereum"
  size={32}
  variant={"branded"}
  className="my-custom-class"
/>
```

---

## Tree-shaking

`@token-icons/react` is designed to be tree-shaken, meaning that it only includes the Icon Components that are actually used in your project. This can help reduce the size of your bundle and improve performance. Just import the icons you only need.

## Feedback and Contributions

Your input is valuable to us. If you encounter any issues with an icon, discover a bug, or wish to request a new icon addition, we encourage you to contribute and help us improve.

For detailed instructions on how to contribute, please refer to our [Contributing Guidelines](https://github.com/0xa3k5/token-icons/blob/main/CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/0xa3k5/token-icons/blob/main/LICENSE) file for more information.
