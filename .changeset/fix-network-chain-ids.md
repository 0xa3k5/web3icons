---
'@web3icons/common': patch
---

fix network metadata:

- wemix: chainId `111` → `1111` (matches caip2id)
- mega-eth: deprecated testnet `6342` → mainnet `4326`
- katana: Tatara testnet `129399` → mainnet `747474`
- autonomys: deprecated Taurus testnet `490000` → Auto EVM mainnet `870`
- near-protocol: remove incorrect EVM chainId `39`
- fuel: remove incorrect EVM chainId `9889` / caip2id
- manta-pacific: add caip2id `eip155:169`
- xdc-network (chain 51): rename to "XDC Apothem Testnet"
- tempo: add caip2id `eip155:4217`
- tempo-testnet: add caip2id `eip155:42431`
