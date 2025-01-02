# Contributing

Thank you for choosing to contribute to `web3icons`! We appreciate your contributions to making Token Icons the most comprehensive and accurate source for cryptocurrency icons!

## Must Know

#### Icon Size

The SVG files must be put inside of a 24x24px frame and should not fill it's bounding box. Refer to our Figma Community file for the current icons and make sure that you follow the same format.

![Icon Size Guide](https://github.com/0xa3k5/web3icons/blob/main/docs/icon-size-guide.png?raw=true)

You can find this icon grid as svg on [`/docs/icon-grid.svg`](https://github.com/0xa3k5/web3icons/blob/main/docs/icon-grid.svg)

#### Folder Structure

The @web3icons/core package contains the following folder structure:

```
packages/core
├── metadata
│   ├── networks.json
│   └── tokens.json
├── svgs
│   ├── networks
│   │   ├── branded
│   │   │   ├── ethereum.svg
│   │   │   ├── binance-smart-chain.svg
│   │   │   ├── avalanche.svg
│   │   ├── mono
│   │   │   ├── ethereum.svg
│   │   │   ├── binance-smart-chain.svg
│   │   │   ├── avalanche.svg
│   ├── tokens
│   │   ├── branded
│   │   │   ├── ETH.svg
│   │   │   ├── BTC.svg
│   │   │   ├── GRT.svg
│   │   ├── mono
│   │   │   ├── ETH.svg
│   │   │   ├── BTC.svg
│   │   │   ├── GRT.svg
```

The @web3icons/react package contains the following folder structure:

```
packages/react
├── icons
│   ├── networks
│   │   ├── NetworkAvalanche.tsx
│   │   ├── NetworkBinanceSmartChain.tsx
│   │   ├── NetworkEthereum.tsx
│   ├── tokens
│   │   ├── TokenBTC.tsx
│   │   ├── TokenETH.tsx
│   │   ├── TokenGRT.tsx
```

#### Naming Convention

When contributing to the @web3icons/core package, please follow the naming convention for the SVG files.

For token icons, the svg file should be named with the uppercase symbol of the token.

```
BTC.svg
ETH.svg
GRT.svg
```

For network icons, the svg file should be named with the kebab-case name of the network.

```
ethereum.svg
binance-smart-chain.svg
avalanche.svg
```

### How to Contribute

If you'd like to contribute directly by adding new icons or fixing issues:

1. Fork the repository.
2. Clone your fork and create a new branch: `git checkout -b branch-name`
3. Add icons to the related folders of `raw-svgs/`
4. on the root of the project run `bun run add-icons` to add the new icons to the metadata
5. Commit and push your changes and create a pull request.
6. In the pull request, provide a detailed description of your changes and reference any related issues.

### Reporting Bugs or Issues

If you spot a bug or an incorrect icon:

1. Go to the [Issues](https://github.com/0xa3k5/web3icons/issues) section of our GitHub repository.
2. Create a new issue, providing a clear title and a detailed description of the bug or the problem with the icon.
3. If possible, include screenshots or additional documentation to help us understand the issue.
4. Submit the issue, and we will look into it promptly.

### Requesting New Icons

We're constantly looking to expand `token-icons` with new and updated icons. If there's a specific icon you'd like to see included:

1. Check the repository first to ensure the icon isn't already available.
2. If the icon is not present, open a [New Icon Request](https://github.com/0xa3k5/web3icons/issues/new?assignees=&labels=icon-request&template=icon-request.md&title=%5BICON+REQUEST%5D) issue on GitHub.
3. Provide the name of the token, a link to the official logo (if available), and any other relevant details.
4. We will review the request and work on adding the icon to the token-icons.
