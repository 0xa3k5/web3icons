import {
  TokenBTC,
  TokenETH,
  TokenUSDC,
  NetworkBitcoin,
  NetworkEthereum,
  NetworkSolana,
  WalletMetamask,
  WalletCoinbase,
  WalletKeplr,
  ExchangeBinance,
  ExchangeBybit,
  ExchangePancakeSwap,
} from '@web3icons/react'
import { LiveExample } from './live-example'

export const IndividualReactIcons = () => {
  return (
    <LiveExample
      tabs={[
        {
          label: 'Tokens',
          preview: (
            <div className="flex gap-4">
              <TokenBTC size={48} variant="branded" />
              <TokenETH size={48} variant="branded" />
              <TokenUSDC size={48} variant="branded" />
            </div>
          ),
          content: `import { TokenBTC, TokenETH, TokenUSDC } from '@web3icons/react'

function App() {
  return (
  <div className="flex gap-4">
    <TokenBTC size={48} variant="branded" />
    <TokenETH size={48} variant="branded" />
    <TokenUSDC size={48} variant="branded" />
  </div>
)}`,
        },
        {
          label: 'Networks',
          preview: (
            <div className="flex gap-4">
              <NetworkBitcoin size={48} variant="branded" />
              <NetworkEthereum size={48} variant="branded" />
              <NetworkSolana size={48} variant="branded" />
            </div>
          ),
          content: `import { NetworkBitcoin, NetworkEthereum, NetworkSolana } from '@web3icons/react'
  
  function App() {
  return (
  <div className="flex gap-4">
    <NetworkBitcoin size={48} variant="branded" />
    <NetworkEthereum size={48} variant="branded" />
    <NetworkSolana size={48} variant="branded" />
  </div>
  )}`,
        },
        {
          label: 'Wallets',
          preview: (
            <div className="flex gap-4">
              <WalletMetamask size={48} variant="branded" />
              <WalletCoinbase size={48} variant="branded" />
              <WalletKeplr size={48} variant="branded" />
            </div>
          ),
          content: `import { WalletMetamask, WalletCoinbase, WalletKeplr } from '@web3icons/react'
  
  function App() {
  return (
  <div className="flex gap-4">
    <WalletMetamask size={48} variant="branded" />
    <WalletCoinbase size={48} variant="branded" />
    <WalletKeplr size={48} variant="branded" />
  </div>
  )}`,
        },
        {
          label: 'Exchanges',
          preview: (
            <div className="flex gap-4">
              <ExchangeBybit size={48} variant="branded" />
              <ExchangeBinance size={48} variant="branded" />
              <ExchangePancakeSwap size={48} variant="branded" />
            </div>
          ),
          content: `import { WalletMetamask, WalletCoinbase, WalletKeplr } from '@web3icons/react'
  
  function App() {
  return (
  <div className="flex gap-4">
    <ExchangeBybit size={48} variant="branded" />
    <ExchangeBinance size={48} variant="branded" />
    <ExchangePancakeSwap size={48} variant="branded" />
  </div>
)}`,
        },
      ]}
    />
  )
}
