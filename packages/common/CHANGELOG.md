# @web3icons/common

## 0.11.15

### Patch Changes

- fix memecoin token icon

## 0.11.14

### Patch Changes

- use unichain mainnet chainid instead of testnet

## 0.11.13

### Patch Changes

- add status network

## 0.11.12

### Patch Changes

- add ozean network

## 0.11.11

### Patch Changes

- add Katana network

## 0.11.10

### Patch Changes

- add ultra network (mono,branded,background)

## 0.11.9

### Patch Changes

- add mega-eth network icon
  update metamask wallet icon
  update berachain network icon

## 0.11.8

### Patch Changes

- add peaq network
  add PEAQ token

## 0.11.7

### Patch Changes

- add hashkey network (branded, mono, background)
  add ARI token (branded, mono, background)
  fix iotex branded icon

## 0.11.6

### Patch Changes

- add networks: swell, autonomys - add token: SWELL

## 0.11.5

### Patch Changes

- new networks:

  ontology (branded, mono, background)
  prom (branded, mono, background)
  ink (branded, mono, background)

  updated tokens:
  PROM (branded, mono, background)

## 0.11.4

### Patch Changes

- add nexis network, apechain update APE token

## 0.11.3

### Patch Changes

- quick patch for react

## 0.11.2

### Patch Changes

- new networks:

  - `iota-evm` (branded, mono, background)

  new tokens:

  - `VINE` (branded,mono, background)

  add branded and background variants to `IOTA` token

## 0.11.1

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

## 0.11.0

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

## 0.10.0

### Minor Changes

- new network icons:

  - mint (branded, mono)
  - monad (branded, mono)
  - silicon (branded, mono)
  - treasure (branded, mono)

  fix arbitrum-one branded icon

## 0.9.0

### Minor Changes

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

## 0.8.0

### Minor Changes

- new networks:

  - hemi
  - lumia
  - wax
  - sonic
  - super-seed
  - rei

  new token

  - S (sonic)

## 0.7.2

### Patch Changes

- fix networks index

## 0.7.1

### Patch Changes

- add mantra chain

## 0.7.0

### Minor Changes

- new tokens: BAN, BANANO
  new networks: corn, botanix

## 0.6.1

### Patch Changes

- fix false build

## 0.6.0

### Minor Changes

- update eos to new logo, add diode, lens, edgeless, world chain

## 0.5.0

### Minor Changes

- new networks: taiko, moonbase-alpha, lumio

## 0.4.1

### Patch Changes

- fix unichain

## 0.4.0

### Minor Changes

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

## 0.3.0

### Minor Changes

- update `chiliz` logo
  new networks:
  - `kroma`
  - `l3x`
  - `lightlink`
  - `lisk`
  - `lycan`

## 0.2.0

### Minor Changes

- 03c8c28: new networks: bob, soneium, kaia, kakarot, karura

## 0.1.1

### Patch Changes

- patch

## 0.1.0

### Minor Changes

- create common package, this makes the react package leaner
- drop cjs support
- fix beam network shortname
- fix base token image
- add JSDoc to icon components
