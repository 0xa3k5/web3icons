---
'@web3icons/common': patch
'@web3icons/react': patch
'@web3icons/core': patch
---

wallet: Varial, formerly Freighter (`mono`, `branded`, `background`)
wallet: Freighter, alias of Varial (`mono`, `branded`, `background`)
wallet: LOBSTR (`mono`, `branded`, `background`)
wallet: xBull (`mono`, `branded`, `background`)
wallet: Albedo (`mono`, `branded`, `background`)
wallet: Rabet (`mono`, `branded`, `background`)
exchange: Soroswap (`mono`, `branded`, `background`)
exchange: Aquarius (`mono`, `branded`, `background`)
token: BLND (Blend) (`mono`, `branded`, `background`)
network: Stellar Testnet (shares the Stellar icon)
fix: XLM token metadata now lists its existing `branded` and `background` variants
fix: Stellar token addresses now consistently use the `CODE-ISSUER` format. AQUA was the bare issuer key, GYEN used a colon, and MOBI had a truncated `OBI-` code. Lookups by the old strings no longer match; pass `CODE-ISSUER` instead (e.g. `AQUA-GBNZILSTVQZ4R7IKQDGHYGY2QXL5QOFJYQMXPKWRRM5PAV7Y4M67AQUA`)
fix: add PYUSD Stellar address
