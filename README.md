# Token Icons

Token Icons is the most comprehensive and up-to-date source for cryptocurrency token & coin logos as icon format. More than 2,500 icons are ready as optimized SVGs as well as React components.

The monorepo contains

- [`@token-icons/core`](https://github.com/0xa3k5/token-icons/tree/main/packages/core): npm package that serves optimized svgs as svg files
- [`@token-icons/react`](https://github.com/0xa3k5/token-icons/tree/main/packages/react): React components for token icons
- [`website`](https://tokenicons.io): source code for https://tokenicons.io

## Installation

To use Token Icons in your project, you can install the necessary packages from npm:

```
npm install @token-icons/core @token-icons/react
```

```
yarn add @token-icons/core @token-icons/react
```

```
bun install @token-icons/core @token-icons/react
```

This will install the `@token-icons/core` package, which serves optimized SVGs as SVG files, and the `@token-icons/react` package, which provides React components for token icons.

## Usage

## Using React Components from `@token-icons/react`

All the icons from the React library is prefixed with "Icon". And named with the token tickers.

```
Bitcoin: IconBtc
Ethereum: IconEth
```

```js
import React from 'react'
import { IconBtc } from '@token-icons/react'

const App = () => {
  return (
    <div>
      <h1>Bitcoin Logo</h1>
      <IconBtc size={64} variant="branded" />
    </div>
  )
}

export default App
```

---

### Using SVGs from `@token-icons/core`

For projects that don’t use React, icons are also available as `*.svg` files in the `dist/optimized-svgs` folder. Which contains folders for `branded` and `mono` svg icons.

> Names of the SVGs in this package is prefixed with their relative variant. e.g. `BrandedBtc` or `MonoEth`

```js
import { brandedBTC, monoETH } from '@token-icons/core'
```

or with a dynamic import

```js
const svgModule = await import(
  `@token-icons/core/dist/optimized-svgs/${variant}/${iconName}.svg`
)

const response = await fetch(svgModule.default.src)
const svgContent = await response.text()

console.log(svgContent)
```

> not all of the icons have both `branded` & `mono` variants

---

### Website

The Token Icons website ([https://tokenicons.io](https://tokenicons.io/)) provides a searchable collection of all available icons. You can browse, search, and download icons directly from the website.
