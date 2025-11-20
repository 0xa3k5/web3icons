# `@web3icons/core`

For projects that don't use React, icons are also available as `*.svg` files in the `dist/svgs` folder. Which contains folders for types (`tokens`, `networks`, `wallets`, `exchanges`) and variants (`branded`, `mono`, and `background`) svg icons.

## Installation

```bash
npm i @web3icons/core
```

```bash
yarn add @web3icons/core
```

```bash
bun i @web3icons/core
```

## File naming conventions

- Token names are always ticker in uppercase. `ETH`, `BTC`, `GRT`
- Network names are always kebab-case. `ethereum`, `binance-smart-chain`, `bitcoin`
- Wallet names are always kebab-case. `metamask`, `coinbase-wallet`, `rabby`
- Exchange names are always kebab-case. `coinbase`, `uniswap`, `pancakeswap`

## Example file paths

- `svgs/tokens/branded/BTC.svg`
- `svgs/networks/mono/ethereum.svg`
- `svgs/wallets/branded/metamask.svg`
- `svgs/exchanges/mono/bybit.svg`

## Importing individual SVGs

If you need to directly import the SVGs, here is the naming convention that you can use: `{type} {variant} {symbol}`

- **`Tokens`**: prefixed with `token` followed by `variant` and the uppercase ticker. `tokenBrandedBTC`, `tokenMonoGRT`
- **`Networks`**: prefixed with `network` followed by `variant` and the PascalCase network name. `networkMonoMetis`, `networkBrandedBinanceSmartChain`
- **`Wallets`**: prefixed with `wallet` followed by `variant` and the PascalCase wallet name. `walletBrandedRainbow`, `walletBrandedImtoken`, `walletBrandedWalletConnect`
- **`Exchanges`**: prefixed with `exchange` followed by `variant` and the PascalCase exchange name `exchangeCoinbase`, `exchangePancakeSwap`, `exchangeBybit`

## Metadata

The `@web3icons/common` package provides comprehensive metadata for all icons in a convenient format, which you can import directly into your project.

If you need the metadata, you can import it directly:

```js
import {
  tokens,
  networks,
  wallets,
  exchanges,
} from '@web3icons/common/metadata'
```

## Importing the `svgs` object

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

## Dynamic import

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

## License

[MIT](https://github.com/0xa3k5/web3icons/blob/main/LICENSE)
