# @web3icons/utils

## 0.3.16

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.15

## 0.3.15

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.14

## 0.3.14

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.13

## 0.3.13

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.12

## 0.3.12

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.11

## 0.3.11

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.10

## 0.3.10

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.9

## 0.3.9

### Patch Changes

- add peaq network
  add PEAQ token
- Updated dependencies
  - @web3icons/common@0.11.8

## 0.3.8

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.7

## 0.3.7

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.6

## 0.3.6

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.5

## 0.3.5

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.4

## 0.3.4

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.3

## 0.3.3

### Patch Changes

- new networks:

  - `iota-evm` (branded, mono, background)

  new tokens:

  - `VINE` (branded,mono, background)

  add branded and background variants to `IOTA` token

- Updated dependencies
  - @web3icons/common@0.11.2

## 0.3.2

### Patch Changes

- new networks:
  Vana (background, branded, mono)
  Vara (background, branded, mono)
  Japan Open Chain (background, branded, mono)
  EXP Chain (background, branded, mono)

  new tokens:
  PNB (background, branded, mono)
  JOP (background, branded, mono)
  VARA (background, branded, mono)
  VANA (background, branded, mono)
  HUSH (background, branded, mono)
  ZRX (background, branded, mono)

  new variants:
  NEST (background, branded)

  fixed: TELOS

- Updated dependencies
  - @web3icons/common@0.11.1

## 0.3.1

### Patch Changes

- slightly reduce icon sizes for better consistency

## 0.3.0

### Minor Changes

- - new `background` variant for icons.
  - add `branded` variant to most of the missing icons.
  - include `fileName` to the metadata
  - support `caip2id` for network icons.
  - performance improvements for dynamic icons (`TokenIcon`, `NetworkIcon`, `ExchangeIcon`, `WalletIcon`) (this should fix #25 and #40)
  - website improvements

  **cli:**

  - migrate from `@inquirer` to `@clack`
  - greatly improve `add-icons` flow's UX
  - cover icon deletion (fixes #33)

  **ID changes**
  renamed several network icons to align with official naming

  - `polygon` (was `polygon-pos`)
  - `multiversx` (was `elrond`)
  - `viction` (was `tomochain`)
  - `kaia` (was `klay-token`)
  - `okex` (was `okex-chain`)
  - `optimism` (was `optimistic-ethereum`)
  - `trust` (was `trust-wallet`)

  **new networks:**
  `multiversx`, `moonbase-alpha`, `nibiru`, `push`, `berachain`, `paradex`, `zero-network`, `zircuit`
  _(all available in background, branded, and mono variants.)_

  **new network variants:**
  `zora`, `xrp`, `algorand` _(background, branded)_

  **new exchanges:**
  `aevo`, `paradex` _(branded, mono, background)_

  new token variants:
  `AAG`, `ACRIA`, `AIOZ`, `ABL`, `ALGO`, `ABR`, `ARB`, `AURABAL`, `AVINOC`, `BNT`, `BBL`, `BTCST`, `GBYTE`, `CLXY`, `CSPR`, `CELR`, `CAPS`, `CTC`, `XCUR`, `DENT`, `DERC`, `DEXE`, `DIMO`, `DVI`, `ECO`, `EOS`, `EOSDT`, `ERG`, `ERTHA`, `EUROE`, `FLAME`, `FRAX`, `FXS`, `FRIN`, `FRONT`, `GCOIN`, `HFT`, `XHV`, `HBAR`, `SEILOR`, `KSM`, `LEOX`, `LGCY`, `PRISM`, `GAL`, `QUAD`, `QTCON`, `BTRFLY`, `RSR`, `XRP`, `QUARTZ`, `SCRT`, `SENATE`, `SKL`, `SLCL`, `SOLO`, `SPC`, `SFRXETH`, `SMT`, `SNS`, `EURT`, `THE`, `THEO`, `WWY`, `WING`, `WOZX`, `WBTC`, `WCFG`, `ZTG`, `ZKID`
  _(background, branded)_

  deprecated tokens:
  `BAKE`, `ALPHA`, `AST`, `ADP`, `ADX`, `ADS`, `AGLD`, `ADCO`, `AEGIS`, `AERGO`, `AERO`, `AE`, `AGI`, `AMKT`, `ASCN`, `ASTO`, `ALU`, `AMB`, `AMO`, `AMPL`, `AMP`, `ANC`, `ANGLE`, `ANKR`, `ANKRETH`, `BANANA`, `ADOGE`, `ARBI`, `ARV`, `AFC`, `ASD`, `ASIA`, `ASM`, `ASSA`, `ASTR`, `ASTRADAO`, `ASTRAFER`, `ASTROC`, `BXX`, `BABYDOGE`, `BABYSHIB`, `BABYTRUMP`, `BADGER`, `BAD`, `BAI`, `BAL`, `BAND`, `BAO`, `BFT`, `BWO`, `BIFI`, `BETS`, `BFIC`, `BHAT`, `BICO`, `BIDZ`, `BIGSB`, `BUSD`, `BISO`, `B2M`, `BGB`, `BPRO`, `BTSG`, `BTT`, `BPT`, `BONDLY`, `BONK`, `BORA`, `BORING`, `BOSON`, `BOOT`, `BOTTO`, `BOX`, `BREED`, `BTU`, `BUILD`, `BULL`, `BUMP`, `BUY`, `BURGER`, `ETHEREUM`, `BFR`, `AMZ`, `BASE`, `ORDER`, `BAN`, `S`

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.0

## 0.2.16

### Patch Changes

- new network icons:

  - mint (branded, mono)
  - monad (branded, mono)
  - silicon (branded, mono)
  - treasure (branded, mono)

  fix arbitrum-one branded icon

- Updated dependencies
  - @web3icons/common@0.10.0

## 0.2.15

### Patch Changes

- - Support Exchanges
  - Crate ExchangeIcon (dynamic icon component)
  - New Icons:
    - Bybit (mono, branded)
    - Kucoin (mono, branded)
    - Coinbase (mono, branded)
    - 1Inch (mono, branded)
    - Balancer (mono, branded)
    - Bancor (mono, branded)
    - Binance (mono, branded)
    - Bithumb (mono, branded)
    - BitStamp (mono, branded)
    - BTC Turk (mono, branded)
    - Crypto-com (mono, branded)
    - Gate-io (mono, branded)
    - Gemini (mono, branded)
    - Kraken (mono, branded)
    - Odos (mono, branded)
    - OkX (mono, branded)
    - Pancake Swap (mono, branded)
    - ParaSwap (mono, branded)
    - Paribu (mono, branded)
    - Suhsi Swap (mono, branded)
    - SwissBorg (mono, branded)
    - Uniswap (mono, branded)
    - UpBit (mono, branded)
    - Cow Swap (mono, branded)
  - fix: build racing conditions for react
- Updated dependencies
  - @web3icons/common@0.9.0

## 0.2.14

### Patch Changes

- new networks:

  - hemi
  - lumia
  - wax
  - sonic
  - super-seed
  - rei

  new token

  - S (sonic)

- Updated dependencies
  - @web3icons/common@0.8.0

## 0.2.13

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.7.2

## 0.2.12

### Patch Changes

- add mantra chain
- Updated dependencies
  - @web3icons/common@0.7.1

## 0.2.11

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.7.0

## 0.2.10

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.6.1

## 0.2.9

### Patch Changes

- update eos to new logo, add diode, lens, edgeless, world chain
- Updated dependencies
  - @web3icons/common@0.6.0

## 0.2.8

### Patch Changes

- new networks: taiko, moonbase-alpha, lumio
- Updated dependencies
  - @web3icons/common@0.5.0

## 0.2.7

### Patch Changes

- fix unichain
- Updated dependencies
  - @web3icons/common@0.4.1

## 0.2.6

### Patch Changes

- new networks:

  - unichain
  - optopia
  - orderly
  - arweave
  - moonbeam
  - fluence
  - harmony

  new tokens:

  - ORDER

- Updated dependencies
  - @web3icons/common@0.4.0

## 0.2.5

### Patch Changes

- update `chiliz` logo
  new networks:
  - `kroma`
  - `l3x`
  - `lightlink`
  - `lisk`
  - `lycan`
- Updated dependencies
  - @web3icons/common@0.3.0

## 0.2.4

### Patch Changes

- 03c8c28: new networks: bob, soneium, kaia, kakarot, karura
- Updated dependencies [03c8c28]
  - @web3icons/common@0.2.0

## 0.2.3

### Patch Changes

- patch
- Updated dependencies
  - @web3icons/common@0.1.1

## 0.2.2

### Patch Changes

- fix utils version
- Updated dependencies
  - @web3icons/common@0.1.1

## null

### Patch Changes

- Updated dependencies [bd3742e]
- Updated dependencies
  - @web3icons/common@0.1.0

## 0.2.1

### Patch Changes

- - support chainId in `NetworkIcon`
  - add 33 new network icons:
    - `coinex-smart-chain`
    - `conflux`
    - `cronos-zkevm`
    - `elastos`
    - `energy-web`
    - `enuls`
    - `ethereum-classic`
    - `flare`
    - `fraxtal`
    - `fuse`
    - `kardia`
    - `lyra`
    - `meter`
    - `oasys`
    - `okex-chain`
    - `rollux`
    - `rootstock`
    - `shiden`
    - `step`
    - `shimmer-evm`
    - `songbird`
    - `sys`
    - `theta`
    - `thundercore`
    - `ubiq`
    - `ultron`
    - `velas`
    - `tomochain`
    - `xdc`
    - `zyx`
    - `kuchain`
  - retire @web3icons/typescript-config

## 0.2.0

### Minor Changes

- introduce "fallback" to WalletIcon, TokenIcon and NetworkIcon. fallback prop takes in a string or ReactNode and renders that if the provided props can't find a match. e.g.: `<TokenIcon symbol="EETH" fallback="/logo.svg">` would render the `logo.svg` because `eeth` is invalid.

## 0.1.1

### Patch Changes

- svg.d.ts

## 0.1.0

### Minor Changes

- interopability issues
- fix interoperability issues

### Patch Changes

-
- patch core exports
- interopability
- fix metadata export from core
- patch

## 0.1.0-alpha.5

### Patch Changes

- interopability

## 0.1.0-alpha.4

### Patch Changes

-

## 0.1.0-alpha.3

### Patch Changes

- patch core exports

## 0.1.0-alpha.2

### Patch Changes

- fix metadata export from core

## 0.1.0-alpha.1

### Patch Changes

- patch

## 0.1.0-alpha.0

### Minor Changes

- interopability issues

## 0.0.0-alpha-20240813101020

### Patch Changes

- rollup on core

## 0.0.12

### Patch Changes

- fix build-script

## 0.0.11

### Patch Changes

- add wallet icon support
  `metamask`, `alfa1`, `argent`, `backpack`, `coin98`, `coinbase`, `enkrypt`, `imtoken`, `kraken`, `lit`, `obvious`, `okx`, `phantom`, `portal`, `rabby`, `rainbow`, `safe`, `ledger`, `soul`, `token-pocket`, `trezor`, `unipass`, `venly`, `wallet-connect`, `zengo`, `zerion`, `multis`, `alpha-wallet` `my-ether-wallet`, `pillar`, `ronin`, `sender`, `sequence`, `squads`, `trust`, `wallet-3`, `xdefi`

  "@web3icons/core": export TType and TTVariant

## 0.0.10

### Patch Changes

-

## 0.0.9

### Patch Changes

- rename to @web3icons

## 0.0.8

### Patch Changes

- new networks: `abstract` `acala` `apex-layer` `arbitrum-nova` `bitkub-chain`

## 0.0.7

### Patch Changes

- add new network icons: `lava-network`, `neo-x`

## 0.0.6

### Patch Changes

- fix some fields not being added to the metadata correctly

## 0.0.5

### Patch Changes

- utils: greatly improve the add-icons flow with interactive cli.

  update:

  - AAVE new branding

  new:

  - Gravity Network (branded, mono)
  - Iotex Network (branded, mono)
  - Clover Network (branded, mono)
  - G Token (branded, mono)

## 0.0.4

### Patch Changes

- add networks: fio, stargaze

## 0.0.3

### Patch Changes

- fix constant paths

## 0.0.2

### Patch Changes

- update util functions
