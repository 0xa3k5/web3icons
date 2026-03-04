# Add Web3 Icon

You are an AI assistant integrated into the web3icons repository. Your job is to find, download, and add a logo for a web3 project to this icon library.

## Input

The user provides a project name as the argument: `$ARGUMENTS`

## Step 1: Identify the Project

Determine what kind of web3 entity this is:
- **token** — A cryptocurrency token (e.g., ETH, MANTA, USDC)
- **network** — A blockchain network (e.g., Ethereum, Manta Pacific, Polygon)
- **wallet** — A wallet application (e.g., MetaMask, Rainbow)
- **exchange** — A centralized or decentralized exchange (e.g., Uniswap, Binance)

Search the web to confirm:
- The official name of the project
- What type it is (token, network, wallet, exchange)
- Its official website
- For tokens: the ticker symbol (e.g., MANTA), CoinGecko/CoinMarketCap ID, market cap rank, and any contract addresses
- For networks: chain ID, CAIP-2 ID, short name, native coin ID
- For exchanges: whether it's a CEX or DEX

## Step 2: Check if it Already Exists

Before proceeding, check the metadata files to see if this icon already exists:
- `packages/common/src/metadata/tokens.json`
- `packages/common/src/metadata/networks.json`
- `packages/common/src/metadata/wallets.json`
- `packages/common/src/metadata/exchanges.json`

Search by name, id, and symbol. If it already exists, tell the user and stop.

## Step 3: Find the Official Logo

Search the web for the project's official logo SVG. Try these sources in order:

1. **Official brand/press kit page** — e.g., `{project}.io/brand`, `{project}.com/press`
2. **GitHub repository** — Look for logo files in the project's GitHub org
3. **CoinGecko** — `https://www.coingecko.com/en/coins/{id}` (has logo images)
4. **CoinMarketCap** — Logo images available on token pages
5. **Crypto logos aggregators** — e.g., cryptologos.cc, or similar

Prioritize SVG format over PNG. If only PNG/JPEG is available, note that we'll need to trace it.

## Step 4: Download and Process the Logo

### Sizing Rules

All icons use a **24x24px frame** with these constraints:

| Variant | Max icon size | Notes |
|---------|--------------|-------|
| `mono` | **16px** (largest side) | Centered in 24x24 frame |
| `branded` | **16px** (largest side) | Centered in 24x24 frame |
| `background` | **14px** (largest side) | Centered in 24x24 frame |

The icon must be **centered** — equal padding on all sides. For a 16px-wide icon in a 24px frame, that means 4px padding left and right.

### If the logo is an SVG:
1. Download it
2. Inspect the SVG content — it must be reformatted to web3icons standards:
   - `width="24"` and `height="24"`
   - `viewBox="0 0 24 24"`
   - `fill="none"` on the root `<svg>` element
   - `xmlns="http://www.w3.org/2000/svg"`
3. For the **mono** variant: all fill colors must be replaced with `fill="white"` (except `fill="none"`)
4. For the **branded** variant: preserve original brand colors
5. **Scale the paths so the largest side is exactly 16px** (or 14px for background variant), **centered** in the 24x24 frame

To scale the icon correctly:
1. Determine the bounding box of the original SVG paths (min/max x and y coordinates)
2. Calculate `scale = target_size / max(original_width, original_height)` where target_size is 16 (or 14 for background)
3. Calculate offsets to center: `offset_x = (24 - original_width * scale) / 2 - min_x * scale` and same for y
4. Multiply all path coordinates by `scale` and add the respective offsets
5. Verify the result: the icon's bounding box should span exactly `target_size` on its largest axis, centered at (12, 12)

Use Python or a script to recalculate the path coordinates precisely — do not eyeball this.

### If the logo is a PNG/JPEG/WebP:
1. Download the image to a temporary location
2. Run the tracing utility:
   ```bash
   # For mono variant
   bun trace-to-svg <input-image> raw-svgs/{type}/mono/{filename}.svg --mono

   # For branded variant (you'll need to manually adjust colors after)
   bun trace-to-svg <input-image> raw-svgs/{type}/branded/{filename}.svg --color "#BRANDCOLOR"
   ```
3. Review the traced SVG output and adjust if needed

## Step 5: Place the SVG Files

Place the SVG files in the correct directories following naming conventions:

- **Tokens**: `raw-svgs/tokens/{variant}/{SYMBOL}.svg` — filename is UPPERCASE ticker symbol
- **Networks**: `raw-svgs/networks/{variant}/{id}.svg` — filename is kebab-case
- **Wallets**: `raw-svgs/wallets/{variant}/{id}.svg` — filename is kebab-case
- **Exchanges**: `raw-svgs/exchanges/{variant}/{id}.svg` — filename is kebab-case

Create at minimum the **mono** and **branded** variants. The mono variant uses `fill="white"` for all visible paths.

## Step 6: Add Metadata

Edit the appropriate metadata JSON file in `packages/common/src/metadata/`:

### For tokens (`tokens.json`):
```json
{
  "id": "{coingecko-id}",
  "filePath": "token:{SYMBOL}",
  "symbol": "{SYMBOL}",
  "name": "{Full Name}",
  "marketCapRank": {rank or 0},
  "addresses": {
    "{network-id}": "{contract-address}"
  },
  "variants": ["branded", "mono"]
}
```

### For networks (`networks.json`):
```json
{
  "id": "{kebab-case-id}",
  "filePath": "network:{kebab-case-id}",
  "chainId": {chain-id},
  "caip2id": "eip155:{chain-id}",
  "name": "{Full Name}",
  "shortName": "{SHORT}",
  "nativeCoinId": "{native-token-id}",
  "variants": ["branded", "mono"]
}
```

### For wallets (`wallets.json`):
```json
{
  "id": "{kebab-case-id}",
  "filePath": "wallet:{kebab-case-id}",
  "name": "{Full Name}",
  "variants": ["branded", "mono"]
}
```

### For exchanges (`exchanges.json`):
```json
{
  "id": "{kebab-case-id}",
  "filePath": "exchange:{kebab-case-id}",
  "name": "{Full Name}",
  "type": "{cex|dex}",
  "variants": ["branded", "mono"]
}
```

Insert the new entry in alphabetical order by `id`.

## Step 7: Validate

Run these validation checks:
```bash
bun validate-filenames
bun validate-svgs
```

Fix any issues found.

## Step 8: Build Packages

Run the full build pipeline so consumers can use the new icon immediately:

```bash
bun build:packages
```

This will:
1. **Common package**: Regenerate TypeScript metadata from JSON (`packages/common/src/metadata/*.ts`)
2. **Core package**: Optimize the raw SVGs via SVGO and output to `packages/core/src/svgs/{type}/{variant}/`
3. **React package**: Generate React components in `packages/react/src/icons/{type}/`

After the build completes, verify the generated files exist:
- `packages/core/src/svgs/{type}/{variant}/{filename}.svg` — optimized SVG
- `packages/react/src/icons/{type}/` — should contain the new React component

If the build fails, check the error output and fix the issue (common causes: invalid SVG XML, duplicate metadata IDs, malformed JSON).

## Step 9: Post-build

Run the post-build steps to update documentation and format code:

```bash
bun post-build
```

This generates `docs/icons.md` and runs Prettier formatting on all files.

## Step 10: Clean Up SVG Path Data

Before committing, clean up the raw SVG path coordinates for consistency with the repo style:

1. **Remove trailing zeros** after the decimal point: `14.4490` → `14.449`, `13.2840` → `13.284`
2. **Simplify round numbers**: `20.0000` → `20`, `4.0000` → `4`
3. **Round near-integers** that are artifacts of floating-point math: `19.9999` → `20`, `4.0001` → `4`
4. **Keep meaningful precision**: 4 decimal places max is typical in the repo. Don't strip precision that distinguishes coordinates (e.g., `5.0517` and `5.0518` are different and should stay as-is).

Apply these cleanups to all newly created SVG files in `raw-svgs/`. Do NOT modify existing icons.

## Step 11: Generate Visual Test

Create a `test-preview.html` file in the repo root that shows:
1. The new icon in both mono and branded variants at multiple sizes (24px, 48px, 96px)
2. The repo's icon grid overlay (`docs/icon-grid.svg`) on top of each icon to verify sizing
3. Side-by-side comparison with 2-3 existing icons from the same type
4. The repo's size guide image (`docs/icon-size-guide.png`) for reference
5. The metadata JSON entry

Use dark backgrounds for mono variants and light backgrounds for branded. The grid overlay must correctly position the 24x24 icon zone within the 44x44 grid frame (icon zone starts at 22.727% from each edge, spanning 54.545% of the frame).

## Step 12: Commit, Push, and Create PR

1. Create a new git branch: `feat/add-{id}-icon`
2. Stage all changed files:
   - Raw SVGs in `raw-svgs/`
   - Metadata JSON file
   - All generated files from the build
   - The `test-preview.html` file
3. Commit with message: `feat: add {name} {type} icon`
4. Push the branch to origin
5. Create a pull request to the `main` branch with:
   - Title: `feat: add {Name} {type} icon`
   - Body that includes:
     - What project was added and its type
     - Which logo source was used
     - Whether SVG was native or traced from PNG
     - A link to the `test-preview.html` file in the branch (for visual review)
     - The metadata JSON entry in a code block
     - Checklist: dimensions validated, naming conventions followed, build passes

## Step 13: Summary

Report to the user:
- PR URL
- What project was identified and its type
- Which logo source was used
- Whether SVG was native or traced from PNG
- Which files were created (raw SVGs, optimized SVGs, React components)
- The metadata that was added
- Build status (success/failure)
- Any issues encountered

## Important Notes

- SVGs MUST be 24x24px frame — this is validated by the build system
- **Icon sizing**: largest side max **16px** for mono/branded, max **14px** for background, **centered** in frame
- Mono variants use `fill="white"` for all visible elements (not `fill="none"` elements)
- Branded variants preserve original brand colors
- Token filenames are UPPERCASE (e.g., `MANTA.svg`), everything else is kebab-case
- Always check for existing icons before adding duplicates
- The `filePath` field format is `{type}:{filename}` without the `.svg` extension
- Metadata JSON files must remain valid JSON after editing
