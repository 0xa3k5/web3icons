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

Import the icon component and use it in your React code:

```js
import { IconBtc, IconEth } from '@token-icons/react'

function MyApp() {
  return (
    <div>
      <IconBtc variant="branded" size={32} />
      <IconEth variant="mono" size="2em" color="#333" />
    </div>
  )
}
```

### Icon Component Props

The icons accept the following props allowing for customizable rendering:

- variant: (Optional) Defines the variant of the icon (can be 'branded' or 'mono'). Defaults to 'mono'.
- size: (Optional) Defines the size of the icon (can be a number for pixel size or a string for any valid CSS size).
- color: (Optional) Applies a color to icons with the 'mono' variant (accepts any valid CSS color value). Defaults to '#fff'.
- className: (Optional) Apply custom CSS classes for additional styling.

---

## Tree-shaking

`@token-icons/react` is designed to be tree-shaken, meaning that it only includes the Icon Components that are actually used in your project. This can help reduce the size of your bundle and improve performance. Just import the icons you only need.

## Feedback and Contributions

Your input is valuable to us. If you encounter any issues with an icon, discover a bug, or wish to request a new icon addition, we encourage you to contribute and help us improve.

For detailed instructions on how to contribute, please refer to our [Contributing Guidelines](https://github.com/0xa3k5/token-icons/blob/main/CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/0xa3k5/token-icons/blob/main/LICENSE) file for more information.
