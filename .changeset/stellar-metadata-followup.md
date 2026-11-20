---
'@web3icons/common': patch
'@web3icons/react': patch
'@web3icons/core': patch
---

fix: GYEN and MOBI Stellar addresses now use the `CODE-ISSUER` format, like the other Stellar tokens. GYEN used a colon, and MOBI had a truncated `OBI-` code. Lookups by the old strings no longer match.
fix: Stellar Testnet `shortName` is now `Stellar Testnet` instead of its id
fix: BLND `marketCapRank` is `null` instead of `0`, so it no longer sorts ahead of ranked tokens
