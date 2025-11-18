# Web3Icons

Web3 Icons is a monorepo providing comprehensive cryptocurrency, blockchain, and Web3-related icons as SVGs and React components. The project uses Bun as the package manager and Turbo for build orchestration.

## Common Commands

### Build Commands

```bash
# Build all packages and apps (runs turbo build + post-build)
bun build

# Build only packages (common, core, react)
bun build:packages

# Build individual packages
bun build:common    # Generates metadata TypeScript files from JSON
bun build:core      # Optimizes SVGs, generates index and svg-module
bun build:react     # Generates React components from SVGs

# Build apps
bun build:apps
bun build:website   # Next.js website
bun build:figma     # Figma plugin

# Post-build step (runs after main build)
bun post-build      # Runs generate-icons-md + format
```

### Development

```bash
# Start development mode (uses turbo dev)
bun dev

# Format code (Prettier)
bun format
```

### Icon Management

```bash
# Add new icons - detects git changes in raw-svgs/
bun add-icons

# Add metadata entry that references existing icons (e.g., testnets, wrapped tokens)
bun add-metadata

# Delete icons and their metadata
bun delete-icons

# Check for missing metadata
bun check-missing

# Validate SVG files
bun validate-svgs
bun validate-filenames
```

### Documentation

```bash
# Generate icons documentation (docs/icons.md)
bun generate-icons-md
```

### Publishing

```bash
# Sync to CDN (R2)
bun cdn:sync
```

## Architecture

### Monorepo Structure

```
web3icons/
├── packages/
│   ├── common/          # Shared metadata and types
│   ├── core/            # Optimized SVGs
│   └── react/           # React components
├── apps/
│   ├── website/         # Next.js website (web3icons.io)
│   └── figma-plugin/    # Figma plugin
├── scripts/             # Build scripts and CLI tools
└── raw-svgs/            # Source SVG files
```

### Package Dependencies

- `@web3icons/common`: Base package containing metadata (tokens.json, networks.json, wallets.json, exchanges.json) and TypeScript types
- `@web3icons/core`: Depends on `common`. Contains optimized SVGs in `src/svgs/`
- `@web3icons/react`: Depends on `common`. Contains generated React components

### Icon Types and Variants

**Types**: `token`, `network`, `wallet`, `exchange`

**Variants**: `branded` (color), `mono` (monochrome), `background` (tokens only)

### Build Process Flow

#### 1. Common Package Build

- Runs `scripts/build-scripts/generate-metadata.ts`
- Converts JSON metadata files to TypeScript files with type annotations
- Located in `packages/common/src/metadata/`

#### 2. Core Package Build

Pre-build steps (`scripts/build-scripts/core/core.pre-build.ts`):

1. **Order metadata**: Alphabetically sorts all metadata JSON files
2. **Optimize SVGs**: Processes raw-svgs/ → packages/core/src/svgs/
   - Applies SVGO optimization
   - Organizes by type and variant folders
3. **Generate svg-module.ts**: Creates import mappings for all SVGs
4. **Generate index.ts**: Exports all SVG assets

#### 3. React Package Build

Pre-build steps (`scripts/build-scripts/react/react.pre-build.ts`):

1. **Generate components**: Converts SVGs to React components using SVGR
   - Creates `Token{Symbol}`, `Network{Name}`, `Wallet{Name}`, `Exchange{Name}` components
   - Located in `packages/react/src/icons/`
2. **Generate index.ts**: Exports all React components

### Icon Workflow

1. **Add SVG files** to `raw-svgs/{type}/{variant}/` following naming conventions:
   - Tokens: UPPERCASE symbol (e.g., `BTC.svg`)
   - Networks/Wallets/Exchanges: kebab-case (e.g., `binance-smart-chain.svg`)
   - SVGs must be 24x24px frames (see CONTRIBUTING.md)

2. **Run `bun add-icons`**:
   - Detects git changes in raw-svgs/
   - Prompts for metadata (name, id, CoinGecko ID, etc.)
   - Adds entries to metadata JSON files
   - Or use `bun add-metadata` to reference existing icons

3. **Build packages**:
   - `bun build:packages` processes everything
   - SVGs are optimized and copied to core package
   - React components are auto-generated

### Metadata Structure

Metadata files are the source of truth stored as JSON in `packages/common/src/metadata/`. They are converted to TypeScript files during the common package build.

#### Token Metadata (`tokens.json`)

```json
{
  "id": "bitcoin",
  "filePath": "token:BTC",
  "symbol": "BTC",
  "name": "Bitcoin",
  "marketCapRank": 1,
  "addresses": {
    "ethereum": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "binance-smart-chain": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
  },
  "variants": ["branded", "mono", "background"]
}
```

**Fields**:

- `id`: Unique identifier (typically lowercase with hyphens)
- `filePath`: Icon reference in format `type:filename` (e.g., `token:BTC`)
  - **Icon Sharing System**: Multiple entries can reference the same SVG file
  - Example: Wrapped tokens can use `filePath: "token:ETH"` to share Ethereum's icon
  - Example: Testnets can use `filePath: "network:ethereum"` to share mainnet's icon
- `symbol`: Token ticker (uppercase, e.g., `BTC`, `ETH`)
- `name`: Full token name
- `marketCapRank`: Market cap ranking (null if not tracked)
- `addresses`: Object mapping network IDs to contract addresses
- `variants`: Array of available icon variants (`["branded", "mono", "background"]`)

#### Network Metadata (`networks.json`)

```json
{
  "id": "ethereum",
  "filePath": "network:ethereum",
  "chainId": 1,
  "caip2id": "eip155:1",
  "name": "Ethereum",
  "shortName": "ETH",
  "nativeCoinId": "ethereum",
  "variants": ["branded", "mono", "background"]
}
```

**Fields**:

- `id`: Network identifier (kebab-case)
- `filePath`: Icon reference (e.g., `network:ethereum`)
- `chainId`: EVM chain ID (if applicable, can be number or string)
- `caip2id`: CAIP-2 chain ID format (e.g., `eip155:1`)
- `name`: Full network name
- `shortName`: Abbreviated name
- `nativeCoinId`: Token ID of the native coin
- `variants`: Available icon variants

#### Wallet Metadata (`wallets.json`)

```json
{
  "id": "metamask",
  "filePath": "wallet:metamask",
  "name": "MetaMask",
  "variants": ["branded", "mono"]
}
```

**Fields**:

- `id`: Wallet identifier (kebab-case)
- `filePath`: Icon reference
- `name`: Display name
- `variants`: Available icon variants

#### Exchange Metadata (`exchanges.json`)

```json
{
  "id": "uniswap",
  "filePath": "exchange:uniswap",
  "name": "Uniswap",
  "type": "dex",
  "variants": ["branded", "mono"]
}
```

**Fields**:

- `id`: Exchange identifier (kebab-case)
- `filePath`: Icon reference
- `name`: Display name
- `type`: Either `"cex"` (centralized exchange) or `"dex"` (decentralized exchange)
- `variants`: Available icon variants

### Key Scripts

- `scripts/cli/add-icons.ts`: Interactive CLI for adding new icons (detects git changes in raw-svgs/)
- `scripts/cli/delete-icons.ts`: Remove icons and metadata
- `scripts/build-scripts/generate-metadata.ts`: Converts JSON metadata → TypeScript with type annotations
- `scripts/build-scripts/core/core-optimize-svgs.ts`: SVG optimization with SVGO + incremental build caching
- `scripts/build-scripts/core/core-generate-svgs-module.ts`: Generates svg-module.ts with all icon imports
- `scripts/build-scripts/react/react-generate-components.ts`: Converts SVGs → React components using SVGR
- `scripts/maintenance/generate-icons-md.ts`: Generates docs/icons.md documentation table
- `scripts/utils/svg-optimization.ts`: SVGO configuration and SVG processing utilities
- `scripts/utils/build-cache.ts`: Incremental build cache system for faster rebuilds

### Icon Naming Conventions

**File paths** (raw-svgs):

- `raw-svgs/tokens/{variant}/BTC.svg`
- `raw-svgs/networks/{variant}/ethereum.svg`
- `raw-svgs/wallets/{variant}/metamask.svg`

**React component names**:

- Tokens: `Token{SYMBOL}` → `TokenBTC`, `TokenETH`
- Networks: `Network{PascalCase}` → `NetworkEthereum`, `NetworkBinanceSmartChain`
- Wallets: `Wallet{PascalCase}` → `WalletMetamask`, `WalletRainbow`
- Exchanges: `Exchange{PascalCase}` → `ExchangeCoinbase`, `ExchangeBybit`

**Core SVG exports**:

- `svgs.tokens.brandedBTC` (camelCase)
- `svgs.networks.monoEthereum` (camelCase)

### Testing Changes

After making changes:

1. Run `bun build:packages` to rebuild affected packages
2. Check generated files:
   - `packages/common/src/metadata/*.ts`
   - `packages/core/src/svgs/`
   - `packages/react/src/icons/`
3. Run `bun format` before committing

### Important Notes

- Always add icons to `raw-svgs/` first, never directly to package src folders
- The build process is automated - manual edits to generated files will be overwritten
- Metadata JSON files in `packages/common/src/metadata/` are the source of truth
- Use `bun add-metadata` for entries that share icons with existing entries (e.g., testnets using mainnet icons, wrapped tokens)
- SVG optimization happens during core package build, using SVGO with custom config
- Incremental builds are enabled by default - only changed SVGs are re-optimized

## Advanced Topics

### Dynamic React Components

The React package provides dynamic components that automatically load the correct icon based on props. These are client-side only components (`'use client'` directive).

#### TokenIcon Component

```tsx
import { TokenIcon } from '@web3icons/react'

// By symbol
<TokenIcon symbol="ETH" variant="branded" size={32} />

// By contract address + network
<TokenIcon
  address="0xc944e90c64b2c07662a292be6244bdf05cda44a7"
  network="ethereum"
  variant="mono"
  size={32}
/>

// With fallback
<TokenIcon
  symbol="UNKNOWN"
  fallback={<img src="/default.svg" />}
/>
```

**Lookup logic** (`packages/react/src/utils/find-metadata.ts`):

1. If `symbol` provided: Case-insensitive match on symbol field
2. If `address` + `network`: Matches contract address in addresses object
3. Returns `ITokenMetadata | undefined`

#### NetworkIcon Component

```tsx
import { NetworkIcon } from '@web3icons/react'

// By name (matches id, name, or shortName - case insensitive)
<NetworkIcon name="Ethereum" variant="branded" size={32} />
<NetworkIcon name="bsc" /> // Matches shortName

// By chainId
<NetworkIcon chainId={1} variant="mono" />

// By CAIP-2 ID
<NetworkIcon caip2id="eip155:1" />
```

**Lookup logic**:

1. If `name`: Matches against `id` (kebab-case), `name`, or `shortName` (case-insensitive)
2. If `chainId`: Exact match on chainId field
3. If `caip2id`: Exact match on caip2id field
4. If `id`: Matches id or name

#### WalletIcon & ExchangeIcon

```tsx
import { WalletIcon, ExchangeIcon } from '@web3icons/react'

<WalletIcon name="MetaMask" variant="branded" />
<WalletIcon id="metamask" /> // kebab-case id

<ExchangeIcon name="Uniswap" variant="mono" />
```

**Lookup logic**: Case-insensitive match on `id` (kebab-case) or `name`

### SVG Optimization Details

SVG optimization is handled by `scripts/build-scripts/core/core-optimize-svgs.ts` using SVGO:

**Configuration** (`scripts/utils/svg-optimization.ts`):

- `removeViewBox: false` - Preserves viewBox for proper scaling
- `prefixIds: true` - Prefixes IDs with icon name to prevent conflicts
- `multipass: true` - Multiple optimization passes for better compression
- `js2svg: { pretty: true }` - Pretty-printed output

**Optimizations applied**:

1. Remove unnecessary attributes and metadata
2. Minify paths and transforms
3. Merge paths where possible
4. Prefix all IDs to avoid conflicts when multiple SVGs are on the same page
5. Convert style strings to camelCase objects for JSX compatibility

**Incremental Build Cache**:

- Tracks file hashes to skip unchanged SVGs
- Dramatically speeds up rebuilds (only processes modified icons)
- Cache stored in `node_modules/.cache/web3icons/`
- Enable with env var or automatically enabled by default

### Icon Sharing System (filePath)

The `filePath` property enables multiple metadata entries to reference the same physical SVG files.

**Use cases**:

1. **Testnets**: Use mainnet icons

   ```json
   {
     "id": "sepolia",
     "filePath": "network:ethereum", // References ethereum.svg
     "name": "Sepolia Testnet",
     "chainId": 11155111
   }
   ```

2. **Wrapped tokens**: Use underlying token's icon

   ```json
   {
     "id": "wrapped-bitcoin",
     "filePath": "token:BTC", // References BTC.svg
     "symbol": "WBTC",
     "name": "Wrapped Bitcoin"
   }
   ```

3. **Token variants**: Multiple listings share same icon
   ```json
   {
     "id": "tether-bridged",
     "filePath": "token:USDT", // References USDT.svg
     "symbol": "USDT.e",
     "name": "Tether USD (Bridged)"
   }
   ```

**Format**: `{type}:{filename}` where:

- `type`: `token`, `network`, `wallet`, or `exchange`
- `filename`: The SVG filename without extension (e.g., `BTC`, `ethereum`, `metamask`)

### TypeScript Types

All metadata types are defined in `packages/common/src/types.ts`:

```typescript
type TVariant = 'branded' | 'mono' | 'background'
type TType = 'network' | 'token' | 'wallet' | 'exchange'
type TExchangeType = 'cex' | 'dex'

interface ITokenMetadata {
  id: string
  filePath: string
  symbol: string
  name: string
  marketCapRank: number | null
  addresses: { [key: string]: string | undefined }
  variants: TVariant[]
}

interface INetworkMetadata {
  id: string
  filePath: string
  name: string
  shortName?: string
  nativeCoinId?: string
  chainId?: number | string
  caip2id?: string
  variants: TVariant[]
}
```

### Common Workflows

#### Adding a New Token with Icon

1. Create SVG files in `raw-svgs/tokens/branded/` and/or `raw-svgs/tokens/mono/`
   - Filename: `{SYMBOL}.svg` (e.g., `BTC.svg`, `ETH.svg`)
   - Must be 24x24px frame (see CONTRIBUTING.md)
2. Run `bun add-icons`
3. CLI detects new files and prompts for metadata
4. Enter token name, ID, contract addresses, etc.
5. Run `bun build:packages` to generate components
6. Verify in `packages/core/src/svgs/tokens/` and `packages/react/src/icons/tokens/`

#### Adding a Testnet (Reusing Mainnet Icon)

1. Run `bun add-metadata`
2. Select "Network" as the type
3. Enter icon reference (e.g., `network:ethereum`)
4. Provide testnet details (name, chainId, etc.)
5. Build packages - testnet will use mainnet's icon

#### Updating Icon Files

1. Replace SVG in `raw-svgs/{type}/{variant}/`
2. Git will show modification
3. Run `bun build:core` to re-optimize
4. Incremental cache detects change and re-processes only that file

### Troubleshooting

**Icons not showing up after adding**:

- Ensure `bun build:packages` was run
- Check metadata JSON files in `packages/common/src/metadata/`
- Verify SVG files were copied to `packages/core/src/svgs/`
- Check React components generated in `packages/react/src/icons/`

**Build failing**:

- Run `bun format` to fix formatting issues
- Check SVG files are valid XML
- Ensure metadata JSON files are valid JSON
- Check for duplicate IDs in metadata files

**Dynamic components not working**:

- Remember they are client-side only (`'use client'`)
- Check lookup logic matches your props (case-insensitive, kebab-case conversions)
- Use fallback prop to handle missing icons gracefully

**Slow builds**:

- Incremental cache should be enabled automatically
- Clear cache: `rm -rf node_modules/.cache/web3icons/`
- Check if processing all SVGs vs. only changed ones in build output
