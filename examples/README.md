# Web3Icons Examples

Example projects demonstrating `@web3icons/react` usage.

| Example                    | Description        |
| -------------------------- | ------------------ |
| [nextjs](./nextjs)         | Next.js App Router |
| [react-vite](./react-vite) | React + Vite       |

## Running Examples

```bash
cd examples/nextjs  # or examples/react-vite
bun install
bun dev
```

## Pages

Each example has two pages:

- `/` - Static imports (tree-shakable)
- `/dynamic` - Dynamic imports (runtime lookup)

## Verifying Tree-Shaking

The static page imports only 7 icons. Run bundle analysis to confirm:

```bash
bun run build:analyze
```

## Documentation

- [Next.js Guide](https://web3icons.io/docs/guides/nextjs)
- [Vite Guide](https://web3icons.io/docs/guides/vite)
- [Performance & Tree-Shaking](https://web3icons.io/docs/react/performance)
- [Dynamic Icons](https://web3icons.io/docs/react/dynamic-icons)
