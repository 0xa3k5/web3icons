---
'@web3icons/common': patch
'@web3icons/core': patch
---

remove `typescript` from peerDependencies — it blocked installs for TypeScript 6 users and force-installed TypeScript for JS-only consumers (fixes #195)
