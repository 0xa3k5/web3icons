'use client'
import { useRouter } from 'next/navigation'
import {
  tokens,
  networks,
  wallets,
  exchanges,
  TType,
  TMetadata,
} from '@web3icons/common'
import { Drawer } from '../../../../components'

const metadataMap: Record<TType, TMetadata[]> = {
  token: tokens,
  network: networks,
  wallet: wallets,
  exchange: exchanges,
}

const VALID_TYPES = new Set(['tokens', 'networks', 'wallets', 'exchanges'])

export default function Modal({
  params,
}: {
  params: { type: `${TType}s`; id: string }
}) {
  const router = useRouter()
  const { type, id } = params

  if (!type || !VALID_TYPES.has(type)) {
    return null
  }

  const web3Type = type.slice(0, -1) as TType
  const metadataList = metadataMap[web3Type]

  if (!metadataList) {
    return null
  }

  const metadata = metadataList.find((item: any) => {
    if (web3Type === 'token') {
      return item.symbol?.toUpperCase() === id.toUpperCase()
    }
    return item.id === id.toLowerCase()
  })

  if (!metadata) {
    return null
  }

  return (
    <Drawer
      metadata={metadata}
      isOpen={true}
      setIsOpen={(open) => {
        if (!open) {
          router.back()
        }
      }}
    />
  )
}
