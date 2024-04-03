![Token Icons](https://raw.githubusercontent.com/0xa3k5/token-icons/main/apps/figma-plugin/src/assets/cover.png)

# Token Icons

Token Icons is the most comprehensive and up-to-date source for cryptocurrency token & coin logos as icon format. More than 2,500 icons are ready as optimized SVGs as well as React components.

The monorepo contains

- [`@token-icons/core`](https://github.com/0xa3k5/token-icons/tree/main/packages/core): npm package that serves optimized svgs as svg files
- [`@token-icons/react`](https://github.com/0xa3k5/token-icons/tree/main/packages/react): React components for token icons
- [`@token-icons/utils`](https://github.com/0xa3k5/token-icons/tree/main/packages/utils): Private utility and build scripts for the monorepo
- [`apps/website`](https://github.com/0xa3k5/token-icons/tree/main/apps/website): Next.js app for https://tokenicons.io
- [`apps/figma-plugin`](https://github.com/0xa3k5/token-icons/tree/main/apps/figma-plugin): Figma plugin for token icons

## Installation

To use Token Icons in your project, you can install the necessary packages from npm:

```

npm i @token-icons/core @token-icons/react
# or
yarn add @token-icons/core @token-icons/react
# or
#bun i @token-icons/core @token-icons/react

```

This will install the `@token-icons/core` package, which serves optimized SVGs as SVG files, and the `@token-icons/react` package, which serves React components for token icons.

> You can install either of the packages based on your project's needs.

## Usage

### Using Individual React Components from `@token-icons/react`

All the icons from the React library is prefixed with "Icon". And named with the token tickers as uppercase. This is to avoid naming conflicts that is caused by the icon names starting with numbers.

```
Bitcoin: IconBTC
Ethereum: IconETH
The Graph: IconGRT
```

```jsx
import { IconBtc } from '@token-icons/react/icons'

const App = () => {
  return (
    <div>
      <h1>Bitcoin Logo</h1>
      <IconBtc size={64} variant="branded" className="my-custom-class" />
    </div>
  )
}

export default App
```

### Using `<TokenIcon />` from `@token-icons/react`

`<TokenIcon />` is designed for dapp developers and accepts different props for use cases.

#### Props

- `chain?`: refers to Coin Gecko's asset platform fields for values
- `address?`: contract address of the token/coin.
- `symbol?`: must be uppercase e.g. "ETH", "GRT", "BTC"
- `variant`: can be "mono" or "branded"

The TokenIcon's interface is:

```js
type IconComponentType = React.ForwardRefExoticComponent<React.PropsWithoutRef<IconComponents.IconComponentProps> & React.RefAttributes<SVGSVGElement>>

interface IconComponentProps {
	variant: 'mono' | 'branded'
	size?: number | string
	color?: string
	className?: string
}

type TokenIconProps = IconComponentProps & (
	| { symbol: string; address?: never; chain?: never }
	| { symbol?: never; address: string; chain: string }
)
```

this means, you can use this component in two different ways:

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

const App = () => {
  const variant = 'mono' // can be "mono" or "branded"
  const size = 48 // can be number or string

  return (
    <div>
      {/* this would render GRT token icon, found via the contract address on the given chain */}
      <TokenIcon
        chain="ethereum"
        address="0xc944e90c64b2c07662a292be6244bdf05cda44a7"
        size={size}
        variant={variant}
        className="my-custom-class"
      />
    </div>
  )
}

export default App
```

---

### Using SVGs from `@token-icons/core`

For projects that don’t use React, icons are also available as `*.svg` files in the `dist/svgs` folder. Which contains folders for `branded` and `mono` svg icons.

> Names of the SVGs in this package is prefixed with their relative variant. e.g. `BrandedBtc` or `MonoEth`

```js
import { brandedBTC, monoETH } from '@token-icons/core'
```

or with a dynamic import

```js
const svgModule = await import(
  `@token-icons/core/dist/svgs/${variant}/${iconName}.svg`
)

const response = await fetch(svgModule.default.src)

const svgContent = await response.text()

console.log(svgContent)
```

> not all of the icons have both `branded` & `mono` variants

---

### Website

The Token Icons website ([https://tokenicons.io](https://tokenicons.io/)) provides a searchable collection of all available icons. You can browse, search, and download icons directly from the website.

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
