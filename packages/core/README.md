# @token-icons/core

`@token-icons/core` is a comprehensive library offering optimized SVG files for cryptocurrency tokens. This package is ideal for projects needing high-quality, standardized svg icons for cryptocurrency tokens.

## Features

- Over 2,500 optimized SVG icons.
- Optimized for various use cases.
- Supports branded and mono variants.
- Compatible with various project types.
- Supports tree-shaking.

---

## Installation

```bash
npm install @token-icons/core
# or
yarn add @token-icons/core
# or
bun add @token-icons/core
```

## Usage

### Importing SVGs

For individual icons:

```js
import { tokensBrandedBTC, networksMonoEthereum } from '@token-icons/core'
```

for complete set of icons:

> this is not recommended, it could greatly affect your project's bundle size and it's performance.

```jsx
import { svgs } from '@token-icons/core'
```

### Using SVGs

Here’s how you can integrate the SVGs into your project:

```js
import { tokensBrandedETH } from '@token-icons/core'

function EthIcon() {
  // Using an img tag
  return <img src={tokensBrandedETH} alt="Ethereum Icon" />
  // Or, inserting SVG directly
  return <div dangerouslySetInnerHTML={{ __html: tokensBrandedETH }} />
}
```

## Token Metadata

The `@token-icons/core` package also provides comprehensive metadata for each cryptocurrency token in a convenient JSON format, which you can import directly into your project.

### Importing Token Metadata

If you need the json file, you can import it directly:

```js
import { tokens, networks } from '@token-icons/core/metadata'
```

---

## Tree-shaking

`@token-icons/core` is designed to be tree-shaken, meaning that it only includes the SVGs that are actually used in your project. This can help reduce the size of your bundle and improve performance. Just import the icons you only need.

## Feedback and Contributions

Your input is valuable to us. If you encounter any issues with an icon, discover a bug, or wish to request a new icon addition, we encourage you to contribute and help us improve.

For detailed instructions on how to contribute, please refer to our [Contributing Guidelines](https://github.com/0xa3k5/token-icons/blob/main/CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/0xa3k5/token-icons/blob/main/LICENSE) file for more information.
