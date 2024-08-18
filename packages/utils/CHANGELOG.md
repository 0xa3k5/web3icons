# @web3icons/utils

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
