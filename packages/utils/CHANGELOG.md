# @web3icons/utils

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
